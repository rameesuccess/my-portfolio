/**
 * Utility to download or view Remedan Usleyman's CV reliably across
 * all environments, including sandboxed preview iframes, mobile devices, and production.
 */

export async function downloadCVFile() {
  try {
    const response = await fetch('/Remedan_Usleyman_CV.pdf');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'Remedan_Usleyman_CV.pdf';
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);

    return { success: true };
  } catch (error) {
    console.warn('Direct blob download issue:', error);
    // Fallback: standard navigation / window open
    try {
      window.open('/Remedan_Usleyman_CV.pdf', '_blank');
      return { success: true, fallback: true };
    } catch (e) {
      window.location.href = '/Remedan_Usleyman_CV.pdf';
      return { success: true, redirect: true };
    }
  }
}
