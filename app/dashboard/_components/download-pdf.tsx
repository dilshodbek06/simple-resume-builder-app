"use client";

import { FaFileDownload } from "react-icons/fa";

const DownloadPdf = () => {
  const handlePdfDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const html2pdf = require("html2pdf.js");

    const options = {
      filename: "myResume.pdf",
    };
    const content = document.getElementById("my-pdf-content");
    html2pdf().set(options).from(content).save();
  };

  return (
    <button
      onClick={handlePdfDownload}
      title="download pdf"
      className="overflow-hidden group bg-cyan-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2         hover:ring-cyan-400 transition-all ease-out duration-300 p-3 hover:scale-105 rounded-full"
    >
      <FaFileDownload size={20} />
    </button>
  );
};

export default DownloadPdf;
