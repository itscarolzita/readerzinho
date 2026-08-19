function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(
            new Error(
              "Não foi possível renderizar uma página do PDF."
            )
          );

          return;
        }

        resolve(blob);
      },
      "image/jpeg",
      0.92
    );
  });
}

export async function readPdf(file) {
  // PDF.js é importado somente quando o usuário
  // realmente tenta abrir um PDF.
  const pdfjsLib = await import(
    "pdfjs-dist/build/pdf.mjs"
  );

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "/pdf.worker.min.mjs";

  const arrayBuffer = await file.arrayBuffer();

  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(arrayBuffer),
  });

  const pdf = await loadingTask.promise;

  const pages = [];

  for (
    let pageNumber = 1;
    pageNumber <= pdf.numPages;
    pageNumber++
  ) {
    const page = await pdf.getPage(pageNumber);

    const viewport = page.getViewport({
      scale: 1.5,
    });

    const canvas =
      document.createElement("canvas");

    const context =
      canvas.getContext("2d");

    if (!context) {
      throw new Error(
        "Não foi possível criar o canvas para o PDF."
      );
    }

    canvas.width =
      Math.floor(viewport.width);

    canvas.height =
      Math.floor(viewport.height);

    await page.render({
      canvasContext: context,
      viewport,
    }).promise;

    const blob =
      await canvasToBlob(canvas);

    const pageUrl =
      URL.createObjectURL(blob);

    pages.push(pageUrl);

    page.cleanup();
  }

  return pages;
}