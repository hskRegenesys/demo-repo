export const ApiServiceConstants = {
  baseURL: process.env.NEXT_PUBLIC_DR_API_BASE_URL,
};
export const apiEndPoints = Object.freeze({
  contactApi: "/contacts",
  coursesApi: "/course/all",
  parentCourseApi: "/course/parent",
  coursePriceApi: "/course/price",
});
