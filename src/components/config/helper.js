import _ from "lodash";

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
export function batchInfo(batches) {
  const filterBatch = _.filter(
    batches,
    (item) => new Date() >= new Date(item?.start_date)
  );
  return filterBatch;
}
