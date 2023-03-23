const Constants = {
  breadCrumb: "breadCrumb",
  home: "home",
  course: "course",
  organization: "organization",
  localbusiness: "local business",
  website: "website",
  image: "image",
  faq: "faqpage",
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
      "query-input": "required name=search_term_string",
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
    name: title,
    description: bannerDescp1,
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
    isAccessibleForFree: false,
    inLanguage: "en",
    audience: {
      "@type": "Audience",
      audienceType: audienceData,
    },
  };
};

Template[Constants.organization] = (data) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.digitalregenesys.com",
    logo: "https://www.digitalregenesys.com/images/logo.png",
  };
};

Template[Constants.localbusiness] = (data) => {
  return {
    "@context": "https://schema.org",
    "@type": "local business",

    name: "Digital Regenesys",
    address: {
      "@type": "PostalAddress",
      streetAddress: "165 West Street",
      addressLocality: "Sandton",
      addressRegion: "Johannesburg",
      postalCode: "2031",
      addressCountry: "South Africa",
    },
  };
};

Template[Constants.website] = (data) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.digitalregenesys.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.digitalregenesys.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
};

Template[Constants.image] = (data) => {
  return {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    contentUrl: "https://www.digitalregenesys.com/photos",
    license: "https://www.digitalregenesys.com/license",
    acquireLicensePage: "https://www.digitalregenesys.com/how-to-use-my-images",
    creditText: "Digital Regenesys",
    creator: {
      "@type": "Organization",
      name: "Digital Regenesys",
    },
  };
};

Template[Constants.faq] = (data) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Application Fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "<p>A non-refundable fee of R1,100 is required in order for an application to be processed. Regenesys reserves the right to amend this fee from time-to-time..</p>",
        },
      },
    ],
  };
};

export { Template, Constants };
