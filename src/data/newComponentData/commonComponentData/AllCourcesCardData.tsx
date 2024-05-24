const AllCourcesCardData = {
  // Featured Courses
  FeaturedCoursesHeading: "Featured Courses",
  FeaturedCoursesSubHeading: "Courses For All Your Interests",
  cardTimeIcon: "Icons/clock.svg",
  cardStudentsIcon: "Icons/user-tick.svg",
  cardBookIcon: "Icons/book.svg",
  cardProgramText: "Course",
  cardStudentEnrollmentText: " Students Enroled  ",
  cardToolsText: "Covered",
  cardStarIcon: "/assets/images/new-component-assets/star.svg",

  RelatedCoursesHeding: "Discover Trend's Top Courses in Demand",
  RelatedCoursesTitle: "Related Courses",

  allCoursesSliderHeading: "All Courses",
  allCoursesSliderSubHeading: "Find Your Suitable Course",

  Courses: {
    DataScience: {
      parentCource: {
        code: "DSCI",
        id: 1,
        parentId: null,
        name: "Data Science",
        cardProgram: "Data Science",
        cardImg: "Images/Course-Card/DS-card.png",
        ImgAlt: "Data Science - Digital Regenesys",
        cardWeek: "30 Weeks",
        cardCount: "10,000+",
        cardTool: "15+ Tools",
        CourseNameCode: "DSN",
      },

      SubCources: [
        {
          id: 1.1,
          name: "Basic Data Science",
          code: "BDSCI",
          description: "Basic Data Science",
          parentId: 1,
          cardProgram: "Basic Data Science",
          cardImg: "/assets/images/new-component-assets/CardImg.webp",
          cardCount: "32,000+",
          cardTool: "45 Tools",
        },
        {
          id: 1.2,
          name: "Advanced Data Science",
          code: "ADDSCI",
          description: "Advanced Data Science",
          parentId: 1,
          cardProgram: "Advanced Data Science",
          cardImg: "/assets/images/new-component-assets/CardImg.webp",
          cardCount: "45,000+",
          cardTool: "45 Tools",
        },
        {
          id: 1.3,
          name: "Applied Data Science",
          code: "APDSCI",
          description: "Applied Data Science",
          parentId: 1,
          cardProgram: "Applied Data Science",
          cardImg: "/assets/images/new-component-assets/CardImg.webp",
          cardCount: "33,000+",
          cardTool: "45 Tools",
          pricingCard: [
            {
              price: "$999",
              list: [
                "10 Weeks",
                "Live Classes",
                "Capstone Projects",
                "International Certification",
              ],
            },
          ],
        },
      ],
    },
    ProjectManagement: {
      parentCource: {
        id: 2,
        name: "Project Management",
        code: "PM",
        description: "Project Management",
        parentId: null,
        cardProgram: "Project Management",
        cardImg: "Images/Course-Card/PM-card.png",
        ImgAlt: "Project Management - Digital Regenesys",

        cardCount: "10,000+",
        cardTool: "5+ Tools",
        cardWeek: "10 Weeks",
        CourseNameCode: "PM",
      },
    },
    DigitalMarketing: {
      parentCource: {
        code: "DM",
        id: 3,
        parentId: null,
        name: "Digital Marketing",
        cardProgram: "Digital Marketing",
        cardImg: "Images/Course-Card/DM-card.png",
        ImgAlt: "Digital Marketing - Digital Regenesys",

        cardWeek: "20 Weeks",
        cardCount: "10,000+",
        cardTool: "45+ Tools",
        CourseNameCode: "DMN",
      },
      SubCources: [
        {
          id: 3.1,
          name: "Digital Marketing Fundamentals",
          code: "BDMC",
          description: "Digital Marketing Fundamentals",
          parentId: 3,
          cardProgram: "Digital Marketing Fundamental",
          cardImg: "/assets/images/new-component-assets/CardImg.webp",
          cardCount: "32,000+",
          cardTool: "45 Tools",
          cardWeek: "12 Weeks",
        },
        {
          id: 3.2,
          name: "Advance Digital Marketing Course",
          code: "AVDMC",
          description: "Advance Digital Marketing Course",
          parentId: 3,
          cardProgram: "Advanced Digital Marketing Course",
          cardImg: "/assets/images/new-component-assets/CardImg.webp",
          cardCount: "45,000+",
          cardTool: "45 Tools",
          cardWeek: "12 Weeks",
        },
      ],
    },
    CyberSecurity: {
      parentCource: {
        id: 4,
        name: "Cybersecurity",
        code: "SPCSY",
        description: "Cybersecurity",
        parentId: null,
        cardProgram: "Cyber Security",
        cardImg: "Images/Course-Card/CS-card.png",
        ImgAlt: "Cyber Security - Digital Regenesys",

        cardCount: "10,000+",
        cardTool: "14+ Tools",
        cardWeek: "13 Weeks",
        CourseNameCode: "CSC",
      },
    },
    ArtificialIntelligence: {
      parentCource: {
        code: "AI",
        id: 5,
        parentId: null,
        name: "Artificial Intelligence",
        cardProgram: "Artificial Intelligence",
        cardImg: "Images/Course-Card/AI-card.png",
        ImgAlt: "Artificial Intelligence - Digital Regenesys",

        cardWeek: "37 Weeks",
        cardCount: "10,000+",
        CourseNameCode: "AIN",
      },
      SubCources: [
        {
          id: 5.1,
          name: "AI Introductory",
          code: "AIIP",
          description: "AI Introductory",
          parentId: 5,
          cardProgram: "Artificial Intelligence Introduction",
          cardImg: "/assets/images/new-component-assets/CardImg.webp",
          cardCount: "32,000+",
          cardWeek: "12 Weeks",
        },
        {
          id: 5.2,
          name: "AI Intermediary",
          code: "AIIPF",
          description: "AI Intermediary",
          parentId: 5,
          cardProgram: "Artificial Intelligence Intermediate",
          cardImg: "/assets/images/new-component-assets/CardImg.webp",
          cardCount: "45,000+",
          cardTool: "45 Tools",
          cardWeek: "12 Weeks",
        },
        {
          id: 5.3,
          name: "AI Advanced Applied",
          code: "AIAAPP",
          description: "AI Advanced Applied",
          parentId: 5,
          cardProgram: "Artificial Intelligence Advance",
          cardImg: "/assets/images/new-component-assets/CardImg.webp",
          cardCount: "33,000+",
          cardTool: "45 Tools",
          cardWeek: "12 Weeks",
        },
      ],
    },
    FullStackDevelopment: {
      parentCource: {
        id: 6,
        name: "Full Stack Development",
        code: "FSD",
        description: "Full Stack Development",
        parentId: null,
        cardProgram: "Full Stack Development",
        cardImg: "Images/Course-Card/FS-card.png",
        ImgAlt: "Full Stack Development - Digital Regenesys",

        cardCount: "10,000+",
        cardTool: "8+ Tools",
        cardWeek: "40 Weeks",
        CourseNameCode: "FSD",
      },
    },
    DataAndBusinessAnalytics: {
      parentCource: {
        id: 7,
        name: "Data And Business Analytics",
        code: "DBA",
        description: "Data And Business Analytics",
        parentId: null,
        cardProgram: "Data And Business Analytics",
        cardImg: "Images/Course-Card/DBA-card.png",
        ImgAlt: "Data And Business Analytics - Digital Regenesys",

        cardCount: "10,000+",
        cardTool: "5+ Tools",
        cardWeek: "19 Weeks",
        CourseNameCode: "DBA",
      },
    },
    DesignThinking: {
      parentCource: {
        id: 8,
        name: "Design Thinking",
        code: "DTC",
        description: "Design Thinking",
        parentId: null,
        cardProgram: "Design Thinking",
        cardImg: "Images/Course-Card/DT-card.png",
        ImgAlt: "Design Thinking - Digital Regenesys",
        cardCount: "10,000+",
        cardWeek: "8 Weeks",
        CourseNameCode: "DTC",
      },
    },
    ProductManagement: {
      parentCource: {
        id: 9,
        name: "Product Management",
        code: "PDM",
        description: "Product Management",
        parentId: null,
        cardProgram: "Product Management",
        cardImg: "Images/Course-Card/PDM-card.png",
        ImgAlt: "Product Management - Digital Regenesys",
        cardCount: "10,000+",
        cardWeek: "40 Weeks",
        CourseNameCode: "PDM",
      },
    },
    ManagementAdvancement: {
      parentCource: {
        id: 10,
        name: "Management Advancement",
        code: "DTC",
        description: "Management Advancement",
        parentId: null,
        cardProgram: "Management Advancement",
        cardImg: "Images/Course-Card/MA-card.png",
        ImgAlt: "Management Advancement - Digital Regenesys",
        cardCount: "10,000+",
        cardWeek: "40 Weeks",
        CourseNameCode: "MD",
      },
    },
  },
};

export default AllCourcesCardData;
