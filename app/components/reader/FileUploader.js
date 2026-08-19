"use client";

import { forwardRef } from "react";

const FileUploader = forwardRef(function FileUploader(
  { onFilesSelected },
  ref
) {
  return (
    <input
      ref={ref}
      type="file"
      accept="image/png,image/jpeg,image/webp,.cbz,.cbr,.rar,.pdf"
      multiple
      onChange={onFilesSelected}
      style={{ display: "none" }}
    />
  );
});

export default FileUploader;
