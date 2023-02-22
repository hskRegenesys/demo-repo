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
    (item) => new Date() <= new Date(item?.end_date)
  );
  if (filterBatch.length > 1) {
    return filterBatch?.reduce((accu, curr) => {
      accu.start_date > curr.start_date;
      return accu;
    });
  } else {
    return filterBatch[0];
  }
}
