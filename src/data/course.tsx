import { leadSource, sourceCampaign } from "@/components/config/constant";
import { Certificate } from "crypto";

export const digitalMarketingMain = [
  // {
  //   id: 1,
  //   image: "7.webp",
  //   name: "Basic Digital Marketing",
  //   tagline: [
  //     "Live Class ",
  //     "8 Weeks ",
  //     "International Certification ",
  //     "Capstone Projects ",
  //   ],
  //   batch: "New Batch - 8th October, 2022",
  // },
  // {
  //   id: 2,
  //   image: "7.webp",
  //   name: "Advance Digital Markering",
  //   tagline: [
  //     "Live Class ",
  //     "8 Weeks ",
  //     "International certification ",
  //     "Capstone projects ",
  //   ],
  //   batch: "New Batch - 8th October, 2022",
  // },
  // {
  //   id: 3,
  //   image: "7.webp",
  //   name: "Applied Digital Marketing",
  //   tagline: [
  //     "Live Class ",
  //     "8 Weeks ",
  //     "International certification ",
  //     "Capstone projects ",
  //   ],
  //   batch: "New Batch - 8th October, 2022",
  // },
];

export const digitalMarketingText = {
  title: "Digital Marketing",
  pagedesc:
    "In this modern-day digital world, there are various methods and platforms through which the current marketing ecosystem operates. This course is offered in two categories; Digital Marketing Fundamentals & Advance Digital Marketing Course. Learn these aspects of Digital Marketing and its real-world use.",
  imagearrow: "/assets/images/background/sign-arrow.png",
};

export const dataScienceCourse = {
  title: "Data Science",
  pagedesc:
    "Upskill yourself with a course in Data Science. Learn the real-world application of Data Science taught by industry experts. Enrol yourself in this course and build a career in the one of the most sought after fields.",
  imagearrow: "/assets/images/background/sign-arrow.png",
};
export const artificialIntelligenceCourse = {
  title: "Artificial Intelligence",
  pagedesc: `Embark on a transformative journey into the realm of AI. Gain the skills to thrive amidst the AI revolution, shaping
    industries globally. Stay competitive, propel your career, and be at the forefront of this technological wave. Unlock
    exciting entrepreneurial avenues and seize AI-driven business opportunities. This course future-proofs your career,
    turning innovative ideas into reality. Expand your knowledge, make a positive impact, and thrive in an AI-driven
    world. Join us today and let your potential soar in the fascinating realm of AI.`,
  imagearrow: "/assets/images/background/sign-arrow.png",
};
export const courseData = {
  //Project Management
  PM: {
    processOne: [
      {
        id: 1,
        // image: "yellow-bg-details-bg-1.webp",
        youtubeUrl:
          "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",
        title: "Certification Programme in Project Management",
        text: "Elevate your skill-set with the best Project Management course for college students, freshers, and professionals. Learn how to apply the skills of Project Management in the real world from our highly experienced academic staff.",
        lists: [
          "10 Weeks Course",
          "Live Sessions",
          "Career Counselling",
          "Guaranteed Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Elevate your skill-set with the best Project Management course for college students, freshers, and professionals. Learn how to apply the skills of Project Management in the real world from our highly experienced academic staff.",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1: "Get exposure to Yammer, Excel, Discord, and Slack",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    courseTools: [
      "pm/project-management-tools1.webp",
      "pm/project-management-tools2.webp",
      "pm/project-management-tools3.webp",
      "pm/project-management-tools4.webp",
    ],
    courseCertificate: {
      certificateTitle:
        "Leading with Excellence: Project Management Certificate Course",
      certificateSubTitle:
        "Earn a Project Management Certificate from Digital Regenesys & Navigate the Project Management Landscape",
      certificateSubSubTitle:
        "With our Project Management programme, you will gain a solid foundation in project management principles to stay ahead in the competition by working on projects, simulations, and cases.        ",
      certificateListTitle:
        "With Project Management Certificate, you will get: ",

      certificateSkillList: [
        "International Recognition",
        "Comprehensive Project Management Knowledge",
        "Project Management Tools and Techniques",
        "Project Scope and Quality Management",
      ],
      certificateListPara:
        " Our Advance Digital Marketing Certificate will open doors to various roles for you, whether you are a fresher, graduate or experienced professional.",
      certificateRolesList: [
        "Project Manager",
        "Consulting Project Manager ",
        "Event Project Manager",
        "Project Coordinator and many more",
      ],
      CertificateImage: ["PM_certificate.webp"],
      imageName: "PM_certificate",
    },

    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Dennis-Laxton.webp",
          title: "Dr. Dennis Laxton ",
          text: "Dennis Laxton has obtained NHD Industrial Engineering from Wits, B. Industrial Engineering from Unisa, MBA (ICT) from CSU, and DBA from UKZN. He has worked as a motor vehicle technician, class motor mechanic, service advisor, and a technical assistant as well.",
          designation: "Academic Team Leader and Senior Lecturer",
        },
        {
          id: 2,
          image: "James_forson.webp",
          title: "James Forson",
          text: "James Forson is known for his excellent work in Project Management. James has pursued  BSocSc (Hons) from UCT and MBA from UCT.",
          designation: "BSocSc (Hons)",
        },
      ],
    },
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "Week 1",
            lists: ["Introduction to Project Management", "Project Profiling"],
          },
          {
            id: 2,
            title: "Week 2",
            lists: ["Developing Team Capabilities"],
          },
          {
            id: 3,
            title: "Week 3",
            lists: ["Planning and Managing"],
          },
          {
            id: 4,
            title: "Week 4",
            lists: ["Time Management"],
          },
          {
            id: 5,
            title: "Week 5",
            lists: ["Monitoring and Reporting", "Quality Management"],
          },
          {
            id: 6,
            title: "Week 6",
            lists: ["Project Closure"],
          },
          {
            id: 7,
            title: "Week 7",
            lists: ["Change Management", "Disaster Management"],
          },
          {
            id: 8,
            title: "Week 8",
            lists: [
              "International Project Management",
              "Software for Project Management - (Microsoft Project Plan- MPP)",
            ],
          },
          {
            id: 9,
            title: "Week 9",
            lists: ["Design Thinking"],
          },
          {
            id: 10,
            title: "Week 10",
            lists: ["Contracts and Agreement", "Industry Expert Session"],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title: "How This Course Will Help Me In My Career?",
            text: "This course is ideal for the ones who are willing to learn how to manage projects in private, public and even non-profit sectors. The ourse covers the entire project management cycle, including feasibility, planning, implementation, monitoring and evaluation. This course is relevant to the financial services, IT, engineering, manufacturing, government, health, education, construction, agriculture, transport, media and entertainment, retail, energy, safety and security.",
          },
          {
            id: 2,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced technology of Project Management, we will get you job-ready for positions under entry-level and executive positions of a project manager, senior project manager, program manager, business change manager, organizational change manager, delivery manager, PMO manager and much more with a complete LinkedIn profile building session.",
          },
          {
            id: 3,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 6,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 7,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 8,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Project Management certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school   based in South Africa, and climb the path of success towards your Project Management career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    modalImage: "Pop-up_bg.webp",
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besv3zg/",
    stickyText:
      "PM-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  SE: {
    processOne: [
      {
        id: 1,
        // image: "yellow-bg-details-bg-1.webp",
        youtubeUrl:
          "https://www.youtube.com/embed/8BJll51jQbg?autoplay=1&loop=1&playlist=8BJll51jQbg",
        title: "Certification Programme in Software Engineering",
        text: "Discover the Key to Success and Shape your Future with the best Software Engineering course for college students, freshers, and professionals. Learn the stages of software development, principles and practices of designing software systems from our highly experienced academic staff.",
        lists: [
          "22 Weeks course ",
          "Live Session",
          "Career Counselling",
          "Guaranteed Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Master the art of building top-notch software, focusing on design, security, and maintenance. Learn how to analyse, develop, execute, and maintain software systems in the real world from our highly experienced faculty.",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1: "Get exposure to Jenkins, GitLab CI, or GitHub Actions. Slack, Teams, and Jira.",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch.",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions.",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools.",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    courseTools: [
      "pm/project-management-tools1.webp",
      "pm/project-management-tools2.webp",
      "pm/project-management-tools3.webp",
      "pm/project-management-tools4.webp",
    ],
    courseCertificate: {
      certificateTitle:
        "Leading with Excellence: Software Engineering Certificate Course",
      certificateSubTitle:
        "Earn a Software Engineering Certificate from Digital Regenesys & Navigate the Software Engineering Landscape",
      certificateSubSubTitle:
        "With our Software Engineering course,  individuals will gain the necessary knowledge, expertise, and recognition to excel in this domain. By investing in our course, individuals can enhance their career prospects, stay updated with industry best practices,, and demonstrate their commitment to excellence in this domain.",
      certificateListTitle:
        "With the Software Engineering Course, you will get: ",

      certificateSkillList: [
        "International Recognition",
        "Software Development Process",
        "Data Structures and Algorithms",
        "Software Development Tools and Techniques",
      ],
      certificateListPara:
        " Our software engineering course opens the door to a wide range of exciting and dynamic career opportunities in software development and information technology.",
      certificateRolesList: [
        "Software Developer",
        "Mobile App Developer ",
        "Software Architect",
        "Machine Learning Engineer",
      ],
      CertificateImage: ["PM_certificate.webp"],
      imageName: "PM_certificate",
    },

    featureSeven: {
      title: "Meet our faculty",
      // desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Dennis-Laxton.webp",
          title: "Dr. Dennis Laxton ",
          text: "Dennis Laxton has obtained NHD Industrial Engineering from Wits, B. Industrial Engineering from Unisa, MBA (ICT) from CSU, and DBA from UKZN. He has worked as a motor vehicle technician, class motor mechanic, service advisor, and a technical assistant as well.",
          designation: "Academic Team Leader and Senior Lecturer",
        },
        {
          id: 2,
          image: "James_forson.webp",
          title: "James Forson",
          text: "James Forson is known for his excellent work in Project Management. James has pursued  BSocSc (Hons) from UCT and MBA from UCT.",
          designation: "BSocSc (Hons)",
        },
      ],
    },
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course Curriculum",
        faqs: [
          {
            id: 1,
            title: "Programming Fundamentals",
            lists: ["Overview of Software Engineering", "Software Development Life Cycle (SDLC)","Roles and Responsibilities in Software Engineering"],
          },
          {
            id: 2,
            title: "Programming Fundamentals",
            lists: ["Introduction to Programming","Data Structures and Algorithms","Object-Oriented Programming (OOP)"],
          },
          {
            id: 3,
            title: "Software Design and Architecture",
            lists: ["System Design","Software Architecture"],
          },
          {
            id: 4,
            title: "Database Management Systems",
            lists: ["Database fundamentals","SQL and Database Design"],
          },
          {
            id: 5,
            title: "Software Development Tools and Environments",
            lists: ["Integrated Development Environments (IDEs)", "Version Control Systems (e.g., Git)","Continuous Integration and Deployment (CI/CD)",],
          },
          {
            id: 6,
            title: "Software Testing and Quality Assurance",
            lists: ["Types of Testing","Test Automation"],
          },
          {
            id: 7,
            title: "Project Management and Collaboration",
            lists: ["Project Planning and Scheduling", "Collaboration Tools"],
          },

          {
            id: 8,
            title: "Emerging Technologies and Trends",
            lists: [
              "Cloud Computing",
              "Artificial Intelligence and Machine Learning",
              "DevOps practices"
            ],
          },
          // {
          //   id: 9,
          //   title: "Week 9",
          //   lists: ["Design Thinking"],
          // },
          // {
          //   id: 10,
          //   title: "Week 10",
          //   lists: ["Contracts and Agreement", "Industry Expert Session"],
          // },
        ],
        defaultCurrent: 1,
      },
    ],
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title: "What is a software engineering course?",
            text: "A software engineering course is a structured programme of study that provides individuals with the knowledge and skills to design, develop, test, and maintain software systems. It covers various topics, including programming languages, software development methodologies, and tools used in the field.",
          },
          {
            id: 2,
            title: "What are the key topics covered in a software engineering course?",
            text: "Topics typically include programming languages, software development life cycle, data structures and algorithms, software design and architecture, quality assurance, project management, and emerging technologies.",
          },
          {
            id: 3,
            title: "How long does a software engineering course typically last?",
            text: " The duration of a software engineering course is 22 weeks.",
          },
          {
            id: 4,
            title:
              "What are the career prospects after completing a software engineering course?",
            text: "Career prospects include roles such as software developer, full-stack developer, front-end developer, back-end developer, mobile app developer, DevOps engineer, data scientist, machine learning engineer, and more.",
          },
          {
            id: 5,
            title: "How can a software engineering course benefit my career?",
            text: "A software engineering course provides the skills and knowledge needed for a career in software development, opening doors to diverse and rewarding opportunities in the technology industry. It enhances problem-solving abilities and prepares individuals for roles in high-demand fields.",
          },
          // {
          //   id: 6,
          //   title:
          //     "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
          //   text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          // },
          // {
          //   id: 7,
          //   title:
          //     "How Will I Get Access To The Assignments And Learning Content?",
          //   text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          // },
          // {
          //   id: 8,
          //   title: "What If The Course Timings Don't Match My Work Timings?",
          //   text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          // },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career counselling",
            "Get yourself interview-ready with proper training, industry expert interactions, and resume-building tools.",
            "Elevate your LinkedIn game with a comprehensive profile-building session.",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and get complete support from the faculty",
            "Enhance the learning experience offered by our highly experienced and achieved faculties.",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of a community of 10,000+ Learners.",
            "Connect with the Industry experts who will help guide you through your career after course completion.",
            "Talk, share, connect, learn, and grow with other students in your batch.",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fee Structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Software Engineering certificate",
      certifiedText1:
        "Earn a prestigious Software Engineering Certificate online & boost your tech career! Get certified today! Get certified by Digital Regenesys, Silicon Valley's leading Ed-Tech platform. Elevate your career and code your future now!",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements to your friends and colleagues",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the most significant online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    modalImage: "Pop-up_bg.webp",
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besv3zg/",
    stickyText:
      "PM-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },

  //Cybersecurity
  // CS: {
  //   processOne: [
  //     {
  //       id: 1,
  //       image: "yellow-bg-details-bg-1.webp",
  //       title: "Certification Programme in Basic Cyber Security",
  //       text: "Upskill yourself with a course in Cybersecurity Programme, which has high demand to improve business outcomes and unprecedented global demand and career opportunities.",
  //       lists: [
  //         "13 Weeks Course",
  //         "Live Sessions",
  //         "Career Counselling",
  //         "Guaranteed Certification",
  //       ],
  //     },
  //   ],
  //   productDescription: {
  //     title: "Revolutionise your career with future-ready skills",
  //     text1:
  //       "Upskill yourself with a course in Cybersecurity Programme, which has high demand to improve business outcomes and unprecedented global demand and career opportunities.",
  //   },
  //   joinReasons: {
  //     title: "Reasons To Join This Course",
  //     subTitle1: "Exposure",
  //     desc1:
  //       "Get exposure to a range of industry tools, preparing you with practical skills and knowledge to defend against cyber threats.",

  //     subTitle2: "Best-in-class instructors",
  //     desc2:
  //       "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

  //     subTitle3: "Live sessions",
  //     desc3:
  //       "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

  //     subTitle4: "Tools usage",
  //     desc4: "Gain a broad spectrum of knowledge on how to use the tools",
  //     bg1: "/assets/images/background/reason-bg1-1.webp",
  //     bg2: "/assets/images/background/reason-bg2-1.webp",
  //     bg3: "/assets/images/background/reason-bg3-1.webp",
  //     bg4: "/assets/images/background/reason-bg4-1.webp",
  //   },
  //   // courseTools: [
  //   //   "cs/cybersecurity-tools-1.png",
  //   //   "cs/cybersecurity-tools-2.png",
  //   //   "cs/cybersecurity-tools-3.png",
  //   //   "cs/cybersecurity-tools-4.png",
  //   //   "cs/cybersecurity-tools-5.png",
  //   //   "cs/cybersecurity-tools-6.png",
  //   //   "cs/cybersecurity-tools-7.png",
  //   //   "cs/cybersecurity-tools-8.png",
  //   //   "cs/cybersecurity-tools-9.png",
  //   //   "cs/cybersecurity-tools-10.png",
  //   //   "cs/cybersecurity-tools-11.png",
  //   //   "cs/cybersecurity-tools-12.png",
  //   //   "cs/cybersecurity-tools-13.png",
  //   //   "cs/cybersecurity-tools-14.png",
  //   //   "cs/cybersecurity-tools-15.png",
  //   // ],
  //   featureSeven: {
  //     title: "Meet our staff",
  //     desc: "Revolutionise your career with future-ready skills",
  //     features: [
  //       {
  //         id: 1,
  //         image: "Dr-Saquib-Ahmad-Khan2.webp",
  //         title: "Dr. Saquib Ahmad Khan",
  //         text: "Dr. Saquib Ahmad Khan is a highly regarded and accomplished professional in the cybersecurity field. With a Ph.D. in Computer Science and several cybersecurity certifications under his belt, Dr. Khan is a renowned expert in the field cyber security. He has authored numerous research papers and articles on cybersecurity and frequently speaks at industry conferences and events, sharing his expertise with others. His contributions to the field have earned him several accolades, including widespread recognition for his knowledge and expertise. Dr. Khan is also well-versed in marketing, management, information technology, and applications, with multiple degrees. He is an exceptional faculty member, having published over 26 research papers on various subjects, and his contributions to the field are widely praised. Dr. Khan's exceptional verbal and written communication skills, coupled with his remarkable presentation abilities, have established him as a highly respected and sought-after expert in his field.",
  //         designation: "PhD Computer Science",
  //       },
  //     ],
  //   },
  //   videoOne: {
  //     image: "/assets/images/background/full-video-bg.webp",
  //     videoId: "y2Eqx6ys1hQ",
  //     title: "Linoor is trusted by millions of customers",
  //     text1:
  //       "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
  //     text2:
  //       "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
  //   },
  //   CourseCurriculum: [
  //     {
  //       id: 1,
  //       courseCurriculumTitle: "Course curriculum",
  //       faqs: [
  //         {
  //           id: 1,
  //           title: "Week 1",
  //           lists: [
  //             "Introductory fundamentals of cybersecurity threat actors, attacks, and mitigation",
  //             "Cybersecurity fundamentals",
  //             "Security policies and procedures",
  //             "Cybersecurity mitigation methods",
  //             "Cia triad",
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Week 2",
  //           lists: [
  //             "Enterprise architecture",
  //             "Organizational security policy and components",
  //             "Internet & networking basics",
  //             "Introduction to secured architecture",
  //             "Wireless networks",
  //             "Network security controls",
  //             "Cloud virtualization",
  //             "Byod, and iot security testing",
  //           ],
  //         },
  //         {
  //           id: 3,
  //           title: "Week 3",
  //           lists: [
  //             "Information system governance and risk assessment",
  //             "Introduction to information security",
  //             "Governance risk",
  //             "Management information security programs",
  //             "Network security",
  //           ],
  //         },
  //         {
  //           id: 4,
  //           title: "Week 4",
  //           lists: [
  //             "Introduction to incident management",
  //             "Developing an incident management and response system",
  //             "Digital forensics business",
  //             "Continuity and disaster recovery",
  //           ],
  //         },
  //         {
  //           id: 5,
  //           title: "Week 5",
  //           lists: [
  //             "Secure development",
  //             "Secure coding devsecop",
  //             "Honeypot",
  //             "Network security and spoofing",
  //             "Wi-Fi network security",
  //             "Web security",
  //             "Cryptography",
  //             "OS fundamentals and security",
  //             "Cryptography and encryption",
  //             "Cryptanalysis",
  //             "Project - exploiting virtual machine",
  //           ],
  //         },
  //         {
  //           id: 6,
  //           title: "Week 6",
  //           lists: [
  //             "Malware analysis, Memory forensics",
  //             "Cyber forensic",
  //             "Application security",
  //             "Hands-on security - Network traffic analysis + CTF + VAPT",
  //           ],
  //         },
  //         {
  //           id: 7,
  //           title: "Week 7",
  //           lists: [
  //             "Introduction to application security",
  //             "Web-based applications and associated vulnerabilities",
  //             "Cookies and tracking",
  //             "Data and database security",
  //             "Phishing and other attacks on identity",
  //             "Regulation, compliance, and risk management",
  //             "Project - exploit web application",
  //           ],
  //         },
  //         {
  //           id: 8,
  //           title: "Week 8",
  //           lists: [
  //             "Session by industry experts",
  //             "Session on work readiness skills",
  //           ],
  //         },
  //       ],
  //       defaultCurrent: 1,
  //     },
  //   ],
  //   faqsSection: [
  //     {
  //       id: 1,
  //       faqs: [
  //         {
  //           id: 1,
  //           title: "How This Course Will Help Me In My Career?",
  //           text: "This course is ideal for the ones who are willing to learn how to manage projects in private, public and even non-profit sectors. The ourse covers the entire project management cycle, including feasibility, planning, implementation, monitoring and evaluation. This course is relevant to the financial services, IT, engineering, manufacturing, government, health, education, construction, agriculture, transport, media and entertainment, retail, energy, safety and security.",
  //         },
  //         {
  //           id: 2,
  //           title: "Will Digital Regenesys Offer Me Job Assistance?",
  //           text: "Apart from preparing you with Cutting-edge and enhanced technology of Project Management, we will get you job-ready for positions under entry-level and executive positions of a project manager, senior project manager, program manager, business change manager, organizational change manager, delivery manager, PMO manager and much more with a complete LinkedIn profile building session.",
  //         },
  //         {
  //           id: 3,
  //           title: "What Are The Modes Of Payment Available For Me?",
  //           text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
  //         },
  //         {
  //           id: 4,
  //           title:
  //             "For How Long Will I Be Able To Access The Content After My Course Completion?",
  //           text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
  //         },
  //         {
  //           id: 5,
  //           title: "Is This A Certified Course?",
  //           text: "Yes, all the courses are certified by the Regenesys Business School.",
  //         },
  //         {
  //           id: 6,
  //           title:
  //             "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
  //           text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
  //         },
  //         {
  //           id: 7,
  //           title:
  //             "How Will I Get Access To The Assignments And Learning Content?",
  //           text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
  //         },
  //         {
  //           id: 8,
  //           title: "What If The Course Timings Don't Match My Work Timings?",
  //           text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
  //         },
  //       ],
  //       defaultCurrent: 1,
  //     },
  //   ],
  //   courseBenefits: {
  //     title: "Benefits",
  //     desc: "",
  //     tabBtns: [
  //       {
  //         id: "tab-1",
  //         title: "Career Support",
  //       },
  //       {
  //         id: "tab-2",
  //         title: "Doubt Resolution",
  //       },
  //       {
  //         id: "tab-3",
  //         title: "Learning Support",
  //       },
  //       {
  //         id: "tab-4",
  //         title: "Networking",
  //       },
  //     ],
  //     tabsContents: [
  //       {
  //         id: "tab-1",
  //         image: "featured-image-14.jpg",

  //         lists: [
  //           "100% Career Counselling",
  //           "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
  //           "Elevate your LinkedIn game with a comprehensive profile building session",
  //         ],
  //       },
  //       {
  //         id: "tab-2",
  //         image: "featured-image-14.jpg",

  //         lists: [
  //           "Solve all your queries with one-on-one interaction during the lectures",
  //           "Ask questions, get answers and complete support from the faculty",
  //           "Enhanced learning experience offered by our highly experienced and achieved faculties",
  //         ],
  //       },
  //       {
  //         id: "tab-3",
  //         image: "featured-image-14.jpg",

  //         lists: [
  //           "Get unlimited learning access for 1 year to the learning management system",
  //           "Receive proper guidance as per your special requirements from our faculties",
  //           "Access the recorded lectures in case you miss a session",
  //         ],
  //       },

  //       {
  //         id: "tab-4",
  //         image: "featured-image-14.jpg",

  //         lists: [
  //           "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
  //           "Connect with the Industry experts who will help you guide through your career after course completion",
  //           "Talk, share, connect, learn and grow along with other students in your batch",
  //         ],
  //       },
  //     ],
  //   },
  //   productDetails: {
  //     flagsa: "/assets/images/icons/flag_sa.webp",
  //     flagnig: "/assets/images/icons/flag_nigeria.webp",
  //     flagus: "/assets/images/icons/flag_us.webp",
  //     flagind: "/assets/images/icons/flag_india.webp",
  //     flagken: "/assets/images/icons/flag_kenya.webp",
  //     title: "Fees structure & Certification",
  //     subTitle: "Get Certified",
  //     price: 64499,
  //     certifiedTitle1: "Earn Your Cybersecurity certificate",
  //     certifiedText1:
  //       "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Cybersecurity career.",
  //     certifiedTitle2: "Share Your Achievement",

  //     certifiedText2:
  //       "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
  //     certifiedTitle3: "Benefits",
  //     certifiedText3:
  //       "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
  //     admissionText:
  //       "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
  //     termsConditions: "*Terms & Conditions",
  //     CsFundamentals: "Total Admission Fee",
  //     CsDefenceToolbox: "Cybersecurity Defence Toolbox",
  //   },
  //   zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/bxz53nd/",
  //   stickyText:
  //     "CS-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  // },

  //Basic Data Science
  BDSCI: {
    processOne: [
      {
        id: 1,
        image: "yellow-bg-details-bg-1.webp",
        youtubeUrl:
          "https://www.youtube.com/embed/XQ_FNaPaghs-?autoplay=1&loop=1&playlist=XQ_FNaPaghs",

        title: "Certification Programme in Basic Data Science",
        text: "Upskill yourself with a course in Basic Data Science designed especially for college students and freshers. Learn the real-world application of Data Science taught by industry experts. Enrol yourself in this course and build a career in the one of the most sought after fields",
        lists: [
          "10 Weeks Course",
          "Live Sessions",
          "Capstone Projects",
          "International Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Upskill yourself with a course in Basic Data Science designed especially for college students and freshers. Learn the real-world application of Data Science taught by industry experts. Enrol yourself in this course and build a career in the one of the most sought after fields",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Get exposure to Pandas, Matplotlib, NumPy, seaborn, scikitlearn, statsmodel, MySQL, Python, and other techniques",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from foundation phase in this course through to the applied and advanced programmes.",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4:
        "Gain a broad spectrum of knowledge on how to use the tools ranging from pandas, Numpy and many more",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    courseTools: [
      "ds/tools_covered1.webp",
      "ds/tools_covered2.webp",
      "ds/tools_covered3.webp",
      "ds/tools_covered4.webp",
      "ds/tools_covered5.webp",
      "ds/tools_covered6.webp",
      "ds/tools_covered7.webp",
      "ds/tools_covered8.webp",
      "ds/tools_covered9.webp",
      "ds/tools_covered10.webp",
      "ds/tools_covered11.webp",
      "ds/tools_covered12.webp",
    ],
    courseCertificate: {
      certificateTitle:
        "Unleashing Data Science Potential: Foundational Certificate Course",
      certificateSubTitle:
        "Earn a Basic Data Science Certificate from Digital Regenesys and Embark on a Data Adventure ",
      certificateSubSubTitle:
        "With our Basic Data Science programme, the knowledge and skills you gain working on projects, simulations, and case studies will set you ahead in the competition.        ",
      certificateListTitle:
        "With Basic Data Science Certificate, you will get: ",

      certificateSkillList: [
        "International Recognition",
        "Practical skills ",
        "In-depth knowledge of concepts and techniques",
        "Basic Data Science Skills",
      ],
      certificateListPara:
        " Our Basic Data Science Certificate will open doors to various roles for you, whether you are a fresher, a graduate or an experienced working professional.",
      certificateRolesList: [
        "Data Analyst",
        "Data Science Manager ",
        "Data Visualisation Specialist",
        "Data Scientist and many more ",
      ],
      CertificateImage: ["BDSCI_certificate.webp"],
    },
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Samidha_Photo.webp",
          title: "Samidha Kurle",
          text: "Samidha Kurle has over 10 years of teaching experience. She has worked as an assistant professor at Atharva College of Engineering, Mumbai.  Samidha Kurle excels in Procedural Programming, Web Designing, Database Design, etc. She is currently pursuing her Ph.D. in Computer Engineering.",
          designation: "Senior Lecturer",
        },
        {
          id: 2,
          image: "dr_nilay_profile.webp",
          title: "Dr. Nilay Karade ",
          text: "Dr. Nilay Karade has over 11 years of experience in Machine Learning. He holds a Ph.D. in Computer Science, Master's in Computer Application, and B.Sc. in Computer Science, Math, and Physics from RTM Nagpur University.",
          designation: "Senior Lecturer",
        },
        {
          id: 3,
          image: "dr_shilpa_joshi.webp",
          title: "Dr. Shilpa Joshi ",
          text: "A highly regarded scholar, facilitator, and the Head of Academics, Dr. Shilpa has done achieved great milestones in her teaching career of over two decades. She has trained and taught more than 2000 students who are now placed in several different global MNCs and are recognised as leaders in the corporate world.",
          designation: "Senior Lecturer",
        },
      ],
    },
    videos: [
      {
        url: "https://www.youtube.com/embed/pVDRNFrrSp8?si=IRFGIuTabN5FDzpa&rel=0",
      },
    ],
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },

    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "Math For Data Science",
            lists: [
              "Probability",
              "Descriptive Statistics",
              "Inferential Statistics",
              "Linear Algebra",
            ],
          },
          {
            id: 2,
            title: "Excel",
            lists: [
              "Excel basic",
              "Data tools",
              "Formatting data and tables",
              "Pivot tables",
              "Excel charts",
              "Pivot charts",
              "Named ranges",
              "Excel shortcuts",
              "Macros",
            ],
          },
          {
            id: 3,
            title: "Basic Data Science",
            lists: [
              "Project on exploratory data analysis",
              `Data analysis and data visualization tools :
             Numpy, Pandas, Matplotlib, Seaborn
             `,
              "Web Scrapping",
              "Feature engineering",
              "Feature selection",
              "Exploratory data analysis",
            ],
          },
          {
            id: 4,
            title: "Python Programming",
            lists: [
              "1 Project on Python database connectivity",
              "Installation and configuration",
              "Python programming basics",
              "Python data structures",
              "Python date & time",
              "Operators in Python",
              "Programme flow control statements",
              "Python functions and modules",
              "File handling in Python",
              "Exception handling",
              "Object oriented programming in Python",
              "Database connectivity with Python",
            ],
          },
          {
            id: 5,
            title: "MySQL RDBMS",
            lists: [
              "MySQL installation",
              "DDL commands",
              "DML commands",
              "Keys",
              "Clauses",
              "Conditions",
              "Control flow statement",
              "Aggregate functions",
              "Date functions",
              "String functions",
              "Joins",
            ],
          },
          {
            id: 6,
            title: "R-Programming Language",
            lists: [
              "1 Project on exploratory data analysis",
              "Fundamentals of R",
              "Vectors",
              "Control statements",
              "Functions",
              "Matrices",
              "Strings",
              "Lists",
              "Arrays",
              "R factors",
              "Data frames",
              "Data visualization",
              "Stringr package",
              "Dplyr package",
            ],
          },
          {
            id: 7,
            title: "MongoDB (DBMS)",
            lists: [
              "MongoDB installation",
              "MongoDB compass app",
              "Data types in MongoDB",
              "JSON, BSON",
              "Database",
              "Models",
              "Collection",
              "Documents",
              "Operators",
              "CRUD operations",
              "JSON, BSON",
              "Queries",
              "Sort, skip, limit",
            ],
          },
          {
            id: 8,
            title: "Business Intelligence (BI) Tool",
            lists: [
              `Power BI : 1 Project on dashboard`,

              `Tableau : 1 Project on dashboard`,
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title:
              "Do I Need To Have Prior Experience Or Understanding Of Data Science To Learn This Course?",
            text: "No, this course does not demand you to have technical understanding about Data Science. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
          },
          {
            id: 2,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 3,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced data science knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title:
              "What Is The Difference Between Basic, Applied And Advanced Data Science Course?",
            text: "The three stages of the Data Science Course such as Basic, Advance and Applied are bifurcated for the people who are willing to expand their knowledge to become a Data Science expert. After learning the Basics of Data Science, you can choose to elect any or both the modules of Advance and Applied.",
          },
          {
            id: 6,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 7,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 8,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 9,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Data Science certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Data Science Career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besj7mp/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "BDSCI-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },

  //Advance Data Science
  ADDSCI: {
    processOne: [
      {
        id: 1,
        youtubeUrl:
          "https://www.youtube.com/embed/XQ_FNaPaghs?autoplay=1&loop=1&playlist=XQ_FNaPaghs",
        title: "Certification Programme in Advanced Data Science",
        text: "Upskill yourself with a course in Advanced Data Science designed especially for college students and freshers. Learn the real-world application of Advanced Data Science taught by industry experts. Enroll in this course and build a career in the most sought after industry right now",
        lists: [
          "10 Weeks",
          "Live Classes",
          "Capstone Projects",
          "International Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Upskill yourself with a course in Advanced Data Science designed especially for college students and freshers. Learn the real-world application of Advanced Data Science taught by industry experts. Enroll in this course and build a career in the most sought after industry right now",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Get exposure to Pandas, Matplotlib, NumPy, seaborn, scikitlearn, statsmodel, MySQL, Python, and other techniques",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    courseTools: [
      "ds/tools_covered1.webp",
      "ds/tools_covered2.webp",
      "ds/tools_covered3.webp",
      "ds/tools_covered4.webp",
      "ds/tools_covered5.webp",
      "ds/tools_covered6.webp",
      "ds/tools_covered7.webp",
      "ds/tools_covered8.webp",
      "ds/tools_covered9.webp",
      "ds/tools_covered10.webp",
      "ds/tools_covered11.webp",
      "ds/tools_covered12.webp",
    ],
    courseCertificate: {
      certificateTitle: "Mastering Data Science: Advanced Certificate Course",
      certificateSubTitle:
        "Earn an Advanced Data Science Certificate from Digital Regenesys & Master the art of Data Science ",
      certificateSubSubTitle:
        "With our Advanced Data Science programme, the knowledge and skills you gain working on projects, simulations, and case studies will set you ahead in the competition.",
      certificateListTitle:
        "With Advanced Data Science Certificate, you will get:",

      certificateSkillList: [
        "International Recognition  ",
        "Advanced-Data Science Expertise",
        "Advanced Analytics Skills",
        "Knowledge of Industry-Relevant Tools and Technologies",
      ],
      certificateListPara:
        " Our Advanced Data Science Certificate will open doors to various roles for you, whether you are a fresher, a graduate or an experienced working professional.",
      certificateRolesList: [
        "Chief Data Officer (CDO)",
        "Machine Learning Engineer",
        "Predictive Analytics Manager ",
        "Data Consultant and many more",
      ],
      CertificateImage: ["ADDSCI_certificate.webp"],
    },
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Samidha_Photo.webp",
          title: "Samidha Kurle",
          text: "Samidha Kurle has over 10 years of teaching experience. She has worked as an assistant professor at Atharva College of Engineering, Mumbai.  Samidha Kurle excels in Procedural Programming, Web Designing, Database Design, etc. She is currently pursuing her Ph.D. in Computer Engineering.",
          designation: "Senior Lecturer",
        },
        {
          id: 2,
          image: "dr_nilay_profile.webp",
          title: "Dr. Nilay Karade ",
          text: "Dr. Nilay Karade has over 11 years of experience in Machine Learning. He holds a Ph.D. in Computer Science, Master's in Computer Application, and B.Sc. in Computer Science, Math, and Physics from RTM Nagpur University.",
          designation: "Senior Lecturer",
        },
        {
          id: 3,
          image: "dr_shilpa_joshi.webp",
          title: "Dr. Shilpa Joshi ",
          text: "A highly regarded scholar, facilitator, and the Head of Academics, Dr. Shilpa has done achieved great milestones in her teaching career of over two decades. She has trained and taught more than 2000 students who are now placed in several different global MNCs and are recognised as leaders in the corporate world.",
          designation: "Senior Lecturer",
        },
      ],
    },
    videos: [
      {
        url: "https://www.youtube.com/embed/JGmuQEPVTVc?si=Cy2IX-f3FWcYUIr7&rel=0",
      },
    ],
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "Machine Learning",
            lists: [
              "2 Projects using machine learning models",
              "10 Machine learning models for Regression, classification, clustering",
              "ML model evaluation metrics",
              "- MAE, RMSE, MSE, R square, Adjusted R square",
              "- Accuracy, confusion matrix, precision, recall, F1 score",
              "Train test dateset splitting",
              "K Fold CV",
              "Grid search CV",
              "Hyper parameter tuning",
              "Bias and variance",
              "Model over fitting & under fitting",
              "Regularization techniques",
            ],
          },
          {
            id: 2,
            title: "Deep Learning",
            lists: [
              "2 Projects using deep learning models",
              "Artificial neural network",
              "Convolutional neural network",
              "Recurrent neural network & LSTM",
            ],
          },
          {
            id: 3,
            title: "Web Development",
            lists: ["HTML, CSS basics", "Streamlit", "Flask"],
          },
          {
            id: 4,
            title: "Natural Language Processing",
            lists: [
              "1 Project on NLP",
              "Text preprocessing",
              "- Lower casing",
              "- Stopword removal",
              "- Regular expression",
              "- Tokenization, unigram, bigram, n-gram",
              "- Stemming & Lemmetization",
              "- POS tagging",
              "- Named entity recognition",
              "- Text processing with Spacy and NLTK",
              "Text vectorization and embedding",
              "- Bag of words",
              "- TF-ITDF",
              "- Word2Vec",
              "- Doc2Vec",
              "- Word embedding",
              "Deep learning and probabilistic models for NLP",
              "Text classification",
              "Text summerization",
              "Text generation",
            ],
          },
          {
            id: 5,
            title: "Computer Vision",
            lists: [
              "1 Project on computer vision",
              "Image basics & processing",
              "Video basics & processing",
              "Object detection",
              "Object segmentation",
              "Object tracking",
            ],
          },
          {
            id: 6,
            title: "Time Series Analysis And Forecasting",
            lists: [
              "Pandas for time series analysis",
              "- Statistical Models for Time Series Forecasting",
              "- Deep Learning LSTM model for Time Series Forecasting",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title:
              "Do I Need To Have Prior Experience Or Understanding Of Data Science To Learn This Course?",
            text: "No, this course does not demand you to have technical understanding about Data Science. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
          },
          {
            id: 2,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 3,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced data science knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title:
              "What Is The Difference Between Basic, Applied And Advanced Data Science Course?",
            text: "The three stages of the Data Science Course such as Basic, Advance and Applied are bifurcated for the people who are willing to expand their knowledge to become a Data Science expert. After learning the Basics of Data Science, you can choose to elect any or both the modules of Advance and Applied.",
          },
          {
            id: 6,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 7,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 8,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 9,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Data Science certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Data Science Career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besj7mp/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "ADSCI-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  //Applied Data Science
  APDSCI: {
    processOne: [
      {
        id: 1,
        youtubeUrl:
          "https://www.youtube.com/embed/XQ_FNaPaghs?autoplay=1&loop=1&playlist=XQ_FNaPaghs",
        title: "Certification Programme in Applied Data Science",
        text: "Upskill yourself with a course in Applied Data Science designed especially for college students and freshers. Learn the real-world application of Data Science taught by industry experts. Enroll yourself in this course and build a career in the most sought after job field",
        lists: [
          "10 Weeks",
          "Live Classes",
          "Capstone Projects",
          "International Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Upskill yourself with a course in Applied Data Science designed especially for college students and freshers. Learn the real-world application of Data Science taught by industry experts. Enroll yourself in this course and build a career in the most sought after job field",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Get exposure to Pandas, Matplotlib, NumPy, seaborn, scikitlearn, statsmodel, MySQL, Python, and other techniques",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    courseTools: [
      "ds/tools_covered1.webp",
      "ds/tools_covered2.webp",
      "ds/tools_covered3.webp",
      "ds/tools_covered4.webp",
      "ds/tools_covered5.webp",
      "ds/tools_covered6.webp",
      "ds/tools_covered7.webp",
      "ds/tools_covered8.webp",
      "ds/tools_covered9.webp",
      "ds/tools_covered10.webp",
      "ds/tools_covered11.webp",
      "ds/tools_covered12.webp",
    ],
    courseCertificate: {
      certificateTitle:
        "Bridging Theory and Practice: Applied Data Science Certificate Course",
      certificateSubTitle:
        "Earn an Applied Data Science Certificate from Digital Regenesys & Excel in Real-World Insights ",
      certificateSubSubTitle:
        "With our Applied Data Science programme, the knowledge and skills you gain working on projects, simulations, and case studies will set you ahead in the competition.",
      certificateListTitle:
        "With Applied Data Science Certificate, you will get:  ",

      certificateSkillList: [
        "International Recognition ",
        "Practical Data Science Skills",
        "Project-Based Experience",
        "Data Visualisation Proficiency",
      ],
      certificateListPara:
        " Our Applied Data Science Certificate will open doors to various roles for you, whether you are a fresher, a graduate or an experienced working professional.",
      certificateRolesList: [
        "Business Intelligence Analyst",
        "Marketing Analyst ",
        "Operations Analyst",
        "Financial Analyst and many more",
      ],
      CertificateImage: ["APDSCI_certificate.webp"],
    },
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Samidha_Photo.webp",
          title: "Samidha Kurle",
          text: "Samidha Kurle has over 10 years of teaching experience. She has worked as an assistant professor at Atharva College of Engineering, Mumbai.  Samidha Kurle excels in Procedural Programming, Web Designing, Database Design, etc. She is currently pursuing her Ph.D. in Computer Engineering.",
          designation: "Senior Lecturer",
        },
        {
          id: 2,
          image: "dr_nilay_profile.webp",
          title: "Dr. Nilay Karade ",
          text: "Dr. Nilay Karade has over 11 years of experience in Machine Learning. He holds a Ph.D. in Computer Science, Master's in Computer Application, and B.Sc. in Computer Science, Math, and Physics from RTM Nagpur University.",
          designation: "Senior Lecturer",
        },
        {
          id: 3,
          image: "dr_shilpa_joshi.webp",
          title: "Dr. Shilpa Joshi ",
          text: "A highly regarded scholar, facilitator, and the Head of Academics, Dr. Shilpa has done achieved great milestones in her teaching career of over two decades. She has trained and taught more than 2000 students who are now placed in several different global MNCs and are recognised as leaders in the corporate world.",
          designation: "Senior Lecturer",
        },
      ],
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "AWS Cloud Computing",
            lists: [
              "Identity and access management",
              "AWS CLI",
              "EC2 - Elastic computer cloud",
              "S3 Cloud object storage",
              "Databases and analytics",
              "ECS, lambda, batch",
              "Cloud integrations and monitoring",
              "ML in AWS - SageMaker overview",
              "Speech and vision API",
            ],
          },
          {
            id: 2,
            title: "Big Data Analytics With PySpark",
            lists: [
              "Spark RDD & dataframe",
              "Spark SQL",
              "Spark NLP",
              "Spark ML",
              "Spark streaming",
              "Spark with Kafka",
            ],
          },
          {
            id: 3,
            title: "ML Ops",
            lists: [
              "Auto ML with pyCaret",
              "Docker",
              "ML flow",
              "GIT & GITHUB",
              "ML model deployment",
              "ML model monitoring",
              "ML model retraining",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    videos: [
      {
        url: "https://www.youtube.com/embed/OvK1rGac6rQ?si=hHP2NAy_jWHvvCqg&rel=0",
      },
    ],
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title:
              "Do I Need To Have Prior Experience Or Understanding Of Data Science To Learn This Course?",
            text: "No, this course does not demand you to have technical understanding about Data Science. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
          },
          {
            id: 2,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 3,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced data science knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title:
              "What Is The Difference Between Basic, Applied And Advanced Data Science Course?",
            text: "The three stages of the Data Science Course such as Basic, Advance and Applied are bifurcated for the people who are willing to expand their knowledge to become a Data Science expert. After learning the Basics of Data Science, you can choose to elect any or both the modules of Advance and Applied.",
          },
          {
            id: 6,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 7,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 8,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 9,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Data Science certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Data Science Career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besj7mp/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "APSCI-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },

  //Artificial Intelligence Introductory Programme
  AIIP: {
    processOne: [
      {
        id: 1,

        youtubeUrl:
          "https://www.youtube.com/embed/LS_pz_4zcpE?autoplay=1&loop=1&playlist=LS_pz_4zcpE",
        title:
          "Certification in Artificial Intelligence Introductory Programme",
        text: `Embark on a transformative journey with our 'Artificial Intelligence Introductory Programme' and unlock the
        boundless potential of the future. Immerse yourself in this meticulously designed, cutting-edge course that delves
        deep into the fundamental concepts and techniques of AI. Whether you're an aspiring enthusiast or a professional
        seeking to enhance your skills, this programme builds a solid foundation in AI and its practical applications. Step into
        the realm of AI and embrace a future of endless possibilities. Join us today and embark on the path to AI mastery.
        `,
        lists: [
          "10 Weeks Course",
          "Live Sessions",
          "Capstone Projects",
          "International Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1: `Revolutionize your career with Digital Regenesys and our 'Artificial Intelligence Introductory Programme.' Unlock the
        limitless potential of AI, gaining a solid foundation in its fundamental concepts and techniques. Whether you're an
        aspiring enthusiast or a professional, embrace the future with our cutting-edge course.`,
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Exposure to fundamental AI concepts and techniques enhancing skills, this programme lays a solid foundation in AI and its practical applications.",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from foundation phase in this course through to the applied and advanced programmes.",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: " Approach",
      desc4:
        "Take an approach that exposes fundamental AI concepts and techniques, building a strong foundation in AI and its practical applications. Enhance your skills through hands-on learning and gain a solid understanding of the core principles of AI.",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    // courseTools: [

    // ],
    courseCertificate: {
      certificateTitle:
        "Embarking on the AI Journey: Introductory Certificate Course",
      certificateSubTitle:
        "Earn an AI Introductory Certificate from Digital Regenesys & Empower Your Potential with AI",
      certificateSubSubTitle:
        "With our AI Introductory programme, you will gain valuable insights and foundational knowledge in artificial intelligence to stay ahead.",
      certificateListTitle: "With AI Introductory Certificate, you will get: ",

      certificateSkillList: [
        "International Recognition",
        "Foundational AI Knowledge",
        "Insight into AI Applications",
        "Introduction to AI Tools and Technologies ",
      ],
      certificateListPara:
        " Our AI Introductory Certificate will open doors to various roles for you, whether you are a fresher, graduate or experienced professional.        ",
      certificateRolesList: [
        "AI Product Support ",
        "Junior AI Developer",
        "AI Sales Support",
        "AI Assistant and many more",
      ],
      CertificateImage: ["AIIP_certificate.webp"],
    },
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Samidha_Photo.webp",
          title: "Samidha Kurle",
          text: "Samidha Kurle has over 10 years of teaching experience. She has worked as an assistant professor at Atharva College of Engineering, Mumbai.  Samidha Kurle excels in Procedural Programming, Web Designing, Database Design, etc. She is currently pursuing her Ph.D. in Computer Engineering.",
          designation: "Senior Lecturer",
        },
        {
          id: 2,
          image: "dr_nilay_profile.webp",
          title: "Dr. Nilay Karade ",
          text: "Dr. Nilay Karade has over 11 years of experience in Machine Learning. He holds a Ph.D. in Computer Science, Master's in Computer Application, and B.Sc. in Computer Science, Math, and Physics from RTM Nagpur University.",
          designation: "Senior Lecturer",
        },
        {
          id: 3,
          image: "dr_shilpa_joshi.webp",
          title: "Dr. Shilpa Joshi ",
          text: "A highly regarded scholar, facilitator, and the Head of Academics, Dr. Shilpa has done achieved great milestones in her teaching career of over two decades. She has trained and taught more than 2000 students who are now placed in several different global MNCs and are recognised as leaders in the corporate world.",
          designation: "Senior Lecturer",
        },
      ],
    },
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },

    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "Module 01",
            lists: [
              "Python Programming for Artificial Intelligence.",
              "Demonstrate a clear understanding of Python syntax",
              "Comprehend various data structures in Python",
              "Apply control structures effectively in Python programming",
              "Utilise functions and modules in Python for enhanced code organisation and reusability",
              "Grasp the principles of object-oriented programming in Python and implement them in practice",
              "Perform basic database operations using Python, including connecting to databases, executing queries, and manipulating data.",
            ],
          },
          {
            id: 2,
            title: "Module 02",
            lists: [
              "Introduction to Data Analysis & Data Visualisation",
              "Develop a solid understanding of fundamental concepts and techniques in data analysis",
              "Gain practical experience using data analysis and visualisation tools",
              "Acquire knowledge and skills in web scraping and its applications for data collection",
              "Understand the principles and techniques of feature engineering and feature selection for effective data preprocessing and modeling.",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    // faqsSection: [
    //   {
    //     id: 1,
    //     faqs: [
    //       {
    //         id: 1,
    //         title:
    //           "Do I Need To Have Prior Experience Or Understanding Of Data Science To Learn This Course?",
    //         text: "No, this course does not demand you to have technical understanding about Data Science. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
    //       },
    //       {
    //         id: 2,
    //         title: "What Are The Modes Of Payment Available For Me?",
    //         text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
    //       },
    //       {
    //         id: 3,
    //         title: "Will Digital Regenesys Offer Me Job Assistance?",
    //         text: "Apart from preparing you with Cutting-edge and enhanced data science knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
    //       },
    //       {
    //         id: 4,
    //         title:
    //           "For How Long Will I Be Able To Access The Content After My Course Completion?",
    //         text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
    //       },
    //       {
    //         id: 5,
    //         title:
    //           "What Is The Difference Between Basic, Applied And Advanced Data Science Course?",
    //         text: "The three stages of the Data Science Course such as Basic, Advance and Applied are bifurcated for the people who are willing to expand their knowledge to become a Data Science expert. After learning the Basics of Data Science, you can choose to elect any or both the modules of Advance and Applied.",
    //       },
    //       {
    //         id: 6,
    //         title: "Is This A Certified Course?",
    //         text: "Yes, all the courses are certified by the Regenesys Business School.",
    //       },
    //       {
    //         id: 7,
    //         title:
    //           "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
    //         text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
    //       },
    //       {
    //         id: 8,
    //         title:
    //           "How Will I Get Access To The Assignments And Learning Content?",
    //         text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
    //       },
    //       {
    //         id: 9,
    //         title: "What If The Course Timings Don't Match My Work Timings?",
    //         text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
    //       },
    //     ],
    //     defaultCurrent: 1,
    //   },
    // ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Data Science certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Data Science Career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besj7mp/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "BDSCI-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },

  //Artificial Intelligence Intermediary Programme for Professionals
  AIIPF: {
    processOne: [
      {
        id: 1,
        // image: "yellow-bg-details-bg-1.webp",
        youtubeUrl:
          "https://www.youtube.com/embed/LS_pz_4zcpE?autoplay=1&loop=1&playlist=LS_pz_4zcpE",
        title:
          "Certification in Artificial Intelligence Intermediary Programme",
        text: `In the dynamic digital landscape, harnessing the power of Artificial Intelligence (AI) is crucial for staying ahead. Join
        our AI Intermediary Programme, tailored for professionals seeking an in-depth understanding of AI and its
        applications. Explore AI and ML fundamentals, artificial neural networks, and deploying AI models. Master the
        foundations of AI and ML, unlock the secrets of neural networks, and gain hands-on experience deploying AI in realworld scenarios. Revolutionize your career and be at the forefront of AI innovation.`,
        lists: [
          "12 Weeks Course",
          "Live Sessions",
          "Capstone Projects",
          "International Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1: `Revolutionize your career with Digital Regenesys and our 'AI Intermediary Programme.' Stay competitive in the
        evolving digital landscape by harnessing the power of AI. Gain a deep understanding of AI and its practical
        applications. Master AI fundamentals, neural networks, and deploying AI models. Transform your career with the
        practical aspects of real-world AI deployment`,
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Exposure to key topics of AI and ML fundamentals, artificial neural networks, and deploying AI models in production. Participants will explore the practical aspects of implementing AI models in real-world scenarios.",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from foundation phase in this course through to the applied and advanced programmes.",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Approach",
      desc4:
        "Adopt an approach that focuses on key topics of AI and ML fundamentals, artificial neural networks, and the deployment of AI models in real-world scenarios. Gain practical exposure to implementing AI models and develop the skills needed to apply AI techniques effectively.",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    // courseTools: [
    //   "ds/tools_covered1.webp",
    //   "ds/tools_covered2.webp",
    //   "ds/tools_covered3.webp",
    //   "ds/tools_covered4.webp",
    //   "ds/tools_covered5.webp",
    //   "ds/tools_covered6.webp",
    //   "ds/tools_covered7.webp",
    //   "ds/tools_covered8.webp",
    //   "ds/tools_covered9.webp",
    //   "ds/tools_covered10.webp",
    //   "ds/tools_covered11.webp",
    //   "ds/tools_covered12.webp",
    // ],
    courseCertificate: {
      certificateTitle:
        "Mastering AI Techniques: Intermediary Certificate Course",
      certificateSubTitle:
        "Earn an AI Intermediary Certificate from Digital Regenesys & Elevate Your AI Expertise",
      certificateSubSubTitle:
        "With our AI Intermediary programme, you can dive deeper into advanced AI concepts to stay ahead in the competition by working on projects, simulations, and cases.",
      certificateListTitle: "With AI Intermediary Certificate, you will get:",

      certificateSkillList: [
        "International Recognition",
        "Advanced AI Concepts",
        "Advanced AI Tools and Frameworks",
        "Ethical AI Considerations",
      ],
      certificateListPara:
        " Our AI Intermediary Certificate will open doors to various roles for you, whether you are a fresher, graduate or experienced professional.",
      certificateRolesList: [
        "Deep Learning Engineer",
        "Data Scientist (AI Focus)",
        "Research Scientist (AI)",
        "AI Consultant and many more",
      ],
      CertificateImage: ["AIIPF_certificate.webp"],
    },
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Samidha_Photo.webp",
          title: "Samidha Kurle",
          text: "Samidha Kurle has over 10 years of teaching experience. She has worked as an assistant professor at Atharva College of Engineering, Mumbai.  Samidha Kurle excels in Procedural Programming, Web Designing, Database Design, etc. She is currently pursuing her Ph.D. in Computer Engineering.",
          designation: "Senior Lecturer",
        },
        {
          id: 2,
          image: "dr_nilay_profile.webp",
          title: "Dr. Nilay Karade ",
          text: "Dr. Nilay Karade has over 11 years of experience in Machine Learning. He holds a Ph.D. in Computer Science, Master's in Computer Application, and B.Sc. in Computer Science, Math, and Physics from RTM Nagpur University.",
          designation: "Senior Lecturer",
        },
        {
          id: 3,
          image: "dr_shilpa_joshi.webp",
          title: "Dr. Shilpa Joshi ",
          text: "A highly regarded scholar, facilitator, and the Head of Academics, Dr. Shilpa has done achieved great milestones in her teaching career of over two decades. She has trained and taught more than 2000 students who are now placed in several different global MNCs and are recognised as leaders in the corporate world.",
          designation: "Senior Lecturer",
        },
      ],
    },
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },

    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "Module 01",
            lists: [
              "Artificial Intelligence and Machine Learning",
              "Evaluate machine learning models using appropriate metrics",
              "Split datasets into training and testing sets for model assessment",
              "Utilise cross-validation for model validation and optimisation",
              "Perform hyperparameter tuning using Grid Search CV",
              "Address bias, variance, overfitting, and underfitting in models",
              "Apply regularisation techniques for improved model performance",
            ],
          },
          {
            id: 2,
            title: "Module 02",
            lists: [
              "Artificial Neural Networks.",
              "Artificial Neural Network",
              "Convolutional Neural Network",
              "Recurrent Neural Network & LST",
            ],
          },
          {
            id: 3,
            title: "Module 03",
            lists: [
              "Deploying AI models in Production",
              "Understand HTML and CSS basics for web development.",

              "Deploy web applications using Streamlit or Flask.",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    // faqsSection: [
    //   {
    //     id: 1,
    //     faqs: [
    //       {
    //         id: 1,
    //         title:
    //           "Do I Need To Have Prior Experience Or Understanding Of Data Science To Learn This Course?",
    //         text: "No, this course does not demand you to have technical understanding about Data Science. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
    //       },
    //       {
    //         id: 2,
    //         title: "What Are The Modes Of Payment Available For Me?",
    //         text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
    //       },
    //       {
    //         id: 3,
    //         title: "Will Digital Regenesys Offer Me Job Assistance?",
    //         text: "Apart from preparing you with Cutting-edge and enhanced data science knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
    //       },
    //       {
    //         id: 4,
    //         title:
    //           "For How Long Will I Be Able To Access The Content After My Course Completion?",
    //         text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
    //       },
    //       {
    //         id: 5,
    //         title:
    //           "What Is The Difference Between Basic, Applied And Advanced Data Science Course?",
    //         text: "The three stages of the Data Science Course such as Basic, Advance and Applied are bifurcated for the people who are willing to expand their knowledge to become a Data Science expert. After learning the Basics of Data Science, you can choose to elect any or both the modules of Advance and Applied.",
    //       },
    //       {
    //         id: 6,
    //         title: "Is This A Certified Course?",
    //         text: "Yes, all the courses are certified by the Regenesys Business School.",
    //       },
    //       {
    //         id: 7,
    //         title:
    //           "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
    //         text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
    //       },
    //       {
    //         id: 8,
    //         title:
    //           "How Will I Get Access To The Assignments And Learning Content?",
    //         text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
    //       },
    //       {
    //         id: 9,
    //         title: "What If The Course Timings Don't Match My Work Timings?",
    //         text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
    //       },
    //     ],
    //     defaultCurrent: 1,
    //   },
    // ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Data Science certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Data Science Career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besj7mp/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "BDSCI-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },

  //Artificial Intelligence Advanced Applied Programme for Professionals
  AIAAPP: {
    processOne: [
      {
        id: 1,
        // image: "yellow-bg-details-bg-1.webp",
        youtubeUrl:
          "https://www.youtube.com/embed/LS_pz_4zcpE?autoplay=1&loop=1&playlist=LS_pz_4zcpE",
        title:
          "Certification in Artificial Intelligence Advanced Applied Programme",
        text: `Unleash your potential with our 'AI Advanced Applied Programme.' Skyrocket your career by mastering advanced AI
        skills and applications. Become an AI trailblazer in your field with this cutting-edge course. Delve into NLP, computer
        vision, cloud computing, big data analytics, and ML Ops. Gain theoretical knowledge and practical experience to
        innovate and solve complex problems. Elevate your career with the power of AI.
        `,
        lists: [
          "15 Weeks Course",
          "Live Sessions",
          "Capstone Projects",
          "International Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1: `Revolutionize your career with our 'AI Advanced Applied Programme.' Gain advanced AI skills and become an AI
        trailblazer. Delve into NLP, computer vision, cloud computing, big data analytics, and ML Ops. Acquire the skills to
        innovate and solve complex problems with AI.`,
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Exposure to advanced AI skills and applications. This cutting-edge program empowers professionals to learn various aspects of AI. Through a combination of theoretical knowledge and practical projects, participants gain exposure to innovative AI technologies, enabling them to innovate and solve complex problems.",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from foundation phase in this course through to the applied and advanced programmes.",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Approach",
      desc4:
        "Embrace an approach that emphasizes advanced AI skills and applications. Dive deep into various aspects of AI, combining theoretical knowledge with hands-on projects. Explore cutting-edge AI technologies, allowing you to innovate and tackle complex problems using advanced AI techniques.",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    // courseTools: [
    //   "ds/tools_covered1.webp",
    //   "ds/tools_covered2.webp",
    //   "ds/tools_covered3.webp",
    //   "ds/tools_covered4.webp",
    //   "ds/tools_covered5.webp",
    //   "ds/tools_covered6.webp",
    //   "ds/tools_covered7.webp",
    //   "ds/tools_covered8.webp",
    //   "ds/tools_covered9.webp",
    //   "ds/tools_covered10.webp",
    //   "ds/tools_covered11.webp",
    //   "ds/tools_covered12.webp",
    // ],

    courseCertificate: {
      certificateTitle:
        "Transforming Industries with Advanced AI: Applied Certificate Course",
      certificateSubTitle:
        "Earn an AI Advanced Applied Certificate from Digital Regenesys & Harness the Power of AI ",
      certificateSubSubTitle:
        "With our AI Advanced Applied programme, you will gain advanced knowledge and practical skills in applying artificial intelligence to real-world scenarios.",
      certificateListTitle:
        "With AI Advanced Applied Certificate, you will get:",

      certificateSkillList: [
        "International Recognition",
        "Advanced AI Skills",
        "Optimisation and Performance Tuning",
        "Advanced AI Tools and Frameworks",
      ],
      certificateListPara:
        " Our AI Advanced Applied Certificate will open doors to various roles for you, whether you are a fresher, graduate or experienced professional.        ",
      certificateRolesList: [
        "AI Specialist in Specific Industries",
        "AI Solution Architect",
        "AI Project Manager",
        "AI Entrepreneur and many more",
      ],
      CertificateImage: ["AIAAPP_certificate.webp"],
    },
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Samidha_Photo.webp",
          title: "Samidha Kurle",
          text: "Samidha Kurle has over 10 years of teaching experience. She has worked as an assistant professor at Atharva College of Engineering, Mumbai.  Samidha Kurle excels in Procedural Programming, Web Designing, Database Design, etc. She is currently pursuing her Ph.D. in Computer Engineering.",
          designation: "Senior Lecturer",
        },
        {
          id: 2,
          image: "dr_nilay_profile.webp",
          title: "Dr. Nilay Karade ",
          text: "Dr. Nilay Karade has over 11 years of experience in Machine Learning. He holds a Ph.D. in Computer Science, Master's in Computer Application, and B.Sc. in Computer Science, Math, and Physics from RTM Nagpur University.",
          designation: "Senior Lecturer",
        },
        {
          id: 3,
          image: "dr_shilpa_joshi.webp",
          title: "Dr. Shilpa Joshi ",
          text: "A highly regarded scholar, facilitator, and the Head of Academics, Dr. Shilpa has done achieved great milestones in her teaching career of over two decades. She has trained and taught more than 2000 students who are now placed in several different global MNCs and are recognised as leaders in the corporate world.",
          designation: "Senior Lecturer",
        },
      ],
    },
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },

    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "Module 01",
            lists: [
              "AI-Powered Applications for Natural Language Processing (NLP)",
              "Analyze, interpret, and generate human language text efficiently using AI ",
              "Develop powerful applications for Natural Language Processing",
            ],
          },
          {
            id: 2,
            title: "Module 02",
            lists: [
              "Enhancing Visual Content with Computer Vision Techniques",
              "Enhance visual content using computer vision",
              "Tackle challenges in the field of computer vision",
            ],
          },
          {
            id: 3,
            title: "Module 03",
            lists: [
              "Leveraging Cloud Computing Services for AI Applications",
              "Leverage cloud platforms for deploying, managing, and optimising AI applications",
              "Gain insights into best practices for deploying AI models",
              "Utilise cloud platforms to accelerate the management of AI-driven solutions",
            ],
          },
          {
            id: 4,
            title: "Module 04",
            lists: [
              "Unleashing Insights from Big Data through Analytics",
              "learn about the big data ecosystem, Spark RDD and Dataframe, Spark SQL, and ETL pipeline",
              "Explore challenges associated with massive datasets and acquire skills in data acquisition, cleaning, integration, and preprocessing",
            ],
          },
          {
            id: 5,
            title: "Module 05",
            lists: [
              "Streamlining AI Development with ML Ops.",
              "Enhance the efficiency and scalability of AI model development and deployment",
              "Gain a comprehensive understanding of the ML Ops principles, tools, and practices",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    // faqsSection: [
    //   {
    //     id: 1,
    //     faqs: [
    //       {
    //         id: 1,
    //         title:
    //           "Do I Need To Have Prior Experience Or Understanding Of Data Science To Learn This Course?",
    //         text: "No, this course does not demand you to have technical understanding about Data Science. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
    //       },
    //       {
    //         id: 2,
    //         title: "What Are The Modes Of Payment Available For Me?",
    //         text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
    //       },
    //       {
    //         id: 3,
    //         title: "Will Digital Regenesys Offer Me Job Assistance?",
    //         text: "Apart from preparing you with Cutting-edge and enhanced data science knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
    //       },
    //       {
    //         id: 4,
    //         title:
    //           "For How Long Will I Be Able To Access The Content After My Course Completion?",
    //         text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
    //       },
    //       {
    //         id: 5,
    //         title:
    //           "What Is The Difference Between Basic, Applied And Advanced Data Science Course?",
    //         text: "The three stages of the Data Science Course such as Basic, Advance and Applied are bifurcated for the people who are willing to expand their knowledge to become a Data Science expert. After learning the Basics of Data Science, you can choose to elect any or both the modules of Advance and Applied.",
    //       },
    //       {
    //         id: 6,
    //         title: "Is This A Certified Course?",
    //         text: "Yes, all the courses are certified by the Regenesys Business School.",
    //       },
    //       {
    //         id: 7,
    //         title:
    //           "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
    //         text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
    //       },
    //       {
    //         id: 8,
    //         title:
    //           "How Will I Get Access To The Assignments And Learning Content?",
    //         text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
    //       },
    //       {
    //         id: 9,
    //         title: "What If The Course Timings Don't Match My Work Timings?",
    //         text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
    //       },
    //     ],
    //     defaultCurrent: 1,
    //   },
    // ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Data Science certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Data Science Career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besj7mp/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "BDSCI-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },

  //"Basic Digital Marketing"
  BDM: {
    processOne: [
      {
        id: 1,
        image: "yellow-bg-details-bg-1.webp",
        title: "Certification Programme in Basic Digital Marketing",
        text: "Upskill yourself with a course in Basic Digital Marketing, designed especially for college students and freshers. Learn the real-world application of Digital Marketing taught by industry experts. Enroll yourself in this course and build a career in the one of the most sought-after fields.",
        lists: [
          "10 Weeks Course",
          "Live Sessions",
          "Career Counselling",
          "Guaranteed Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Upskill yourself with a course in Basic Digital Marketing, designed especially for college students and freshers. Learn the real-world application of Digital Marketing taught by industry experts. Enroll yourself in this course and build a career in the one of the most sought-after fields.",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Get exposure to Built With, Google Ads, Yoast, VidIQ, Google Analytics, Canva, Socialblade, HypeAuditor, Wpforms, impact, klear, and Mailchimp",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    courseTools: [
      "dm/digital_marketing_tools1.webp",
      "dm/digital_marketing_tools2.webp",
      "dm/digital_marketing_tools3.webp",
      "dm/digital_marketing_tools4.webp",
      "dm/digital_marketing_tools5.webp",
      "dm/digital_marketing_tools6.webp",
      "dm/digital_marketing_tools7.webp",
      "dm/digital_marketing_tools8.webp",
      "dm/digital_marketing_tools9.webp",
      "dm/digital_marketing_tools10.webp",
      "dm/digital_marketing_tools11.webp",
      "dm/digital_marketing_tools12.webp",
      "dm/digital_marketing_tools13.webp",
      "dm/digital_marketing_tools14.webp",
      "dm/digital_marketing_tools15.webp",
      "dm/digital_marketing_tools16.webp",
    ],
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "bhupendra_mishra.webp",
          title: "Bhupendra Mishra",
          text: "Bhupendra Mishra has key skills in SEO, Google Ads, Digital Marketing, Google Analytics, Facebook Marketing, etc. Bhupendra Mishra holds an MBA degree in International Business from the Devi Ahilya University of Indore and is pursuing his Ph.D. from ITM University, Raipur.",
          designation: "Senior Lecturer",
        },
        {
          id: 2,
          image: "faculty_deepika_sharma.webp",
          title: "Dr. Deepika Sharma",
          text: "Dr. Deepika Sharma is a Ph.D. holder in Business Management. She has also obtained an MBA in Finance & Marketing, and B.E. in Electronics & Telecommunication. She has worked as a software engineer at Patni Computer Systems Ltd.",
          designation: "Senior Lecturer",
        },
      ],
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "Introduction To Marketing And Digital Marketing:",
            lists: [
              "Introduction to Marketing - Basics of Marketing",
              "Branding and Consumer Behavior or Psychology",
              "Global marketing opportunities",
              "Types of marketing",
              // "Introduction to Digital Marketing ",
              "Basics of Digital Marketing World of Web (1.0, 2.0, 3.0.)",
              "Difference between Digitalization and Digitization",
              "Marketing Automation",
              "Digital Channels & Platforms",
            ],
          },
          {
            id: 2,
            title: "Search Engine Optimization (SEO)",
            lists: ["Technical SEO & Non-Technical SEO"],
          },
          {
            id: 3,
            title: "Content Creation & Marketing",
            lists: ["Introduction to Content Marketing"],
          },
          {
            id: 4,
            title: "Social Media Marketing",
            lists: ["Introduction to Social Media Marketing"],
          },
          {
            id: 5,
            title: "Bonus Topics",
            lists: [
              "Pogo Sticking",
              "WhatsApp Marketing",
              "Meme & Topical Marketing",
              "Marketing Psychology",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title:
              "Do I Need To Have Prior Digital Marketing Knowledge Or Experience To Learn This Course?",
            text: "No, this course does not demand you to have technical understanding about Digital Marketing. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
          },
          {
            id: 2,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 3,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced Coding knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title: "Introduction to Digital Marketing ( Week1 )",
            text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
          },
          {
            id: 6,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 7,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 8,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 9,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn your Digital Marketing certificate.",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Digital Marketing Career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besv40r/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "BDM-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  //"Advanced Digital Marketing"
  AVDM: {
    processOne: [
      {
        id: 1,
        image: "yellow-bg-details-bg-1.webp",
        title: "Certification Programme in Advance Digital Marketing",
        text: "Upskill yourself with a course in Advance Digital Marketing, designed especially for college students and freshers. Learn the real-world application of Digital Marketing taught by industry experts. Enroll yourself in this course and build a career in the one of the most sought-after fields.",
        lists: [
          "10 Weeks Course",
          "Live Sessions",
          "Career Counselling",
          "Guaranteed Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Upskill yourself with a course in Advance Digital Marketing, designed especially for college students and freshers. Learn the real-world application of Digital Marketing taught by industry experts. Enroll yourself in this course and build a career in the one of the most sought-after fields.",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Get exposure to Built With, Google Ads, Yoast, VidIQ, Google Analytics, Canva, Socialblade, HypeAuditor, Wpforms, impact, klear, and Mailchimp",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    courseTools: [
      "dm/digital_marketing_tools1.webp",
      "dm/digital_marketing_tools2.webp",
      "dm/digital_marketing_tools3.webp",
      "dm/digital_marketing_tools4.webp",
      "dm/digital_marketing_tools5.webp",
      "dm/digital_marketing_tools6.webp",
      "dm/digital_marketing_tools7.webp",
      "dm/digital_marketing_tools8.webp",
      "dm/digital_marketing_tools9.webp",
      "dm/digital_marketing_tools10.webp",
      "dm/digital_marketing_tools11.webp",
      "dm/digital_marketing_tools12.webp",
      "dm/digital_marketing_tools13.webp",
      "dm/digital_marketing_tools14.webp",
      "dm/digital_marketing_tools15.webp",
      "dm/digital_marketing_tools16.webp",
    ],
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "bhupendra_mishra.webp",
          title: "Bhupendra Mishra",
          text: "Bhupendra Mishra has key skills in SEO, Google Ads, Digital Marketing, Google Analytics, Facebook Marketing, etc. Bhupendra Mishra holds an MBA degree in International Business from the Devi Ahilya University of Indore and is pursuing his Ph.D. from ITM University, Raipur.",
          designation: "Senior Lecturer",
        },
        {
          id: 2,
          image: "faculty_deepika_sharma.webp",
          title: "Dr. Deepika Sharma",
          text: "Dr. Deepika Sharma is a Ph.D. holder in Business Management. She has also obtained an MBA in Finance & Marketing, and B.E. in Electronics & Telecommunication. She has worked as a software engineer at Patni Computer Systems Ltd.",
          designation: "Senior Lecturer",
        },
      ],
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title:
              "Programmatic Advertising & Paid Media Marketing, Importance Of Analytics",
            lists: [
              "Different types of Paid media marketing and Advertising formats",
              "Google Ads & various ad types and formats, GBP",
              "Setting up of Google Ad account",
              "Setting up of GSC, GA, Pixels, Goals setting etc.",
              "Analyzing google ad campaign",
            ],
          },
          {
            id: 2,
            title: "Importance Of IMC (Media Planning & Media Buying)",
            lists: [
              "Meaning, Importance of IMC",
              "Types of Media formats",
              "Media buying and planning",
              "Media plan from brief to execution",
              "Advance IMC management",
              "5 Ms of advertising",
            ],
          },
          {
            id: 3,
            title: "Online After Sales (Reputation) Management",
            lists: ["Introduction to Reputation management"],
          },
          {
            id: 4,
            title: "E-Commerce Marketing & Email Marketing",
            lists: ["E-Commerce and E-Mail Marketing"],
          },
          {
            id: 5,
            title: "Affiliate Marketing & Mobile Marketing",
            lists: ["Affiliate Marketing & Mobile Marketing"],
          },
          {
            id: 6,
            title: "Bonus Topics",
            lists: [
              "Funnel Marketing",
              "Marktech & Adtech",
              "Koo App and Inshort App",
              "Metaverse",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title:
              "Do I Need To Have Prior Digital Marketing Knowledge Or Experience To Learn This Course?",
            text: "No, this course does not demand you to have technical understanding about Digital Marketing. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
          },
          {
            id: 2,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 3,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced Coding knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 6,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 7,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 8,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn your Digital Marketing certificate.",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Digital Marketing Career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besv40r/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "ADM-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  //"Applied Digital Marketing"
  // APDM: {
  //   processOne: [
  //     {
  //       id: 1,
  //       image: "yellow-bg-details-bg-1.webp",
  //       title: "Certification Programme in Applied Digital Marketing",
  //       text: "Upskill yourself with a course in Applied Digital Marketing, designed especially for college students and freshers. Learn the real-world application of Digital Marketing taught by industry experts. Enroll yourself in this course and build a career in the one of the most sought-after fields.",
  //       lists: [
  //         "4 Weeks Course",
  //         "Live Sessions",
  //         "Career Counselling",
  //         "Guaranteed Certification",
  //       ],
  //     },
  //   ],
  //   productDescription: {
  //     title: "Revolutionise your career with future-ready skills",
  //     text1:
  //       "Upskill yourself with a course in Applied Digital Marketing, designed especially for college students and freshers. Learn the real-world application of Digital Marketing taught by industry experts. Enroll yourself in this course and build a career in the one of the most sought-after fields.",
  //   },
  //   joinReasons: {
  //     title: "Reasons To Join This Course",
  //     subTitle1: "Exposure",
  //     desc1:
  //       "Get exposure to Built With, Google Ads, Yoast, VidIQ, Google Analytics, Canva, Socialblade, HypeAuditor, Wpforms, impact, klear, and Mailchimp",

  //     subTitle2: "Best-in-class instructors",
  //     desc2:
  //       "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

  //     subTitle3: "Live sessions",
  //     desc3:
  //       "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

  //     subTitle4: "Tools usage",
  //     desc4: "Gain a broad spectrum of knowledge on how to use the tools",
  //     bg1: "/assets/images/background/reason-bg1-1.webp",
  //     bg2: "/assets/images/background/reason-bg2-1.webp",
  //     bg3: "/assets/images/background/reason-bg3-1.webp",
  //     bg4: "/assets/images/background/reason-bg4-1.webp",
  //   },
  //   courseTools: [
  //     "dm/digital_marketing_tools1.webp",
  //     "dm/digital_marketing_tools2.webp",
  //     "dm/digital_marketing_tools3.webp",
  //     "dm/digital_marketing_tools4.webp",
  //     "dm/digital_marketing_tools5.webp",
  //     "dm/digital_marketing_tools6.webp",
  //     "dm/digital_marketing_tools7.webp",
  //     "dm/digital_marketing_tools8.webp",
  //     "dm/digital_marketing_tools9.webp",
  //     "dm/digital_marketing_tools10.webp",
  //     "dm/digital_marketing_tools11.webp",
  //     "dm/digital_marketing_tools12.webp",
  //     "dm/digital_marketing_tools13.webp",
  //     "dm/digital_marketing_tools14.webp",
  //     "dm/digital_marketing_tools15.webp",
  //     "dm/digital_marketing_tools16.webp",
  //   ],
  //   featureSeven: {
  //     title: "Meet our staff",
  //     desc: "Revolutionise your career with future-ready skills",
  //     features: [
  //       {
  //         id: 1,
  //         image: "bhupendra_mishra.webp",
  //         title: "Bhupendra Mishra",
  //         text: "Bhupendra Mishra has key skills in SEO, Google Ads, Digital Marketing, Google Analytics, Facebook Marketing, etc. Bhupendra Mishra holds an MBA degree in International Business from the Devi Ahilya University of Indore and is pursuing his Ph.D. from ITM University, Raipur.",
  //         designation: "Senior Lecturer",
  //       },
  //       {
  //         id: 2,
  //         image: "faculty_deepika_sharma.webp",
  //         title: "Dr. Deepika Sharma",
  //         text: "Dr. Deepika Sharma is a Ph.D. holder in Business Management. She has also obtained an MBA in Finance & Marketing, and B.E. in Electronics & Telecommunication. She has worked as a software engineer at Patni Computer Systems Ltd.",
  //         designation: "Senior Lecturer",
  //       },
  //     ],
  //   },
  //   CourseCurriculum: [
  //     {
  //       id: 1,
  //       courseCurriculumTitle: "Course curriculum",
  //       faqs: [
  //         {
  //           id: 1,
  //           title: "UX Digital Approach",
  //           lists: ["Brand Experience & User"],
  //         },
  //         {
  //           id: 2,
  //           title: "Influencer Marketing",
  //           lists: ["Importance of Influencer Marketing"],
  //         },
  //         {
  //           id: 3,
  //           title: "Chatbots",
  //           lists: ["Introduction to Chatbots"],
  //         },
  //         {
  //           id: 4,
  //           title: "OTT Marketing",
  //           lists: ["Leveraging Video Advertising"],
  //         },
  //         {
  //           id: 5,
  //           title: "Podcast",
  //           lists: ["Importance of Podcast marketing"],
  //         },
  //         {
  //           id: 6,
  //           title: "Behavioral Digital Marketing",
  //           lists: ["Online Consumer Behavior"],
  //         },
  //       ],
  //       defaultCurrent: 1,
  //     },
  //   ],
  //   videoOne: {
  //     image: "/assets/images/background/full-video-bg.webp",
  //     videoId: "y2Eqx6ys1hQ",
  //     title: "Linoor is trusted by millions of customers",
  //     text1:
  //       "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
  //     text2:
  //       "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
  //   },
  //   faqsSection: [
  //     {
  //       id: 1,
  //       faqs: [
  //         {
  //           id: 1,
  //           title:
  //             "Do I Need To Have Prior Digital Marketing Knowledge Or Experience To Learn This Course?",
  //           text: "No, this course does not demand you to have technical understanding about Digital Marketing. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
  //         },
  //         {
  //           id: 2,
  //           title: "What Are The Modes Of Payment Available For Me?",
  //           text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
  //         },
  //         {
  //           id: 3,
  //           title: "Will Digital Regenesys Offer Me Job Assistance?",
  //           text: "Apart from preparing you with Cutting-edge and enhanced Coding knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
  //         },
  //         {
  //           id: 4,
  //           title:
  //             "For How Long Will I Be Able To Access The Content After My Course Completion?",
  //           text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
  //         },
  //         {
  //           id: 5,
  //           title: "Is This A Certified Course?",
  //           text: "Yes, all the courses are certified by the Regenesys Business School.",
  //         },
  //         {
  //           id: 6,
  //           title:
  //             "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
  //           text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
  //         },
  //         {
  //           id: 7,
  //           title:
  //             "How Will I Get Access To The Assignments And Learning Content?",
  //           text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
  //         },
  //         {
  //           id: 8,
  //           title: "What If The Course Timings Don't Match My Work Timings?",
  //           text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
  //         },
  //       ],
  //       defaultCurrent: 1,
  //     },
  //   ],
  //   courseBenefits: {
  //     title: "Benefits",
  //     desc: "",
  //     tabBtns: [
  //       {
  //         id: "tab-1",
  //         title: "Career Support",
  //       },
  //       {
  //         id: "tab-2",
  //         title: "Doubt Resolution",
  //       },
  //       {
  //         id: "tab-3",
  //         title: "Learning Support",
  //       },
  //       {
  //         id: "tab-4",
  //         title: "Networking",
  //       },
  //     ],
  //     tabsContents: [
  //       {
  //         id: "tab-1",
  //         image: "featured-image-14.jpg",

  //         lists: [
  //           "100% Career Counselling",
  //           "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
  //           "Elevate your LinkedIn game with a comprehensive profile building session",
  //         ],
  //       },
  //       {
  //         id: "tab-2",
  //         image: "featured-image-14.jpg",

  //         lists: [
  //           "Solve all your queries with one-on-one interaction during the lectures",
  //           "Ask questions, get answers and complete support from the faculty",
  //           "Enhanced learning experience offered by our highly experienced and achieved faculties",
  //         ],
  //       },
  //       {
  //         id: "tab-3",
  //         image: "featured-image-14.jpg",

  //         lists: [
  //           "Get unlimited learning access for 1 year to the learning management system",
  //           "Receive proper guidance as per your special requirements from our faculties",
  //           "Access the recorded lectures in case you miss a session",
  //         ],
  //       },

  //       {
  //         id: "tab-4",
  //         image: "featured-image-14.jpg",

  //         lists: [
  //           "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
  //           "Connect with the Industry experts who will help you guide through your career after course completion",
  //           "Talk, share, connect, learn and grow along with other students in your batch",
  //         ],
  //       },
  //     ],
  //   },
  //   productDetails: {
  //     flagsa: "/assets/images/icons/flag_sa.webp",
  //     flagnig: "/assets/images/icons/flag_nigeria.webp",
  //     flagus: "/assets/images/icons/flag_us.webp",
  //     flagind: "/assets/images/icons/flag_india.webp",
  //     flagken: "/assets/images/icons/flag_kenya.webp",
  //     title: "Fees structure & Certification",
  //     subTitle: "Get Certified",
  //     price: 64499,
  //     certifiedTitle1: "Earn your Digital Marketing certificate.",
  //     certifiedText1:
  //       "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Digital Marketing Career.",
  //     certifiedTitle2: "Share Your Achievement",

  //     certifiedText2:
  //       "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
  //     certifiedTitle3: "Benefits",
  //     certifiedText3:
  //       "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
  //     admissionText:
  //       "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
  //     termsConditions: "*Terms & Conditions",
  //     CsFundamentals: "Total Admission Fee",
  //     CsDefenceToolbox: "Cybersecurity Defence Toolbox",
  //   },
  //   zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besv40r/",
  //   stickyText:
  //     "APDM-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  // },
  //"Basic Digital Marketing Course"
  BDMC: {
    processOne: [
      {
        id: 1,
        // image: "yellow-bg-details-bg-1.webp",
        youtubeUrl:
          "https://www.youtube.com/embed/mouJDO4peOk?autoplay=1&loop=1&playlist=mouJDO4peOk",

        title: "Certification Programme in Digital Marketing Fundamentals",
        text: "Upskill yourself with a course in Digital Marketing Fundamentals, designed especially for college students and freshers. Learn the real-world application of Digital Marketing taught by industry experts. Enroll yourself in this course and build a career in one of the most sought-after fields.",
        lists: [
          "10 Weeks Course",
          "Live Sessions",
          "Career Counselling",
          "Guaranteed Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Digital Regenesys' Digital Marketing Fundamentals course is a comprehensive online training program designed to equip participants with the foundational knowledge and practical skills necessary to excel in the dynamic field of digital marketing. The course covers critical topics such as SEO, social media marketing, email marketing, content marketing, and digital analytics. It is suitable for beginners and professionals alike. Participants can expect to gain a solid understanding of the digital marketing landscape and develop practical skills through hands-on assignments and case studies.",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Get exposure to Built With, Google Ads, Yoast, VidIQ, Google Analytics, Canva, Socialblade, HypeAuditor, Wpforms, impact, klear, and Mailchimp",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    courseTools: [
      "dm/digital_marketing_tools1.webp",
      "dm/digital_marketing_tools2.webp",
      "dm/digital_marketing_tools3.webp",
      "dm/digital_marketing_tools4.webp",
      "dm/digital_marketing_tools5.webp",
      "dm/digital_marketing_tools6.webp",
      "dm/digital_marketing_tools7.webp",
      "dm/digital_marketing_tools8.webp",
      "dm/digital_marketing_tools9.webp",
      "dm/digital_marketing_tools10.webp",
      "dm/digital_marketing_tools11.webp",
      "dm/digital_marketing_tools12.webp",
      "dm/digital_marketing_tools13.webp",
      "dm/digital_marketing_tools14.webp",
      "dm/digital_marketing_tools15.webp",
      "dm/digital_marketing_tools16.webp",
    ],

    courseCertificate: {
      certificateTitle:
        "Digital Marketing Essentials: Foundational Certificate Course",
      certificateSubTitle:
        "Earn a Digital Marketing Fundamentals Certificate from Digital Regenesys & Chart Your Digital Success ",
      certificateSubSubTitle:
        "With our Digital Marketing Fundamentals programme, gain the skills and knowledge to stay ahead in the competition by working on projects, simulations, and cases.",
      certificateListTitle:
        "With Digital Marketing Fundamentals Certificate, you will get:",

      certificateSkillList: [
        "International Recognition",
        "Industry-Relevant Insights",
        "Targeted Audience Reach",
        "Brand Building",
      ],
      certificateListPara:
        " Our Digital Marketing Fundamentals Certificate will open doors to various roles for you, whether you are a fresher, graduate or experienced professional.",
      certificateRolesList: [
        "Social Media Manager",
        "Marketing Automation Specialist",
        "Search Engine Optimisation (SEO) Specialist",
        "Content Marketer and many more",
      ],
      CertificateImage: ["BDMC_certificate.webp"],
    },
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "bhupendra_mishra.webp",
          title: "Bhupendra Mishra",
          text: "Bhupendra Mishra has key skills in SEO, Google Ads, Digital Marketing, Google Analytics, Facebook Marketing, etc. Bhupendra Mishra holds an MBA degree in International Business from the Devi Ahilya University of Indore and is pursuing his Ph.D. from ITM University, Raipur.",
          designation: "Senior Lecturer",
        },
        {
          id: 2,
          image: "faculty_deepika_sharma.webp",
          title: "Dr. Deepika Sharma",
          text: "Dr. Deepika Sharma is a Ph.D. holder in Business Management. She has also obtained an MBA in Finance & Marketing, and B.E. in Electronics & Telecommunication. She has worked as a software engineer at Patni Computer Systems Ltd.",
          designation: "Senior Lecturer",
        },
      ],
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "Overview of Marketing and Behavioral Digital Marketing",
            lists: [
              "Fundamentals of Marketing",
              "Consumer Behavior",
              "Marketing Strategies",
              "Digital Marketing",
            ],
          },
          {
            id: 2,
            title: "Search Engine Optimization",
            lists: [
              "Introduction to Search Engine Optimization",
              "Standard Practices for SEO",
              "Website Design and Structure",
              "Google Algorithm",
            ],
          },
          {
            id: 3,
            title: "Content Creation and Marketing with UX Digital Approach",
            lists: [
              "Meaning, Importance, and Types of Content",
              "Super Quality Content and FAQ Schema",
              "RACE Model and Content Planning",
              "Importance of Copywriting, Content Imagery, and Visualization",
              "Infographics, PESO Model, and Hero Story",
              "Importance of Branding from UX Perspective",
            ],
          },
          {
            id: 4,
            title: "Marketing through Social Media and Influencers",
            lists: ["Social Media Marketing", "Influencer Marketing"],
          },
          {
            id: 5,
            title: "Bonus Topics",
            lists: [
              "Pogo Sticking",
              "WhatsApp Marketing",
              "Meme & Topical Marketing",
              "Marketing Psychology",
            ],
          },
          {
            id: 6,
            title: "Major Certifications",
            lists: [
              "Google Analytics – Basic",
              "Content marketing",
              "Google Ads",
              "Shopping Ads",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title:
              "Do I Need To Have Prior Digital Marketing Knowledge Or Experience To Learn This Course?",
            text: "No, this course does not demand you to have technical understanding about Digital Marketing. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
          },
          {
            id: 2,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 3,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced Coding knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title: "Introduction to Digital Marketing ( Week1 )",
            text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
          },
          {
            id: 6,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 7,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 8,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 9,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn your Digital Marketing certificate.",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Digital Marketing Career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besv40r/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "BDM-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  AVDMC: {
    processOne: [
      {
        id: 1,
        // image: "yellow-bg-details-bg-1.webp",
        youtubeUrl:
          "https://www.youtube.com/embed/mouJDO4peOk?autoplay=1&loop=1&playlist=mouJDO4peOk",

        title:
          "Certification Programme in Advance Digital Marketing Strategies",
        text: "Upskill yourself with a course in Advance Digital Marketing Strategies, designed especially for college students and freshers. Learn the real-world application of Digital Marketing taught by industry experts. Enroll yourself in this course and build a career in one of the most sought-after fields.",
        lists: [
          "10 Weeks Course",
          "Live Sessions",
          "Career Counselling",
          "Guaranteed Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Digital Regenesys' Advance Digital Marketing Strategies course is a comprehensive online training program that goes beyond the basics of digital marketing and covers advanced strategies and techniques for building and executing successful digital marketing campaigns. Participants will learn cutting-edge topics such as marketing automation, advanced analytics, influencer marketing, and digital branding. The course is designed for marketing professionals looking to enhance their skills and knowledge in the digital marketing space and stay ahead of the curve.",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Get exposure to Built With, Google Ads, Yoast, VidIQ, Google Analytics, Canva, Socialblade, HypeAuditor, Wpforms, impact, klear, and Mailchimp",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    courseTools: [
      "dm/digital_marketing_tools1.webp",
      "dm/digital_marketing_tools2.webp",
      "dm/digital_marketing_tools3.webp",
      "dm/digital_marketing_tools4.webp",
      "dm/digital_marketing_tools5.webp",
      "dm/digital_marketing_tools6.webp",
      "dm/digital_marketing_tools7.webp",
      "dm/digital_marketing_tools8.webp",
      "dm/digital_marketing_tools9.webp",
      "dm/digital_marketing_tools10.webp",
      "dm/digital_marketing_tools11.webp",
      "dm/digital_marketing_tools12.webp",
      "dm/digital_marketing_tools13.webp",
      "dm/digital_marketing_tools14.webp",
      "dm/digital_marketing_tools15.webp",
      "dm/digital_marketing_tools16.webp",
    ],
    courseCertificate: {
      certificateTitle:
        "Unleashing Digital Marketing Power: Advance Strategies Certificate Course",
      certificateSubTitle:
        "Earn an Advance Digital Marketing Certificate from Digital Regenesys & Revolutionise your Digital Marketing Skills       ",
      certificateSubSubTitle:
        "With our Advance Digital Marketing programme, you will gain an in-depth understanding and learn advanced tactics to stay ahead in the competition by working on projects, simulations, and cases.        ",
      certificateListTitle:
        "With Advance Digital Marketing Certificate, you will get:",

      certificateSkillList: [
        "International Recognition",
        "Cutting-edge Strategies",
        "Strategic Decision Making",
        "Networking Opportunities",
      ],
      certificateListPara:
        " Our Advance Digital Marketing Certificate will open doors to various roles for you, whether you are a fresher, graduate or experienced professional.        ",
      certificateRolesList: [
        "SEO Specialist",
        "Digital Analytics Manager ",
        "Content Marketing Manager",
        "PPC Specialist and many more",
      ],
      CertificateImage: ["AVDMC_certificate.webp"],
    },
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "bhupendra_mishra.webp",
          title: "Bhupendra Mishra",
          text: "Bhupendra Mishra has key skills in SEO, Google Ads, Digital Marketing, Google Analytics, Facebook Marketing, etc. Bhupendra Mishra holds an MBA degree in International Business from the Devi Ahilya University of Indore and is pursuing his Ph.D. from ITM University, Raipur.",
          designation: "Senior Lecturer",
        },
        {
          id: 2,
          image: "faculty_deepika_sharma.webp",
          title: "Dr. Deepika Sharma",
          text: "Dr. Deepika Sharma is a Ph.D. holder in Business Management. She has also obtained an MBA in Finance & Marketing, and B.E. in Electronics & Telecommunication. She has worked as a software engineer at Patni Computer Systems Ltd.",
          designation: "Senior Lecturer",
        },
      ],
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title:
              "The significance of analytics in Programmatic Advertising and Paid Media Marketing",
            lists: [
              "Different types of Paid Media Marketing and Advertising Formats",
              "Google Ads and Various Ad Types and Formats",
              "Setting up Google Ad Account:",
              "Setting up GSC, GA, Pixels, Goals Setting",
              "Analyzing Google Ad Campaign",
            ],
          },
          {
            id: 2,
            title:
              "The significance of Integrated Marketing Communications (IMC) in Media Planning, Media Buying, and Over-The-Top (OTT) Marketing",
            lists: [
              "Introduction to IMC",
              "Types of Media Formats",
              "Media Buying and Planning",
              "Advanced IMC Management",
              "5 M's of Advertising",
              "Email Marketing",
              "Over-the-Top (OTT) Advertising and Marketing",
            ],
          },
          {
            id: 3,
            title:
              "Managing Online Reputation Management for Post-Sales Services",
            lists: ["Online Reputation Management"],
          },
          {
            id: 4,
            title:
              "Digital Marketing Strategies for E-commerce, Email Marketing, and Chatbots",
            lists: ["E-Commerce", "Email Marketing", "Chatbots"],
          },
          {
            id: 5,
            title:
              "Influencer and Affiliate Marketing & Mobile Marketing & Podcast",
            lists: [
              "Influencer and Affiliate Marketing",
              "Mobile Marketing",
              "Podcast Marketing",
            ],
          },
          {
            id: 6,
            title: "Bonus Topics",
            lists: [
              "Funnel Marketing",
              "Martech & Adtech",
              "Inshort app",
              "Metaverse",
            ],
          },
          {
            id: 7,
            title: "Major Certifications",
            lists: [
              "Google Analytics - Advance",
              "Email marketing",
              "E-Commerce marketing",
              "Affiliate Marketing",
              "Mobile Marketing",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title:
              "Do I Need To Have Prior Digital Marketing Knowledge Or Experience To Learn This Course?",
            text: "No, this course does not demand you to have technical understanding about Digital Marketing. The minimum requirement to learn this course is to have a 10th/Matric education passing certificate.",
          },
          {
            id: 2,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 3,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced Coding knowledge, we will get you Job-ready for positions under entry and executive levels such as web developer, database administrator, computer analyst, computer programmer, business intelligence analyst and more such with a complete LinkedIn profile building session.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 6,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 7,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 8,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn your Digital Marketing certificate.",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Digital Marketing Career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besv40r/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "ADM-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },

  CSFC: {
    processOne: [
      {
        id: 1,
        image: "yellow-bg-details-bg-1.webp",
        title: "Certification Programme in Cybersecurity Fundamentals",
        text: "In today's digital age, cybersecurity is more important than ever. Equip and upskill yourself with the knowledge to improve business outcomes and unprecedented global demand and career opportunities with Cyber Security Fundamentals course.",
        lists: [
          "08 Weeks Course",
          "Live Sessions",
          "Career Counselling",
          "Guaranteed Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Digital Regenesys' Cybersecurity Fundamentals course is an online course that provides a comprehensive understanding of cybersecurity principles, policies, and practices. The course is designed to equip participants with the skills and knowledge needed to identify, prevent, and respond to cyber threats. Key topics covered include threat intelligence, risk management, network security, and cryptography. Participants can expect to develop practical skills through hands-on exercises and real-world scenarios. The course is ideal for anyone looking to start a career in cybersecurity or enhance their existing skills.",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Get exposure to a range of industry tools, preparing you with practical skills and knowledge to defend against cyber threats.",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },

    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Dr-Saquib-Ahmad-Khan2.webp",
          title: "Dr. Saquib Ahmad Khan",
          text: "Dr. Saquib Ahmad Khan is a highly regarded and accomplished professional in the cybersecurity field. With a Ph.D. in Computer Science and several cybersecurity certifications under his belt, Dr. Khan is a renowned expert in the field cyber security. He has authored numerous research papers and articles on cybersecurity and frequently speaks at industry conferences and events, sharing his expertise with others. His contributions to the field have earned him several accolades, including widespread recognition for his knowledge and expertise. Dr. Khan is also well-versed in marketing, management, information technology, and applications, with multiple degrees. He is an exceptional faculty member, having published over 26 research papers on various subjects, and his contributions to the field are widely praised. Dr. Khan's exceptional verbal and written communication skills, coupled with his remarkable presentation abilities, have established him as a highly respected and sought-after expert in his field.",
          designation: "PhD Computer Science",
        },
      ],
    },
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "Week 1",
            lists: [
              "Cyber security fundamentals",
              "Security policies and procedures",
              "Cyber security mitigation methods",
              "CIA triad",
            ],
          },
          {
            id: 2,
            title: "Week 2",
            lists: [
              "Enterprise Architecture",
              "Organisational security policy and components",
              "Internet & networking basics",
              "Introduction to secured architecture",
              "Wireless networks",
              "Network security controls",
              "Cloud Virtualisation",
              "BYOD and IOT security testing",
            ],
          },
          {
            id: 3,
            title: "Week 3",
            lists: [
              "Information system governance and risk assessment",
              "Introduction to information security",
              "Governance risk",
              "Management information security programmes",
              "Network security and spoofing",
            ],
          },
          {
            id: 4,
            title: "Week 4",
            lists: [
              "Developing an incident management and response system",
              "Digital forensics business",
              "Continuity and disaster recovery",
              "Wi-Fi network security",
              "Web security",
              "OS fundamentals and security",
            ],
          },
          {
            id: 5,
            title: "Week 5",
            lists: [
              "Cryptography and Encryption",
              "Cryptanalysis",
              "Malware Analysis, Memory Forensics",
              "Cyber Forensic",
              "Application Security",
            ],
          },
          {
            id: 6,
            title: "Week 6",
            lists: [
              "Introduction to application security",
              "Web-based applications and associated vulnerabilities",
              "Cookies and tracking",
              "Data and database security",
              "Phishing and other attacks on identity",
              "Regulation, compliance, and risk management",
            ],
          },
          {
            id: 7,
            title: "Week 7",
            lists: [
              "Introduction to Ethical Hacking",
              "Overview of information security, threats, attack vectors, and ethical hacking concepts",
              "Information security controls",
              "Penetration testing concepts and information security laws and standards",
              "Footprinting and Reconnaissance",
            ],
          },
          {
            id: 8,
            title: "Week 8",
            lists: [
              "Session by industry experts",
              "Session on work readiness skills",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title: "How This Course Will Help Me In My Career?",
            text: "This course is ideal for the ones who are willing to learn how to manage projects in private, public and even non-profit sectors. The ourse covers the entire project management cycle, including feasibility, planning, implementation, monitoring and evaluation. This course is relevant to the financial services, IT, engineering, manufacturing, government, health, education, construction, agriculture, transport, media and entertainment, retail, energy, safety and security.",
          },
          {
            id: 2,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced technology of Project Management, we will get you job-ready for positions under entry-level and executive positions of a project manager, senior project manager, program manager, business change manager, organizational change manager, delivery manager, PMO manager and much more with a complete LinkedIn profile building session.",
          },
          {
            id: 3,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 6,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 7,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 8,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Cybersecurity certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Cybersecurity career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/bxz53nd/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "CS-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  CDTC: {
    processOne: [
      {
        id: 1,
        image: "yellow-bg-details-bg-1.webp",
        title: "Certification Programme in Cybersecurity Defence Toolbox",
        text: "Upskill yourself with a Cybersecurity Defence Toolbox course that offers hands-on experience with industry tools and techniques. This course is designed for individuals who want to build a solid foundation and master the tools and techniques for robust cybersecurity defence.",
        lists: [
          "05 Weeks Course",
          "Live Sessions",
          "Career Counselling",
          "Guaranteed Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Digital Regenesys' Defence Toolbox course is an online training program that provides participants with practical skills in using various tools for cybersecurity defence. The course covers a range of tools, including John The Ripper, KeePass, VeraCrypt, and techniques for email forensics. Participants will learn how to use these tools to identify and prevent cyber attacks, and respond to security incidents. The course is ideal for cybersecurity professionals looking to enhance their skills and knowledge in cyber defence.",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Get exposure to a range of industry tools, preparing you with practical skills and knowledge to defend against cyber threats.",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    // courseTools: [
    //   "cs/cybersecurity-tools-1.png",
    //   "cs/cybersecurity-tools-2.png",
    //   "cs/cybersecurity-tools-3.png",
    //   "cs/cybersecurity-tools-4.png",
    //   "cs/cybersecurity-tools-5.png",
    //   "cs/cybersecurity-tools-6.png",
    //   "cs/cybersecurity-tools-7.png",
    //   "cs/cybersecurity-tools-8.png",
    //   "cs/cybersecurity-tools-9.png",
    //   "cs/cybersecurity-tools-10.png",
    //   "cs/cybersecurity-tools-11.png",
    //   "cs/cybersecurity-tools-12.png",
    //   "cs/cybersecurity-tools-13.png",
    //   "cs/cybersecurity-tools-14.png",
    //   "cs/cybersecurity-tools-15.png",
    // ],
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Dr-Saquib-Ahmad-Khan2.webp",
          title: "Dr. Saquib Ahmad Khan",
          text: "Dr. Saquib Ahmad Khan is a highly regarded and accomplished professional in the cybersecurity field. With a Ph.D. in Computer Science and several cybersecurity certifications under his belt, Dr. Khan is a renowned expert in the field cyber security. He has authored numerous research papers and articles on cybersecurity and frequently speaks at industry conferences and events, sharing his expertise with others. His contributions to the field have earned him several accolades, including widespread recognition for his knowledge and expertise. Dr. Khan is also well-versed in marketing, management, information technology, and applications, with multiple degrees. He is an exceptional faculty member, having published over 26 research papers on various subjects, and his contributions to the field are widely praised. Dr. Khan's exceptional verbal and written communication skills, coupled with his remarkable presentation abilities, have established him as a highly respected and sought-after expert in his field.",
          designation: "PhD Computer Science",
        },
      ],
    },
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            firstPara:
              "Email forensics involves the process of collecting, analysing, and interpreting electronic mail messages and metadata as evidence in legal or investigative matters.",
            secondPara: "",
            boldText: "The key steps in email forensics include:",
            title: "Email Forensics ",
            lists: [
              "The key steps in email forensics include identification, collection, analysis, interpretation, and reporting",
              "It is an essential tool for investigating criminal or fraudulent activities, data breaches, harassment, or other workplace violations involving email messages.",
            ],
            lastPara:
              "By following a systematic and rigorous process, email forensic experts can uncover evidence that can be used in court or to improve the security posture of an organisation.",
          },
          {
            id: 2,
            firstPara:
              "John the Ripper is a popular open-source password cracking tool that is commonly used by security professionals and hackers alike. It was originally developed for Unix-based systems but has since been ported to a variety of platforms, including Windows and MacOS. The tool uses a various attack methods to crack passwords, including dictionary attacks, brute-force attacks, and hybrid attacks.",
            secondPara: "",
            boldText: "",
            title: "John The Ripper ",
            lists: [
              "John the Ripper can leverage various types of password-cracking techniques, such as rainbow tables, which can greatly increase its speed and efficiency",
              "One of the key features of John the Ripper is its ability to detect weak passwords and provide recommendations for stronger ones",
              "It can also be used to audit password policies and identify vulnerabilities in systems and applications",
            ],
            lastPara: "",
          },
          {
            id: 3,
            firstPara:
              "KeePass is a popular open-source password manager that allows users to store and manage their passwords in a secure and organised manner. It is available for Windows, MacOS, Linux, and mobile platforms. The tool uses strong encryption algorithms to protect users' passwords, ensuring that they are secure even in the event of a data breach. KeePass also offers several additional security features, such as two-factor authentication, a master password, ability to lock the database after a set period of inactivity. ",
            secondPara:
              "KeePass allows users to store various types of information, including usernames, passwords, and website URLs. In addition, users can create custom fields to store additional information, such as security questions and answers.",
            boldText: "",
            title: "KeePass ",
            lists: [
              "One of the key advantages of KeePass is its flexibility and customisation options. ",
              "Users can create and manage multiple password databases, each with its own unique settings and password requirements. ",
              "The tool also offers a range of plugins and integrations that allow users to customise their experience even further",
            ],
            lastPara:
              "Overall, KeePass is a powerful and secure password manager that provides users with an easy way to manage their passwords and keep them safe from cyber threats.",
          },
          {
            id: 4,
            firstPara:
              "VeraCrypt is a popular open-source disk encryption tool that allows users to encrypt and protect their data stored on a computer or external drive. It is available for Windows, MacOS, and Linux. The tool uses strong encryption algorithms such as AES, Serpent, and Twofish to ensure that users' data is secure from unauthorised access, theft, and hacking attempts. ",
            secondPara: "",
            boldText:
              "VeraCrypt also offers several advanced security features, such as",
            title: "VeraCrypt",
            lists: [
              "Hidden volumes, ",
              "Deniable encryption, and",
              "Keyfile support, which provides users with added protection against brute-force attacks and other types of threats.  ",
            ],
            lastPara:
              "VeraCrypt can be used to encrypt an entire hard drive, a partition, or a removable storage device such as a USB drive. Overall, VeraCrypt is a powerful and reliable encryption tool that provides users with robust protection for their data",
          },
          {
            id: 5,
            firstPara:
              "Burp Suite is a popular web application security testing tool used by security professionals, ethical hackers, and penetration testers. It is designed to identify vulnerabilities and security issues in web applications, including Cross-Site Scripting (XSS), SQL injection, and session hijacking. Burp Suite offers a range of features and tools to help users identify and exploit vulnerabilities in web applications. ",
            secondPara: "",
            boldText: "",
            title: "Burpsuite",
            lists: [
              "Its proxy server intercepts all web traffic, allowing users to inspect and modify HTTP requests and responses.",
              "Its scanner identifies common web application vulnerabilities and provides detailed reports and recommendations for remediation.",
              "In addition to its scanning and proxy features, Burp Suite also offers a range of tools for advanced penetration testing and vulnerability research, including a repeater, intruder, and sequencer.",
              "It offers a wide range of plugins and extensions, allowing users to tailor the tool to their specific needs and preferences.",
              "It also provides integration with other tools and platforms, including popular vulnerability scanners and security frameworks. ",
            ],
            lastPara:
              "Overall, Burp Suite is a powerful and comprehensive web application security testing tool that provides users with a range of features and tools to identify and remediate vulnerabilities in web applications.",
          },
          {
            id: 6,
            firstPara:
              "Nikto is an open-source web server scanner that helps security professionals identify and remediate vulnerabilities in web servers and applications. It is designed to test web servers for common vulnerabilities, such as outdated software versions, misconfigured server settings, and known vulnerabilities. In addition, Nikto offers a range of features and tools to help users identify and exploit vulnerabilities in web servers ",
            secondPara: "",
            boldText: "",
            title: "Nikto",
            lists: [
              "It can scan multiple web servers simultaneously, allowing users to identify vulnerabilities across their entire infrastructure.",
              "It also provides detailed reports on the vulnerabilities it finds, including recommendations for remediation. ",
              "It offers a simple and intuitive interface allowing users to configure and run scans quickly and easily. ",
              "It also provides detailed documentation and tutorials to help users get started and make the most of its features. ",
              "In addition to its scanning features, Nikto offers a range of customisation options and plugins, allowing users to tailor the tool to their specific needs and preferences. ",
              "It also integrates with other security tools and platforms, making it a valuable addition to any security toolkit.",
            ],
            lastPara:
              "Overall, Nikto is a powerful and comprehensive web server scanner that provides users with a range of features and tools to identify and remediate vulnerabilities in web servers and applications.",
          },
          {
            id: 7,
            firstPara:
              "OWASP (Open Web Application Security Project) is a non-profit organisation dedicated to improving the security of software and web applications. It is a community-driven organisation providing tools, resources, and guidelines to help developers and security professionals build secure applications and protect against common web application vulnerabilities. OWASP offers a range of resources and tools to help organisations improve their application security posture. ",
            secondPara: "",
            boldText: "",
            title: "OWASP",
            lists: [
              "Its flagship project, the OWASP Top 10, identifies the top 10 most critical web application security risks, including injection attacks, cross-site scripting, broken authentication and session management. ",
              "The organisation also offers a range of guides, tools, and best practices to help developers and security professionals mitigate these risks and protect their applications. ",
              "In addition to its educational and awareness-raising efforts, OWASP also supports a number of software security projects, including web application security scanners, vulnerability scanners, and security testing frameworks ",
              "These projects are open source and community-driven, providing users with free and reliable security tools that can help them improve their security posture. ",
            ],
            lastPara:
              "Overall, OWASP is a valuable resource for developers and security professionals looking to improve the security of their software and web applications.",
          },
          {
            id: 8,
            firstPara:
              "Wireshark is a popular open-source network protocol analyser that allows users to capture and analyse network traffic in real-time. It is used by security professionals, network administrators, and developers to troubleshoot network issues, identify security threats, and optimise network performance. ",
            secondPara: "",
            boldText: "",
            title: "Wireshark",
            lists: [
              "Wireshark offers a range of features and tools to help users analyse network traffic",
              "Ethernet, Wi-Fi, and Bluetooth are just a few of the network interfaces whose traffic its packet capture engine may record. ",
              "It can decode and analyse a wide range of network protocols, including TCP/IP, HTTP, DNS, and SSL/TLS. It also offers a powerful filtering engine, allowing users to focus on specific packets or protocols of interest. ",
              "Additionally, it offers integration with other tools and platforms, such as network vulnerability scanners and intrusion detection systems. ",
              "Wireshark includes a variety of statistics and visualisation tools alongside its packet analysis features to aid users in understanding network traffic patterns and optimising network efficiency. ",
              "Its powerful scripting engine allows users to automate and customise their analysis, making it more efficient and effective. ",
            ],
            lastPara:
              "One of the key advantages of Wireshark is its versatility and customisation options. Overall, Wireshark is a powerful and comprehensive network protocol analyser that provides users with a range of features and tools to analyse network traffic, identify security threats, and optimise network performance.",
          },
          {
            id: 9,
            firstPara:
              "Nmap (Network Mapper) is a popular open-source network scanning tool that allows users to discover hosts and services on a network, identify security vulnerabilities, and map network architecture. It is used by security professionals, network administrators, and developers to secure their networks and optimise network performance. ",
            secondPara:
              "Its powerful scanning engine can detect hosts and services on a wide range of network protocols, including TCP, UDP, and ICMP. It can also perform a range of scanning techniques, including ping scans, port scans, and OS detection. One of the key advantages of Nmap is its versatility and customisation options.",
            boldText: "",
            title: "Nmap",
            lists: [
              "It offers a wide range of scanning options and configuration parameters, allowing users to tailor the tool to their specific needs and preferences. ",
              "It also provides integration with other tools and platforms, including network vulnerability scanners and intrusion detection systems. ",
              "In addition to its scanning features, Nmap also offers a range of scripting and automation options, allowing users to automate their scanning and analysis tasks and integrate with other tools and platforms. ",
              "Its powerful reporting engine allows users to generate detailed reports on their network scans and analysis, making identifying and remediating security vulnerabilities easier.",
            ],
            lastPara:
              "Overall, Nmap is a powerful and comprehensive network scanning tool that provides users with a range of features and tools to discover hosts and services on a network, identify security vulnerabilities and map network architecture.",
          },
          {
            id: 10,
            firstPara:
              "inSSIDer is a popular Windows-based wireless network scanner that allows users to discover and analyse wireless networks in their vicinity. It is used by security professionals, network administrators, and wireless network enthusiasts to troubleshoot wireless network issues, optimise wireless network performance, and identify security vulnerabilities. inSSIDer offers a range of features and tools to help users analyse wireless networks.",
            secondPara: "",
            boldText: "",
            title: "inSSIDer",
            lists: [
              "Its wireless network scanner can detect and display information on wireless networks, including inSSIDer, signal strength, encryption type, and channel. ",
              "It can also perform a range of scanning techniques, including active scanning, passive scanning, and war driving. ",
              "One of the key advantages of inSSIDer is its ease of use and user-friendly interface. ",
              "It provides clear and concise information on wireless networks, making it easy for users to understand and analyse their wireless network environment. ",
              "Additionally, a variety of customisation options are provided, enabling users to tailor the tool to meet their specific needs and preferences. ",
              "inSSIDer includes a variety of statistics and visualisation tools as well to its scanning features that help users in comprehend wireless network traffic patterns and enhance network efficiency.  ",
            ],
            lastPara:
              "Overall, inSSIDer is a powerful and comprehensive wireless network scanner that provides users with a range of features and tools to analyse wireless networks, troubleshoot network issues, and optimise network performance.  ",
          },
          {
            id: 11,
            firstPara:
              "Tor (The Onion Router) is a free and open-source network protocol that allows users to browse the internet anonymously. It is used by individuals and organisations to protect their privacy, avoid censorship and surveillance, and access content that may be restricted in their location. Tor works by routing internet traffic through a network of volunteer-operated servers known as nodes or relays. Each relay in the network only knows the IP address of the previous and next relays in the chain, creating multiple layers of encryption and making it difficult for anyone to trace the source of the traffic. ",
            secondPara: "",
            boldText: "",
            title: "Tor",
            lists: [
              "One of the key advantages of Tor is its ability to protect user privacy & anonymity. ",
              "By encrypting internet traffic and routing it through multiple relays, Tor makes it difficult for anyone to monitor or track user activity. ",
              "It also allows users to access content that may be blocked or censored in their location, such as social media, news sites, and messaging apps. ",
              "In addition to its anonymity features, Tor also offers a range of security and privacy tools, including a built-in web browser, support for end-to-end encryption, and protection against common internet threats, such as malware and phishing attacks.    ",
            ],
            lastPara:
              "Overall, Tor is a powerful and versatile tool that provides users with a range of features and tools to protect their privacy and security online. ",
          },
          {
            id: 12,
            firstPara:
              "Aircrack-NG is a popular open-source network security tool that is used for testing and analysing wireless networks. It is used by security professionals, network administrators, and penetration testers to test the security of wireless networks, identify vulnerabilities, and perform network audits. Aircrack-ng offers a range of features and tools to help users analyse wireless networks. Its wireless network scanner can detect and display information on wireless networks, including SSID, signal strength, encryption type, and channel. Aircrack-NG can perform a range of scanning techniques, including active scanning and passive scanning.",
            secondPara: "",
            boldText: "",
            title: "Aircrack-NG ",
            lists: [
              "Its ability to perform wireless network cracking and analysis. ",
              "It can crack WEP and WPA-PSK encryption on wireless networks and capture network traffic for further analysis. ",
              "It offers a range of customisation options, allowing users to tailor the tool to their specific needs and preferences. ",
              "In addition to its cracking and analysis features, Aircrack-ng also offers a range of scripting and automation options, allowing users to automate their scanning and analysis tasks and integrate with other tools and platforms  ",
            ],
            lastPara:
              "Overall, Aircrack-ng is a powerful and comprehensive wireless network security tool that provides users with a range of features and tools to analyse and test wireless networks.",
          },
          {
            id: 13,
            firstPara:
              "Splunk is a powerful and versatile data analysis platform used by organisations to collect, analyse, and visualise large amounts of machine-generated data in real-time. It is used by security professionals, IT administrators, and business analysts to gain insights into their systems, applications, and processes and to detect and remediate security threats and performance issues. One of the key advantages of Splunk is its ability to collect and analyse data from a wide range of sources, including servers, applications, network devices, and security systems. ",
            secondPara: "",
            boldText: "",
            title: "Splunk",
            lists: [
              "It provides a centralised platform for organisations to monitor and analyse data in real-time, making it easier to detect and remediate issues as they arise. ",
              "Splunk also offers a range of advanced analytics and visualisation tools, allowing users to gain insights into their data and identify trends and patterns. ",
              "Its machine learning and artificial intelligence capabilities enable it to identify anomalies and threats automatically, making it easier for organisations to detect and respond to security threats quickly. ",
              "In addition to its data analysis and visualisation features, Splunk also offers a range of integration options, allowing users to integrate with other tools and platforms, such as security information and event management (SIEM) systems, cloud platforms, and IT service management (ITSM) tools. This makes it easier for organisations to streamline their operations and improve their overall security posture.  ",
            ],
            lastPara:
              "Overall, Splunk is a powerful and comprehensive data analysis platform that provides organisations with a range of features and tools to monitor and analyse their systems, applications, and processes.  ",
          },
          {
            id: 14,
            firstPara:
              "Wazuh is an open-source security information and event management (SIEM) platform that provides organisations with a comprehensive set of tools to monitor and analyse security events across their network. It is used by security professionals and IT administrators to detect and respond to security threats in real-time and to improve the overall security posture of their organisation. One of the key advantages of Wazuh is its ability to collect, monitor, and analyse security events from a wide range of sources, including servers, network devices, and cloud platforms.  ",
            secondPara: "",
            boldText: "",
            title: "Wazuh – SIEM",
            lists: [
              "Wazuh offers a range of compliance and regulatory compliance features, allowing organisations to monitor and enforce security policies and regulatory requirements, such as PCI DSS, HIPAA, and GDPR. ",
              "Its powerful reporting and visualisation tools allow organisations to generate detailed reports on security events and compliance status, making it easier to demonstrate compliance to auditors and stakeholders. ",
              "In addition to its SIEM features, Wazuh also offers a range of intrusion detection and prevention (IDS/IPS) capabilities, allowing organisations to detect and respond to known and unknown threats in real-time. ",
              "Its integration options with other security tools and platforms, such as endpoint detection and response (EDR) tools and vulnerability scanners, make it easier for organisations to streamline their security operations and improve their overall security posture",
            ],
            lastPara:
              "Overall, Wazuh is a comprehensive and powerful open-source SIEM platform that provides organisations with a range of features and tools to monitor and analyse security events across their network.",
          },
        ],
        defaultCurrent: 1,
      },
    ],

    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title: "How This Course Will Help Me In My Career?",
            text: "This course is ideal for the ones who are willing to learn how to manage projects in private, public and even non-profit sectors. The ourse covers the entire project management cycle, including feasibility, planning, implementation, monitoring and evaluation. This course is relevant to the financial services, IT, engineering, manufacturing, government, health, education, construction, agriculture, transport, media and entertainment, retail, energy, safety and security.",
          },
          {
            id: 2,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced technology of Project Management, we will get you job-ready for positions under entry-level and executive positions of a project manager, senior project manager, program manager, business change manager, organizational change manager, delivery manager, PMO manager and much more with a complete LinkedIn profile building session.",
          },
          {
            id: 3,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 6,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 7,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 8,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Cybersecurity certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Cybersecurity career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/bxz53nd/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "CS-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  DTC: {
    processOne: [
      {
        id: 1,
        // image: "yellow-bg-details-bg-1.webp",
        youtubeUrl:
          "https://www.youtube.com/embed/LXpuEr0GPfY?autoplay=1&loop=1&playlist=LXpuEr0GPfY",

        title: "Certification Programme in Design Thinking",
        text: "Upskill yourself with a course in Design thinking. It is an innovative problem-solving approach used by leading organizations worldwide. Learn this valuable skill through our Design Thinking course and unleash your creativity to solve complex problems. Enroll yourself in this course and build a career in one of the most sought-after fields.",
        lists: [
          "08 Weeks Course",
          "Live Sessions",
          "Career Counselling",
          "Guaranteed Certification",
        ],
      },
    ],
    productDescription: {
      title: "Revolutionise your career with future-ready skills",
      text1:
        "Digital Regenesys' Design Thinking course is an online training program that teaches participants the principles of design thinking, a creative problem-solving approach used by leading organizations worldwide. Participants will learn how to apply design thinking to real-world challenges and develop innovative solutions. The course is ideal for professionals looking to enhance their problem-solving and innovation skills. Enroll now and transform your mindset!",
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Exposure to a proven problem-solving approach empowers you to think creatively, develop user-centric solutions, and drive innovation in your organizations.",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Approach",
      desc4:
        "Transform your problem-solving skills and drive innovation with our Design Thinking course. This innovative approach empowers you to develop user-centric solutions and unlock their creative potential.",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    // courseTools: [
    //   "pm/project-management-tools1.webp",
    //   "pm/project-management-tools2.webp",
    //   "pm/project-management-tools3.webp",
    //   "pm/project-management-tools4.webp",
    // ],
    courseCertificate: {
      certificateTitle:
        "Driving Innovation through Design Thinking: Certificate Course",
      certificateSubTitle:
        "Earn a Design Thinking Certificate from Digital Regenesys & Transform Ideas into Solutions",
      certificateSubSubTitle:
        "With our Design Thinking programme, you will gain a mindset of design thinking to stay ahead in the competition by working on projects, simulations, and cases.        ",
      certificateListTitle: "With Design Thinking Certificate, you will get:",

      certificateSkillList: [
        "International Recognition",
        "Human-Centred Mindset",
        "Empathy and User Research",
        "Strategic Thinking and Decision-Making",
      ],
      certificateListPara:
        " Our Design Thinking Certificate will open doors to various roles for you, whether you are a fresher, graduate or experienced professional.        ",
      certificateRolesList: [
        "Design Thinking Consultant",
        "Strategic Design Consultant ",
        "User Experience (UX) Designer",
        "Innovation Manager and many more",
      ],
      CertificateImage: ["DTC_certificate.webp"],
    },
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Dennis-Laxton.webp",
          title: "Dr. Dennis Laxton ",
          text: "Dennis Laxton has obtained NHD Industrial Engineering from Wits, B. Industrial Engineering from Unisa, MBA (ICT) from CSU, and DBA from UKZN. He has worked as a motor vehicle technician, class motor mechanic, service advisor, and a technical assistant as well.",
          designation: "Academic Team Leader and Senior Lecturer",
        },
        {
          id: 2,
          image: "Shaista-Fatima.webp",
          title: "Dr. Shaista Fatima",
          text: "Dr. Shaista is a resource person on Creative thinking and allied areas such as Innovation and Design Thinking. She has a PhD. in Management from an Institute of National Importance (MNNIT Allahabad) in India and has also qualified the coveted UGC-NET for Lectureship accreditation. She is a Gold medalist in the certificate course on Design Thinking coordinated by IIT Madras.",
          designation: "PhD. Management",
        },
      ],
    },
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Course curriculum",
        faqs: [
          {
            id: 1,
            title: "Introduction to Design Thinking",
            lists: [
              "Identifying Critical Problems",
              "Design Thinking Foundations",
            ],
          },
          {
            id: 2,
            title: "Innovation and Design Thinking",
            lists: [
              "What is Innovation",
              "Types of Innovation",
              "Human-Centered Innovation",
            ],
          },
          {
            id: 3,
            title: "Design Thinking Mindset",
            lists: [
              "Elements of Design Thinking mindset",
              "Need for Design thinking mindset",
              "Applying Design Thinking Mindset to real-world problems",
              "Applying Lean thinking into Design Thinking",
            ],
          },
          {
            id: 4,
            title: "Design Thinking for Creative Problem Solving",
            lists: [
              "Design challenges & preliminaries",
              "An Introduction to the five-stage process of Design Thinking",
              "Identifying situations where learners can apply such frameworks in their industry",
              "Apply Design thinking framework to real-world challenges",
              "Implementation timeline",
              "Considerations for resource allocation",
            ],
          },
          {
            id: 5,
            title: "Establishing Design Thinking in organization",
            lists: ["Scaling up", "Design Thinking & Organizational culture"],
          },
          {
            id: 6,
            title:
              "Digital Transformation: Integrating Design Thinking and Technology",
            lists: [
              "Introduction to Digital Transformation ",
              "Design Thinking as a Strategy for Digital Transformation",
            ],
          },
          {
            id: 7,
            title: "User Experience Research and Design Thinking",
            lists: [
              "Introduction to User-Centered Design Thinking",
              "Techniques for Conducting User Experience Research",
              "Integrating User Experience Research into the Design Thinking Process",
              "Analyzing User Experience Research Data to Inform Design Decisions",
              "Prototyping and Iterating Designs Based on User Experience Research",
              "Evaluating the Impact of User Experience Research on Design Thinking Outcomes",
              "Overcoming Challenges and Obstacles in Integrating User Experience Research and Design Thinking",
            ],
          },
          {
            id: 8,
            title:
              "Design Thinking for Data Science: User Needs and Data Insights",
            lists: [
              "Part 1: Introduction to Data Science",
              "Part 2: Applying Design Thinking Principles to Data Science",
              "Part 3: Case Studies and Practical Applications",
              "Target Audience",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    // faqsSection: [
    //   {
    //     id: 1,
    //     faqs: [
    //       {
    //         id: 1,
    //         title: "How This Course Will Help Me In My Career?",
    //         text: "This course is ideal for the ones who are willing to learn how to manage projects in private, public and even non-profit sectors. The ourse covers the entire project management cycle, including feasibility, planning, implementation, monitoring and evaluation. This course is relevant to the financial services, IT, engineering, manufacturing, government, health, education, construction, agriculture, transport, media and entertainment, retail, energy, safety and security.",
    //       },
    //       {
    //         id: 2,
    //         title: "Will Digital Regenesys Offer Me Job Assistance?",
    //         text: "Apart from preparing you with Cutting-edge and enhanced technology of Project Management, we will get you job-ready for positions under entry-level and executive positions of a project manager, senior project manager, program manager, business change manager, organizational change manager, delivery manager, PMO manager and much more with a complete LinkedIn profile building session.",
    //       },
    //       {
    //         id: 3,
    //         title: "What Are The Modes Of Payment Available For Me?",
    //         text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
    //       },
    //       {
    //         id: 4,
    //         title:
    //           "For How Long Will I Be Able To Access The Content After My Course Completion?",
    //         text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
    //       },
    //       {
    //         id: 5,
    //         title: "Is This A Certified Course?",
    //         text: "Yes, all the courses are certified by the Regenesys Business School.",
    //       },
    //       {
    //         id: 6,
    //         title:
    //           "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
    //         text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
    //       },
    //       {
    //         id: 7,
    //         title:
    //           "How Will I Get Access To The Assignments And Learning Content?",
    //         text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
    //       },
    //       {
    //         id: 8,
    //         title: "What If The Course Timings Don't Match My Work Timings?",
    //         text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
    //       },
    //     ],
    //     defaultCurrent: 1,
    //   },
    // ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Project Management certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school   based in South Africa, and climb the path of success towards your Project Management career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Total Admission Fee",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/besv3zg/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "PM-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  CSC: {
    processOne: [
      {
        id: 1,
        // image: "yellow-bg-details-bg-1.webp",
        youtubeUrl:
          "https://www.youtube.com/embed/S5RDj33518g?autoplay=1&loop=1&playlist=S5RDj33518g",

        title: "Certification Programme in Cybersecurity",
        text: "In today's digital age, cybersecurity is more important than ever. Equip and upskill yourself with the knowledge to improve business outcomes and unprecedented global demand and career opportunities with Cyber Security Fundamentals course. This course is designed for individuals who want to build a solid foundation and master the tools and techniques for robust cybersecurity defence.",
        lists: [
          "13 Weeks (8 Weeks + 5 Weeks)",
          "Live Sessions",
          "Career Counselling",
          "Guaranteed Certification",
        ],
      },
    ],
    productDescription: {
      title: "Complete Cybersecurity Solutions ",
      text1: `
        Digital Regenesys' Cybersecurity course is an online course that provides a comprehensive understanding of cybersecurity principles, policies, and practices. The course is designed to equip participants with the skills and knowledge needed to identify, prevent, and respond to cyber threats. Key topics covered include threat intelligence, risk management, network security, and cryptography. Participants can expect to develop practical skills through hands-on exercises and real-world scenarios. The course is ideal for anyone looking to start a career in cybersecurity or enhance their existing skills.
        `,
      textPara2: `Digital Regenesys' Cybersecurity course is an online course that provides a comprehensive understanding of cybersecurity principles, policies, and practices. This course is your gateway to the world of cybersecurity fundamentals. In this comprehensive course, you will gain a solid understanding of the key concepts, strategies, and techniques needed to protect digital systems and data from cyber threats. From exploring the fundamentals of information security to network security, secure systems and applications, and access control, you will build a strong foundation in cybersecurity. Additionally, we offer an add-on Defense Toolbox course of five weeks, where you can further enhance your skills through hands-on exercises and real-world scenarios. The course is ideal for anyone looking to start a career in cybersecurity or enhance their existing skills.`,
    },
    joinReasons: {
      title: "Reasons To Join This Course",
      subTitle1: "Exposure",
      desc1:
        "Get exposure to a range of industry tools, preparing you with practical skills and knowledge to defend against cyber threats.",

      subTitle2: "Best-in-class instructors",
      desc2:
        "Learn from the best-in-class instructors who will help you with every technological concept from scratch",

      subTitle3: "Live sessions",
      desc3:
        "Attend live sessions hosted by experienced subject and industry experts who will clear all your doubts during the one-on-one interactions",

      subTitle4: "Tools usage",
      desc4: "Gain a broad spectrum of knowledge on how to use the tools",
      bg1: "/assets/images/background/reason-bg1-1.webp",
      bg2: "/assets/images/background/reason-bg2-1.webp",
      bg3: "/assets/images/background/reason-bg3-1.webp",
      bg4: "/assets/images/background/reason-bg4-1.webp",
    },
    // courseTools: [
    //   "cs/cybersecurity-tools-1.png",
    //   "cs/cybersecurity-tools-2.png",
    //   "cs/cybersecurity-tools-3.png",
    //   "cs/cybersecurity-tools-4.png",
    //   "cs/cybersecurity-tools-5.png",
    //   "cs/cybersecurity-tools-6.png",
    //   "cs/cybersecurity-tools-7.png",
    //   "cs/cybersecurity-tools-8.png",
    //   "cs/cybersecurity-tools-9.png",
    //   "cs/cybersecurity-tools-10.png",
    //   "cs/cybersecurity-tools-11.png",
    //   "cs/cybersecurity-tools-12.png",
    //   "cs/cybersecurity-tools-13.png",
    //   "cs/cybersecurity-tools-14.png",
    //   "cs/cybersecurity-tools-15.png",
    // ],

    courseCertificate: {
      certificateTitle:
        "Building Strong Cyber Defenses: Fundamental & Defence Toolbox Certificate Course",
      certificateSubTitle:
        "Earn a Cyber Security Certificate from Digital Regenesys & Stay Ahead of Cyber Threats",
      certificateSubSubTitle:
        "With our Cyber Security programme, you will gain a deep understanding of cyber security principles & concepts to stay ahead by working on projects, simulations, and cases.        ",
      certificateListTitle: "With Cyber Security Certificate, you will get:",

      certificateSkillList: [
        "International Recognition",
        "Cyber Security Governance and Compliance",
        "Cyber Risk Management",
        "Ethical Hacking and Penetration Testing",
      ],
      certificateListPara:
        " Our Cyber Security Certificate will open doors to various roles for you, whether you are a fresher, graduate or experienced professional.",
      certificateRolesList: [
        "Security Consultant",
        "Security Operations Center (SOC) Analyst",
        "Cyber Security Manager ",
        "Security Architect and many more",
      ],
      CertificateImage: [
        "CSC_certificate_fundamentals.webp",
        "CSC_certificate_toolbox.webp",
      ],
    },
    featureSeven: {
      title: "Meet our staff",
      desc: "Revolutionise your career with future-ready skills",
      features: [
        {
          id: 1,
          image: "Dr-Saquib-Ahmad-Khan2.webp",
          title: "Dr. Saquib Ahmad Khan",
          text: "Dr. Saquib Ahmad Khan is a highly regarded and accomplished professional in the cybersecurity field. With a Ph.D. in Computer Science and several cybersecurity certifications under his belt, Dr. Khan is a renowned expert in the field cyber security. He has authored numerous research papers and articles on cybersecurity and frequently speaks at industry conferences and events, sharing his expertise with others. His contributions to the field have earned him several accolades, including widespread recognition for his knowledge and expertise. Dr. Khan is also well-versed in marketing, management, information technology, and applications, with multiple degrees. He is an exceptional faculty member, having published over 26 research papers on various subjects, and his contributions to the field are widely praised. Dr. Khan's exceptional verbal and written communication skills, coupled with his remarkable presentation abilities, have established him as a highly respected and sought-after expert in his field.",
          designation: "PhD Computer Science",
        },
      ],
    },
    videoOne: {
      image: "/assets/images/background/full-video-bg.webp",
      videoId: "y2Eqx6ys1hQ",
      title: "Linoor is trusted by millions of customers",
      text1:
        "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered.",
      text2:
        "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet.",
    },
    CourseCurriculum: [
      {
        id: 1,
        courseCurriculumTitle: "Cybersecurity Fundamentals",
        faqs: [
          {
            id: 1,
            title: "Week 1",
            lists: [
              "Cyber security fundamentals",
              "Security policies and procedures",
              "Cyber security mitigation methods",
              "CIA triad",
            ],
          },
          {
            id: 2,
            title: "Week 2",
            lists: [
              "Enterprise Architecture",
              "Organisational security policy and components",
              "Internet & networking basics",
              "Introduction to secured architecture",
              "Wireless networks",
              "Network security controls",
              "Cloud Virtualisation",
              "BYOD and IOT security testing",
            ],
          },
          {
            id: 3,
            title: "Week 3",
            lists: [
              "Information system governance and risk assessment",
              "Introduction to information security",
              "Governance risk",
              "Management information security programmes",
              "Network security and spoofing",
            ],
          },
          {
            id: 4,
            title: "Week 4",
            lists: [
              "Developing an incident management and response system",
              "Digital forensics business",
              "Continuity and disaster recovery",
              " Wi-Fi network security",
              "Web security",
              "OS fundamentals and security",
            ],
          },
          {
            id: 5,
            title: "Week 5",
            lists: [
              "Cryptography and Encryption",
              "Cryptanalysis",
              "Malware Analysis, Memory Forensics",
              "Cyber Forensic",
              "Application Security",
            ],
          },
          {
            id: 6,
            title: "Week 6",
            lists: [
              "Introduction to application security",
              "Web-based applications and associated vulnerabilities",
              "Cookies and tracking",
              "Data and database security",
              "Phishing and other attacks on identity",
              "Regulation, compliance, and risk management",
            ],
          },
          {
            id: 7,
            title: "Week 7",
            lists: [
              "Introduction to Ethical Hacking",
              "Overview of information security, threats, attack vectors, and ethical hacking concepts",
              "Information security controls",
              "Penetration testing concepts and information security laws and standards",
              "Footprinting and Reconnaissance",
            ],
          },
          {
            id: 8,
            title: "Week 8",
            lists: [
              "Session by industry experts",
              "Session on work readiness skills",
            ],
          },
        ],
        defaultCurrent: 1,
      },
    ],
    CourseCurriculumTwo: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            firstPara:
              "Email forensics involves the process of collecting, analysing, and interpreting electronic mail messages and metadata as evidence in legal or investigative matters.",
            secondPara: "",
            boldText: "The key steps in email forensics include:",
            title: "Email Forensics ",
            lists: [
              "The key steps in email forensics include identification, collection, analysis, interpretation, and reporting",
              "It is an essential tool for investigating criminal or fraudulent activities, data breaches, harassment, or other workplace violations involving email messages.",
            ],
            lastPara:
              "By following a systematic and rigorous process, email forensic experts can uncover evidence that can be used in court or to improve the security posture of an organisation.",
          },
          {
            id: 2,
            firstPara:
              "John the Ripper is a popular open-source password cracking tool that is commonly used by security professionals and hackers alike. It was originally developed for Unix-based systems but has since been ported to a variety of platforms, including Windows and MacOS. The tool uses a various attack methods to crack passwords, including dictionary attacks, brute-force attacks, and hybrid attacks.",
            secondPara: "",
            boldText: "",
            title: "John The Ripper ",
            lists: [
              "John the Ripper can leverage various types of password-cracking techniques, such as rainbow tables, which can greatly increase its speed and efficiency",
              "One of the key features of John the Ripper is its ability to detect weak passwords and provide recommendations for stronger ones",
              "It can also be used to audit password policies and identify vulnerabilities in systems and applications",
            ],
            lastPara: "",
          },
          {
            id: 3,
            firstPara:
              "KeePass is a popular open-source password manager that allows users to store and manage their passwords in a secure and organised manner. It is available for Windows, MacOS, Linux, and mobile platforms. The tool uses strong encryption algorithms to protect users' passwords, ensuring that they are secure even in the event of a data breach. KeePass also offers several additional security features, such as two-factor authentication, a master password, ability to lock the database after a set period of inactivity. ",
            secondPara:
              "KeePass allows users to store various types of information, including usernames, passwords, and website URLs. In addition, users can create custom fields to store additional information, such as security questions and answers.",
            boldText: "",
            title: "KeePass ",
            lists: [
              "One of the key advantages of KeePass is its flexibility and customisation options. ",
              "Users can create and manage multiple password databases, each with its own unique settings and password requirements. ",
              "The tool also offers a range of plugins and integrations that allow users to customise their experience even further",
            ],
            lastPara:
              "Overall, KeePass is a powerful and secure password manager that provides users with an easy way to manage their passwords and keep them safe from cyber threats.",
          },
          {
            id: 4,
            firstPara:
              "VeraCrypt is a popular open-source disk encryption tool that allows users to encrypt and protect their data stored on a computer or external drive. It is available for Windows, MacOS, and Linux. The tool uses strong encryption algorithms such as AES, Serpent, and Twofish to ensure that users' data is secure from unauthorised access, theft, and hacking attempts. ",
            secondPara: "",
            boldText:
              "VeraCrypt also offers several advanced security features, such as",
            title: "VeraCrypt",
            lists: [
              "Hidden volumes, ",
              "Deniable encryption, and",
              "Keyfile support, which provides users with added protection against brute-force attacks and other types of threats.  ",
            ],
            lastPara:
              "VeraCrypt can be used to encrypt an entire hard drive, a partition, or a removable storage device such as a USB drive. Overall, VeraCrypt is a powerful and reliable encryption tool that provides users with robust protection for their data",
          },
          {
            id: 5,
            firstPara:
              "Burp Suite is a popular web application security testing tool used by security professionals, ethical hackers, and penetration testers. It is designed to identify vulnerabilities and security issues in web applications, including Cross-Site Scripting (XSS), SQL injection, and session hijacking. Burp Suite offers a range of features and tools to help users identify and exploit vulnerabilities in web applications. ",
            secondPara: "",
            boldText: "",
            title: "Burpsuite",
            lists: [
              "Its proxy server intercepts all web traffic, allowing users to inspect and modify HTTP requests and responses.",
              "Its scanner identifies common web application vulnerabilities and provides detailed reports and recommendations for remediation.",
              "In addition to its scanning and proxy features, Burp Suite also offers a range of tools for advanced penetration testing and vulnerability research, including a repeater, intruder, and sequencer.",
              "It offers a wide range of plugins and extensions, allowing users to tailor the tool to their specific needs and preferences.",
              "It also provides integration with other tools and platforms, including popular vulnerability scanners and security frameworks. ",
            ],
            lastPara:
              "Overall, Burp Suite is a powerful and comprehensive web application security testing tool that provides users with a range of features and tools to identify and remediate vulnerabilities in web applications.",
          },
          {
            id: 6,
            firstPara:
              "Nikto is an open-source web server scanner that helps security professionals identify and remediate vulnerabilities in web servers and applications. It is designed to test web servers for common vulnerabilities, such as outdated software versions, misconfigured server settings, and known vulnerabilities. In addition, Nikto offers a range of features and tools to help users identify and exploit vulnerabilities in web servers ",
            secondPara: "",
            boldText: "",
            title: "Nikto",
            lists: [
              "It can scan multiple web servers simultaneously, allowing users to identify vulnerabilities across their entire infrastructure.",
              "It also provides detailed reports on the vulnerabilities it finds, including recommendations for remediation. ",
              "It offers a simple and intuitive interface allowing users to configure and run scans quickly and easily. ",
              "It also provides detailed documentation and tutorials to help users get started and make the most of its features. ",
              "In addition to its scanning features, Nikto offers a range of customisation options and plugins, allowing users to tailor the tool to their specific needs and preferences. ",
              "It also integrates with other security tools and platforms, making it a valuable addition to any security toolkit.",
            ],
            lastPara:
              "Overall, Nikto is a powerful and comprehensive web server scanner that provides users with a range of features and tools to identify and remediate vulnerabilities in web servers and applications.",
          },
          {
            id: 7,
            firstPara:
              "OWASP (Open Web Application Security Project) is a non-profit organisation dedicated to improving the security of software and web applications. It is a community-driven organisation providing tools, resources, and guidelines to help developers and security professionals build secure applications and protect against common web application vulnerabilities. OWASP offers a range of resources and tools to help organisations improve their application security posture. ",
            secondPara: "",
            boldText: "",
            title: "OWASP",
            lists: [
              "Its flagship project, the OWASP Top 10, identifies the top 10 most critical web application security risks, including injection attacks, cross-site scripting, broken authentication and session management. ",
              "The organisation also offers a range of guides, tools, and best practices to help developers and security professionals mitigate these risks and protect their applications. ",
              "In addition to its educational and awareness-raising efforts, OWASP also supports a number of software security projects, including web application security scanners, vulnerability scanners, and security testing frameworks ",
              "These projects are open source and community-driven, providing users with free and reliable security tools that can help them improve their security posture. ",
            ],
            lastPara:
              "Overall, OWASP is a valuable resource for developers and security professionals looking to improve the security of their software and web applications.",
          },
          {
            id: 8,
            firstPara:
              "Wireshark is a popular open-source network protocol analyser that allows users to capture and analyse network traffic in real-time. It is used by security professionals, network administrators, and developers to troubleshoot network issues, identify security threats, and optimise network performance. ",
            secondPara: "",
            boldText: "",
            title: "Wireshark",
            lists: [
              "Wireshark offers a range of features and tools to help users analyse network traffic",
              "Ethernet, Wi-Fi, and Bluetooth are just a few of the network interfaces whose traffic its packet capture engine may record. ",
              "It can decode and analyse a wide range of network protocols, including TCP/IP, HTTP, DNS, and SSL/TLS. It also offers a powerful filtering engine, allowing users to focus on specific packets or protocols of interest. ",
              "Additionally, it offers integration with other tools and platforms, such as network vulnerability scanners and intrusion detection systems. ",
              "Wireshark includes a variety of statistics and visualisation tools alongside its packet analysis features to aid users in understanding network traffic patterns and optimising network efficiency. ",
              "Its powerful scripting engine allows users to automate and customise their analysis, making it more efficient and effective. ",
            ],
            lastPara:
              "One of the key advantages of Wireshark is its versatility and customisation options. Overall, Wireshark is a powerful and comprehensive network protocol analyser that provides users with a range of features and tools to analyse network traffic, identify security threats, and optimise network performance.",
          },
          {
            id: 9,
            firstPara:
              "Nmap (Network Mapper) is a popular open-source network scanning tool that allows users to discover hosts and services on a network, identify security vulnerabilities, and map network architecture. It is used by security professionals, network administrators, and developers to secure their networks and optimise network performance. ",
            secondPara:
              "Its powerful scanning engine can detect hosts and services on a wide range of network protocols, including TCP, UDP, and ICMP. It can also perform a range of scanning techniques, including ping scans, port scans, and OS detection. One of the key advantages of Nmap is its versatility and customisation options.",
            boldText: "",
            title: "Nmap",
            lists: [
              "It offers a wide range of scanning options and configuration parameters, allowing users to tailor the tool to their specific needs and preferences. ",
              "It also provides integration with other tools and platforms, including network vulnerability scanners and intrusion detection systems. ",
              "In addition to its scanning features, Nmap also offers a range of scripting and automation options, allowing users to automate their scanning and analysis tasks and integrate with other tools and platforms. ",
              "Its powerful reporting engine allows users to generate detailed reports on their network scans and analysis, making identifying and remediating security vulnerabilities easier.",
            ],
            lastPara:
              "Overall, Nmap is a powerful and comprehensive network scanning tool that provides users with a range of features and tools to discover hosts and services on a network, identify security vulnerabilities and map network architecture.",
          },
          {
            id: 10,
            firstPara:
              "inSSIDer is a popular Windows-based wireless network scanner that allows users to discover and analyse wireless networks in their vicinity. It is used by security professionals, network administrators, and wireless network enthusiasts to troubleshoot wireless network issues, optimise wireless network performance, and identify security vulnerabilities. inSSIDer offers a range of features and tools to help users analyse wireless networks.",
            secondPara: "",
            boldText: "",
            title: "inSSIDer",
            lists: [
              "Its wireless network scanner can detect and display information on wireless networks, including inSSIDer, signal strength, encryption type, and channel. ",
              "It can also perform a range of scanning techniques, including active scanning, passive scanning, and war driving. ",
              "One of the key advantages of inSSIDer is its ease of use and user-friendly interface. ",
              "It provides clear and concise information on wireless networks, making it easy for users to understand and analyse their wireless network environment. ",
              "Additionally, a variety of customisation options are provided, enabling users to tailor the tool to meet their specific needs and preferences. ",
              "inSSIDer includes a variety of statistics and visualisation tools as well to its scanning features that help users in comprehend wireless network traffic patterns and enhance network efficiency.  ",
            ],
            lastPara:
              "Overall, inSSIDer is a powerful and comprehensive wireless network scanner that provides users with a range of features and tools to analyse wireless networks, troubleshoot network issues, and optimise network performance.  ",
          },
          {
            id: 11,
            firstPara:
              "Tor (The Onion Router) is a free and open-source network protocol that allows users to browse the internet anonymously. It is used by individuals and organisations to protect their privacy, avoid censorship and surveillance, and access content that may be restricted in their location. Tor works by routing internet traffic through a network of volunteer-operated servers known as nodes or relays. Each relay in the network only knows the IP address of the previous and next relays in the chain, creating multiple layers of encryption and making it difficult for anyone to trace the source of the traffic. ",
            secondPara: "",
            boldText: "",
            title: "Tor",
            lists: [
              "One of the key advantages of Tor is its ability to protect user privacy & anonymity. ",
              "By encrypting internet traffic and routing it through multiple relays, Tor makes it difficult for anyone to monitor or track user activity. ",
              "It also allows users to access content that may be blocked or censored in their location, such as social media, news sites, and messaging apps. ",
              "In addition to its anonymity features, Tor also offers a range of security and privacy tools, including a built-in web browser, support for end-to-end encryption, and protection against common internet threats, such as malware and phishing attacks.    ",
            ],
            lastPara:
              "Overall, Tor is a powerful and versatile tool that provides users with a range of features and tools to protect their privacy and security online. ",
          },
          {
            id: 12,
            firstPara:
              "Aircrack-NG is a popular open-source network security tool that is used for testing and analysing wireless networks. It is used by security professionals, network administrators, and penetration testers to test the security of wireless networks, identify vulnerabilities, and perform network audits. Aircrack-ng offers a range of features and tools to help users analyse wireless networks. Its wireless network scanner can detect and display information on wireless networks, including SSID, signal strength, encryption type, and channel. Aircrack-NG can perform a range of scanning techniques, including active scanning and passive scanning.",
            secondPara: "",
            boldText: "",
            title: "Aircrack-NG ",
            lists: [
              "Its ability to perform wireless network cracking and analysis. ",
              "It can crack WEP and WPA-PSK encryption on wireless networks and capture network traffic for further analysis. ",
              "It offers a range of customisation options, allowing users to tailor the tool to their specific needs and preferences. ",
              "In addition to its cracking and analysis features, Aircrack-ng also offers a range of scripting and automation options, allowing users to automate their scanning and analysis tasks and integrate with other tools and platforms  ",
            ],
            lastPara:
              "Overall, Aircrack-ng is a powerful and comprehensive wireless network security tool that provides users with a range of features and tools to analyse and test wireless networks.",
          },
          {
            id: 13,
            firstPara:
              "Splunk is a powerful and versatile data analysis platform used by organisations to collect, analyse, and visualise large amounts of machine-generated data in real-time. It is used by security professionals, IT administrators, and business analysts to gain insights into their systems, applications, and processes and to detect and remediate security threats and performance issues. One of the key advantages of Splunk is its ability to collect and analyse data from a wide range of sources, including servers, applications, network devices, and security systems. ",
            secondPara: "",
            boldText: "",
            title: "Splunk",
            lists: [
              "It provides a centralised platform for organisations to monitor and analyse data in real-time, making it easier to detect and remediate issues as they arise. ",
              "Splunk also offers a range of advanced analytics and visualisation tools, allowing users to gain insights into their data and identify trends and patterns. ",
              "Its machine learning and artificial intelligence capabilities enable it to identify anomalies and threats automatically, making it easier for organisations to detect and respond to security threats quickly. ",
              "In addition to its data analysis and visualisation features, Splunk also offers a range of integration options, allowing users to integrate with other tools and platforms, such as security information and event management (SIEM) systems, cloud platforms, and IT service management (ITSM) tools. This makes it easier for organisations to streamline their operations and improve their overall security posture.  ",
            ],
            lastPara:
              "Overall, Splunk is a powerful and comprehensive data analysis platform that provides organisations with a range of features and tools to monitor and analyse their systems, applications, and processes.  ",
          },
          {
            id: 14,
            firstPara:
              "Wazuh is an open-source security information and event management (SIEM) platform that provides organisations with a comprehensive set of tools to monitor and analyse security events across their network. It is used by security professionals and IT administrators to detect and respond to security threats in real-time and to improve the overall security posture of their organisation. One of the key advantages of Wazuh is its ability to collect, monitor, and analyse security events from a wide range of sources, including servers, network devices, and cloud platforms.  ",
            secondPara: "",
            boldText: "",
            title: "Wazuh – SIEM",
            lists: [
              "Wazuh offers a range of compliance and regulatory compliance features, allowing organisations to monitor and enforce security policies and regulatory requirements, such as PCI DSS, HIPAA, and GDPR. ",
              "Its powerful reporting and visualisation tools allow organisations to generate detailed reports on security events and compliance status, making it easier to demonstrate compliance to auditors and stakeholders. ",
              "In addition to its SIEM features, Wazuh also offers a range of intrusion detection and prevention (IDS/IPS) capabilities, allowing organisations to detect and respond to known and unknown threats in real-time. ",
              "Its integration options with other security tools and platforms, such as endpoint detection and response (EDR) tools and vulnerability scanners, make it easier for organisations to streamline their security operations and improve their overall security posture",
            ],
            lastPara:
              "Overall, Wazuh is a comprehensive and powerful open-source SIEM platform that provides organisations with a range of features and tools to monitor and analyse security events across their network.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    faqsSection: [
      {
        id: 1,
        faqs: [
          {
            id: 1,
            title: "How This Course Will Help Me In My Career?",
            text: "This course is ideal for the ones who are willing to learn how to manage projects in private, public and even non-profit sectors. The ourse covers the entire project management cycle, including feasibility, planning, implementation, monitoring and evaluation. This course is relevant to the financial services, IT, engineering, manufacturing, government, health, education, construction, agriculture, transport, media and entertainment, retail, energy, safety and security.",
          },
          {
            id: 2,
            title: "Will Digital Regenesys Offer Me Job Assistance?",
            text: "Apart from preparing you with Cutting-edge and enhanced technology of Project Management, we will get you job-ready for positions under entry-level and executive positions of a project manager, senior project manager, program manager, business change manager, organizational change manager, delivery manager, PMO manager and much more with a complete LinkedIn profile building session.",
          },
          {
            id: 3,
            title: "What Are The Modes Of Payment Available For Me?",
            text: "You can pay the full fee amount from our website; you can also avail minimum per month payment plan through our EdForAll initiative.",
          },
          {
            id: 4,
            title:
              "For How Long Will I Be Able To Access The Content After My Course Completion?",
            text: "At Digital Regenesys, we give you an unlimited 1 year of content access from the start date of your course. The course shall be updated with new and exciting content time to time for you to expand your knowledge further more.",
          },
          {
            id: 5,
            title: "Is This A Certified Course?",
            text: "Yes, all the courses are certified by the Regenesys Business School.",
          },
          {
            id: 6,
            title:
              "What Does It Mean By Designed By Ph.D. & Conducted By Experts?",
            text: "The courses have been extensively designed, researched, and innovated by the group of our expert team of recognized Ph.D. Doctorates. Once the course is curated by them, the courses are then delivered by the Industry Experts of the particular field.",
          },
          {
            id: 7,
            title:
              "How Will I Get Access To The Assignments And Learning Content?",
            text: "Once you are successfully registered yourself for our courses, you will receive access to our learning portal where you will find all the course material, assignments, and quizzes.",
          },
          {
            id: 8,
            title: "What If The Course Timings Don't Match My Work Timings?",
            text: "We offer you the comfort to watch the recordings of the classes that you have missed on the learning portal.",
          },
        ],
        defaultCurrent: 1,
      },
    ],
    courseBenefits: {
      title: "Benefits",
      desc: "",
      tabBtns: [
        {
          id: "tab-1",
          title: "Career Support",
        },
        {
          id: "tab-2",
          title: "Doubt Resolution",
        },
        {
          id: "tab-3",
          title: "Learning Support",
        },
        {
          id: "tab-4",
          title: "Networking",
        },
      ],
      tabsContents: [
        {
          id: "tab-1",
          image: "featured-image-14.jpg",

          lists: [
            "100% Career Counselling",
            "Get yourself interview ready with proper training, industry expert interactions, resume building tools",
            "Elevate your LinkedIn game with a comprehensive profile building session",
          ],
        },
        {
          id: "tab-2",
          image: "featured-image-14.jpg",

          lists: [
            "Solve all your queries with one-on-one interaction during the lectures",
            "Ask questions, get answers and complete support from the faculty",
            "Enhanced learning experience offered by our highly experienced and achieved faculties",
          ],
        },
        {
          id: "tab-3",
          image: "featured-image-14.jpg",

          lists: [
            "Get unlimited learning access for 1 year to the learning management system",
            "Receive proper guidance as per your special requirements from our faculties",
            "Access the recorded lectures in case you miss a session",
          ],
        },

        {
          id: "tab-4",
          image: "featured-image-14.jpg",

          lists: [
            "Be a part of an extended community of corporate professionals comprising of more than 200,000 highly achieved alumni",
            "Connect with the Industry experts who will help you guide through your career after course completion",
            "Talk, share, connect, learn and grow along with other students in your batch",
          ],
        },
      ],
    },
    productDetails: {
      flagsa: "/assets/images/icons/flag_sa.webp",
      flagnig: "/assets/images/icons/flag_nigeria.webp",
      flagus: "/assets/images/icons/flag_us.webp",
      flagind: "/assets/images/icons/flag_india.webp",
      flagken: "/assets/images/icons/flag_kenya.webp",
      title: "Fees structure & Certification",
      subTitle: "Get Certified",
      price: 64499,
      certifiedTitle1: "Earn Your Cybersecurity certificate",
      certifiedText1:
        "Get certified by Regenesys Business School, an international school based in South Africa, and climb the path of success towards your Cybersecurity career.",
      certifiedTitle2: "Share Your Achievement",

      certifiedText2:
        "Share your certificate on LinkedIn, Twitter, and Facebook, and boast your achievements in front of your friends and colleagues.",
      certifiedTitle3: "Benefits",
      certifiedText3:
        "Embrace a world of possibilities with the largest online higher education company from Silicon Valley, USA, and unlock a comprehensive range of benefits, including 360-degree career support, mentorship from industry experts, networking opportunities, and much more.",
      admissionText:
        "Admissions are closed once the requisite number of participants enroll for the upcoming cohort. Apply early to secure your seat.",
      termsConditions: "*Terms & Conditions",
      CsFundamentals: "Cybersecurity Fundamentals",
      CsDefenceToolbox: "Cybersecurity Defence Toolbox",
    },
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/bxz53nd/",
    modalImage: "Pop-up_bg.webp",
    stickyText:
      "CS-Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
};

export const brochureDetails: any = {
  //Project Management
  PM: {
    name: "project-management-brochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  //Cybersecurity
  CS: {
    name: "cybersecurity-complete-brochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  //Basic Data Science
  BDSCI: {
    name: "basic-datascience-brochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  //Advance Data Science
  ADDSCI: {
    name: "advance-datascience-brochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  //Applied Data Science
  APDSCI: {
    name: "applied-datascience-brochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  //Advance-Digital-Marketing
  AVDM: {
    name: "DigitalMarketingAdvancedBrochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },
  //Digital Marketing Strategies
  AVDMC: {
    name: "AdvanceDigitalMarketingStrategiesBrochure23.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  //Digital Marketing Fundamentals
  BDMC: {
    name: "DigitalMarketingFundamentalsBrochure23.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  //"Cybersecurity Fundamentals"
  CSFC: {
    name: "cybersecurity-complete-brochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  //"Basic Digital Marketing"
  BDM: {
    name: "DigitalMarketingBasicBrochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  //Cybersecurity Defence Toolbox
  CDTC: {
    name: "CompleteCybersecuritySolution-Brochure23.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  DTC: {
    name: "DesignThinkingCourseDevelopmentBrochure23.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  // Certification Programme in Cybersecurity
  CSC: {
    name: "CompleteCybersecuritySolution-Brochure23.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },

  AIIP: {
    name: "ai-introductory-brochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },
  AIIPF: {
    name: "ai-intermediary-brochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },
  AIAAPP: {
    name: "ai-advanced-brochure.pdf",
    leadSource: leadSource,
    sourceCampaign: sourceCampaign,
  },
};
