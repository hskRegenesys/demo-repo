interface MenuItem {
  title: string;
  link: string;
}
interface SidemapItem {
  Heading: string;
  items: MenuItem[];
}

interface Sidemapdata {
  [key: string]: {
    SideHeading: string;
    content: SidemapItem[] | SidemapItem;
  };
}

const Sidemapdata: Sidemapdata = {
  "Digital Regenesys": {
    SideHeading: "Digital Regenesys",
    content: [
      {
        Heading: "Company",
        items: [
          {
            title: "Home",
            link: "https://www.digitalregenesys.com/",
          },
          {
            title: "About Us",
            link: "https://www.digitalregenesys.com/about", // Add appropriate links for About Us, Privacy Policy, Contact Us, Terms & Conditions
          },
          {
            title: "Privacy Policy",
            link: "https://www.digitalregenesys.com/privacy-policy",
          },
          {
            title: "Contact Us",
            link: "https://www.digitalregenesys.com/contact",
          },
          {
            title: "Terms & Conditions",
            link: "https://www.digitalregenesys.com/terms-and-conditions",
          },
        ],
      },
      {
        Heading: "All Courses",
        items: [
          {
            title: "Full Stack Development",
            link: "https://www.digitalregenesys.com/all-courses/full-stack-development",
          },
          {
            title: "Data and Business Analytics",
            link: "https://www.digitalregenesys.com/all-courses/data-and-business-analytics",
          },
          {
            title: "Data Science",
            link: "https://www.digitalregenesys.com/all-courses/data-science",
          },
          {
            title: "Artificial Intelligence",
            link: "https://www.digitalregenesys.com/all-courses/artificial-intelligence",
          },
          {
            title: "Cyber Security",
            link: "https://www.digitalregenesys.com/all-courses/cyber-security",
          },
          {
            title: "Project Management",
            link: "https://www.digitalregenesys.com/all-courses/project-management",
          },
          {
            title: "Digital Marketing",
            link: "https://www.digitalregenesys.com/all-courses/digital-marketing",
          },
          {
            title: "Design Thinking",
            link: "https://www.digitalregenesys.com/all-courses/design-thinking",
          },
          {
            title: "Management Advancement",
            link: "https://www.digitalregenesys.com/all-courses/management-advancement",
          },
        ],
      },
      {
        Heading: "Blog",
        items: [
          {
            title: "Digital Regenesys",
            link: "https://www.digitalregenesys.com/blog/category/digital-regenesys",
          },
          {
            title: "Data Science",
            link: "https://www.digitalregenesys.com/blog/category/data-science",
          },
          {
            title: "Digital Marketing",
            link: "https://www.digitalregenesys.com/blog/category/digital-marketing",
          },
          {
            title: "Project Management",
            link: "https://www.digitalregenesys.com/blog/category/project-management",
          },
          {
            title: "Cyber Security",
            link: "https://www.digitalregenesys.com/blog/category/cyber-security",
          },
          {
            title: "Design Thinking",
            link: "https://www.digitalregenesys.com/blog/category/design-thinking",
          },
          {
            title: "Artificial Intelligence (AI)",
            link: "https://www.digitalregenesys.com/blog/category/artificial-intelligence",
          },
          {
            title: "Full Stack Development",
            link: "https://www.digitalregenesys.com/blog/category/full-stack-development",
          },
          {
            title: "Data And Business Analytics",
            link: "https://www.digitalregenesys.com/blog/category/data-and-business-analytics",
          },
        ],
      },
      // {
      //   Heading: "Country",
      //   items: [
      //     {
      //       title: "USA",
      //       link: "#",
      //     },
      //     {
      //       title: "South Africa",
      //       link: "#",
      //     },
      //     {
      //       title: "Nigeria",
      //       link: "#",
      //     },
      //     {
      //       title: "Kenya",
      //       link: "#",
      //     },
      //     {
      //       title: "Croatia",
      //       link: "#",
      //     },
      //     {
      //       title: "India",
      //       link: "#",
      //     },
      //     {
      //       title: "Tanzania",
      //       link: "#",
      //     },
      //     {
      //       title: "Uganda",
      //       link: "#",
      //     },
      //   ],
      // },
    ],
  },
  Brand: {
    SideHeading: "Brand",
    content: {
      Heading: "Online Courses",
      items: [
        {
          title: "online courses",
          link: "https://www.digitalregenesys.com/online-courses",
        },
        {
          title: "online course",
          link: "https://www.digitalregenesys.com/online-course",
        },
        {
          title: "courses online",
          link: "https://www.digitalregenesys.com/courses-online",
        },
        {
          title: "online coding courses",
          link: "https://www.digitalregenesys.com/online-coding-courses",
        },
        {
          title: "online courses with certificates",
          link: "https://www.digitalregenesys.com/online-courses-with-certificates",
        },
        {
          title: "online certification courses",
          link: "https://www.digitalregenesys.com/online-certification-courses",
        },
        {
          title: "coding courses online",
          link: "https://www.digitalregenesys.com/coding-courses-online",
        },
        {
          title: "IT courses online",
          link: "https://www.digitalregenesys.com/IT-courses-online",
        },
        {
          title: "online certificate courses",
          link: "https://www.digitalregenesys.com/online-certificate-courses",
        },
        {
          title: "online courses for adults",
          link: "https://www.digitalregenesys.com/online-courses-for-adults",
        },
        {
          title: "best online courses",
          link: "https://www.digitalregenesys.com/best-online-courses",
        },
        {
          title: "online it courses",
          link: "https://www.digitalregenesys.com/online-it-courses",
        },
        {
          title: "online certificate course",
          link: "https://www.digitalregenesys.com/online-certificate-course",
        },
        {
          title: "online courses certificates",
          link: "https://www.digitalregenesys.com/online-courses-certificates",
        },
        {
          title: "online training courses",
          link: "https://www.digitalregenesys.com/online-training-courses",
        },
        {
          title: "certificate courses online",
          link: "https://www.digitalregenesys.com/certificate-courses-online",
        },
      ],
    },
  },

  "Data Science": {
    SideHeading: "Data Science",
    content: {
      Heading: "Data Science",
      items: [
        {
          title: "Data Science Course",
          link: "https://www.digitalregenesys.com/data-science-course",
        },
        {
          title: "Data Science Courses",
          link: "https://www.digitalregenesys.com/data-science-courses",
        },
        {
          title: "Courses In Data Science",
          link: "https://www.digitalregenesys.com/courses-in-data-science",
        },
        {
          title: "Course For Data Science",
          link: "https://www.digitalregenesys.com/course-for-data-science",
        },
        {
          title: "Data Science Online Courses",
          link: "https://www.digitalregenesys.com/data-science-online-courses",
        },
        {
          title: "Data Science Course Online",
          link: "https://www.digitalregenesys.com/data-science-course-online",
        },
        {
          title: "Courses Data Science",
          link: "https://www.digitalregenesys.com/courses-data-science",
        },
        {
          title: "Online Data Science Courses",
          link: "https://www.digitalregenesys.com/online-data-science-courses",
        },
        {
          title: "Best Data Science Courses",
          link: "https://www.digitalregenesys.com/best-data-science-courses",
        },
        {
          title: "A Crash Course In Data Science",
          link: "https://www.digitalregenesys.com/a-crash-course-in-data-science",
        },
        {
          title: "Data Science Courses Online",
          link: "https://www.digitalregenesys.com/data-science-courses-online",
        },
        {
          title: "Python Data Science Course",
          link: "https://www.digitalregenesys.com/python-data-science-course",
        },
        {
          title: "Best Online Data Science Courses",
          link: "https://www.digitalregenesys.com/best-online-data-science-courses",
        },
        {
          title: "Data Science Certification Course",
          link: "https://www.digitalregenesys.com/data-science-certification-course",
        },
        {
          title: "Online Course In Data Science",
          link: "https://www.digitalregenesys.com/online-course-in-data-science",
        },
        {
          title: "Online Data Science Course",
          link: "https://www.digitalregenesys.com/online-data-science-course",
        },
      ],
    },
  },

  "Digital Maraketing": {
    SideHeading: "Digital Marketing",
    content: {
      Heading: "Digital Marketing",
      items: [
        {
          title: "What is Digital Marketing",
          link: "https://www.digitalregenesys.com/what-is-digital-marketing",
        },
        {
          title: "Digital Marketing Jobs",
          link: "https://www.digitalregenesys.com/digital-marketing-jobs",
        },
        {
          title: "Digital Marketing Salary",
          link: "https://www.digitalregenesys.com/digital-marketing-salary",
        },
        {
          title: "Digital Marketer",
          link: "https://www.digitalregenesys.com/digital-marketer",
        },
        {
          title: "Digital Marketing Course",
          link: "https://www.digitalregenesys.com/digital-marketing-course",
        },
        {
          title: "Digital Marketing Strategy",
          link: "https://www.digitalregenesys.com/digital-marketing-strategy",
        },
        {
          title: "Digital Marketing Certificate",
          link: "https://www.digitalregenesys.com/digital-marketing-certificate",
        },
        {
          title: "Google Digital Marketing Certification",
          link: "https://www.digitalregenesys.com/google-digital-marketing-certification",
        },
        {
          title: "Digital Marketing Courses",
          link: "https://www.digitalregenesys.com/digital-marketing-courses",
        },
        {
          title: "Digital Marketing Near Me",
          link: "https://www.digitalregenesys.com/digital-marketing-near-me",
        },
        {
          title: "Digital Marketing Specialist",
          link: "https://www.digitalregenesys.com/digital-marketing-specialist",
        },
        {
          title: "Digital Marketing Certification",
          link: "https://www.digitalregenesys.com/digital-marketing-certification",
        },
        {
          title: "Digital Marketing Degree",
          link: "https://www.digitalregenesys.com/digital-marketing-degree",
        },
        {
          title: "Digital Marketing Tools",
          link: "https://www.digitalregenesys.com/digital-marketing-tools",
        },
        {
          title: "Digital Marketing Training",
          link: "https://www.digitalregenesys.com/digital-marketing-training",
        },
        {
          title: "Digital Marketing Certificates",
          link: "https://www.digitalregenesys.com/digital-marketing-certificates",
        },
        {
          title: "Digital Marketing Institute",
          link: "https://www.digitalregenesys.com/digital-marketing-institute",
        },
        {
          title: "Digital Marketing Strategies",
          link: "https://www.digitalregenesys.com/digital-marketing-strategies",
        },
        {
          title: "Digital Marketing Course Online",
          link: "https://www.digitalregenesys.com/digital-marketing-course-online",
        },
        {
          title: "Digital Marketing Definition",
          link: "https://www.digitalregenesys.com/digital-marketing-definition",
        },
        {
          title: "Digital Marketing Examples",
          link: "https://www.digitalregenesys.com/digital-marketing-examples",
        },
        {
          title: "Digital Marketing Meaning",
          link: "https://www.digitalregenesys.com/digital-marketing-meaning",
        },
        {
          title: "Digital Marketing Trends",
          link: "https://www.digitalregenesys.com/digital-marketing-trends",
        },
        {
          title: "Learn Digital Marketing",
          link: "https://www.digitalregenesys.com/learn-digital-marketing",
        },

        // {
        //   title: "Types of Digital Marketing",
        //   link: "https://www.digitalregenesys.com/types-of-digital-marketing",
        // },
        // {
        //   title: "Digital Marketer Salary",
        //   link: "https://www.digitalregenesys.com/digital-marketer-salary",
        // },
        // {
        //   title: "Digital Marketing Classes",
        //   link: "https://www.digitalregenesys.com/digital-marketing-classes",
        // },
        // {
        //   title: "Digital Marketing Online Courses",
        //   link: "https://www.digitalregenesys.com/digital-marketing-online-courses",
        // },
        // {
        //   title: "Online Digital Marketing Courses",
        //   link: "https://www.digitalregenesys.com/online-digital-marketing-courses",
        // },
        // {
        //   title: "What is a Digital Marketer",
        //   link: "https://www.digitalregenesys.com/what-is-a-digital-marketer",
        // },
        // {
        //   title: "Digital Marketing Courses Online",
        //   link: "https://www.digitalregenesys.com/digital-marketing-courses-online",
        // },
        // {
        //   title: "Google Digital Marketing Course",
        //   link: "https://www.digitalregenesys.com/google-digital-marketing-course",
        // },
        // {
        //   title: "How to Become a Digital Marketer",
        //   link: "https://www.digitalregenesys.com/how-to-become-a-digital-marketer",
        // },
        // {
        //   title: "How to Do Digital Marketing",
        //   link: "https://www.digitalregenesys.com/how-to-do-digital-marketing",
        // },
        // {
        //   title: "How to Start Digital Marketing",
        //   link: "https://www.digitalregenesys.com/how-to-start-digital-marketing",
        // },
        // {
        //   title: "Online Digital Marketing",
        //   link: "https://www.digitalregenesys.com/online-digital-marketing",
        // },
        // {
        //   title: "Digital Marketing Blogs",
        //   link: "https://www.digitalregenesys.com/digital-marketing-blogs",
        // },
        // {
        //   title: "Digital Marketing Careers",
        //   link: "https://www.digitalregenesys.com/digital-marketing-careers",
        // },
        // {
        //   title: "Digital Marketing Certificate Online",
        //   link: "https://www.digitalregenesys.com/digital-marketing-certificate-online",
        // },
        // {
        //   title: "Digital Marketing Certifications",
        //   link: "https://www.digitalregenesys.com/digital-marketing-certifications",
        // },
        // {
        //   title: "Fundamentals of Digital Marketing",
        //   link: "https://www.digitalregenesys.com/fundamentals-of-digital-marketing",
        // },
        // {
        //   title: "Online Digital Marketing Course",
        //   link: "https://www.digitalregenesys.com/online-digital-marketing-course",
        // },
        // {
        //   title: "What Does a Digital Marketer Do",
        //   link: "https://www.digitalregenesys.com/what-does-a-digital-marketer-do",
        // },
        // {
        //   title: "What's Digital Marketing",
        //   link: "https://www.digitalregenesys.com/what's-digital-marketing",
        // },
        // {
        //   title: "Best Digital Marketing Services",
        //   link: "https://www.digitalregenesys.com/best-digital-marketing-services",
        // },
        // {
        //   title: "Certificate in Digital Marketing",
        //   link: "https://www.digitalregenesys.com/certificate-in-digital-marketing",
        // },
        // {
        //   title: "Digital Marketing Platforms",
        //   link: "https://www.digitalregenesys.com/digital-marketing-platforms",
        // },
        // {
        //   title: "Digital Marketing Tips",
        //   link: "https://www.digitalregenesys.com/digital-marketing-tips",
        // },
        // {
        //   title: "Masters in Digital Marketing",
        //   link: "https://www.digitalregenesys.com/masters-in-digital-marketing",
        // },
        // {
        //   title: "What is a Digital Marketing",
        //   link: "https://www.digitalregenesys.com/what-is-a-digital-marketing",
        // },
        // {
        //   title: "Best Digital Marketing Courses",
        //   link: "https://www.digitalregenesys.com/best-digital-marketing-courses",
        // },
        // {
        //   title: "Definition of Digital Marketing",
        //   link: "https://www.digitalregenesys.com/definition-of-digital-marketing",
        // },
        // {
        //   title: "Digital Marketing Degree Online",
        //   link: "https://www.digitalregenesys.com/digital-marketing-degree-online",
        // },
        // {
        //   title: "Digital Marketing Degrees",
        //   link: "https://www.digitalregenesys.com/digital-marketing-degrees",
        // },
        // {
        //   title: "Digital Marketing Experts",
        //   link: "https://www.digitalregenesys.com/digital-marketing-experts",
        // },
        // {
        //   title: "Digital Marketing Online",
        //   link: "https://www.digitalregenesys.com/digital-marketing-online",
        // },
        // {
        //   title: "Examples of Digital Marketing",
        //   link: "https://www.digitalregenesys.com/examples-of-digital-marketing",
        // },
        // {
        //   title: "How to Learn Digital Marketing",
        //   link: "https://www.digitalregenesys.com/how-to-learn-digital-marketing",
        // },
        // {
        //   title: "Future of Digital Marketing",
        //   link: "https://www.digitalregenesys.com/future-of-digital-marketing",
        // },
        // {
        //   title: "Importance of Digital Marketing",
        //   link: "https://www.digitalregenesys.com/importance-of-digital-marketing",
        // },
        // {
        //   title: "Why is Digital Marketing Important",
        //   link: "https://www.digitalregenesys.com/why-is-digital-marketing-important",
        // },
      ],
    },
  },
};

export default Sidemapdata;
