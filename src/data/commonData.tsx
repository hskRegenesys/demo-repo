//==============multiple-pages-keyword-start===========
const BrandKeyword =
  "online courses, online course, courses online, online coding courses, online courses with certificates, online certification courses, coding courses online, IT courses online, online certificate courses , online courses for adults, best online courses, online it courses, online certificate course, online courses certificates, online training courses, certificate courses online";
const DsKeyword =
  "data science course, data science courses, courses in data science, course for data science, data science online courses, data science course online, courses data science, online data science courses, best data science courses, python data science course, best online data science courses";
const DMkeyword =
  "digital marketing, digital marketing course, digital marketing certificate, digital marketing training, what is digital marketing, digital marketing course online, digital marketing definition, online digital marketing courses, digital marketing jobs, digital marketing salary, digital regenesys";
const PmKeyword =
  "project management courses, project management courses online, online project management courses, project management online course, project management course online, project management online courses, project management training courses, best project management courses, online courses project management, course in project management, project management courses for beginners";
const CsKeyword =
  "cyber security course, cyber security courses, cyber security courses online, online cyber security courses, cyber security online courses, courses for cyber security, cyber security courses for beginners, online course for cyber security, courses in cyber security, cyber security courses near me";
const AiKeyword =
  "artificial intelligence course, artificial general intelligence course, artificial intelligence courses, artificial intelligence online course, course on artificial intelligence, artificial intelligence course online, best artificial intelligence course, machine learning and artificial intelligence courses, online artificial intelligence courses, artificial intelligence course free, artificial intelligence course syllabus, artificial intelligence training courses";
const FsdKeyword =
  "full stack development, full stack web development, full stack software development, full stack development courses, full stack web development certificate, what is full stack development, full stack developer jobs, full stack developer, digital regenesys";
const DbaKeyword =
  "data analysis, business analytics, what is business analytics, what is data analysis, no code tools, data science and business analytics, data science and business analytics course, data science and business analytics salary, difference between data science and business analytics, data science and business analytics online course";
const DtKeyword =
  "design thinking, design thinking certification, design thinking definition, design thinking course, design thinking training, design thinking tools, design thinking course online, online design thinking course, digital regenesys";
const mdpKeyword =
  "mdp, management development courses, management certificate programs, management development program, mdp meaning, leadership and management development, professional development courses for managers, best management development programs, management development program jobs, management development program salary";
//==============multiple-pages-keyword-end===========

const Data = {
  metaInfo: {
    title: {
      home: "Digital Regenesys: Online Certificate Courses for Professionals",
      about: "About Digital Regenesys: Online Digital Skills Course Provider",
      allCourse:
        "Boost Your Career with Professional Courses | Digital Regenesys",
      contact: "Contact Us: Reach Out for Help and Support | Digital Regenesys",
      privacyPolicy:
        "Privacy Policy: Protecting Your Data & Information | Digital Regenesys",
      refundPolicy: "Refund Policy | Digital Regenesys",
      termsCondition:
        "Terms and Conditions: Everything You Need to Know | Digital Regenesys",
      search: "Search - DR Website",
      register: "Register",
      login: "Login",
      edforall: "Ed For All",
      cryptoCurrency: "Crypto Currency",
      "cyber-security": "Cyber Security Course Online | Digital Regenesys",
      "digital-marketing":
        "Digital Marketing Course Online | Digital Regenesys",

      "digital-marketing-fundamentals":
        "Digital Marketing Fundamentals Course Online | Digital Regenesys",

      "operations-and-supply-chain-management":
        "Operations & Supply Chain Management Course Online |Digital Regenesys",

      "basic-digital-marketing-course":
        "Digital Marketing Fundamentals Course Online | Digital Regenesys",
      "advanced-digital-marketing":
        "Advance Digital Marketing Course Online | Digital Regenesys",
      "advance-digital-marketing-course":
        "Advance Digital Marketing Strategies Course Online | Digital Regenesys",
      "applied-digital-marketing":
        "Applied Digital Marketing Course Online | Digital Regenesys",
      "project-management":
        "Project Management Course Online | Digital Regenesys",
      "software-development":
        "Software Development  Online Course | Digital Regenesys",
      "full-stack-development":
        "Full Stack Web & Software Development Course | Digital Regenesys",
      "data-and-business-analytics":
        "Data and Business Analytics No-Code Course | Digital Regenesys",
      "design-thinking": "Design Thinking Course Online | Digital Regnesys",
      "data-science":
        "Data Science: Data Science Course Online | Digital Regenesys",
      "advanced-data-science":
        "Advanced Data Science Courses Online | Digital Regenesys",
      "applied-data-science":
        "Applied Data Science Course Online | Digital Regenesys",
      "basic-data-science":
        "Basic Data Science Course Online | Digital Regenesys",

      thankYou: "Thank You",
      createMyWealth:
        "Investment, Trading, Personal Finance Course | Digital Regenesys",
      Blog: "Digital Regenesys Blog: Insights, Tips, & Advice for Digital Success",
      "artificial-intelligence":
        "Artificial Intelligence Course Online | Digital Regenesys",
      "ai-introductory":
        "Artificial Intelligence Introduction Course | Digital Regenesys",
      "ai-intermediary":
        "Artificial Intelligence Intermediate Course | Digital Regenesys",
      "ai-advanced-applied":
        "Advanced Applied Artificial Intelligence Course | Digital Regenesys",
      "management-advancement":
        "Management Advancement Course Online | Digital Regenesys",

      "product-management":
        " Product Management Course Online | Digital Regenesys",

      // ------------------multiple-brand-meta-title------------------------

      "online-courses":
        "Online Courses: Learn Anytime, Anywhere | Digital Regenesys",
      "online-course":
        "Online Course: Flexible Learning Goals | Digital Regenesys",
      "courses-online":
        "Courses Online: Diverse Learning Opportunities | Digital Regenesys",
      "online-coding-courses":
        "Online Coding Courses: Master Programming Skills | Digital Regenesys",
      "online-courses-with-certificates":
        "Online Courses with Certificates | Digital Regenesys",
      "online-certification-courses":
        "Online Certification Courses: Elevate Skills | Digital Regenesys",
      "coding-courses-online":
        "Coding Courses Online: Programming Excellence | Digital Regenesys",
      "IT-courses-online":
        "IT Courses Online: Learn the Latest Technologies | Digital Regenesys",
      "online-certificate-courses":
        "Online Certificate Courses: Validate Your Expertise | Digital Regenesys",
      "online-courses-for-adults":
        "Online Courses for Adults: Learning Made Easy | Digital Regenesys",
      "best-online-courses":
        "Best Online Courses: Top-Quality Learning | Digital Regenesys",
      "online-it-courses":
        "Online IT Courses: Enhance Your Tech Skills | Digital Regenesys",
      "online-certificate-course":
        "Online Certificate Course: Validate Proficiency | Digital Regenesys",
      "online-courses-certificates":
        "Online Courses Certificates: Master Your Skills | Digital Regenesys",
      "online-training-courses":
        "Online Training Courses: Boost Your Growth | Digital Regenesys",
      "certificate-courses-online":
        "Certificate Courses Online: Boost Your Skill Set | Digital Regenesys",

      //-----------------multiple-pages-coures-meta-tittle-------------------
      ///===============================DS============================
      "data-science-course":
        "Data Science Course: Master Analytical Skills | Digital Regenesys",
      "data-science-courses":
        "Data Science Courses - Diverse Learning Paths | Digital Regenesys",
      "courses-in-data-science":
        "Courses in Data Science: Explore Advanced Learning | Digital Regenesys",
      "course-for-data-science":
        "Course for Data Science: Transform Your Career | Digital Regenesys",
      "data-science-online-courses":
        "Data Science Online Courses: Flexible Learning | Digital Regenesys",
      "data-science-course-online":
        "Data Science Course Online: Learn Anytime, Anywhere | Digital Regenesys",
      "courses-data-science":
        "Courses Data Science: Explore Specializations | Digital Regenesys",
      "online-data-science-courses":
        "Online Data Science Courses: Transform Data Skills | Digital Regenesys",
      "best-data-science-courses":
        "Best Data Science Courses: Top-Quality Learning | Digital Regenesys",
      "a-crash-course-in-data-science":
        "A Crash Course in Data Science: Quick Learning Path | Digital Regenesys",
      "data-science-courses-online":
        "Data Science Courses Online: Master Data Analysis | Digital Regenesys",
      "python-data-science-course":
        "Python Data Science Course: Harness Programming Power | Digital Regenesys",
      "best-online-data-science-courses":
        "Best Online Data Science Courses: Optimize Learning | Digital Regenesys",
      "data-science-certification-course":
        "Data Science Certification Course | Digital Regenesys",
      "online-course-in-data-science":
        "Online Course in Data Science: Master Your Skill | Digital Regenesys",
      "online-data-science-course":
        "Online Data Science Course: Flexible Learning | Digital Regenesys",

      ///===============================DM============================
      // "digital-marketing": "Digital Marketing: Drive Your Business Forward | Digital Regenesys",
      "what-is-digital-marketing":
        "What is Digital Marketing? Understand the Basics | Digital Regenesys",
      "digital-marketing-jobs":
        "Digital Marketing Jobs: Explore Opportunities | Digital Regenesys",
      "digital-marketing-salary":
        "Digital Marketing Salary: Lucrative Career Option | Digital Regenesys",
      "digital-marketer":
        "Digital Marketer: Master of Online Engagement | Digital Regenesys",
      "digital-marketing-course":
        "Digital Marketing Course: Enhance Your Skills | Digital Regenesys",
      "digital-marketing-strategy":
        "Digital Marketing Strategy: Blueprint for Success | Digital Regenesys",
      "digital-marketing-certificate":
        "Digital Marketing Certificate: Validate Expertise | Digital Regenesys",
      "google-digital-marketing-certification":
        "Google Digital Marketing Certification | Digital Regenesys",
      "digital-marketing-courses":
        "Digital Marketing Courses: Choose Your Path | Digital Regenesys",
      "digital-marketing-near-me":
        "Digital Marketing Near Me: Find Local Experts | Digital Regenesys",
      "digital-marketing-specialist":
        "Digital Marketing Specialist: Drive Success | Digital Regenesys",
      "digital-marketing-certification":
        "Digital Marketing Certification with Digital Regenesys",
      "digital-marketing-degree":
        "Digital Marketing Degree: Ignite Your Career | Digital Regenesys",
      "digital-marketing-tools":
        "Digital Marketing Tools: Amplify Your Strategy | Digital Regenesys",
      "digital-marketing-training":
        "Digital Marketing Training: Master the Essentials | Digital Regenesys",
      "digital-marketing-certificates":
        "Digital Marketing Certificates | Digital Regenesys",
      "digital-marketing-institute":
        "Digital Marketing Institute: Your Path to Success | Digital Regenesys",
      "digital-marketing-strategies":
        "Digital Marketing Strategies: Boost Your Business | Digital Regenesys",
      "digital-marketing-course-online":
        "Digital Marketing Course Online: Learn Anywhere | Digital Regenesys",
      "digital-marketing-definition":
        "Digital Marketing Definition: Understand the Basics | Digital Regenesys",
      "digital-marketing-examples":
        "Digital Marketing Examples: Inspire Your Campaigns | Digital Regenesys",
      "digital-marketing-meaning":
        "Digital Marketing Meaning: Unveiling Significance | Digital Regenesys",
      "digital-marketing-trends":
        "Digital Marketing Trends: Stay Ahead of the Curve | Digital Regenesys",
      "learn-digital-marketing":
        "Learn Digital Marketing: Master Your Skills | Digital Regenesys",
      "types-of-digital-marketing":
        "Types of Digital Marketing: Exploring Strategies | Digital Regenesys",
      "digital-marketer-salary":
        "Digital Marketer Salary: Compensation Insights | Digital Regenesys",
      "digital-marketing-classes":
        "Digital Marketing Classes: Enhance Your Skills | Digital Regenesys",
      "digital-marketing-online-courses":
        "Digital Marketing Online Courses: Flexible Learning | Digital Regenesys",
      "online-digital-marketing-courses":
        "Online Digital Marketing Courses: Learn Anytime | Digital Regenesys",
      "what-is-a-digital-marketer":
        "What is a Digital Marketer?: Understanding the Role | Digital Regenesys",
      "digital-marketing-courses-online":
        "Digital Marketing Courses Online | Digital Regenesys",
      "google-digital-marketing-course":
        "Google Digital Marketing Course: Get Certified | Digital Regenesys",
      "how-to-become-a-digital-marketer":
        "How to Become a Digital Marketer: Guidance | Digital Regenesys",
      "how-to-do-digital-marketing":
        "How to Do Digital Marketing: Master the Basics | Digital Regenesys",
      "how-to-start-digital-marketing":
        "How to Start Digital Marketing: Beginner's Guide | Digital Regenesys",
      "online-digital-marketing":
        "Online Digital Marketing: Reach Your Audience | Digital Regenesys",
      "digital-marketing-blogs":
        "Digital Marketing Blogs: Stay Informed | Digital Regenesys",
      "digital-marketing-careers":
        "Digital Marketing Careers: Explore Opportunities | Digital Regenesys",
      "digital-marketing-certificate-online":
        "Digital Marketing Certificate Online: Earn Credential | Digital Regenesys",
      "digital-marketing-certifications":
        "Digital Marketing Certifications: Validate Expertise | Digital Regenesys",
      "fundamentals-of-digital-marketing":
        "Fundamentals of Digital Marketing: Essential Guide | Digital Regenesys",
      "online-digital-marketing-course":
        "Online Digital Marketing Course: Learn Anywhere | Digital Regenesys",
      "what-does-a-digital-marketer-do":
        "What Does a Digital Marketer Do? | Digital Regenesys",
      "what's-digital-marketing":
        "What's Digital Marketing?: Explained | Digital Regenesys",
      "best-digital-marketing-services":
        "Best Digital Marketing Services: Grow Business | Digital Regenesys",
      "certificate-in-digital-marketing":
        "Certificate in Digital Marketing: Enhance Skills | Digital Regenesys",
      "digital-marketing-platforms":
        "Digital Marketing Platforms: Amplify Your Reach | Digital Regenesys",
      "digital-marketing-tips":
        "Digital Marketing Tips: Enhance Your Strategy | Digital Regenesys",
      "masters-in-digital-marketing":
        "Masters in Digital Marketing: Advance Your Career | Digital Regenesys",
      "what-is-a-digital-marketing":
        "What is a Digital Marketing?: Unveiling Concept | Digital Regenesys",
      "best-digital-marketing-courses":
        "Best Digital Marketing Courses: Top Picks | Digital Regenesys",
      "definition-of-digital-marketing":
        "Definition of Digital Marketing: Explained | Digital Regenesys",
      "digital-marketing-degree-online":
        "Digital Marketing Degree Online: Flexible Learning | Digital Regenesys",
      "digital-marketing-degrees":
        "Digital Marketing Degrees: Advance Your Career | Digital Regenesys",
      "digital-marketing-experts":
        "Digital Marketing Experts: Industry Leaders | Digital Regenesys",
      "digital-marketing-online":
        "Digital Marketing Online: Learn Anywhere, Anytime | Digital Regenesys",
      "examples-of-digital-marketing":
        "Examples of Digital Marketing: Inspire Strategy | Digital Regenesys",
      "how-to-learn-digital-marketing":
        "How to Learn Digital Marketing: Expert Tips | Digital Regenesys",
      "future-of-digital-marketing":
        "Future of Digital Marketing: Trends & Insights | Digital Regenesys",
      "importance-of-digital-marketing":
        "Importance of Digital Marketing: Drive Business | Digital Regenesys",
      "why-is-digital-marketing-important":
        "Why is Digital Marketing Important?: Key Insights | Digital Regenesys",

      // ====================PM=========================
      "project-management-courses":
        "Project Management Courses: Develop Skills | Digital Regenesys",
      "project-management-course":
        "Project Management Course: Master the Art | Digital Regenesys",
      "project-management-courses-online":
        "Project Management Courses Online | Digital Regenesys",
      "project-manager-course":
        "Project Manager Course: Leadership & Efficiency | Digital Regenesys",
      "online-project-management-courses":
        "Online Project Management Courses | Digital Regenesys",
      "project-managment-courses":
        "Project Management Courses: Master Skills | Digital Regenesys",
      "what-skills-can-you-get-from-managing-it-projects-course":
        "Managing IT Projects Course: Develop Skills | Digital Regenesys",
      "courses-in-project-management":
        "Courses in Project Management: Tailor Learning | Digital Regenesys",
      "online-course-for-project-management":
        "Online Course for Project Management | Digital Regenesys",
      "online-course-in-project-management":
        "Online Course in Project Management | Digital Regenesys",
      "project-management-online-course":
        "Project Management Online Course: Master Skills | Digital Regenesys",
      "project-manager-courses":
        "Project Manager Courses: Leadership Excellence | Digital Regenesys",
      "project-managing-courses":
        "Project Managing Courses: Practical Training | Digital Regenesys",
      "project-management-certification-courses":
        "Project Management Certification Courses | Digital Regenesys",
      "project-management-course-online":
        "Project Management Course Online | Digital Regenesys",
      "project-management-online-courses":
        "Project Management Online Courses | Digital Regenesys",
      "project-management-training-courses":
        "Project Management Training Courses | Digital Regenesys",
      "agile-project-management-course":
        "Agile Project Management Course: Master Skills | Digital Regenesys",
      "construction-project-management-courses":
        "Construction Project Management Courses | Digital Regenesys",
      "best-project-management-courses":
        "Best Project Management Courses: Top Learning | Digital Regenesys",
      "online-courses-project-management":
        "Online Courses Project Management: Best Learning | Digital Regenesys",
      "online-project-management-course":
        "Online Project Management Course: Learn Anytime | Digital Regenesys",
      "project-manager-courses-online":
        "Project Manager Courses Online: Leadership Excellence | Digital Regenesys",
      "project-managment-course":
        "Project Management Course: Comprehensive Training | Digital Regenesys",
      "course-in-project-management":
        "Course in Project Management: Master Skills | Digital Regenesys",
      "project-management-courses-for-beginners":
        "Project Management Courses for Beginners | Digital Regenesys",
      "project-management-on-line-courses":
        "Project Management Online Courses | Digital Regenesys",
      // ====================CS=========================
      "cyber-security-course":
        "Cyber Security Course: Master Digital Defense | Digital Regenesys",
      "cyber-security-courses":
        "Cyber Security Courses: Diverse Learning Paths | Digital Regenesys",
      "cyber-security-courses-online":
        "Cyber Security Courses Online: Master with Digital Regenesys",
      "cyber-security-course-online":
        "Cyber Security Course Online: Learn Anytime | Digital Regenesys",
      "online-cyber-security-course":
        "Online Cyber Security Course: Practical Training | Digital Regenesys",
      "online-cyber-security-courses":
        "Online Cyber Security Courses: Flexible Learning | Digital Regenesys",
      "cyber-security-online-courses":
        "Cyber Security Online Courses: Master Skills | Digital Regenesys",
      "courses-for-cyber-security":
        "Courses for Cyber Security: Tailored Learning | Digital Regenesys",
      "courses-cyber-security":
        "Courses Cyber Security: Learn the Essentials | Digital Regenesys",
      "cyber-security-training-courses":
        "Cyber Security Training Courses | Digital Regenesys",
      "cyber-security-courses-for-beginners":
        "Cyber Security Courses for Beginners | Digital Regenesys",
      "online-course-for-cyber-security":
        "Online Course for Cyber Security | Digital Regenesys",
      "courses-in-cyber-security":
        "Courses in Cyber Security: Specialized Training | Digital Regenesys",
      "cyber-security-courses-near-me":
        "Cyber Security Courses Near Me: Local Learning | Digital Regenesys",
      "cyber-security-online-course":
        "Cyber Security Online Course: Master Skills | Digital Regenesys",
      "best-cyber-security-courses":
        "Best Cyber Security Courses: Quality Learning | Digital Regenesys",
      "cyber-security-courses-offered":
        "Cyber Security Courses Offered: Explore Courses | Digital Regenesys",
      "government-funded-cyber-security-courses":
        "Government Funded Cyber Security Courses | Digital Regenesys",
      "online-courses-for-cyber-security":
        "Online Courses for Cyber Security: Flexible Learning | Digital Regenesys",

      // ====================AI=========================
      "artificial-intelligence-course":
        "Artificial Intelligence Course: Master AI | Digital Regenesys",
      "artificial-general-intelligence-course":
        "Artificial General Intelligence Course | Digital Regenesys",
      "artificial-intelligence-courses":
        "Artificial Intelligence Courses | Digital Regenesys",
      "artificial-intelligence-online-course":
        "Artificial Intelligence Online Course | Digital Regenesys",
      "course-on-artificial-intelligence":
        "Course on Artificial Intelligence| Digital Regenesys",
      "courses-on-artificial-intelligence":
        "Courses on Artificial Intelligence | Digital Regenesys",
      "course-artificial-intelligence":
        "Course Artificial Intelligence | Digital Regenesys",
      "artificial-intelligence-course-online":
        "Artificial Intelligence Course Online | Digital Regenesys",
      "best-artificial-intelligence-course":
        "Best Artificial Intelligence Course | Digital Regenesys",
      "machine-learning-and-artificial-intelligence-courses":
        "Machine Learning & Artificial Intelligence Courses | Digital Regenesys",
      "online-artificial-intelligence-courses":
        "Online Artificial Intelligence Courses | Digital Regenesys",
      "artificial-intelligence-course-free":
        "Artificial Intelligence Course Free | Digital Regenesys",
      "artificial-intelligence-course-syllabus":
        "Artificial Intelligence Course Syllabus | Digital Regenesys",
      "artificial-intelligence-training-courses":
        "Artificial Intelligence Training Courses | Digital Regenesys",
      "online-artificial-intelligence-course":
        "Online Artificial Intelligence Course | Digital Regenesys",
      "online-course-artificial-intelligence":
        "Online Course Artificial Intelligence| Digital Regenesys",

      // ====================DT=========================
      // "design-thinking": "Design Thinking: Innovate Your Solutions | Digital Regenesys",
      "design-thinking-process":
        "Design Thinking Process: Transform Ideas | Digital Regenesys",
      "what-is-design-thinking":
        "What is Design Thinking?: Explained | Digital Regenesys",
      "design-thinking-definition":
        "Design Thinking Definition: Unveiling Its Meaning | Digital Regenesys",
      "design-thinking-certification":
        "Design Thinking Certification: Validate Skills | Digital Regenesys",
      "design-thinking-course":
        "Design Thinking Course: Learn Creativity | Digital Regenesys",
      "design-thinking-process-steps":
        "Design Thinking Process Steps: Guide | Digital Regenesys",
      "design-thinking-training":
        "Design Thinking Training: Enhance Skills | Digital Regenesys",
      "design-thinking-model":
        "Design Thinking Model: Framework for Innovation | Digital Regenesys",
      "design-thinking-tools":
        "Design Thinking Tools: Empower Your Process | Digital Regenesys",
      "design-thinking-courses":
        "Design Thinking Courses: Ignite Creativity | Digital Regenesys",
      //  "design-thinking-definition": "Design Thinking Definition: Unveiling | Digital Regenesys",
      "design-thinking-stages":
        "Design Thinking Stages: Journey to Innovation | Digital Regenesys",
      "definition-of-design-thinking":
        "Definition of Design Thinking: Explored | Digital Regenesys",
      "design-thinking-approach":
        "Design Thinking Approach: Foster Creativity | Digital Regenesys",
      "5-stages-of-design-thinking":
        "5 Stages of Design Thinking: Guide to Innovation | Digital Regenesys",
      "design-thinking-jobs":
        "Design Thinking Jobs: Explore Opportunities | Digital Regenesys",
      "design-thinking-methods":
        "Design Thinking Methods: Tools for Innovation | Digital Regenesys",
      "design-thinking-step":
        "Design Thinking Step: Foster Innovation | Digital Regenesys",
      "what-is-design-thinking-process":
        "What is Design Thinking Process?: Explained | Digital Regenesys",
      "design-thinking-certificate":
        "Design Thinking Certificate: Validate Skills | Digital Regenesys",
      "design-thinking-for-educators":
        "Design Thinking for Educators: Enhance Learning | Digital Regenesys",
      "what-is-one-of-the-tools-associated-with-design-thinking":
        "Design Thinking Tools: Empower Your Process | Digital Regenesys",
      "benefits-of-design-thinking":
        "Benefits of Design Thinking: Unlock Creativity | Digital Regenesys",
      "design-thinking-bootcamp":
        "Design Thinking Bootcamp: Intensive Training | Digital Regenesys",
      "design-thinking-in-education":
        "Design Thinking in Education: Foster Creativity | Digital Regenesys",
      "design-thinking-meaning":
        "Design Thinking Meaning: Exploring Its Essence | Digital Regenesys",
      "design-thinking-methodologies":
        "Design Thinking Methodologies: Explained | Digital Regenesys",
      "systems-thinking-vs-design-thinking":
        "Systems Thinking vs Design Thinking | Digital Regenesys",

      // ====================FSD=========================

      "full-stack-developer":
        "Full Stack Developer: Master of All Trades | Digital Regenesys",
      "full-stack-developer-salary":
        "Full Stack Developer Salary: Insights | Digital Regenesys",
      "what-is-a-full-stack-developer":
        "What is a Full Stack Developer?: Explained | Digital Regenesys",
      // "full-stack-development": "Full Stack Development: Comprehensive Solutions | Digital Regenesys",
      "full-stack-developer-jobs":
        "Full Stack Developer Jobs: Explore Opportunities | Digital Regenesys",
      "what-is-full-stack-development":
        "What is Full Stack Development?: Unveiling | Digital Regenesys",
      "full-stack-web-developer":
        "Full Stack Web Developer: Web Solutions | Digital Regenesys",
      "full-stack-web-development":
        "Full Stack Web Development: Front & Back-end | Digital Regenesys",
      "full-stack-development-course":
        "Full Stack Development Course: Explained | Digital Regenesys",
      "what-is-full-stack-web-development":
        "What is Full Stack Web Development? | Digital Regenesys",
      // "what-is-full-stack-development": "What is Full-Stack Development? Overview | Digital Regenesys",
      "full-stack-development-certificate":
        "Full Stack Development Certificate | Digital Regenesys",
      "full-stack-web-development-certificate":
        "Full Stack Web Development Certificate | Digital Regenesys",
      "full-stack-web-development-certification":
        "Full Stack Web Development Certification | Digital Regenesys",
      "what-is-full-stack-software-development":
        "What is Full Stack Software Development? | Digital Regenesys",
      "full-stack-development-courses":
        "Full Stack Development Courses: Enhance Skills | Digital Regenesys",
      "full-stack-development-meaning":
        "Full Stack Development Meaning: Understanding | Digital Regenesys",
      "full-stack-software-development":
        "Full Stack Software Development: Create Solutions | Digital Regenesys",
      "learn-full-stack-web-development":
        "Learn Full Stack Web Development | Digital Regenesys",

      // ====================DBA=========================
      "/data-analysis": "Data Analysis - Extract Insights | Digital Regenesys",
      "/business-analytics":
        "Business Analytics - Drive Decision Making | Digital Regenesys",
      "/what-is-business-analytics":
        "What is Business Analytics? - Unveiled | Digital Regenesys",
      "/what-is-data-analysis":
        "What is Data Analysis? - Explained | Digital Regenesys",
      "/data-analysis-definition":
        "Data Analysis Definition - Understanding Its Imp | Digital Regenesys",
      "/data-analysis-example":
        "Data Analysis Example - Illustrating Insights | Digital Regenesys",
      "/data-analysis-methods":
        "Data Analysis Methods - Uncover Techniques | Digital Regenesys",
      "/data-analysis-techniques":
        "Data Analysis Techniques - Explore Strategies | Digital Regenesys",
      "/types-of-data-analysis":
        "Types of Data Analysis - Diverse Approaches | Digital Regenesys",
      "/data-analysis-meaning":
        "Data Analysis Meaning - Delve Into Significance | Digital Regenesys",
      "/data-analysis-steps":
        "Data Analysis Steps - Navigate the Process | Digital Regenesys",
      "/no-code-tools":
        "No Code Tools - Simplify Development | Digital Regenesys",
      "/business-analytics-meaning":
        "Business Analytics Meaning - Unlock Insights | Digital Regenesys",
      "/data-science-and-business-analytics":
        "Data Science and Business Analytics - Insights | Digital Regenesys",
      "/define-business-analytics":
        "Define Business Analytics - Know Its Role | Digital Regenesys",
      "/data-science-and-business-analytics-degree":
        "Data Science and Business Analytics Degree | Digital Regenesys",
      "/data-science-and-business-analytics-course":
        "Data Science and Business Analytics Course | Digital Regenesys",
      "/data-science-and-business-analytics-salary":
        "Data Science and Business Analytics Salary | Digital Regenesys",
      "/difference-between-data-science-and-business-analytics":
        "Difference Between Data Science and Business Analytics | Digital Regenesys",
      "/data-science-and-business-analytics-online-course":
        "Data Science and Business Analytics Online Course | Digital Regenesys",
      "/what-is-data-science-and-business-analytics":
        "What is Data Science and Business Analytics?| Digital Regenesys",

      // ====================MP=========================

      "/mdp": "MDP (Management Development Programme)| Digital Regenesys",
      "/management-development-courses":
        "Management Development Courses  | Digital Regenesys",
      "/management-certificate-programs":
        "Management Certificate Programs | Digital Regenesys",
      "/management-development-program":
        "Management Development Program - Grow Leadership | Digital Regenesys",
      "/mdp-meaning":
        "MDP Meaning - Unveiling Its Significance | Digital Regenesys",
      "/management-development-programs-include":
        "Management Development Programs Include | Digital Regenesys",
      "/leadership-and-management-development":
        "Leadership and Management Development  | Digital Regenesys",
      "/professional-development-courses-for-managers":
        "Professional Development Courses for Managers | Digital Regenesys",
      "/best-management-development-programs":
        "Best Management Development Programs | Digital Regenesys",
      "/management-development-program-jobs":
        "Management Development Program Jobs | Digital Regenesys",
      "/management-development-program-salary":
        "Management Development Program Salary | Digital Regenesys",
    },
    keywords: {
      home: `
        online courses, 
        e-learning, digital education, 
        distance learning, 
        virtual classrooms, 
        online education, 
        internet-based courses, 
        self-paced learning, 
        digital training, 
        web-based instruction, 
        remote education, 
        professional development, 
        career advancement, 
        skill-building
        digital marketing courses, 
        social media courses, 
        SEO courses, 
        web development courses, 
        graphic design courses, 
        programming courses, 
        language courses, 
        business courses, 
        leadership courses, 
        project management courses, 
        data analysis courses, 
        cybersecurity courses, 
        Online Certification Courses, 
        Data science online classes, 
        Professional development courses, 
        Skill upgrade courses, 
        Career enhancement courses, 
        Tech courses online, 
        Data Analytics Course, 
        Online Education, 
        Online courses, 
        digital courses
      `,
      about: `
        about digital regenesys, 
        best digital courses, 
        best digital regenesys courses online
        `,
      allCourse: `
        Online learning, 
        E-learning, Digital courses, 
        Distance education, 
        Web-based training, 
        Blended learning, 
        Virtual classrooms, 
        Educational technology, 
        Self-paced learning, 
        Skill development, 
        Professional development, 
        Continuing education, 
        Personalized learning
      `,
      contact: "Contact Us",
      privacyPolicy: "Privacy and Policy",
      refundPolicy: "Refund Policy",
      termsCondition:
        "All academic and accredited Courses are subject to academic rules, regulations and applicable domestic legislation as published and revised from time-to-time.",
      search: "Search - DR Website",
      register: "Register",
      "data-and-business-analytics":
        "data and business analytics, data and business analytics no-code course, data science in business analytics, data science in business analytics no code course, data science, business analytics, no code course, digital Regenesys",
      login: "Login",
      edforall: "Ed For All",
      cryptoCurrency: "Crypto Currency",
      "cyber-security": `
      cyber security, cyber security course, what is cyber security, cyber security jobs, cyber security poster, cyber security salary, cyber security ppt, types of cyber security, cyber security certifications, importance of cyber security, cyber security awareness, cyber security course fees, cyber security definition
      `,
      "digital-marketing": `
        Digital Regenesys, 
        digital skills, 
        digital marketing course, 
        data science course, 
        project management course, 
        cyber security courses, 
        online courses, 
        digital marketing,
        digital marketing course,
        what is digital marketing,
        digital school of marketing,
        digital marketing meaning,
        digital marketing salary,
        digital marketing strategy,
        fundamentals of digital marketing,
        digital marketing courses in south africa,
        online digital marketing courses,
        career in digital marketing,
        digital marketing degree
      `,
      "full-stack-development": `
        full stack web development, full stack software development, full stack web and software development course, what is full stack development, full stack software development course, full stack web development course, full stack web developer, full stack development certificate
        `,

      "operations-and-supply-chain-management":
        "operations and supply chain management, operations management course, supply chain management course, supply chain management, operations management processes and supply chains, supply chain management online course, online supply chain management courses, operations management short courses in south africa , operations management online course,  operations management courses online , bachelor of commerce in supply chain and operations management, best online courses for supply chain management, supply chain management certification courses online        ",

      "basic-digital-marketing": `
        Basic Digital Marketing Course, 
        Basic Digital Marketing Course details, 
        Basic Digital Marketing Course eligibility, 
        Basic Digital Marketing Course fees, 
        Basic Digital Marketing Course duration, 
        best Basic Digital Marketing Course, 
        Basic Digital Marketing Course online
        `,
      "digital-marketing-fundamentals":
        "digital marketing, digital marketing course, online digital marketing course, digital marketing certification, digital marketing training, digital marketing for beginners, digital marketing for business, digital marketing for startups, digital marketing for small businesses, digital marketing fundamental course, digital marketing fundamental course details, digital marketing fundamental course durations, digital marketing fundamental course scope, digital marketing fundamental course fees",
      "advanced-digital-marketing": `
        Advance Digital Marketing, 
        Advance Digital Marketing Course, 
        advance digital marketing course syllabus, 
        advance digital marketing courses online, 
        advance digital marketing course book pdf, 
        advance digital marketing course pdf, 
        advance digital marketing courses london, 
        advance online courses in digital marketing
      `,
      "applied-digital-marketing": `
        applied Digital Marketing Course, 
        applied Digital Marketing Course details, 
        applied Digital Marketing Course eligibility, 
        applied Digital Marketing Course fees, 
        applied Digital Marketing Course duration, 
        best applied Digital Marketing Course, 
        applied Digital Marketing Course online
        `,
      "advance-digital-marketing-course":
        "digital marketing, digital marketing course, online digital marketing course, digital marketing certification, digital marketing training, digital marketing for beginners, digital marketing for business, digital marketing for startups, digital marketing for small businesses, Advance Digital Marketing Strategies course, Advance Digital Marketing Strategies course details, Advance Digital Marketing Strategies course durations, Advance Digital Marketing Strategies course scope, Advance Digital Marketing Strategies course fees",
      "project-management": `
        project management courses online, 
        best online project management courses, 
        online courses project management, 
        project management certification online courses, 
        project management courses online australia, 
        best online project management certification courses, 
        it project management certification online courses, 
        online project management courses ireland, 
        online project management degree courses, 
        project management basics an official pmi online course review
      `,
      "software-development": `
      software Development, 
      software Development course,
      what is Software Development, 
      where to study Software Development  in South Africa,
      Software Development  in South Africa,
      Software Development  jobs in South Africa,
      Software Development Courses South Africa,
      Software Development  online course,
      Software Development  subjects,
    `,
      "design-thinking":
        "design thinking, design thinking course, design thinking course duration, design thinking course fees, online design thinking course, design thinking certification, design thinking boot camp, design thinking training, design thinking for beginners, design thinking for business, design thinking for innovation, design thinking for problem solving",
      "data-science": `
        data science, 
        explore data science academy, 
        data science course, 
        what is data science, 
        data science course south africa, 
        data science south africa, 
        Data science courses South Africa,
        Data science training South Africa, 
        Best data science courses in South Africa, 
        Data science certification South Africa, 
        Data analytics courses South Africa, 
        Machine learning courses South Africa, 
        Python for data science courses South Africa, R programming for data science courses South Africa, 
        Data science bootcamp South Africa, 
        Big data courses South Africa, 
        Business analytics courses South Africa, 
        Artificial intelligence courses South Africa, 
        Data engineering courses South Africa, 
        Data visualization courses South Africa, 
        Data science online courses South Africa, 
        Data science skills South Africa, 
        Data science jobs South Africa, 
        Data science salary South Africa, 
        Data science career path South Africa, 
        Data science universities in South Africa
        `,
      "advanced-data-science": `
      best advanced data science courses, advanced data science, advanced python for data science, advanced data science courses`,
      "applied-data-science": `
      applied data science with python specialization, applied statistics vs data science, applied data science with python, applied data science with python specialization review, applied data science, applied data science course, what is applied data science
      `,
      "basic-data-science": "basic data science, basic data science course",

      thankYou: "Thank You",
      createMyWealth:
        "investing course, trading course, finance course, investment courses, investment courses in south africa, finance courses in south africa, distance learning finance courses, trading course in south africa",

      Blog: `
      data science course blog, data analyst, data scientist, machine learning, artificial intelligence, big data, predictive analytics, business intelligence, data visualization, data mining, statistics, digital marketing, marketing, advertising, social media marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, email marketing, lead generation, customer relationship management (CRM), marketing automation, project management, project manager, project planning, project execution, project control, project risk management, project communication, project team management, project budget management, project quality management, cyber security, information security, information assurance, computer security, network security, data security, application security, operational security, physical security, compliance, design thinking, human-centered design, innovation, creativity, problem solving, ideation, prototyping, testing, implementation
      `,
      "artificial-intelligence":
        "AI training, online AI course, AI certification, machine learning, deep learning, AI algorithms, AI applications, AI programming, AI skills, Artificial Intelligence course, AI training, machine learning, deep learning, neural networks, natural language processing, computer vision, AI algorithms, AI applications.",
      "ai-introductory":
        "AI training, online AI course, AI certification, machine learning, deep learning, AI algorithms, AI applications, AI programming, AI skills, Artificial Intelligence course, AI training, machine learning, deep learning, neural networks, natural language processing, computer vision, AI algorithms, AI applications.",
      "ai-intermediary":
        " AI training, online AI course, AI certification, machine learning, deep learning, AI algorithms, AI applications, AI programming, AI skills, Artificial Intelligence course, AI training, machine learning, deep learning, neural networks, natural language processing, computer vision, AI algorithms, AI applications.",
      "ai-advanced-applied":
        "AI training, online AI course, AI certification, machine learning, deep learning, AI algorithms, AI applications, AI programming, AI skills, Artificial Intelligence course, AI training, machine learning, deep learning, neural networks, natural language processing, computer vision, AI algorithms, AI applications.",
      "management-advancement":
        "Management Advancement course, Management Advancement course online, Management Advancement course career opportunities, leadership and Management Advancement, Management Advancement certification course, digital regenesys",
      "product-management": `
        product management courses,
        product management course,
        best product management courses,
        product management courses online,
        online product management courses,
        product management online courses,
        product management course online,
        product management certification courses
        `,
      //  -------------multiplepages brand--------------------

      "online-courses": BrandKeyword,
      "online-course": BrandKeyword,
      "courses-online": BrandKeyword,
      "online-coding-courses": BrandKeyword,
      "online-courses-with-certificates": BrandKeyword,
      "online-certification-courses": BrandKeyword,
      "coding-courses-online": BrandKeyword,
      "IT-courses-online": BrandKeyword,
      "online-certificate-courses": BrandKeyword,
      "online-courses-for-adults": BrandKeyword,
      "best-online-courses": BrandKeyword,
      "online-it-courses": BrandKeyword,
      "online-certificate-course": BrandKeyword,
      "online-courses-certificates": BrandKeyword,
      "online-training-courses": BrandKeyword,
      "certificate-courses-online": BrandKeyword,
      //  -------------multiplepages brand--------------------
      "data-science-course": DsKeyword,
      "data-science-courses": DsKeyword,
      "courses-in-data-science": DsKeyword,
      "course-for-data-science": DsKeyword,
      "data-science-online-courses": DsKeyword,
      "data-science-course-online": DsKeyword,
      "courses-data-science": DsKeyword,
      "online-data-science-courses": DsKeyword,
      "best-data-science-courses": DsKeyword,
      "a-crash-course-in-data-science": DsKeyword,
      "data-science-courses-online": DsKeyword,
      "python-data-science-course": DsKeyword,
      "best-online-data-science-courses": DsKeyword,
      "data-science-certification-course": DsKeyword,
      "online-course-in-data-science": DsKeyword,
      "online-data-science-course": DsKeyword,
      ///===============================DM============================
      // "digital-marketing": "",
      "what-is-digital-marketing": DMkeyword,
      "digital-marketing-jobs": DMkeyword,
      "digital-marketing-salary": DMkeyword,
      "digital-marketer": DMkeyword,
      "digital-marketing-course": DMkeyword,
      "digital-marketing-strategy": DMkeyword,
      "digital-marketing-certificate": DMkeyword,
      "google-digital-marketing-certification": DMkeyword,
      "digital-marketing-courses": DMkeyword,
      "digital-marketing-near-me": DMkeyword,
      "digital-marketing-specialist": DMkeyword,
      "digital-marketing-certification": DMkeyword,
      "digital-marketing-degree": DMkeyword,
      "digital-marketing-tools": DMkeyword,
      "digital-marketing-training": DMkeyword,
      "digital-marketing-certificates": DMkeyword,
      "digital-marketing-institute": DMkeyword,
      "digital-marketing-strategies": DMkeyword,
      "digital-marketing-course-online": DMkeyword,
      "digital-marketing-definition": DMkeyword,
      "digital-marketing-examples": DMkeyword,
      "digital-marketing-meaning": DMkeyword,
      "digital-marketing-trends": DMkeyword,
      "learn-digital-marketing": DMkeyword,
      "types-of-digital-marketing": DMkeyword,
      "digital-marketer-salary": DMkeyword,
      "digital-marketing-classes": DMkeyword,
      "digital-marketing-online-courses": DMkeyword,
      "online-digital-marketing-courses": DMkeyword,
      "what-is-a-digital-marketer": DMkeyword,
      "digital-marketing-courses-online": DMkeyword,
      "google-digital-marketing-course": DMkeyword,
      "how-to-become-a-digital-marketer": DMkeyword,
      "how-to-do-digital-marketing": DMkeyword,
      "how-to-start-digital-marketing": DMkeyword,
      "online-digital-marketing": DMkeyword,
      "digital-marketing-blogs": DMkeyword,
      "digital-marketing-careers": DMkeyword,
      "digital-marketing-certificate-online": DMkeyword,
      "digital-marketing-certifications": DMkeyword,
      "fundamentals-of-digital-marketing": DMkeyword,
      "online-digital-marketing-course": DMkeyword,
      "what-does-a-digital-marketer-do": DMkeyword,
      "what's-digital-marketing": DMkeyword,
      "best-digital-marketing-services": DMkeyword,
      "certificate-in-digital-marketing": DMkeyword,
      "digital-marketing-platforms": DMkeyword,
      "digital-marketing-tips": DMkeyword,
      "masters-in-digital-marketing": DMkeyword,
      "what-is-a-digital-marketing": DMkeyword,
      "best-digital-marketing-courses": DMkeyword,
      "definition-of-digital-marketing": DMkeyword,
      "digital-marketing-degree-online": DMkeyword,
      "digital-marketing-degrees": DMkeyword,
      "digital-marketing-experts": DMkeyword,
      "digital-marketing-online": DMkeyword,
      "examples-of-digital-marketing": DMkeyword,
      "how-to-learn-digital-marketing": DMkeyword,
      "future-of-digital-marketing": DMkeyword,
      "importance-of-digital-marketing": DMkeyword,
      "why-is-digital-marketing-important": DMkeyword,

      // ====================PM=========================
      "project-management-courses": PmKeyword,
      "project-management-course": PmKeyword,
      "project-management-courses-online": PmKeyword,
      "project-manager-course": PmKeyword,
      "online-project-management-courses": PmKeyword,
      "project-managment-courses": PmKeyword,
      "what-skills-can-you-get-from-managing-it-projects-course": PmKeyword,
      "courses-in-project-management": PmKeyword,
      "online-course-for-project-management": PmKeyword,
      "online-course-in-project-management": PmKeyword,
      "project-management-online-course": PmKeyword,
      "project-manager-courses": PmKeyword,
      "project-managing-courses": PmKeyword,
      "project-management-certification-courses": PmKeyword,
      "project-management-course-online": PmKeyword,
      "project-management-online-courses": PmKeyword,
      "project-management-training-courses": PmKeyword,
      "agile-project-management-course": PmKeyword,
      "construction-project-management-courses": PmKeyword,
      "best-project-management-courses": PmKeyword,
      "online-courses-project-management": PmKeyword,
      "online-project-management-course": PmKeyword,
      "project-manager-courses-online": PmKeyword,
      "project-managment-course": PmKeyword,
      "course-in-project-management": PmKeyword,
      "project-management-courses-for-beginners": PmKeyword,
      "project-management-on-line-courses": PmKeyword,
      // ====================CS=========================
      "cyber-security-course": CsKeyword,
      "cyber-security-courses": CsKeyword,
      "cyber-security-courses-online": CsKeyword,
      "cyber-security-course-online": CsKeyword,
      "online-cyber-security-course": CsKeyword,
      "online-cyber-security-courses": CsKeyword,
      "cyber-security-online-courses": CsKeyword,
      "courses-for-cyber-security": CsKeyword,
      "courses-cyber-security": CsKeyword,
      "cyber-security-training-courses": CsKeyword,
      "cyber-security-courses-for-beginners": CsKeyword,
      "online-course-for-cyber-security": CsKeyword,
      "courses-in-cyber-security": CsKeyword,
      "cyber-security-courses-near-me": CsKeyword,
      "cyber-security-online-course": CsKeyword,
      "best-cyber-security-courses": CsKeyword,
      "cyber-security-courses-offered": CsKeyword,
      "government-funded-cyber-security-courses": CsKeyword,
      "online-courses-for-cyber-security": CsKeyword,
      // ====================AI=========================
      "artificial-intelligence-course": AiKeyword,
      "artificial-general-intelligence-course": AiKeyword,
      "artificial-intelligence-courses": AiKeyword,
      "artificial-intelligence-online-course": AiKeyword,
      "course-on-artificial-intelligence": AiKeyword,
      "courses-on-artificial-intelligence": AiKeyword,
      "course-artificial-intelligence": AiKeyword,
      "artificial-intelligence-course-online": AiKeyword,
      "best-artificial-intelligence-course": AiKeyword,
      "machine-learning-and-artificial-intelligence-courses": AiKeyword,
      "online-artificial-intelligence-courses": AiKeyword,
      "artificial-intelligence-course-free": AiKeyword,
      "artificial-intelligence-course-syllabus": AiKeyword,
      "artificial-intelligence-training-courses": AiKeyword,
      "online-artificial-intelligence-course": AiKeyword,
      "online-course-artificial-intelligence": AiKeyword,
      //==================FSD==========================
      "full-stack-developer": FsdKeyword,
      "full-stack-developer-salary": FsdKeyword,
      "what-is-a-full-stack-developer": FsdKeyword,
      // "full-stack-development": FsdKeyword,
      "full-stack-developer-jobs": FsdKeyword,
      "what-is-full-stack-development": FsdKeyword,
      "full-stack-web-developer": FsdKeyword,
      "full-stack-web-development": FsdKeyword,
      "full-stack-development-course": FsdKeyword,
      "what-is-full-stack-web-development": FsdKeyword,
      // "what-is-full-stack-development": FsdKeyword,
      "full-stack-development-certificate": FsdKeyword,
      "full-stack-web-development-certificate": FsdKeyword,
      "full-stack-web-development-certification": FsdKeyword,
      "what-is-full-stack-software-development": FsdKeyword,
      "full-stack-development-courses": FsdKeyword,
      "full-stack-development-meaning": FsdKeyword,
      "full-stack-software-development": FsdKeyword,
      "learn-full-stack-web-development": FsdKeyword,
      //=================DT===========================
      // "design-thinking": DtKeyword,
      "design-thinking-process": DtKeyword,
      "what-is-design-thinking": DtKeyword,
      "design-thinking-definition": DtKeyword,
      "design-thinking-certification": DtKeyword,
      "design-thinking-course": DtKeyword,
      "design-thinking-process-steps": DtKeyword,
      "design-thinking-training": DtKeyword,
      "design-thinking-model": DtKeyword,
      "design-thinking-tools": DtKeyword,
      "design-thinking-courses": DtKeyword,
      "design-thinking-stages": DtKeyword,
      "definition-of-design-thinking": DtKeyword,
      "design-thinking-approach": DtKeyword,
      "5-stages-of-design-thinking": DtKeyword,
      "design-thinking-jobs": DtKeyword,
      "design-thinking-methods": DtKeyword,
      "design-thinking-step": DtKeyword,
      "what-is-design-thinking-process": DtKeyword,
      "design-thinking-certificate": DtKeyword,
      "design-thinking-for-educators": DtKeyword,
      "what-is-one-of-the-tools-associated-with-design-thinking": DtKeyword,
      "benefits-of-design-thinking": DtKeyword,
      "design-thinking-bootcamp": DtKeyword,
      "design-thinking-in-education": DtKeyword,
      "design-thinking-meaning": DtKeyword,
      "design-thinking-methodologies": DtKeyword,
      "systems-thinking-vs-design-thinking": DtKeyword,

      //=================MP===========================
      mdp: mdpKeyword,
      "management-development-courses": mdpKeyword,
      "management-certificate-programs": mdpKeyword,
      "management-development-program": mdpKeyword,
      "mdp-meaning": mdpKeyword,
      "management-development-programs-include": mdpKeyword,
      "leadership-and-management-development": mdpKeyword,
      "professional-development-courses-for-managers": mdpKeyword,
      "best-management-development-programs": mdpKeyword,
      "management-development-program-jobs": mdpKeyword,
      "management-development-program-salary": mdpKeyword,
      //=================DBA===========================
      "data-analysis": DbaKeyword,
      "business-analytics": DbaKeyword,
      "what-is-business-analytics": DbaKeyword,
      "what-is-data-analysis": DbaKeyword,
      "data-analysis-definition": DbaKeyword,
      "data-analysis-example": DbaKeyword,
      "data-analysis-methods": DbaKeyword,
      "data-analysis-techniques": DbaKeyword,
      "types-of-data-analysis": DbaKeyword,
      "data-analysis-meaning": DbaKeyword,
      "data-analysis-steps": DbaKeyword,
      "no-code-tools": DbaKeyword,
      "business-analytics-meaning": DbaKeyword,
      "data-science-and-business-analytics": DbaKeyword,
      "define-business-analytics": DbaKeyword,
      "data-science-and-business-analytics-degree": DbaKeyword,
      "data-science-and-business-analytics-course": DbaKeyword,
      "data-science-and-business-analytics-salary": DbaKeyword,
      "difference-between-data-science-and-business-analytics": DbaKeyword,
      "data-science-and-business-analytics-online-course": DbaKeyword,
      "what-is-data-science-and-business-analytics": DbaKeyword,
    },

    description: {
      home: "Upskill yourself with Digital Regensys online courses for digital-age skills to become future-ready for the dynamic workplace in the disruptive digital age.",
      about:
        "At Digital Regenesys, we provide top-notch education to empower all students for success in the 5th Industrial Revolution and beyond. Discover our digital courses now.",
      "management-advancement":
        "With Management Advancement Course online at Digital Regenesys, explore career-enhancing opportunities and gain leadership skills & certification. Enroll Now!",

      "operations-and-supply-chain-management":
        "Operations & Supply Chain Management Course online at Digital Regenesys offers industry-relevant skills for success. Unlock your potential today.        ",

      "product-management":
        "Best product management courses online. Find the best product management certification courses to enhance your skills and advance your career. Enrol today!        ",
      allCourse:
        "Unlock your career potential with our professional courses. Expert instruction and flexible learning options to help you achieve your goals. Enroll now!",
      "data-and-business-analytics":
        "Data and Business Analytics No-Code Course: Unlock the power of data with Digital Regenesys. Dive into Data Science in Business Analytics without coding. Enrol Now!        ",
      contact:
        "Contact Digital Regenesys at info.digital@regenesys.net for all enqueries relating to our online courses such as Cybersecurity and Digital Marketing. Enquire now.",
      privacyPolicy:
        "Your privacy is important to us. We hold your personal information private. Visit Digital Regenesys website for more details about privacy statements.",
      refundPolicy:
        "To claim refund, kindly drop an email on: info.digital@regenesys.net Online course refund",
      termsCondition:
        "All academic and accredited courses are subject to academic rules, regulations and applicable domestic legislation as published and revised from time-to-time.",
      search: "Search - DR Website",
      register: "Register",
      login: "Login",
      "full-stack-development":
        "Learn Full Stack Web & Software Development Course and earn your full stack development certificate. Choose the best full stack developer course for your career growth.        ",
      edforall: "Ed For All",
      cryptoCurrency: "Crypto Currency",
      "cyber-security":
        "High-quality Cyber Security course from Digital Regenesys. Learn all about network threats, vulnerabilities, data security, risk management, and much more.",
      "digital-marketing":
        "Digital marketing, advance your career in a Digital Marketing course with Digital Regenesys. We offer a Digital marketing course to help you achieve your career goals.",
      "basic-digital-marketing":
        "The basic digital marketing course offered by Digital Regenesys lays a solid foundation of essential digital marketing domains. Visit our website to explore more.",
      "digital-marketing-fundamentals":
        "Learn the fundamentals of digital marketing with our online course. Gain the skills you need to launch or grow your business online. Enrol today!",
      "advanced-digital-marketing":
        "The advance digital marketing course offered by Digital Regenesys equips students with advanced knowledge of digital marketing domains and hands-on projects.",
      "applied-digital-marketing":
        "The applied digital marketing course offered by Digital Regenesys equips students with real-world applications of Digital Marketing taught by industry experts. ",
      "advance-digital-marketing-course":
        "Advance your digital marketing career with our online course. Learn from industry experts and develop the skills you need to create and execute successful digital marketing strategies.",
      "project-management":
        "Study a Project Management course with Digital Regenesys to acquire the know-how on managing projects successfully. Enquire now.",
      "software-development":
        "Software Development  Course - Master coding skills and advance your career with our comprehensive online programme. Enrol now for transformative learning!",
      "design-thinking":
        "Unlock your creative potential with our Design Thinking Course Online. Discover innovative problem-solving techniques at Digital Regnesys. Enrol now!",
      "data-science":
        "Data Science, advance your career in a Data Science course with Digital Regenesys. We offer a Data Science course to help you achieve your career goals.",
      "advanced-data-science":
        "Advanced Data Science course will help you build a successful career as a Data Scientist with in-demand skills such as data analytics, machine learning, AI, and more.",
      "applied-data-science":
        "Applied Data Science course will help you build a successful career as a Data Scientist with in-demand skills such as data analytics, machine learning, AI, and more.",
      "basic-data-science":
        "Basic Data Science course will help you build a successful career as a Data Scientist with in-demand skills such as data analytics, machine learning, AI, and more.",
      thankYou: "Thank You",
      createMyWealth:
        "Digital Regenesys offers an all in one trading course, investment course, and finance course. Enrol for the Investment, Trading & Personal Finance course. Enquire now.",

      Blog: `
     Discover the Digital Regenesys Blog - unlock digital transformation's power. Get insights, guidance, and success stories to stay ahead in the digital era.
      `,
      "artificial-intelligence":
        "Learn Artificial Intelligence with our online course at Digital Regenesys. Get practical skills & advance your career in AI. Enrol now for comprehensive AI training.",
      "ai-introductory":
        "Get a comprehensive introduction to Artificial Intelligence with Digital Regenesys. Boost your knowledge & skills in AI. Enrol today for our AI introductory course.",
      "ai-intermediary":
        "Advance your AI skills with our online course on Intermediary Artificial Intelligence from Digital Regenesys. Learn advanced techniques and applications. Enrol now.",
      "ai-advanced-applied":
        "Take your AI expertise to the next level with Digital Regenesys' Advanced Applied Artificial Intelligence course. Master cutting-edge AI techniques. Enrol today.",

      //  -------------multiplepages brand--------------------
      "online-courses":
        "Online Courses: Explore a variety of online courses to enhance your skills. Start learning at your own pace today. Join Digital Regenesys now!",
      "online-course":
        "Online Course: Choose an online course tailored to your interests. Enjoy the convenience of flexible learning from anywhere. Join Digital Regenesys now!",
      "courses-online":
        "Courses Online: Discover a wide range of online courses. Elevate your knowledge and skills with our diverse learning options. Join Digital Regenesys now!",
      "online-coding-courses":
        "Online Coding Courses: Unlock the world of programming with our online coding courses. Learn, code, and excel in your coding journey. Join Digital Regenesys now!",
      "online-courses-with-certificates":
        "Online Courses With Certificates: Enroll in courses with certification. Showcase your achievements with recognized certificates upon completion. Join now!",
      "online-certification-courses":
        "Online Certification Courses: Advance your career with our certified online courses. Gain expertise and earn valuable certifications. Join Digital Regenesys now!",
      "coding-courses-online":
        "Coding Courses Online: Master coding with our online courses. Explore programming languages and enhance your coding skills. Join Digital Regenesys now!",
      "IT-courses-online":
        "IT Courses Online: Stay ahead in the tech world. Enroll in our online IT courses to master the latest technologies and innovations. Join Digital Regenesys now!",
      "online-certificate-courses":
        "Online Certificate Courses: Earn industry-recognized certificates. Explore our diverse online courses and validate your expertise. Join Digital Regenesys now!",
      "online-courses-for-adults":
        "Online Courses For Adults: Embrace lifelong learning with our online courses for adults. Expand your knowledge and skills on your terms. Join Digital Regenesys now!",
      "best-online-courses":
        "Best Online Courses: Discover top-quality online courses. Elevate your knowledge with the best courses available online. Join Digital Regenesys now!",
      "online-it-courses":
        "Online IT Courses: Upgrade your tech skills with our online IT courses. Stay competitive in the ever-evolving IT landscape. Join Digital Regenesys now!",
      "online-certificate-course":
        "Online Certificate Course: Validate your proficiency with a certificate. Explore our online courses and enhance your career prospects. Join Digital Regenesys now!",
      "online-courses-certificates":
        "Online Courses Certificates: Enroll in courses with certificates. Get recognized validation for your skills with our online courses. Join Digital Regenesys now!",
      "online-training-courses":
        "Online Training Courses: Invest in your personal and professional growth. Explore our online training courses for comprehensive learning. Join Digital Regenesys now!",
      "certificate-courses-online":
        "Certificate Courses Online: Boost your skill set with our certificate courses online. Choose from a variety of courses for personal & professional development. Join now!",
      //  -------------multiplepages courses--------------------
      ///===============================Ds============================
      "data-science-course":
        "Data Science Course: Explore our comprehensive data science course. Master analytical skills and propel your career in data science. Join Digital Regenesys now!",
      "data-science-courses":
        "Data Science Courses: Discover diverse learning paths in data science. Choose from a variety of courses to enhance your data skills. Join Digital Regenesys now!",
      "courses-in-data-science":
        "Courses In Data Science: Immerse yourself in advanced learning. Discover a variety of courses in data science for skill enhancement. Join Digital Regenesys now!",
      "course-for-data-science":
        "Course For Data Science: Transform your career with our specialized data science course. Gain in-depth knowledge and practical skills. Join Digital Regenesys now!",
      "data-science-online-courses":
        "Data Science Online Courses: Enhance your data science skills with flexible online courses. Learn from industry experts at your own pace. Join Digital Regenesys now!",
      "data-science-course-online":
        "Data Science Course Online: Enroll in our online data science course. Learn at your own pace and advance your career in data science. Join Digital Regenesys now!",
      "courses-data-science":
        "Courses Data Science: Explore specializations in data science. Choose from a variety of courses to tailor your learning journey. Join Digital Regenesys now!",
      "online-data-science-courses":
        "Online Data Science Courses: Transform your data skills with our online courses. Master data science concepts and stay ahead in your career. Join Digital Regenesys now!",
      "best-data-science-courses":
        "Best Data Science Courses: Elevate your data science expertise. Discover top-quality courses to enhance your skills and knowledge. Join Digital Regenesys now!",
      "a-crash-course-in-data-science":
        "A Crash Course In Data Science: Quick and comprehensive learning path. Dive into data science with our crash course for a fast-track learning experience. Join Now!",
      "data-science-courses-online":
        "Data Science Courses Online: Master data analysis with our online courses. Explore diverse modules and gain practical data science skills. Join Digital Regenesys now!",
      "python-data-science-course":
        "Python Data Science Course: Harness the power of Python in data science. Enroll in our course to master programming for data analysis. Join Digital Regenesys now!",
      "best-online-data-science-courses":
        "Best Online Data Science Courses: Optimize your learning experience with the best online data science courses. Elevate your data skills. Join Digital Regenesys now!",
      "data-science-certification-course":
        "Data Science Certification Course: Validate your data science expertise with a certification course. Boost your career with recognized credentials. Join Now!",
      "online-course-in-data-science":
        "Online Course In Data Science: Embark on a flexible learning journey in data science. Enroll in our online course for comprehensive skill development. Join now!",
      "online-data-science-course":
        "Online Data Science Course: Flexible learning for data science enthusiasts. Enroll in our online course to master data science skills. Join Digital Regenesys now!",
      ///===============================DM============================
      // "digital-marketing":
      //   "Digital Marketing: Discover the power of digital marketing and propel your business to new heights. Learn about strategies, tools, and tactics to boost online presence.",
      "what-is-digital-marketing":
        "What is Digital Marketing: Curious about digital marketing? Learn what it entails, its importance, and how it can revolutionize your business. Get started today.",
      "digital-marketing-jobs":
        "Digital Marketing Jobs: Browse through exciting digital marketing job opportunities. Find your dream role in the dynamic world of digital marketing. Apply now!",
      "digital-marketing-salary":
        "Digital Marketing Salary: Unlock the earning potential of a career in digital marketing. Discover competitive salaries & lucrative opportunities in this thriving industry.",
      "digital-marketer":
        "Digital Marketer: Become a digital marketing expert and excel in online engagement. Join the ranks of skilled digital marketers and make an impact in the digital realm.",
      "digital-marketing-course":
        "Digital Marketing Course: Elevate your digital marketing skills with our comprehensive course. Gain practical knowledge & hands-on experience. Enroll now.",
      "digital-marketing-strategy":
        "Digital Marketing Strategy: Craft a winning digital marketing strategy for your business. Learn proven tactics & techniques to drive growth & achieve your goals.",
      "digital-marketing-certificate":
        "Digital Marketing Certificate: Earn a digital marketing certificate to validate your expertise. Stand out in the competitive job market & showcase your skills. Get certified.",
      "google-digital-marketing-certification":
        "Google Digital Marketing Certification: Get certified by Google in digital marketing. Enhance your credibility & get new career opportunities with Google's certification.",
      "digital-marketing-courses":
        "Digital Marketing Courses: Explore a variety of digital marketing courses tailored to your needs. From beginner to advanced levels, find the perfect course to boost your career.",
      "digital-marketing-near-me":
        "Digital Marketing Near Me: Discover top-rated digital marketing services near you. Connect with local experts to boost your online presence and grow your business.",
      "digital-marketing-specialist":
        "Digital Marketing Specialist: Become a digital marketing specialist to elevate your brand. Leverage expertise in SEO, PPC, and social media to achieve business goals.",
      "digital-marketing-certification":
        "Digital Marketing Certification: Earn a digital marketing certification to validate your skills. Boost your career prospects & stand out in the competitive job market.",
      "digital-marketing-degree":
        "Digital Marketing Degree: Pursue a digital marketing degree and unlock endless career opportunities. Gain in-depth knowledge and hands-on experience in digital marketing.",
      "digital-marketing-tools":
        "Digital Marketing Tools: Explore essential digital marketing tools to amplify your strategy. From analytics to automation, discover the tools that streamline your marketing efforts.",
      "digital-marketing-training":
        "Digital Marketing Training: Master the essentials of digital marketing with expert training. Gain practical skills & knowledge to excel in today's competitive landscape.",
      "digital-marketing-certificates":
        "Digital Marketing Certificates: Earn digital marketing certificates to enhance your credentials. Validate your expertise in the dynamic field of digital marketing. Join Now!",
      "digital-marketing-institute":
        "Digital Marketing Institute: Join a leading digital marketing institute and chart your path to success. Gain industry-relevant skills, certifications to thrive in the digital world.",
      "digital-marketing-strategies":
        "Digital Marketing Strategies: Discover effective digital marketing strategies to elevate your business. From SEO to social media, unlock tactics for online success.",
      "digital-marketing-course-online":
        "Digital Marketing Course Online: Enroll in our online digital marketing course. Gain essential skills and knowledge from industry experts. Start learning today!",
      "digital-marketing-definition":
        "Digital Marketing Definition: What is digital marketing? Explore its definition, importance, and impact on modern businesses. Get acquainted with digital marketing essentials.",
      "digital-marketing-examples":
        "Digital Marketing Examples: Explore inspiring digital marketing examples. Learn from successful campaigns and apply strategies to enhance your brand's online presence.",
      "digital-marketing-meaning":
        "Digital Marketing Meaning: Dive into the meaning of digital marketing. Discover its significance in today's digital landscape and its role in driving business growth.",
      "digital-marketing-trends":
        "Digital Marketing Trends: Stay updated on the latest digital marketing trends. Explore emerging technologies and strategies to stay ahead in the competitive market.",
      "learn-digital-marketing":
        "Learn Digital Marketing: Start your journey to mastering digital marketing. Access comprehensive resources and courses to become proficient in digital marketing.",
      "types-of-digital-marketing":
        "Types of Digital Marketing: Explore different types of digital marketing strategies. From SEO to email marketing, discover tactics to reach your target audience effectively.",
      "digital-marketer-salary":
        "Digital Marketer Salary: Discover the average digital marketer salary. Gain insights into compensation trends and opportunities in the digital marketing field.",
      "digital-marketing-classes":
        "Digital Marketing Classes: Join interactive digital marketing classes to enhance your skills. Learn from industry experts and gain practical knowledge to excel in digital marketing.",
      "digital-marketing-online-courses":
        "Digital Marketing Online Courses: Enroll in our flexible digital marketing online courses. Access high-quality content and expert guidance to advance your digital marketing career.",
      "online-digital-marketing-courses":
        "Online Digital Marketing Courses: Access our comprehensive online digital marketing courses. Learn essential skills and strategies to excel in the digital marketing landscape.",
      "what-is-a-digital-marketer":
        "What is a Digital Marketer: Unveil the role of a digital marketer. Explore responsibilities, skills, and career opportunities in this dynamic field.",
      "digital-marketing-courses-online":
        "Digital Marketing Courses Online: Advance your career with our online digital marketing courses. Gain practical skills and certifications to succeed in the digital marketing industry.",
      "google-digital-marketing-course":
        "Google Digital Marketing Course: Get certified with Google's digital marketing course. Learn from industry experts and gain recognition with Google's prestigious certification.",
      "how-to-become-a-digital-marketer":
        "How to Become a Digital Marketer: Learn how to become a digital marketer with our comprehensive guide. Discover essential skills, education paths, and career opportunities.",
      "how-to-do-digital-marketing":
        "How to Do Digital Marketing: Master the basics of digital marketing with our step-by-step guide. Learn essential strategies and tactics to kickstart your digital marketing journey.",
      "how-to-start-digital-marketing":
        "How to Start Digital Marketing: Ready to start your digital marketing journey? Explore our beginner's guide and learn how to launch successful digital marketing campaigns.",
      "online-digital-marketing":
        "Online Digital Marketing: Explore the power of online digital marketing. Reach your target audience effectively with strategic online marketing tactics. Start Now!",
      "digital-marketing-blogs":
        "Digital Marketing Blogs: Stay informed with the latest digital marketing trends and insights. Explore our informative blogs covering SEO, social media, and more.",
      "digital-marketing-careers":
        "Digital Marketing Careers: Explore exciting digital marketing career opportunities. Learn about roles, skills, and industry trends to kickstart your career in digital marketing.",
      "digital-marketing-certificate-online":
        "Digital Marketing Certificate Online: Earn your digital marketing certificate online. Enhance your skills and advance your career with our flexible online certification program. Enroll now!",
      "digital-marketing-certifications":
        "Digital Marketing Certifications: Validate your expertise with digital marketing certifications. Stand out in the competitive job market and advance your career in digital marketing.",
      "fundamentals-of-digital-marketing":
        "Fundamentals of Digital Marketing: Master the fundamentals of digital marketing with our essential guide. Learn key concepts to build a strong foundation in digital marketing.",
      "online-digital-marketing-course":
        "Online Digital Marketing Course: Enroll in our online digital marketing course. Learn essential skills and strategies from industry experts. Start advancing your digital marketing career today!",
      "what-does-a-digital-marketer-do":
        "What Does a Digital Marketer Do: Discover the roles and responsibilities of a digital marketer. Explore key skills, tasks, and career paths in the dynamic field of digital marketing.",
      "what's-digital-marketing":
        "What's Digital Marketing: Curious about digital marketing? Get it explained. Explore the core concepts, strategies, and importance of digital marketing in today's digital landscape.",
      "best-digital-marketing-services":
        "Best Digital Marketing Services: Grow your business with the best digital marketing services. From SEO to social media, discover effective strategies to boost your online presence.",
      "certificate-in-digital-marketing":
        "Certificate in Digital Marketing: Enhance your skills with a certificate in digital marketing. Gain practical knowledge and industry-recognized credentials to excel in digital marketing.",
      "digital-marketing-platforms":
        "Digital Marketing Platforms: Amplify your reach with digital marketing platforms. Explore tools and technologies to optimize your marketing campaigns and maximize your impact.",
      "digital-marketing-tips":
        "Digital Marketing Tips: Enhance your digital marketing strategy with our expert tips. Learn best practices, tactics, and techniques to achieve success in digital marketing.",
      "masters-in-digital-marketing":
        "Masters in Digital Marketing: Advance your career with a master's in digital marketing. Gain advanced skills and knowledge to lead successful digital marketing campaigns.",
      "what-is-a-digital-marketing":
        "What is a Digital Marketing: Unveil the concept of digital marketing. Explore its definition, scope, and significance in today's digital age.",
      "best-digital-marketing-courses":
        "Best Digital Marketing Courses: Discover the best digital marketing courses handpicked for you. From beginner to advanced levels, find the perfect course.",
      "definition-of-digital-marketing":
        "Definition of Digital Marketing: Explore the definition of digital marketing and its core concepts. Understand its significance in today's digital landscape.",
      "digital-marketing-degree-online":
        "Digital Marketing Degree Online: Pursue your digital marketing degree online. Access flexible learning options & gain industry-relevant skills to excel in the digital marketing field.",
      "digital-marketing-degrees":
        "Digital Marketing Degrees: Advance your career with digital marketing degrees. Gain specialized knowledge and credentials to unlock new opportunities in the digital marketing industry.",
      "digital-marketing-experts":
        "Digital Marketing Experts: Learn from industry leaders & digital marketing experts. Gain insights, tips & strategies to excel in the ever-evolving world of digital marketing.",
      "digital-marketing-online":
        "Digital Marketing Online: Access digital marketing education online. Learn essential skills and strategies to succeed in the digital marketing landscape from your home.",
      "examples-of-digital-marketing":
        "Examples of Digital Marketing: Get inspired by real-life examples of digital marketing campaigns. Learn from successful strategies & apply to elevate your digital marketing efforts.",
      "how-to-learn-digital-marketing":
        "How to Learn Digital Marketing: Discover expert tips on how to learn digital marketing effectively. From online courses explore various learning methods to master digital marketing.",
      "future-of-digital-marketing":
        "Future of Digital Marketing: Stay ahead of the curve with insights into the future of digital marketing. Explore emerging trends & strategies shaping the future of online marketing.",
      "importance-of-digital-marketing":
        "Importance of Digital Marketing: Understand the importance of digital marketing in today's competitive landscape. Discover how digital marketing can drive business growth. Enrol Now!",
      "why-is-digital-marketing-important":
        "Why is Digital Marketing Important: Gain key insights into why digital marketing is important for businesses. Explore its impact on brand visibility & customer engagement.",
      // ====================PM=========================
      "project-management-courses":
        "Project Management Courses: Explore our project management courses to develop leadership skills. Advance your career with comprehensive training. Join Now!",
      "project-management-course":
        "Project Management Course: Master the art of planning with our project management course. Gain practical skills for successful project delivery. Join Now!",
      "project-management-courses-online":
        "Project Management Courses Online: Enhance your skills with flexible online learning paths in project management. Explore and enroll in our courses today. Join Now!",
      "project-manager-course":
        "Project Manager Course: Elevate your leadership and efficiency with our project manager course. Learn essential skills for effective project management. Join Now!",
      "online-project-management-courses":
        "Online Project Management Courses: Learn project management online at your own pace. Explore our comprehensive courses for effective project planning and execution. Join Now!",
      "project-managment-courses":
        "Project Management Courses: Gain comprehensive training in project management. Explore our courses to excel as a project manager. Join Now!",
      "what-skills-can-you-get-from-managing-it-projects-course":
        "What Skills Can You Get From Managing It Projects Course: Explore the skills you can gain from our IT projects management course. Develop in-demand skills for IT project success.",
      "courses-in-project-management":
        "Courses In Project Management: Tailor your learning with a variety of courses in project management. Choose the right course to enhance your project skills. Join Now!",
      "online-course-for-project-management":
        "Online Course For Project Management: Convenient online learning for project management. Enroll in our course to enhance your project management skills. Join Now!",
      "online-course-in-project-management":
        "Online Course In Project Management: Explore a flexible learning path in project management. Enroll in our online course for comprehensive skill development. Join Now!",
      "project-management-online-course":
        "Project Management Online Course: Master project planning with our online course. Develop the skills needed for successful project management. Join Now!",
      "project-manager-courses":
        "Project Manager Courses: Elevate your leadership skills with our project manager courses. Develop the expertise for effective project management. Join Now!",
      "project-managing-courses":
        "Project Managing Courses: Practical training for effective project management. Explore our courses to enhance your project managing skills. Join Now!",
      "project-management-certification-courses":
        "Project Management Certification Courses: Validate your project management skills with certification courses. Boost your career with recognized credentials. Join Now!",
      "project-management-course-online":
        "Project Management Course Online: Convenient online learning for project management. Enroll in our course to enhance your project management skills. Join Now!",
      "project-management-online-courses":
        "Project Management Online Courses: Advance your career with our online courses. Master project management skills for successful project delivery. Join Now!",
      "project-management-training-courses":
        "Project Management Training Courses: Gain practical knowledge with our project management training courses. Excel as a project manager with our expert-led training. Join Now!",
      "agile-project-management-course":
        "Agile Project Management Course: Master Agile practices with our project management course. Learn to lead projects with flexibility and efficiency. Join Now!",
      "construction-project-management-courses":
        "Construction Project Management Courses: Specialized training for construction project management. Explore our courses to excel in the construction industry. Join Now!",
      "best-project-management-courses":
        "Best Project Management Courses: Discover top-quality learning with the best project management courses. Elevate your project management skills. Join Now!",
      "online-courses-project-management":
        "Online Courses Project Management: Convenient online learning for project management. Explore our courses to enhance your project management skills. Join Now!",
      "online-project-management-course":
        "Online Project Management Course: Learn project management online at your own pace. Explore our comprehensive courses for effective project planning and execution. Join Now!",
      "project-manager-courses-online":
        "Project Manager Courses Online: Elevate your leadership skills with our online project manager courses. Develop the expertise for effective project management. Join Now!",
      "project-managment-course":
        "Project Management Course: Gain comprehensive training in project management. Explore our courses to excel as a project manager. Join Digital regenesys Now!",
      "course-in-project-management":
        "Course In Project Management: Enroll in our comprehensive course in project management. Develop essential skills for successful project planning and execution. Join Now!",
      "project-management-courses-for-beginners":
        "Project Management Courses For Beginners: Start your project management journey with our beginner-friendly courses. Gain the skills for successful project management. Join Now!",
      "project-management-on-line-courses":
        "Project Management On Line Courses: Master project planning with our online courses. Develop the skills needed for successful project management. Join Now!",
      // ====================CS=========================
      "cyber-security-course":
        "Cyber Security Course: Enroll in our cyber security course to master digital defense strategies. Enhance your skills and protect against cyber threats. Join Now!",
      "cyber-security-courses":
        "Cyber Security Courses: Explore diverse learning paths in cyber security. Choose from a variety of courses to strengthen your expertise in cybersecurity. Join Now!",
      "cyber-security-courses-online":
        "Cyber Security Courses Online: Enhance your cyber security skills with flexible online courses. Learn at your own pace and become a cybersecurity expert. Join Now!",
      "cyber-security-course-online":
        "Cyber Security Course Online: Learn cyber security online at your convenience. Enroll in our online course to acquire the skills needed for digital protection.",
      "online-cyber-security-course":
        "Online Cyber Security Course: Gain practical training in cyber security with our online course. Develop expertise to safeguard against online threats. Join Now!",
      "online-cyber-security-courses":
        "Online Cyber Security Courses: Explore comprehensive learning with our online cyber security courses. Master the art of digital defense & protect systems effectively.",
      "cyber-security-online-courses":
        "Cyber Security Online Courses: Advance your cyber security skills with our online courses. Learn from experts and stay ahead in the rapidly evolving field. Join Now!",
      "courses-for-cyber-security":
        "Courses For Cyber Security: Tailor your learning in cyber security. Explore our courses to acquire specialized skills and excel in the field. Join Now!",
      "courses-cyber-security":
        "Courses Cyber Security: Learn the essentials of cyber security with our specialized courses. Equip yourself with skills to combat cyber threats. Join Now!",
      "cyber-security-training-courses":
        "Cyber Security Training Courses: Gain practical knowledge with our cyber security training courses. Excel in protecting digital assets with hands-on training. Join Now!",
      "cyber-security-courses-for-beginners":
        "Cyber Security Courses For Beginners: Start your journey in cyber security. Explore beginner-friendly courses to acquire foundational skills and knowledge. Join Now!",
      "online-course-for-cyber-security":
        "Online Course For Cyber Security: Explore flexible learning in cyber security. Enroll in our online course to acquire the skills needed for effective cyber defense.",
      "courses-in-cyber-security":
        "Courses In Cyber Security: Acquire specialized training in cyber security. Explore our courses to enhance your skills and protect against cyber threats. Join Now!",
      "cyber-security-courses-near-me":
        "Cyber Security Courses Near Me: Discover local learning options in cyber security. Find courses near you to enhance your skills and advance your career. Join Now!",
      "cyber-security-online-course":
        "Cyber Security Online Course: Master digital defense with our cyber security online course. Develop the skills to protect against cyber threats effectively. Join Now!",
      "best-cyber-security-courses":
        "Best Cyber Security Courses: Elevate your cyber security expertise with the best courses available. Master the art of digital defense for a secure future. Join Now!",
      "cyber-security-courses-offered":
        "Cyber Security Courses Offered: Explore our comprehensive catalog of cyber security courses. Choose from a variety of offerings to enhance your expertise. Join Now!",
      "government-funded-cyber-security-courses":
        "Government Funded Cyber Security Courses: Access affordable learning with government-funded cyber security courses. Develop skills for a career in cybersecurity. Join Now!",
      "online-courses-for-cyber-security":
        "Online Courses For Cyber Security: Explore flexible learning in cyber security. Enroll in our online courses to acquire essential skills for effective cyber defense.",

      // ====================AI=========================
      "artificial-intelligence-course":
        "Artificial Intelligence Course: Enroll in our comprehensive artificial intelligence course. Master AI concepts and advance your skills in machine learning.",
      "artificial-general-intelligence-course":
        "Artificial General Intelligence Course: Future-ready learning in artificial general intelligence. Explore our course to grasp advanced concepts in AI. Join Now!",
      "artificial-intelligence-courses":
        "Artificial Intelligence Courses: Explore diverse learning paths in artificial intelligence. Choose from a variety of courses to elevate your AI expertise. Join Now!",
      "artificial-intelligence-online-course":
        "Artificial Intelligence Online Course: Learn artificial intelligence online at your convenience. Enroll in our course to acquire in-demand AI skills. Join Now!",
      "course-on-artificial-intelligence":
        "Course On Artificial Intelligence: Gain practical training in our artificial intelligence course. Develop expertise in AI for real-world applications. Join Now!",
      "courses-on-artificial-intelligence":
        "Courses On Artificial Intelligence: Acquire specialized learning in artificial intelligence. Explore our courses for in-depth AI knowledge and skills. Join Now!",
      "course-artificial-intelligence":
        "Course Artificial Intelligence: Comprehensive training in artificial intelligence. Enroll in our course to master AI concepts and applications. Join Now!",
      "artificial-intelligence-course-online":
        "Artificial Intelligence Course Online: Explore flexible learning with our online artificial intelligence course. Learn and apply AI concepts at your own pace. Join Now!",
      "best-artificial-intelligence-course":
        "Best Artificial Intelligence Course: Elevate your AI expertise with the best course available. Master artificial intelligence concepts for future-ready skills. Join Now!",
      "machine-learning-and-artificial-intelligence-courses":
        "Machine Learning And Artificial Intelligence Courses: Gain dual expertise with our courses in machine learning and artificial intelligence. Learn More.",
      "online-artificial-intelligence-courses":
        "Online Artificial Intelligence Courses: Convenient online learning in artificial intelligence. Enroll in our courses to master AI concepts and applications. Join Now!",
      "artificial-intelligence-course-free":
        "Artificial Intelligence Course Free: Access free learning in our artificial intelligence course. Explore AI concepts without any cost and enhance your skills. Join Now!",
      "artificial-intelligence-course-syllabus":
        "Artificial Intelligence Course Syllabus: Explore the syllabus of our artificial intelligence course. Dive into topics covering AI concepts & applications. Join Now!",
      "artificial-intelligence-training-courses":
        "Artificial Intelligence Training Courses: Gain practical knowledge with our training courses in artificial intelligence. Develop expertise for real-world AI applications.",
      "online-artificial-intelligence-course":
        "Online Artificial Intelligence Course: Learn artificial intelligence online at your own pace. Enroll in our course for flexible learning and master AI concepts.",
      "online-course-artificial-intelligence":
        "Online Course Artificial Intelligence: Acquire future-ready skills with our online course in artificial intelligence. Learn & apply AI concepts for career advancement.",

      //==================FSD==========================
      "full-stack-developer":
        "Full Stack Developer: Explore the role of a full stack developer, mastering both front-end and back-end technologies. Learn from Digital Regensys Now.",
      "full-stack-developer-salary":
        "Full Stack Developer Salary: Discover insights into the average salary of a full stack developer. Understand compensation trends & opportunities in this field.",
      "what-is-a-full-stack-developer":
        "What is a Full Stack Developer: Understand the role of a full stack developer. Explore their skills & value they bring to modern web development projects.",
      //  "full-stack-development": "Full Stack Development: Dive into full stack development, where both front-end and back-end technologies come together to create comprehensive solutions. Join Now.",
      "full-stack-developer-jobs":
        "Full Stack Developer Jobs: Explore exciting job opportunities for full stack developers. Find roles that match your skills & expertise in front-end & back-end development.",
      "what-is-full-stack-development":
        "What is Full Stack Development: Unveil the meaning of full stack development. Discover how it combines front-end & back-end to create fully functional web applications.",
      "full-stack-web-developer":
        "Full Stack Web Developer: Explore the role of a full stack web developer in building dynamic and interactive web solutions. Learn about their skills in web development.",
      "full-stack-web-development":
        "Full Stack Web Development: Bridge the gap between front-end and back-end development with full stack web development. Learn how to create robust web applications.",
      "full-stack-development-course":
        "Full Stack Development Course: Master web technologies with our full stack development course. Gain hands-on experience to become a proficient full stack developer.",
      "what-is-full-stack-web-development":
        "What is Full Stack Web Development: Discover the essence of full stack web development. Learn how it encompasses to create fully functional web applications.",
      //  "what-is-full-stack-development": "What is Full-Stack Development: Get a comprehensive overview of full-stack development. Understand its role in creating end-to-end web solutions.",
      "full-stack-development-certificate":
        "Full Stack Development Certificate: Validate your full stack development skills with a certificate. Enhance your credibility and advance your career in web development.",
      "full-stack-web-development-certificate":
        "Full Stack Web Development Certificate: Gain recognition with a full stack web development certificate. Showcase your proficiency in both front-end & back-end.",
      "full-stack-web-development-certification":
        "Full Stack Web Development Certification: Validate your expertise in full stack web development with a certification. Stand out in the competitive job market.",
      "what-is-full-stack-software-development":
        "What is Full Stack Software Development: Understand the concept of full stack software development. Explore how it integrates front-end and back-end technologies.",
      "full-stack-development-meaning":
        "Full Stack Development Meaning: Gain a deeper understanding of the significance of full stack development. Learn how it streamlines the development process for web solutions.",
      "full-stack-software-development":
        "Full Stack Software Development: Create comprehensive software solutions with full stack software development. Learn how to integrate front-end and back-end technologies.",
      "learn-full-stack-web-development":
        "Learn Full Stack Web Development: Master web technologies with our full stack web development course. Gain practical skills & hands-on experience to become a full stack developer.",
      //=================DT===========================
      // "design-thinking": "Design Thinking: Explore design thinking & innovate your solutions. Discover how this human-centered approach can drive creativity and problem-solving in projects.",
      "design-thinking-process":
        "Design Thinking Process: Transform your ideas with the design thinking process. Learn about the iterative steps to solve complex problems & create innovative solutions.",
      "what-is-design-thinking":
        "What is Design Thinking: Understand the essence of design thinking. Get insights into its principles, methodologies, and applications in various industries.",
      "design-thinking-definition":
        "Design Thinking Definition: Unveil the meaning of design thinking. Explore its definition, principles, and significance in fostering innovation and problem-solving.",
      "design-thinking-certification":
        "Design Thinking Certification: Validate your design thinking skills with certification. Enhance your credibility & advance your career with recognized credentials.",
      "design-thinking-course":
        "Design Thinking Course: Learn creativity with our design thinking course. Gain practical skills & techniques to foster innovation & problem-solving in your projects.",
      "design-thinking-process-steps":
        "Design Thinking Process Steps: Guide to innovation with design thinking process steps. Explore the iterative stages from empathize to test solutions.",
      "design-thinking-training":
        "Design Thinking Training: Enhance your skills with design thinking training. Learn hands-on methods and techniques to tackle complex problems. Enroll now!",
      "design-thinking-model":
        "Design Thinking Model: Explore the framework for innovation with the design thinking model. Learn how to apply from empathy to experimentation to solve challenges.",
      "design-thinking-tools":
        "Design Thinking Tools: Empower your design thinking process with the right tools. Discover innovative techniques & resources to facilitate collaboration & creativity.",
      "design-thinking-courses":
        "Design Thinking Courses: Ignite creativity with our design thinking courses. Gain practical knowledge & skills to tackle real-world challenges. Enroll now!",
      // "design-thinking-definition": "Design Thinking Definition: Unveil the meaning of design thinking. Explore its definition, principles & significance in fostering innovation & problem-solving.",
      "design-thinking-stages":
        "Design Thinking Stages: Embark on a journey to innovation with design thinking stages. From empathy to implementation, explore each stage's significance in process.",
      "definition-of-design-thinking":
        "Definition of Design Thinking: Explore the essence of design thinking with its definition. Learn how this human-centered approach fosters innovation and problem-solving.",
      "design-thinking-approach":
        "Design Thinking Approach: Foster creativity with the design thinking approach. Learn how to empathize, ideate & prototype innovative solutions to complex problems.",
      "5-stages-of-design-thinking":
        "5 Stages of Design Thinking: Guide to innovation with the 5 stages of design thinking. Explore empathize, define, ideate, prototype & test stages to drive problem-solving.",
      "design-thinking-jobs":
        "Design Thinking Jobs: Explore design thinking jobs & career opportunities. Unlock roles in innovation, user experience & product development with design thinking skills.",
      "design-thinking-methods":
        "Design Thinking Methods: Discover tools for innovation with design thinking methods. Explore techniques to generate ideas, prototype & validate concepts effectively.",
      "design-thinking-step":
        "Design Thinking Step: Foster innovation with each design thinking step. Learn how to empathize, define, ideate, prototype & test solutions to address challenges.",
      "what-is-design-thinking-process":
        "What is Design Thinking Process: Understand the design thinking process. Explore its stages & methodologies to foster innovation & problem-solving in your projects.",
      "design-thinking-certificate":
        "Design Thinking Certificate: Validate your design thinking skills with a certificate. Enhance your credibility & advance your career with recognized credentials.",
      "design-thinking-for-educators":
        "Design Thinking for Educators: Enhance learning with design thinking for educators. Discover innovative approaches to curriculum development and student engagement.",
      "what-is-one-of-the-tools-associated-with-design-thinking":
        "What is One of the Tools Associated with Design Thinking: Empower your design thinking process with innovative tools. Explore techniques to drive creativity.",
      "benefits-of-design-thinking":
        "Benefits of Design Thinking: Unlock creativity with the benefits of design thinking. Discover how this human-centered approach fosters innovation. Enrol Now!",
      "design-thinking-bootcamp":
        "Design Thinking Bootcamp: Join an intensive design thinking bootcamp. Gain hands-on experience & practical skills to tackle complex challenges. Enroll now!",
      "design-thinking-in-education":
        "Design Thinking in Education: Foster creativity in education with design thinking. Explore its applications in curriculum design & problem-based learning.",
      "design-thinking-meaning":
        "Design Thinking Meaning: Explore the essence of design thinking. Understand its meaning, principles, and applications in fostering innovation & problem-solving.",
      "design-thinking-methodologies":
        "Design Thinking Methodologies: Explore innovative approaches with design thinking methodologies. Discover various design thinking techniques to drive innovation.",
      "systems-thinking-vs-design-thinking":
        "Systems Thinking vs Design Thinking: Contrast systems thinking and design thinking. Understand their methodologies, applications & how they address complex problems.",
      //=================MP===========================
      mdp: "MDP: Explore the significance of MDP (Management Development Programme). Understand its role in developing managerial skills and driving organizational growth.",
      "management-development-courses":
        "Management Development Courses: Enhance your skills with management development courses. Explore topics like leadership, communication & strategy to advance your career.",
      "management-certificate-programs":
        "Management Certificate Programs: Gain credentials with management certificate programs. Elevate your expertise & credibility in management and leadership. Enroll now!",
      "management-development-program":
        "Management Development Program: Grow your leadership with a management development program. Develop essential skills and strategies to excel in managerial roles.",
      "mdp-meaning":
        "MDP Meaning: Unveil the significance of MDP with its meaning. Discover how Management Development Programs foster leadership skills and organizational growth.",
      "management-development-programs-include":
        "Management Development Programs include: Explore topics covered in Management Development Programs. From leadership to strategic planning for managerial growth.",
      "leadership-and-management-development":
        "Leadership and Management Development: Foster growth with leadership and management development programmes. Develop skills to lead teams & organizational success.",
      "professional-development-courses-for-managers":
        "Professional Development Courses for Managers: Excel in leadership with professional development courses for managers. Gain practical skills to drive business results.",
      "best-management-development-programs":
        "Best Management Development Programs: Unlock your potential with the best management development programs. Gain insights, skills & strategies to excel. Join Now!",
      "management-development-program-jobs":
        "Management Development Program Jobs: Explore job opportunities in management development programs. Unlock roles that offer growth, learning & leadership development.",
      "management-development-program-salary":
        "Management Development Program Salary: Discover compensation insights for management development program roles. Understand salary trends & growth opportunities.",

      // =================DBA===========================
      "data-analysis":
        "Data Analysis: Explore data analysis and extract meaningful insights. Learn how to interpret data to make informed decisions and drive business growth.",
      "business-analytics":
        "Business Analytics: Drive decision-making with business analytics. Discover how analyzing data can optimize operations, improve strategies, and enhance performance.",
      "what-is-business-analytics":
        "What is Business Analytics: Unveil the concept of business analytics. Learn how it leverages data to provide valuable insights for strategic decision-making.",
      "what-is-data-analysis":
        "What is Data Analysis: Explore the meaning of data analysis. Understand its role in extracting insights from data to solve problems & support decision-making processes.",
      "data-analysis-definition":
        "Data Analysis Definition: Understand the essence of data analysis with its definition. Learn how it involves examining data sets to draw conclusions and make decisions.",
      "data-analysis-example":
        "Data Analysis Example: Gain insights into data analysis with real-life examples. Explore how data analysis is applied to solve problems & extract valuable insights.",
      "data-analysis-methods":
        "Data Analysis Methods: Uncover data analysis methods & techniques. Learn about statistical approaches, visualization tools & algorithms used to analyze & interpret data.",
      "data-analysis-techniques":
        "Data Analysis Techniques: Explore data analysis techniques and strategies. Discover methods for organizing & analyzing data to extract meaningful insights.",
      "types-of-data-analysis":
        "Types of Data Analysis: Explore diverse approaches to data analysis. Learn about descriptive, diagnostic, predictive & prescriptive analysis techniques. Join Now!",
      "data-analysis-meaning":
        "Data Analysis Meaning: Delve into the significance of data analysis. Understand how it uncovers patterns, trends & correlations to support decision-making. Join Now!",
      "data-analysis-steps":
        "Data Analysis Steps: Navigate the data analysis process with structured steps. Learn how to define objectives, collect data, analyze findings & derive insights.",
      "no-code-tools":
        "No Code Tools: Simplify development with no-code tools. Discover platforms and software that empower users to build applications without writing complex code.",
      "business-analytics-meaning":
        "Business Analytics Meaning: Unlock insights with business analytics. Understand its meaning & how it leverages data to drive strategic decisions & gain competitive edge.",
      "data-science-and-business-analytics":
        "Data Science and Business Analytics: Leverage insights with data science and business analytics. Explore how these disciplines extract actionable insights from data.",
      "define-business-analytics":
        "Define Business Analytics: Understand the role of business analytics with its definition. Learn how it uses data-driven insights to inform decision-making. Join Now!",
      "data-science-and-business-analytics-degree":
        "Data Science and Business Analytics Degree: Propel your career with a degree in data science and business analytics. Gain expertise in analyzing data. Enrol Now!",
      "data-science-and-business-analytics-course":
        "Data Science and Business Analytics Course: Advance your skills with a course in data science & business analytics. Learn techniques to extract insights from data.",
      "data-science-and-business-analytics-salary":
        "Data Science and Business Analytics Salary: Explore lucrative career opportunities and salaries in data science and business analytics. Unlock roles that leverage data.",
      "difference-between-data-science-and-business-analytics":
        "Difference Between Data Science and Business Analytics: Understand the distinction between data science & business analytics. Explore methodologies, objectives & applications.",
      "data-science-and-business-analytics-online-course":
        "Data Science and Business Analytics Online Course: Learn data science and business analytics online. Gain practical skills and knowledge to excel in extracting insights.",
      "what-is-data-science-and-business-analytics":
        "What is Data Science and Business Analytics: Unveil insights into data science and business analytics. Discover how these disciplines combine data analysis & insights.",
    },

    canonicalUrlData: {
      home: "",
      about: "/about",
      allCourse: "/all-courses",
      contact: "/contact",
      privacyPolicy: "/privacy-policy",
      termsCondition: "/terms-and-conditions",
      "cyber-security": "/all-courses/cyber-security",
      "digital-marketing": "/all-courses/digital-marketing",
      "basic-digital-marketing":
        "/all-courses/digital-marketing/basic-digital-marketing",
      "digital-marketing-fundamentals":
        "/all-courses/digital-marketing/digital-marketing-fundamentals",

      "operations-and-supply-chain-management":
        "/all-courses/operations-and-supply-chain-management",

      "advanced-digital-marketing":
        "/all-courses/digital-marketing/advanced-digital-marketing",
      "applied-digital-marketing":
        "/all-courses/digital-marketing/applied-digital-marketing",
      "advance-digital-marketing-course":
        "/all-courses/digital-marketing/advance-digital-marketing-course",
      "project-management": "/all-courses/project-management",

      "data-science": "/all-courses/data-science",
      "basic-data-science": "/all-courses/data-science/basic-data-science",
      "advanced-data-science":
        "/all-courses/data-science/advanced-data-science",
      "applied-data-science": "/all-courses/data-science/applied-data-science",
      "design-thinking": "/all-courses/design-thinking",

      Blog: "/blog ",
      "artificial-intelligence": "/all-courses/artificial-intelligence",
      "ai-introductory": "/all-courses/artificial-intelligence/ai-introductory",
      "ai-intermediary": "/all-courses/artificial-intelligence/ai-intermediary",
      "ai-advanced-applied":
        "/all-courses/artificial-intelligence/ai-advanced-applied",
      "software-development": "software-development-course",
      "full-stack-development": "full-stack-development",
      "data-and-business-analytics": "data-and-business-analytics",
      "management-advancement": "all-courses/management-advancement",
      "product-management": "all-courses/product-management",
      //  -------------multiplepages brand--------------------

      "online-courses": "/online-courses",
      "online-course": "/online-course",
      "courses-online": "/courses-online",
      "online-coding-courses": "/online-coding-courses",
      "online-courses-with-certificates": "/online-courses-with-certificates",
      "online-certification-courses": "/online-certification-courses",
      "coding-courses-online": "/coding-courses-online",
      "IT-courses-online": "/IT-courses-online",
      "online-certificate-courses": "/online-certificate-courses",
      "online-courses-for-adults": "/online-courses-for-adults",
      "best-online-courses": "/best-online-courses",
      "online-it-courses": "/online-it-courses",
      "online-certificate-course": "/online-certificate-course",
      "online-courses-certificates": "/online-courses-certificates",
      "online-training-courses": "/online-training-courses",
      "certificate-courses-online": "/certificate-courses-online",

      //  -------------multiplepages courses--------------------
      ///===============================DS============================
      "data-science-course": "/data-science-course",
      "data-science-courses": "/data-science-courses",
      "courses-in-data-science": "/courses-in-data-science",
      "course-for-data-science": "/course-for-data-science",
      "data-science-online-courses": "/data-science-online-courses",
      "data-science-course-online": "/data-science-course-online",
      "courses-data-science": "/courses-data-science",
      "online-data-science-courses": "/online-data-science-courses",
      "best-data-science-courses": "/best-data-science-courses",
      "a-crash-course-in-data-science": "/a-crash-course-in-data-science",
      "data-science-courses-online": "/data-science-courses-online",
      "python-data-science-course": "/python-data-science-course",
      "best-online-data-science-courses": "/best-online-data-science-courses",
      "data-science-certification-course": "/data-science-certification-course",
      "online-course-in-data-science": "/online-course-in-data-science",
      "online-data-science-course": "/online-data-science-course",
      ///===============================DM============================

      // "digital-marketing": "/digital-marketing",
      "what-is-digital-marketing": "/what-is-digital-marketing",
      "digital-marketing-jobs": "/digital-marketing-jobs",
      "digital-marketing-salary": "/digital-marketing-salary",
      "digital-marketer": "/digital-marketer",
      "digital-marketing-course": "/digital-marketing-course",
      "digital-marketing-strategy": "/digital-marketing-strategy",
      "digital-marketing-certificate": "/digital-marketing-certificate",
      "google-digital-marketing-certification":
        "/google-digital-marketing-certification",
      "digital-marketing-courses": "/digital-marketing-courses",
      "digital-marketing-near-me": "/digital-marketing-near-me",
      "digital-marketing-specialist": "/digital-marketing-specialist",
      "digital-marketing-certification": "/digital-marketing-certification",
      "digital-marketing-degree": "/digital-marketing-degree",
      "digital-marketing-tools": "/digital-marketing-tools",
      "digital-marketing-training": "/digital-marketing-training",
      "digital-marketing-certificates": "/digital-marketing-certificates",
      "digital-marketing-institute": "/digital-marketing-institute",
      "digital-marketing-strategies": "/digital-marketing-strategies",
      "digital-marketing-course-online": "/digital-marketing-course-online",
      "digital-marketing-definition": "/digital-marketing-definition",
      "digital-marketing-examples": "/digital-marketing-examples",
      "digital-marketing-meaning": "/digital-marketing-meaning",
      "digital-marketing-trends": "/digital-marketing-trends",
      "learn-digital-marketing": "/learn-digital-marketing",
      "types-of-digital-marketing": "/types-of-digital-marketing",
      "digital-marketer-salary": "/digital-marketer-salary",
      "digital-marketing-classes": "/digital-marketing-classes",
      "digital-marketing-online-courses": "/digital-marketing-online-courses",
      "online-digital-marketing-courses": "/online-digital-marketing-courses",
      "what-is-a-digital-marketer": "/what-is-a-digital-marketer",
      "digital-marketing-courses-online": "/digital-marketing-courses-online",
      "google-digital-marketing-course": "/google-digital-marketing-course",
      "how-to-become-a-digital-marketer": "/how-to-become-a-digital-marketer",
      "how-to-do-digital-marketing": "/how-to-do-digital-marketing",
      "how-to-start-digital-marketing": "/how-to-start-digital-marketing",
      "online-digital-marketing": "/online-digital-marketing",
      "digital-marketing-blogs": "/digital-marketing-blogs",
      "digital-marketing-careers": "/digital-marketing-careers",
      "digital-marketing-certificate-online":
        "/digital-marketing-certificate-online",
      "digital-marketing-certifications": "/digital-marketing-certifications",
      "fundamentals-of-digital-marketing": "/fundamentals-of-digital-marketing",
      "online-digital-marketing-course": "/online-digital-marketing-course",
      "what-does-a-digital-marketer-do": "/what-does-a-digital-marketer-do",
      "what's-digital-marketing": "/what's-digital-marketing",
      "best-digital-marketing-services": "/best-digital-marketing-services",
      "certificate-in-digital-marketing": "/certificate-in-digital-marketing",
      "digital-marketing-platforms": "/digital-marketing-platforms",
      "digital-marketing-tips": "/digital-marketing-tips",
      "masters-in-digital-marketing": "/masters-in-digital-marketing",
      "what-is-a-digital-marketing": "/what-is-a-digital-marketing",
      "best-digital-marketing-courses": "/best-digital-marketing-courses",
      "definition-of-digital-marketing": "/definition-of-digital-marketing",
      "digital-marketing-degree-online": "/digital-marketing-degree-online",
      "digital-marketing-degrees": "/digital-marketing-degrees",
      "digital-marketing-experts": "/digital-marketing-experts",
      "digital-marketing-online": "/digital-marketing-online",
      "examples-of-digital-marketing": "/examples-of-digital-marketing",
      "how-to-learn-digital-marketing": "/how-to-learn-digital-marketing",
      "future-of-digital-marketing": "/future-of-digital-marketing",
      "importance-of-digital-marketing": "/importance-of-digital-marketing",
      "why-is-digital-marketing-important":
        "/why-is-digital-marketing-important",

      // ====================PM=========================
      "project-management-courses": "/project-management-courses",
      "project-management-course": "/project-management-course",
      "project-management-courses-online": "/project-management-courses-online",
      "project-manager-course": "/project-manager-course",
      "online-project-management-courses": "/online-project-management-courses",
      "project-managment-courses": "/project-managment-courses",
      "what-skills-can-you-get-from-managing-it-projects-course":
        "/what-skills-can-you-get-from-managing-it-projects-course",
      "courses-in-project-management": "/courses-in-project-management",
      "online-course-for-project-management":
        "/online-course-for-project-management",
      "online-course-in-project-management":
        "/online-course-in-project-management",
      "project-management-online-course": "/project-management-online-course",
      "project-manager-courses": "/project-manager-courses",
      "project-managing-courses": "/project-managing-courses",
      "project-management-certification-courses":
        "/project-management-certification-courses",
      "project-management-course-online": "/project-management-course-online",
      "project-management-online-courses": "/project-management-online-courses",
      "project-management-training-courses":
        "/project-management-training-courses",
      "agile-project-management-course": "/agile-project-management-course",
      "construction-project-management-courses":
        "/construction-project-management-courses",
      "best-project-management-courses": "/best-project-management-courses",
      "online-courses-project-management": "/online-courses-project-management",
      "online-project-management-course": "/online-project-management-course",
      "project-manager-courses-online": "/project-manager-courses-online",
      "project-managment-course": "/project-managment-course",
      "course-in-project-management": "/course-in-project-management",
      "project-management-courses-for-beginners":
        "/project-management-courses-for-beginners",
      "project-management-on-line-courses":
        "/project-management-on-line-courses",
      // ====================CS=========================
      "cyber-security-course": "/cyber-security-course",
      "cyber-security-courses": "/cyber-security-courses",
      "cyber-security-courses-online": "/cyber-security-courses-online",
      "cyber-security-course-online": "/cyber-security-course-online",
      "online-cyber-security-course": "/online-cyber-security-course",
      "online-cyber-security-courses": "/online-cyber-security-courses",
      "cyber-security-online-courses": "/cyber-security-online-courses",
      "courses-for-cyber-security": "/courses-for-cyber-security",
      "courses-cyber-security": "/courses-cyber-security",
      "cyber-security-training-courses": "/cyber-security-training-courses",
      "cyber-security-courses-for-beginners":
        "/cyber-security-courses-for-beginners",
      "online-course-for-cyber-security": "/online-course-for-cyber-security",
      "courses-in-cyber-security": "/courses-in-cyber-security",
      "cyber-security-courses-near-me": "/cyber-security-courses-near-me",
      "cyber-security-online-course": "/cyber-security-online-course",
      "best-cyber-security-courses": "/best-cyber-security-courses",
      "cyber-security-courses-offered": "/cyber-security-courses-offered",
      "government-funded-cyber-security-courses":
        "/government-funded-cyber-security-courses",
      "online-courses-for-cyber-security": "/online-courses-for-cyber-security",
      // ====================AI=========================
      "artificial-intelligence-course": "/artificial-intelligence-course",
      "artificial-general-intelligence-course":
        "/artificial-general-intelligence-course",
      "artificial-intelligence-courses": "/artificial-intelligence-courses",
      "artificial-intelligence-online-course":
        "/artificial-intelligence-online-course",
      "course-on-artificial-intelligence": "/course-on-artificial-intelligence",
      "courses-on-artificial-intelligence":
        "/courses-on-artificial-intelligence",
      "course-artificial-intelligence": "/course-artificial-intelligence",
      "artificial-intelligence-course-online":
        "/artificial-intelligence-course-online",
      "best-artificial-intelligence-course":
        "/best-artificial-intelligence-course",
      "machine-learning-and-artificial-intelligence-courses":
        "/machine-learning-and-artificial-intelligence-courses",
      "online-artificial-intelligence-courses":
        "/online-artificial-intelligence-courses",
      "artificial-intelligence-course-free":
        "/artificial-intelligence-course-free",
      "artificial-intelligence-course-syllabus":
        "/artificial-intelligence-course-syllabus",
      "artificial-intelligence-training-courses":
        "/artificial-intelligence-training-courses",
      "online-artificial-intelligence-course":
        "/online-artificial-intelligence-course",
      "online-course-artificial-intelligence":
        "/online-course-artificial-intelligence",
      //==================FSD==========================
      "full-stack-developer": "/full-stack-developer",
      "full-stack-developer-salary": "/full-stack-developer-salary",
      "what-is-a-full-stack-developer": "/what-is-a-full-stack-developer",
      // "full-stack-development": "/full-stack-development",
      "full-stack-developer-jobs": "/full-stack-developer-jobs",
      "what-is-full-stack-development": "/what-is-full-stack-development",
      "full-stack-web-developer": "/full-stack-web-developer",
      "full-stack-web-development": "/full-stack-web-development",
      "full-stack-development-course": "/full-stack-development-course",
      "what-is-full-stack-web-development":
        "/what-is-full-stack-web-development",
      "full-stack-web-development2": "/full-stack-web-development",
      "full-stack-development-certificate":
        "/full-stack-development-certificate",
      "full-stack-web-development-certificate":
        "/full-stack-web-development-certificate",
      "full-stack-web-development-certification":
        "/full-stack-web-development-certification",
      "what-is-full-stack-software-development":
        "/what-is-full-stack-software-development",
      "full-stack-development-courses": "/full-stack-development-courses",
      "full-stack-development-meaning": "/full-stack-development-meaning",
      "full-stack-software-development": "/full-stack-software-development",
      "learn-full-stack-web-development": "/learn-full-stack-web-development",
      //=================DT===========================
      // "design-thinking": "/design-thinking",
      "design-thinking-process": "/design-thinking-process",
      "what-is-design-thinking": "/what-is-design-thinking",
      "design-thinking-definition": "/design-thinking-definition",
      "design-thinking-certification": "/design-thinking-certification",
      "design-thinking-course": "/design-thinking-course",
      "design-thinking-process-steps": "/design-thinking-process-steps",
      "design-thinking-training": "/design-thinking-training",
      "design-thinking-model": "/design-thinking-model",
      "design-thinking-tools": "/design-thinking-tools",
      "design-thinking-courses": "/design-thinking-courses",
      "design-thinking-stages": "/design-thinking-stages",
      "definition-of-design-thinking": "/definition-of-design-thinking",
      "design-thinking-approach": "/design-thinking-approach",
      "5-stages-of-design-thinking": "/5-stages-of-design-thinking",
      "design-thinking-jobs": "/design-thinking-jobs",
      "design-thinking-methods": "/design-thinking-methods",
      "design-thinking-step": "/design-thinking-step",
      "what-is-design-thinking-process": "/what-is-design-thinking-process",
      "design-thinking-certificate": "/design-thinking-certificate",
      "design-thinking-for-educators": "/design-thinking-for-educators",
      "what-is-one-of-the-tools-associated-with-design-thinking":
        "/what-is-one-of-the-tools-associated-with-design-thinking",
      "benefits-of-design-thinking": "/benefits-of-design-thinking",
      "design-thinking-bootcamp": "/design-thinking-bootcamp",
      "design-thinking-in-education": "/design-thinking-in-education",
      "design-thinking-meaning": "/design-thinking-meaning",
      "design-thinking-methodologies": "/design-thinking-methodologies",
      "systems-thinking-vs-design-thinking":
        "/systems-thinking-vs-design-thinking",

      //=================DBA===========================

      "data-analysis": "/data-analysis",
      "business-analytics": "/business-analytics",
      "what-is-business-analytics": "/what-is-business-analytics",
      "what-is-data-analysis": "/what-is-data-analysis",
      "data-analysis-definition": "/data-analysis-definition",
      "data-analysis-example": "/data-analysis-example",
      "data-analysis-methods": "/data-analysis-methods",
      "data-analysis-techniques": "/data-analysis-techniques",
      "types-of-data-analysis": "/types-of-data-analysis",
      "data-analysis-meaning": "/data-analysis-meaning",
      "data-analysis-steps": "/data-analysis-steps",
      "no-code-tools": "/no-code-tools",
      "business-analytics-meaning": "/business-analytics-meaning",
      "data-science-and-business-analytics":
        "/data-science-and-business-analytics",
      "define-business-analytics": "/define-business-analytics",
      "data-science-and-business-analytics-degree":
        "/data-science-and-business-analytics-degree",
      "data-science-and-business-analytics-course":
        "/data-science-and-business-analytics-course",
      "data-science-and-business-analytics-salary":
        "/data-science-and-business-analytics-salary",
      "difference-between-data-science-and-business-analytics":
        "/difference-between-data-science-and-business-analytics",
      "data-science-and-business-analytics-online-course":
        "/data-science-and-business-analytics-online-course",
      "what-is-data-science-and-business-analytics":
        "/what-is-data-science-and-business-analytics",

      //=================MP===========================
      mdp: "/mdp",
      "management-development-courses": "/management-development-courses",
      "management-certificate-programs": "/management-certificate-programs",
      "management-development-program": "/management-development-program",
      "mdp-meaning": "/mdp-meaning",
      "management-development-programs-include":
        "/management-development-programs-include",
      "leadership-and-management-development":
        "/leadership-and-management-development",
      "professional-development-courses-for-managers":
        "/professional-development-courses-for-managers",
      "best-management-development-programs":
        "/best-management-development-programs",
      "management-development-program-jobs":
        "/management-development-program-jobs",
      "management-development-program-salary":
        "/management-development-program-salary",
    },
    ogImg: {
      home: "https://digitalregenesys.com/assets/images/background/DR-Website.png",
      "cyber-security":
        "https://www.digitalregenesys.com/assets/images/gallery/CSC.webp",
      "digital-marketing":
        "https://www.digitalregenesys.com/assets/images/gallery/DM.webp",
      "project-management":
        "https://www.digitalregenesys.com/assets/images/gallery/PM.webp",
      "full-stack-development":
        "https://www.digitalregenesys.com/assets/images/gallery/FSD.webp",
      "data-and-business-analytics":
        "https://www.digitalregenesys.com/assets/images/gallery/DBA.webp",
      "design-thinking":
        "https://www.digitalregenesys.com/assets/images/gallery/DTC.webp",
      "data-science":
        "https://www.digitalregenesys.com/assets/images/gallery/DSN.webp",
      "artificial-intelligence":
        "https://www.digitalregenesys.com/assets/images/gallery/AIN.webp",
      "management-advancement":
        "https://www.digitalregenesys.com/assets/images/gallery/MD.webp",
      "product-management":
        "https://www.digitalregenesys.com/assets/images/gallery/PDM.webp",
    },
  },
};

export default Data;
