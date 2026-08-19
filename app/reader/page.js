"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./reader.module.css";

import FileUploader from "../components/reader/FileUploader";

import { getFileType } from "../../lib/reader/fileReader";
import { readCbz } from "../../lib/reader/cbzReader";
import { readPdf } from "../../lib/reader/pdfReader";
import { readCbr } from "../../lib/reader/cbrReader";

export default function ReaderPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);

  const [viewMode, setViewMode] = useState("single");
  const [fitMode, setFitMode] = useState("width");
  const [readingDirection, setReadingDirection] = useState("ltr");

  const [showControls, setShowControls] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const [pages, setPages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const hideControlsTimer = useRef(null);
  const fileInputRef = useRef(null);

  const totalPages = pages.length;

  // =========================
  // LOCAL FILES
  // =========================

  async function handleFilesSelected(event) {
    const selectedFiles = Array.from(
      event.target.files || []
    );

    if (selectedFiles.length === 0) {
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const fileTypes = selectedFiles.map((file) =>
        getFileType(file)
      );

      const isSingleCbz =
        selectedFiles.length === 1 &&
        fileTypes[0] === "cbz";

      const isSingleCbr =
  selectedFiles.length === 1 &&
  fileTypes[0] === "cbr";
        
      const isSinglePdf =
        selectedFiles.length === 1 &&
        fileTypes[0] === "pdf";

      const areAllImages = fileTypes.every(
        (type) => type === "image"
      );

      let newPages = [];

      // =========================
      // CBZ
      // =========================

      if (isSingleCbz) {
        newPages = await readCbz(selectedFiles[0]);
      }

      // =========================
      // CBR
      // =========================

      else if (isSingleCbr) {
  newPages = await readCbr(selectedFiles[0]);
}
      
      // =========================
      // PDF
      // =========================

      else if (isSinglePdf) {
        newPages = await readPdf(selectedFiles[0]);
      }

      // =========================
      // IMAGES
      // =========================

      else if (areAllImages) {
        const imageFiles = [...selectedFiles].sort(
          (a, b) =>
            a.name.localeCompare(
              b.name,
              undefined,
              {
                numeric: true,
                sensitivity: "base",
              }
            )
        );

        newPages = imageFiles.map((file) =>
          URL.createObjectURL(file)
        );
      }

      // =========================
      // UNSUPPORTED
      // =========================

      else {
        throw new Error(
          "Selecione imagens, um arquivo CBZ, CBR ou PDF."
        );
      }

      setPages(newPages);
      setCurrentPage(1);
      setZoom(100);
    } catch (error) {
      console.error(
        "Erro ao abrir arquivo:",
        error
      );

      setError(
        error.message ||
          "Não foi possível abrir este arquivo."
      );
    } finally {
      setIsLoading(false);
      event.target.value = "";
    }
  }

  // =========================
  // PAGE NAVIGATION
  // =========================

  function previousPage() {
    setCurrentPage((page) =>
      Math.max(1, page - 1)
    );
  }

  function nextPage() {
    setCurrentPage((page) =>
      Math.min(totalPages, page + 1)
    );
  }

  // =========================
  // ZOOM
  // =========================

  function zoomIn() {
    setZoom((currentZoom) =>
      Math.min(200, currentZoom + 10)
    );
  }

  function zoomOut() {
    setZoom((currentZoom) =>
      Math.max(50, currentZoom - 10)
    );
  }

  function resetZoom() {
    setZoom(100);
  }

  // =========================
  // FULLSCREEN
  // =========================

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error(
        "Fullscreen error:",
        error
      );
    }
  }

  // =========================
  // AUTO HIDE CONTROLS
  // =========================

  function resetControlsTimer() {
    setShowControls(true);

    clearTimeout(hideControlsTimer.current);

    hideControlsTimer.current = setTimeout(() => {
      if (!showSettings) {
        setShowControls(false);
      }
    }, 2500);
  }

  useEffect(() => {
    resetControlsTimer();

    return () => {
      clearTimeout(hideControlsTimer.current);
    };
  }, [showSettings]);

  // =========================
  // CLEAN OBJECT URLS
  // =========================

  useEffect(() => {
    return () => {
      pages.forEach((page) => {
        URL.revokeObjectURL(page);
      });
    };
  }, [pages]);

  // =========================
  // KEYBOARD SHORTCUTS
  // =========================

  useEffect(() => {
    function handleKeyDown(event) {
      const target = event.target;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowRight":
          if (readingDirection === "ltr") {
            nextPage();
          } else {
            previousPage();
          }
          break;

        case "ArrowLeft":
          if (readingDirection === "ltr") {
            previousPage();
          } else {
            nextPage();
          }
          break;

        case "+":
        case "=":
          zoomIn();
          break;

        case "-":
          zoomOut();
          break;

        case "0":
          resetZoom();
          break;

        case "f":
        case "F":
          toggleFullscreen();
          break;

        case "Home":
          setCurrentPage(1);
          break;

        case "End":
          if (totalPages > 0) {
            setCurrentPage(totalPages);
          }
          break;

        case "Escape":
          setShowSettings(false);
          break;

        default:
          break;
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [readingDirection, totalPages]);

  // =========================
  // IMAGE STYLE
  // =========================

  function getPageStyle() {
    const pageStyle = {
      "--reader-zoom": zoom / 100,
    };

    if (fitMode === "width") {
      pageStyle.width = "100%";
      pageStyle.height = "auto";
    }

    if (fitMode === "height") {
      pageStyle.width = "auto";
      pageStyle.height =
        "calc(100vh - 120px)";
    }

    if (fitMode === "original") {
      pageStyle.width = "auto";
      pageStyle.height = "auto";
    }

    return pageStyle;
  }

  // =========================
  // CURRENT IMAGES
  // =========================

  const firstPageIndex = currentPage - 1;
  const secondPageIndex = currentPage;

  return (
    <main
      className={styles.reader}
      onMouseMove={resetControlsTimer}
      onMouseDown={resetControlsTimer}
    >
      <FileUploader
        ref={fileInputRef}
        onFilesSelected={handleFilesSelected}
      />

      {/* =========================
          TOOLBAR
      ========================= */}

      <header
        className={`${styles.toolbar} ${
          showControls || showSettings
            ? styles.controlsVisible
            : styles.controlsHidden
        }`}
      >
        <button
          type="button"
          onClick={() =>
            fileInputRef.current?.click()
          }
          disabled={isLoading}
          title="Abrir arquivo"
        >
          📂
        </button>

        <span className={styles.divider} />

        <button
          type="button"
          onClick={previousPage}
          disabled={
            isLoading ||
            pages.length === 0 ||
            currentPage === 1
          }
          title="Previous page"
        >
          ←
        </button>

        <span className={styles.pageCounter}>
          {pages.length === 0
            ? "0 / 0"
            : `${currentPage} / ${totalPages}`}
        </span>

        <button
          type="button"
          onClick={nextPage}
          disabled={
            isLoading ||
            pages.length === 0 ||
            currentPage === totalPages
          }
          title="Next page"
        >
          →
        </button>

        <span className={styles.divider} />

        <button
          type="button"
          onClick={zoomOut}
          disabled={isLoading}
          title="Zoom out (-)"
        >
          −
        </button>

        <button
          type="button"
          className={styles.zoomValue}
          onClick={resetZoom}
          disabled={isLoading}
          title="Reset zoom (0)"
        >
          {zoom}%
        </button>

        <button
          type="button"
          onClick={zoomIn}
          disabled={isLoading}
          title="Zoom in (+)"
        >
          +
        </button>

        <span className={styles.divider} />

        <button
          type="button"
          onClick={toggleFullscreen}
          title="Fullscreen (F)"
        >
          ⛶
        </button>

        <button
          type="button"
          className={
            showSettings
              ? styles.activeButton
              : ""
          }
          onClick={() =>
            setShowSettings(
              (open) => !open
            )
          }
          title="Reader settings"
        >
          ⚙
        </button>
      </header>

      {/* =========================
          VIEWER
      ========================= */}

      <section
        className={`${styles.viewer} ${
          viewMode === "scroll"
            ? styles.scrollView
            : ""
        } ${
          viewMode === "double"
            ? styles.doubleView
            : ""
        }`}
      >
        {isLoading ? (
          <div className={styles.readerStatus}>
            <div
              className={styles.loadingSpinner}
            />

            <h2>Abrindo arquivo...</h2>

            <p>
              Preparando as páginas para
              leitura.
            </p>
          </div>
        ) : error ? (
          <div className={styles.readerStatus}>
            <h2>
              Não foi possível abrir o arquivo
            </h2>

            <p>{error}</p>

            <button
              type="button"
              onClick={() =>
                fileInputRef.current?.click()
              }
            >
              Abrir outro arquivo
            </button>
          </div>
        ) : pages.length === 0 ? (
          <div className={styles.readerStatus}>
            <h2>Nenhum arquivo aberto</h2>

            <p>
           Selecione imagens, um arquivo CBZ, CBR ou PDF para começar.
            </p>

            <button
              type="button"
              onClick={() =>
                fileInputRef.current?.click()
              }
            >
              Abrir arquivo
            </button>
          </div>
        ) : viewMode === "scroll" ? (
          pages.map((page, index) => (
            <img
              key={page}
              src={page}
              alt={`Page ${index + 1}`}
              className={styles.pageImage}
              style={getPageStyle()}
            />
          ))
        ) : (
          <>
            <img
              src={pages[firstPageIndex]}
              alt={`Page ${currentPage}`}
              className={styles.pageImage}
              style={getPageStyle()}
            />

            {viewMode === "double" &&
              pages[secondPageIndex] && (
                <img
                  src={pages[secondPageIndex]}
                  alt={`Page ${
                    currentPage + 1
                  }`}
                  className={
                    styles.pageImage
                  }
                  style={getPageStyle()}
                />
              )}
          </>
        )}
      </section>

      {/* =========================
          SETTINGS
      ========================= */}

      {showSettings && (
        <aside
          className={styles.settingsPanel}
        >
          <div
            className={styles.settingsHeader}
          >
            <h2>Reader</h2>

            <button
              type="button"
              onClick={() =>
                setShowSettings(false)
              }
              aria-label="Close settings"
            >
              ×
            </button>
          </div>

          {/* =========================
              VIEW MODE
          ========================= */}

          <section
            className={
              styles.settingsSection
            }
          >
            <h3>Visualização</h3>

            <label>
              <input
                type="radio"
                name="viewMode"
                value="single"
                checked={
                  viewMode === "single"
                }
                onChange={() =>
                  setViewMode("single")
                }
              />

              <span>Página única</span>
            </label>

            <label>
              <input
                type="radio"
                name="viewMode"
                value="double"
                checked={
                  viewMode === "double"
                }
                onChange={() =>
                  setViewMode("double")
                }
              />

              <span>Página dupla</span>
            </label>

            <label>
              <input
                type="radio"
                name="viewMode"
                value="scroll"
                checked={
                  viewMode === "scroll"
                }
                onChange={() =>
                  setViewMode("scroll")
                }
              />

              <span>Rolagem vertical</span>
            </label>
          </section>

          {/* =========================
              FIT MODE
          ========================= */}

          <section
            className={
              styles.settingsSection
            }
          >
            <h3>Ajuste</h3>

            <label>
              <input
                type="radio"
                name="fitMode"
                value="width"
                checked={
                  fitMode === "width"
                }
                onChange={() =>
                  setFitMode("width")
                }
              />

              <span>Largura</span>
            </label>

            <label>
              <input
                type="radio"
                name="fitMode"
                value="height"
                checked={
                  fitMode === "height"
                }
                onChange={() =>
                  setFitMode("height")
                }
              />

              <span>Altura</span>
            </label>

            <label>
              <input
                type="radio"
                name="fitMode"
                value="original"
                checked={
                  fitMode === "original"
                }
                onChange={() =>
                  setFitMode("original")
                }
              />

              <span>Tamanho original</span>
            </label>
          </section>

          {/* =========================
              READING DIRECTION
          ========================= */}

          <section
            className={
              styles.settingsSection
            }
          >
            <h3>Leitura</h3>

            <label>
              <input
                type="radio"
                name="readingDirection"
                value="ltr"
                checked={
                  readingDirection === "ltr"
                }
                onChange={() =>
                  setReadingDirection("ltr")
                }
              />

              <span>
                Esquerda → Direita
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="readingDirection"
                value="rtl"
                checked={
                  readingDirection === "rtl"
                }
                onChange={() =>
                  setReadingDirection("rtl")
                }
              />

              <span>
                Direita → Esquerda
              </span>
            </label>
          </section>
        </aside>
      )}
    </main>
  );
}