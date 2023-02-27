export const ApiServiceConstants = {
  baseURL: process.env.NEXT_PUBLIC_DR_API_BASE_URL,
};
export const LeadApiServiceConstants = {
  baseURL: process.env.base_Url,
};
export const apiEndPoints = Object.freeze({
  contactApi: "/contacts",
  coursesApi: "/course/all",
  parentCourseApi: "/course/parent",
  coursePriceApi: "/course/price",
  leadApi: "/leads",
  downloadBrochure:"/document/downloadurl"
});
