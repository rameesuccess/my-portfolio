import React, { useState } from 'react';
import { Download, X, ExternalLink, Printer, Check, FileText, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { downloadCVFile } from '../utils/cvDownload.js';

export default function CvModal({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    setDownloading(true);
    await downloadCVFile();
    setDownloading(false);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handlePrint = () => {
    const printWindow = window.open('/Remedan_Usleyman_CV.pdf', '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative bg-[#0d1322] border border-slate-700/80 rounded-2xl max-w-4xl w-full shadow-2xl z-10 flex flex-col max-h-[92vh] overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Remedan Usleyman — CV</span>
                <span className="text-xs font-normal text-slate-400 hidden sm:inline">
                  (Page {currentPage} of 2)
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Curriculum Vitae · Computer Science Student · Haramaya University
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Download Button */}
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-all shadow-md shadow-blue-600/25 cursor-pointer"
              title="Download Remedan_Usleyman_CV.pdf"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span className="hidden sm:inline">Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{downloading ? 'Downloading...' : 'Download PDF'}</span>
                </>
              )}
            </button>

            {/* Direct Open in new tab */}
            <a
              href="/Remedan_Usleyman_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors"
              title="Open raw PDF file in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Tab</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Switcher Toolbar */}
        <div className="px-5 py-2.5 bg-slate-950/70 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">View Page:</span>
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                currentPage === 1
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Page 1 (Profile & Skills)
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                currentPage === 2
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Page 2 (References)
            </button>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="p-1.5 rounded bg-slate-800 text-slate-300 disabled:opacity-40 hover:text-white transition-colors cursor-pointer"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-2 font-mono text-slate-400">{currentPage} / 2</span>
            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              disabled={currentPage === 2}
              className="p-1.5 rounded bg-slate-800 text-slate-300 disabled:opacity-40 hover:text-white transition-colors cursor-pointer"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Document Display Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-950/90 flex justify-center items-start">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-700/50">
            {currentPage === 1 ? (
              <img
                src="/cv-page-1.png"
                alt="Remedan Usleyman CV - Page 1"
                className="w-full h-auto block select-none"
              />
            ) : (
              <img
                src="/cv-page-2.png"
                alt="Remedan Usleyman CV - Page 2"
                className="w-full h-auto block select-none"
              />
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>Official document: <code className="text-slate-300 font-mono">Remedan_Usleyman_CV.pdf</code> (205 KB)</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleDownload}
              className="text-blue-400 hover:text-blue-300 underline font-medium cursor-pointer"
            >
              Download direct PDF copy
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
