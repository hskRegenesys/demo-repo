export function downloadFromBlob(blob, fileName) {
  try {
    const link = document.createElement("a");
    link.href = blob;
    link.download = fileName;
    link.setAttribute("target", "_blank");
    link.click();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
