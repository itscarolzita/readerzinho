import JSZip from "jszip";

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

export async function readCbz(file) {
  const zip = await JSZip.loadAsync(file);

  const imageEntries = Object.values(zip.files)
    .filter((entry) => {
      return !entry.dir && isImage(entry.name);
    })
    .sort((a, b) =>
      a.name.localeCompare(b.name, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  if (imageEntries.length === 0) {
    throw new Error(
      "Nenhuma imagem compatível foi encontrada no CBZ."
    );
  }

  const pages = await Promise.all(
    imageEntries.map(async (entry) => {
      const data = await entry.async("uint8array");

      const blob = new Blob([data], {
        type: getMimeType(entry.name),
      });

      return URL.createObjectURL(blob);
    })
  );

  return pages;
}