(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/reader/FileUploader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const FileUploader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function FileUploader({ onFilesSelected }, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        ref: ref,
        type: "file",
        accept: "image/png,image/jpeg,image/webp,.cbz,.pdf",
        multiple: true,
        onChange: onFilesSelected,
        style: {
            display: "none"
        }
    }, void 0, false, {
        fileName: "[project]/app/components/reader/FileUploader.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
});
_c1 = FileUploader;
const __TURBOPACK__default__export__ = FileUploader;
var _c, _c1;
__turbopack_context__.k.register(_c, "FileUploader$forwardRef");
__turbopack_context__.k.register(_c1, "FileUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/reader/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReaderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/reader/reader.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$reader$2f$FileUploader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/reader/FileUploader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reader$2f$fileReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reader/fileReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reader$2f$cbzReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reader/cbzReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reader$2f$pdfReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reader/pdfReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reader$2f$cbrReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reader/cbrReader.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ReaderPage() {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("single");
    const [fitMode, setFitMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("width");
    const [readingDirection, setReadingDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ltr");
    const [showControls, setShowControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pages, setPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const hideControlsTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const totalPages = pages.length;
    // =========================
    // LOCAL FILES
    // =========================
    async function handleFilesSelected(event) {
        const selectedFiles = Array.from(event.target.files || []);
        if (selectedFiles.length === 0) {
            return;
        }
        setIsLoading(true);
        setError("");
        try {
            const fileTypes = selectedFiles.map((file)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reader$2f$fileReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFileType"])(file));
            const isSingleCbz = selectedFiles.length === 1 && fileTypes[0] === "cbz";
            const isSingleCbr = selectedFiles.length === 1 && fileTypes[0] === "cbr";
            const isSinglePdf = selectedFiles.length === 1 && fileTypes[0] === "pdf";
            const areAllImages = fileTypes.every((type)=>type === "image");
            let newPages = [];
            // =========================
            // CBZ
            // =========================
            if (isSingleCbz) {
                newPages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reader$2f$cbzReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readCbz"])(selectedFiles[0]);
            } else if (isSingleCbr) {
                newPages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reader$2f$cbrReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readCbr"])(selectedFiles[0]);
            } else if (isSinglePdf) {
                newPages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reader$2f$pdfReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readPdf"])(selectedFiles[0]);
            } else if (areAllImages) {
                const imageFiles = [
                    ...selectedFiles
                ].sort((a, b)=>a.name.localeCompare(b.name, undefined, {
                        numeric: true,
                        sensitivity: "base"
                    }));
                newPages = imageFiles.map((file)=>URL.createObjectURL(file));
            } else {
                throw new Error("Selecione imagens, um arquivo CBZ, CBR ou PDF.");
            }
            setPages(newPages);
            setCurrentPage(1);
            setZoom(100);
        } catch (error) {
            console.error("Erro ao abrir arquivo:", error);
            setError(error.message || "Não foi possível abrir este arquivo.");
        } finally{
            setIsLoading(false);
            event.target.value = "";
        }
    }
    // =========================
    // PAGE NAVIGATION
    // =========================
    function previousPage() {
        setCurrentPage((page)=>Math.max(1, page - 1));
    }
    function nextPage() {
        setCurrentPage((page)=>Math.min(totalPages, page + 1));
    }
    // =========================
    // ZOOM
    // =========================
    function zoomIn() {
        setZoom((currentZoom)=>Math.min(200, currentZoom + 10));
    }
    function zoomOut() {
        setZoom((currentZoom)=>Math.max(50, currentZoom - 10));
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
            console.error("Fullscreen error:", error);
        }
    }
    // =========================
    // AUTO HIDE CONTROLS
    // =========================
    function resetControlsTimer() {
        setShowControls(true);
        clearTimeout(hideControlsTimer.current);
        hideControlsTimer.current = setTimeout(()=>{
            if (!showSettings) {
                setShowControls(false);
            }
        }, 2500);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReaderPage.useEffect": ()=>{
            resetControlsTimer();
            return ({
                "ReaderPage.useEffect": ()=>{
                    clearTimeout(hideControlsTimer.current);
                }
            })["ReaderPage.useEffect"];
        }
    }["ReaderPage.useEffect"], [
        showSettings
    ]);
    // =========================
    // CLEAN OBJECT URLS
    // =========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReaderPage.useEffect": ()=>{
            return ({
                "ReaderPage.useEffect": ()=>{
                    pages.forEach({
                        "ReaderPage.useEffect": (page)=>{
                            URL.revokeObjectURL(page);
                        }
                    }["ReaderPage.useEffect"]);
                }
            })["ReaderPage.useEffect"];
        }
    }["ReaderPage.useEffect"], [
        pages
    ]);
    // =========================
    // KEYBOARD SHORTCUTS
    // =========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReaderPage.useEffect": ()=>{
            function handleKeyDown(event) {
                const target = event.target;
                if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) {
                    return;
                }
                switch(event.key){
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
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "ReaderPage.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown);
                }
            })["ReaderPage.useEffect"];
        }
    }["ReaderPage.useEffect"], [
        readingDirection,
        totalPages
    ]);
    // =========================
    // IMAGE STYLE
    // =========================
    function getPageStyle() {
        const pageStyle = {
            "--reader-zoom": zoom / 100
        };
        if (fitMode === "width") {
            pageStyle.width = "100%";
            pageStyle.height = "auto";
        }
        if (fitMode === "height") {
            pageStyle.width = "auto";
            pageStyle.height = "calc(100vh - 120px)";
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reader,
        onMouseMove: resetControlsTimer,
        onMouseDown: resetControlsTimer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$reader$2f$FileUploader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: fileInputRef,
                onFilesSelected: handleFilesSelected
            }, void 0, false, {
                fileName: "[project]/app/reader/page.js",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar} ${showControls || showSettings ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlsVisible : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlsHidden}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>fileInputRef.current?.click(),
                        disabled: isLoading,
                        title: "Abrir arquivo",
                        children: "📂"
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: previousPage,
                        disabled: isLoading || pages.length === 0 || currentPage === 1,
                        title: "Previous page",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageCounter,
                        children: pages.length === 0 ? "0 / 0" : `${currentPage} / ${totalPages}`
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: nextPage,
                        disabled: isLoading || pages.length === 0 || currentPage === totalPages,
                        title: "Next page",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: zoomOut,
                        disabled: isLoading,
                        title: "Zoom out (-)",
                        children: "−"
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomValue,
                        onClick: resetZoom,
                        disabled: isLoading,
                        title: "Reset zoom (0)",
                        children: [
                            zoom,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: zoomIn,
                        disabled: isLoading,
                        title: "Zoom in (+)",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: toggleFullscreen,
                        title: "Fullscreen (F)",
                        children: "⛶"
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: showSettings ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeButton : "",
                        onClick: ()=>setShowSettings((open)=>!open),
                        title: "Reader settings",
                        children: "⚙"
                    }, void 0, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reader/page.js",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewer} ${viewMode === "scroll" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollView : ""} ${viewMode === "double" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].doubleView : ""}`,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readerStatus,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 500,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Abrindo arquivo..."
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 504,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Preparando as páginas para leitura."
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 506,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/reader/page.js",
                    lineNumber: 499,
                    columnNumber: 11
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readerStatus,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Não foi possível abrir o arquivo"
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 513,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 517,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>fileInputRef.current?.click(),
                            children: "Abrir outro arquivo"
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 519,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/reader/page.js",
                    lineNumber: 512,
                    columnNumber: 11
                }, this) : pages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readerStatus,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Nenhum arquivo aberto"
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 530,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Selecione imagens, um arquivo CBZ, CBR ou PDF para começar."
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 532,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>fileInputRef.current?.click(),
                            children: "Abrir arquivo"
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 536,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/reader/page.js",
                    lineNumber: 529,
                    columnNumber: 11
                }, this) : viewMode === "scroll" ? pages.map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: page,
                        alt: `Page ${index + 1}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageImage,
                        style: getPageStyle()
                    }, page, false, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 547,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: pages[firstPageIndex],
                            alt: `Page ${currentPage}`,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageImage,
                            style: getPageStyle()
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 557,
                            columnNumber: 13
                        }, this),
                        viewMode === "double" && pages[secondPageIndex] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: pages[secondPageIndex],
                            alt: `Page ${currentPage + 1}`,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageImage,
                            style: getPageStyle()
                        }, void 0, false, {
                            fileName: "[project]/app/reader/page.js",
                            lineNumber: 566,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/reader/page.js",
                    lineNumber: 556,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reader/page.js",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Reader"
                            }, void 0, false, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 592,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowSettings(false),
                                "aria-label": "Close settings",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 594,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 589,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Visualização"
                            }, void 0, false, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 614,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "viewMode",
                                        value: "single",
                                        checked: viewMode === "single",
                                        onChange: ()=>setViewMode("single")
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 617,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Página única"
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 629,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 616,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "viewMode",
                                        value: "double",
                                        checked: viewMode === "double",
                                        onChange: ()=>setViewMode("double")
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 633,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Página dupla"
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 645,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 632,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "viewMode",
                                        value: "scroll",
                                        checked: viewMode === "scroll",
                                        onChange: ()=>setViewMode("scroll")
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 649,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Rolagem vertical"
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 661,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 648,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 609,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Ajuste"
                            }, void 0, false, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 674,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "fitMode",
                                        value: "width",
                                        checked: fitMode === "width",
                                        onChange: ()=>setFitMode("width")
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 677,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Largura"
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 689,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 676,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "fitMode",
                                        value: "height",
                                        checked: fitMode === "height",
                                        onChange: ()=>setFitMode("height")
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 693,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Altura"
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 705,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 692,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "fitMode",
                                        value: "original",
                                        checked: fitMode === "original",
                                        onChange: ()=>setFitMode("original")
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 709,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tamanho original"
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 721,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 708,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 669,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$reader$2f$reader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Leitura"
                            }, void 0, false, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 734,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "readingDirection",
                                        value: "ltr",
                                        checked: readingDirection === "ltr",
                                        onChange: ()=>setReadingDirection("ltr")
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 737,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Esquerda → Direita"
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 749,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 736,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "readingDirection",
                                        value: "rtl",
                                        checked: readingDirection === "rtl",
                                        onChange: ()=>setReadingDirection("rtl")
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 755,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Direita → Esquerda"
                                    }, void 0, false, {
                                        fileName: "[project]/app/reader/page.js",
                                        lineNumber: 767,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reader/page.js",
                                lineNumber: 754,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reader/page.js",
                        lineNumber: 729,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reader/page.js",
                lineNumber: 586,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/reader/page.js",
        lineNumber: 359,
        columnNumber: 5
    }, this);
}
_s(ReaderPage, "EZzq0yiI3Q/PQh7HN8w+nFgAkKc=");
_c = ReaderPage;
var _c;
__turbopack_context__.k.register(_c, "ReaderPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/reader/reader.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeButton": "reader-module__PSu9Ma__activeButton",
  "controlsHidden": "reader-module__PSu9Ma__controlsHidden",
  "controlsVisible": "reader-module__PSu9Ma__controlsVisible",
  "divider": "reader-module__PSu9Ma__divider",
  "doubleView": "reader-module__PSu9Ma__doubleView",
  "loadingSpinner": "reader-module__PSu9Ma__loadingSpinner",
  "pageCounter": "reader-module__PSu9Ma__pageCounter",
  "pageImage": "reader-module__PSu9Ma__pageImage",
  "reader": "reader-module__PSu9Ma__reader",
  "readerSpin": "reader-module__PSu9Ma__readerSpin",
  "readerStatus": "reader-module__PSu9Ma__readerStatus",
  "scrollView": "reader-module__PSu9Ma__scrollView",
  "settingsHeader": "reader-module__PSu9Ma__settingsHeader",
  "settingsPanel": "reader-module__PSu9Ma__settingsPanel",
  "settingsSection": "reader-module__PSu9Ma__settingsSection",
  "toolbar": "reader-module__PSu9Ma__toolbar",
  "viewer": "reader-module__PSu9Ma__viewer",
  "zoomValue": "reader-module__PSu9Ma__zoomValue",
});
}),
"[project]/lib/reader/cbrReader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readCbr",
    ()=>readCbr
]);
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
async function readCbr(file) {
    const { createExtractorFromData } = await __turbopack_context__.A("[project]/node_modules/node-unrar-js/esm/index.esm.js [app-client] (ecmascript, async loader)");
    // =========================
    // RAR DATA
    // =========================
    const data = await file.arrayBuffer();
    // =========================
    // WASM
    // =========================
    const wasmResponse = await fetch("/unrar.wasm");
    if (!wasmResponse.ok) {
        throw new Error("Não foi possível carregar o leitor de arquivos CBR.");
    }
    const wasmBinary = await wasmResponse.arrayBuffer();
    // =========================
    // CREATE EXTRACTOR
    // =========================
    const extractor = await createExtractorFromData({
        data,
        wasmBinary
    });
    // =========================
    // FILE LIST
    // =========================
    const fileList = extractor.getFileList();
    // IMPORTANTE:
    // percorremos o generator até o fim.
    const fileHeaders = [
        ...fileList.fileHeaders
    ];
    const imageHeaders = fileHeaders.filter((header)=>{
        return !header.flags.directory && isImage(header.name);
    }).sort((a, b)=>a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: "base"
        }));
    if (imageHeaders.length === 0) {
        throw new Error("Nenhuma imagem compatível foi encontrada no CBR.");
    }
    const encryptedImage = imageHeaders.find((header)=>header.flags.encrypted);
    if (encryptedImage) {
        throw new Error("CBRs protegidos por senha ainda não são suportados.");
    }
    // =========================
    // EXTRACT IMAGES
    // =========================
    const imageNames = imageHeaders.map((header)=>header.name);
    const extracted = extractor.extract({
        files: imageNames
    });
    // Também percorremos este generator até o fim.
    const extractedFiles = [
        ...extracted.files
    ];
    // =========================
    // CREATE PAGES
    // =========================
    const pages = extractedFiles.filter((rarFile)=>{
        return rarFile.extraction && isImage(rarFile.fileHeader.name);
    }).sort((a, b)=>a.fileHeader.name.localeCompare(b.fileHeader.name, undefined, {
            numeric: true,
            sensitivity: "base"
        })).map((rarFile)=>{
        const blob = new Blob([
            rarFile.extraction
        ], {
            type: getMimeType(rarFile.fileHeader.name)
        });
        return URL.createObjectURL(blob);
    });
    if (pages.length === 0) {
        throw new Error("Não foi possível extrair as páginas do CBR.");
    }
    return pages;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/reader/cbzReader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readCbz",
    ()=>readCbz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
;
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
async function readCbz(file) {
    const zip = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loadAsync(file);
    const imageEntries = Object.values(zip.files).filter((entry)=>{
        return !entry.dir && isImage(entry.name);
    }).sort((a, b)=>a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: "base"
        }));
    if (imageEntries.length === 0) {
        throw new Error("Nenhuma imagem compatível foi encontrada no CBZ.");
    }
    const pages = await Promise.all(imageEntries.map(async (entry)=>{
        const data = await entry.async("uint8array");
        const blob = new Blob([
            data
        ], {
            type: getMimeType(entry.name)
        });
        return URL.createObjectURL(blob);
    }));
    return pages;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/reader/fileReader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFileType",
    ()=>getFileType
]);
function getFileType(file) {
    if (!file) {
        return null;
    }
    if (file.type.startsWith("image/")) {
        return "image";
    }
    const extension = file.name.split(".").pop()?.toLowerCase();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/reader/pdfReader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readPdf",
    ()=>readPdf
]);
function canvasToBlob(canvas) {
    return new Promise((resolve, reject)=>{
        canvas.toBlob((blob)=>{
            if (!blob) {
                reject(new Error("Não foi possível renderizar uma página do PDF."));
                return;
            }
            resolve(blob);
        }, "image/jpeg", 0.92);
    });
}
async function readPdf(file) {
    // PDF.js é importado somente quando o usuário
    // realmente tenta abrir um PDF.
    const pdfjsLib = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)");
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({
        data: new Uint8Array(arrayBuffer)
    });
    const pdf = await loadingTask.promise;
    const pages = [];
    for(let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++){
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({
            scale: 1.5
        });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Não foi possível criar o canvas para o PDF.");
        }
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        await page.render({
            canvasContext: context,
            viewport
        }).promise;
        const blob = await canvasToBlob(canvas);
        const pageUrl = URL.createObjectURL(blob);
        pages.push(pageUrl);
        page.cleanup();
    }
    return pages;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0tk6vef._.js.map