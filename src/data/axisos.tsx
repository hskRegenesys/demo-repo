export const ApiServiceConstants = {
  baseURL: process.env.NEXT_PUBLIC_DR_API_BASE_URL,
};
export const LeadApiServiceConstants = {
  baseURL: process.env.NEXT_PUBLIC_LEADS_API_BASE_URL,
};
export const LalesforceApiServiceConstants = {
  baseURL: process.env.NEXT_PUBLIC_SALESFORCE_API_BASE_URL,
};
export const WPApiServiceConstants = {
  baseURL: process.env.NEXT_PUBLIC_WP_REST_API,
};
export const CountryCodeApiServiceConstants = {
  baseURL: "/api",
};

export const WhatsAppMessagingAPIConstants = {
  baseURL: process.env.CM_TELECOM_BASE_URL,
};

export const cmEmailServiceUrlConstant = {
  baseURL: `https://api.cm.com/bulkemail/v1.0/accounts/${process.env.CM_DR_ACCOUNTID}/mails`,
};

export const apiEndPoints = Object.freeze({
  contactApi: "/contacts",
  coursesApi: "/course/all",
  parentCourseApi: "/course/parent",
  coursePriceApi: "/course/price",
  leadApi: "/leads",
  salesforceApi: "/salesforce",
  downloadBrochure: "/document/downloadurl",
  countryCode: "/geoLocation",
  wpPosts: "/posts",
  wpCategories: "/categories",
});
