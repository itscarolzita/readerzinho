"use client";

import { useEffect, useState } from "react";

import FileUploader from "../components/reader/FileUploader";
import Reader from "../components/reader/Reader";

import {
  createFileURL,
  getFileType,
} from "../../lib/reader/fileReader";

import styles from "./reader.module.css";

export default function ReaderPage() {
  const [fileUrl, setFileUrl] = useState(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  function handleFileSelect(file) {
    const fileType = getFileType(file);

    if (fileType !== "image") {
      setError("Por enquanto, o leitor aceita apenas imagens.");
      setFileUrl(null);
      setFileName("");
      return;
    }

    const url = createFileURL(file);

    setFileUrl(url);
    setFileName(file.name);
    setError("");
  }

  useEffect(() => {
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [fileUrl]);

  return (
    <main className={styles.readerPage}>
      <FileUploader onFileSelect={handleFileSelect} />

      {error && <p>{error}</p>}

      <Reader
        fileUrl={fileUrl}
        fileName={fileName}
      />
    </main>
  );
}