export function getFileType(file) {
  if (!file) {
    return null;
  }

  if (file.type.startsWith("image/")) {
    return "image";
  }

  const extension = file.name
    .split(".")
    .pop()
    ?.toLowerCase();

  if (extension === "cbz") {
    return "cbz";
  }

  if (extension === "pdf") {
    return "pdf";
  }

  if (extension === "cbr") {
    return "cbr";
  }

  return "unsupported";
}