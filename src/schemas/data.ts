const Constants = {
  breadCrumb: "breadCrumb",
  home: "home",
  course: "course",
};

interface TemplateInterface {
  [Key: string]: (data: any) => {};
}

const ListTemplate: TemplateInterface = {};
const Template: TemplateInterface = {};

ListTemplate[Constants.breadCrumb] = (data: any) =>
  data.map((item: any, idx: number) => {
    return {
      "@type": "ListItem",
      position: idx,
      name: item.title,
      item: item.href,
    };
  });

Template[Constants.breadCrumb] = (data: any) => {
  return {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: ListTemplate[Constants.breadCrumb](data),
  };
};

Template[Constants.home] = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.digitalregenesys.com",
    headline: "Regenesys Business School",
    name: "Revolutionise your career with future ready skills",
    description:
      " Digital Regenesys is here to provide career transforming, skill-enhancing, and upgrading online courses in many digital fields.",
    url: "https://www.digitalregenesys.com",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://www.digitalregenesys.com/search?searchKey={search_term_string}",
    },
  };
};

Template[Constants.course] = (data) => {
  let title, bannerDescp1;
  if (data?.name) {
    title = data?.name;
    bannerDescp1 = data?.description;
  }
  let audienceData = [];
  if (data?.whoCanApply) {
    audienceData = data?.whoCanApply.map((item: any) => item.title);
  }

  let id = "";
  if (typeof window !== "undefined") {
    id = window.location.href;
  }

  return {
    "@type": "Course",
    "@context": "http://schema.org",
    publisher: {
      "@type": "Organization",
      name: "Digital Regenesys",
      sameAs: "https://digitalregenesys.com",
    },
    provider: {
      "@type": "Organization",
      name: "Digital Regenesys",
      sameAs: "https://digitalregenesys.com",
    },
    "@id": id,
    name: title,
    description: bannerDescp1,
    isAccessibleForFree: false,
    inLanguage: "en",
    audience: {
      "@type": "Audience",
      audienceType: audienceData,
    },
  };
};

export { Template, Constants };