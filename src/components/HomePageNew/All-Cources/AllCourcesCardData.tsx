const AllCourcesCardData = {
  // Featured Courses
  FeaturedCoursesHeading: "Featured Courses",
  FeaturedCoursesSubHeading: "See what you can learn with us!",
  cardTimeIcon: "/assets/images/HomeNew/clock.svg",
  cardStudentsIcon: "/assets/images/HomeNew/user-tick.svg",
  cardBookIcon: "/assets/images/HomeNew/book.svg",
  cardProgramText: "Programmes",
  cardStudentEnrollmentText: "Students Enrolled",
  cardToolsText: "Covered",
  cardStarIcon: "/assets/images/HomeNew/star.svg",

  RelatedCoursesHeding: "Discover Trend's Top Courses in Demand",
  RelatedCoursesTitle: "Related Courses",

  Courses: {
    DataScience: {
      parentCource: {
        code: "DSCI",
        id: 1,
        parentId: null,
        name: "Data Science",
        cardProgram: "Data Science",
        cardImg: "/assets/images/HomeNew/CardImg.webp",
        cardWeek: "15 Weeks",
        cardCount: "45,000+",
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

      SubCources: [
        {
          id: 1.1,
          name: "Basic Data Science",
          code: "BDSCI",
          description: "Basic Data Science",
          parentId: 1,
          cardProgram: "Basic Data Science",
          cardImg: "/assets/images/HomeNew/CardImg.webp",
          cardCount: "32,000+",
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
        {
          id: 1.2,
          name: "Advanced Data Science",
          code: "ADDSCI",
          description: "Advanced Data Science",
          parentId: 1,
          cardProgram: "Advanced Data Science",
          cardImg: "/assets/images/HomeNew/CardImg.webp",
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
          cardImg: "/assets/images/HomeNew/CardImg.webp",
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
        cardImg: "/assets/images/HomeNew/CardImg.webp",
        cardCount: "32,000+",
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
        cardWeek: "12 Weeks",
      },
    },
    DigitalMarketing: {
      parentCource: {
        code: "DM",
        id: 3,
        parentId: null,
        name: "Digital Marketing",
        cardProgram: "Digital Marketing",
        cardImg: "./assets/images/HomeNew/CardImg.webp",
        cardWeek: "10 Weeks",
        cardCount: "32,000+",
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
      SubCources: [
        {
          id: 3.1,
          name: "Digital Marketing Fundamentals",
          code: "BDMC",
          description: "Digital Marketing Fundamentals",
          parentId: 3,
          cardProgram: "Digital Marketing Fundamental",
          cardImg: "/assets/images/HomeNew/CardImg.webp",
          cardCount: "32,000+",
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
        {
          id: 3.2,
          name: "Advance Digital Marketing Course",
          code: "AVDMC",
          description: "Advance Digital Marketing Course",
          parentId: 3,
          cardProgram: "Advanced Digital Marketing Course",
          cardImg: "/assets/images/HomeNew/CardImg.webp",
          cardCount: "45,000+",
          cardTool: "45 Tools",
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
        cardImg: "/assets/images/HomeNew/CardImg.webp",
        cardCount: "32,000+",
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
    },
    ArtificialIntelligence: {
      parentCource: {
        code: "AI",
        id: 5,
        parentId: null,
        name: "Artificial Intelligence",
        cardProgram: "Artificial Intelligence",
        cardImg: "./assets/images/HomeNew/CardImg.webp",
        cardWeek: "10 Weeks",
        cardCount: "32,000+",
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
      SubCources: [
        {
          id: 5.1,
          name: "AI Introductory",
          code: "AIIP",
          description: "AI Introductory",
          parentId: 5,
          cardProgram: "Artificial Intelligence Introduction",
          cardImg: "/assets/images/HomeNew/CardImg.webp",
          cardCount: "32,000+",
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
        {
          id: 5.2,
          name: "AI Intermediary",
          code: "AIIPF",
          description: "AI Intermediary",
          parentId: 5,
          cardProgram: "Artificial Intelligence Intermediate",
          cardImg: "/assets/images/HomeNew/CardImg.webp",
          cardCount: "45,000+",
          cardTool: "45 Tools",
        },
        {
          id: 5.3,
          name: "AI Advanced Applied",
          code: "AIAAPP",
          description: "AI Advanced Applied",
          parentId: 5,
          cardProgram: "Artificial Intelligence Advance",
          cardImg: "/assets/images/HomeNew/CardImg.webp",
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
  },
};

export default AllCourcesCardData;
