function isImage(filename) {
  return /\.(jpg|jpeg|png|webp)$/i.test(filename);
}

function getMimeType(filename) {
  if (/\.png$/i.test(filename)) {
    return "image/png";
  }

  if (/\.webp$/i.test(filename)) {
    return "image/webp";
  }

  return "image/jpeg";
}

export async function readCbr(file) {
  const { createExtractorFromData } =
    await import("node-unrar-js");

  // =========================
  // RAR DATA
  // =========================

  const data = await file.arrayBuffer();

  // =========================
  // WASM
  // =========================

  const wasmResponse = await fetch("/unrar.wasm");

  if (!wasmResponse.ok) {
    throw new Error(
      "Não foi possível carregar o leitor de arquivos CBR."
    );
  }

  const wasmBinary =
    await wasmResponse.arrayBuffer();

  // =========================
  // CREATE EXTRACTOR
  // =========================

  const extractor =
    await createExtractorFromData({
      data,
      wasmBinary,
    });

  // =========================
  // FILE LIST
  // =========================

  const fileList = extractor.getFileList();

  // IMPORTANTE:
  // percorremos o generator até o fim.
  const fileHeaders = [
    ...fileList.fileHeaders,
  ];

  const imageHeaders = fileHeaders
    .filter((header) => {
      return (
        !header.flags.directory &&
        isImage(header.name)
      );
    })
    .sort((a, b) =>
      a.name.localeCompare(
        b.name,
        undefined,
        {
          numeric: true,
          sensitivity: "base",
        }
      )
    );

  if (imageHeaders.length === 0) {
    throw new Error(
      "Nenhuma imagem compatível foi encontrada no CBR."
    );
  }

  const encryptedImage =
    imageHeaders.find(
      (header) => header.flags.encrypted
    );

  if (encryptedImage) {
    throw new Error(
      "CBRs protegidos por senha ainda não são suportados."
    );
  }

  // =========================
  // EXTRACT IMAGES
  // =========================

  const imageNames = imageHeaders.map(
    (header) => header.name
  );

  const extracted = extractor.extract({
    files: imageNames,
  });

  // Também percorremos este generator até o fim.
  const extractedFiles = [
    ...extracted.files,
  ];

  // =========================
  // CREATE PAGES
  // =========================

  const pages = extractedFiles
    .filter((rarFile) => {
      return (
        rarFile.extraction &&
        isImage(rarFile.fileHeader.name)
      );
    })
    .sort((a, b) =>
      a.fileHeader.name.localeCompare(
        b.fileHeader.name,
        undefined,
        {
          numeric: true,
          sensitivity: "base",
        }
      )
    )
    .map((rarFile) => {
      const blob = new Blob(
        [rarFile.extraction],
        {
          type: getMimeType(
            rarFile.fileHeader.name
          ),
        }
      );

      return URL.createObjectURL(blob);
    });

  if (pages.length === 0) {
    throw new Error(
      "Não foi possível extrair as páginas do CBR."
    );
  }

  return pages;
}