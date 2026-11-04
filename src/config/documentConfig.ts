/**
 * Document Download Configuration for Bacon Legal Recruiting
 *
 * To replace or update the downloadable document:
 * 1. Place your PDF file in `/public/documents/` (e.g. `/public/documents/bacon-legal-recruiting-overview.pdf`)
 * 2. Update the configuration below if you change the file name or title.
 */

export interface DocumentDownloadConfig {
  title: string;
  description: string;
  fileName: string;
  filePath: string;
  fileSizeBytes: string;
  uploadLocation: string;
}

export const INQUIRY_DOWNLOAD_CONFIG: DocumentDownloadConfig = {
  title: "Firm Overview & Practice Specializations Guide",
  description: "Download our firm overview, practice areas (including State and Federal Lobbyists), and search questionnaire (PDF).",
  fileName: "bacon-legal-recruiting-overview.pdf",
  filePath: "/documents/bacon-legal-recruiting-overview.pdf",
  fileSizeBytes: "PDF Document",
  uploadLocation: "/public/documents/bacon-legal-recruiting-overview.pdf",
};
