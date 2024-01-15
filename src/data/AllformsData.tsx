const leadsUrl = `${process.env.base_Url}/leads`;
const Data = {
  contactform: {
    zapUrl: "https://hooks.zapier.com/hooks/catch/2583450/bee35sx/",
    leadsUrl,
    defaultCountryCode: "ZA",
    programmeofinterest: [
      {
        option: "Masters Degree",
        value: "Masters Degree",
      },
      {
        option: "Bachelor's Degree",
        value: "Bachelor's Degree",
      },
    ],

    qualification: [
      {
        option: "PhD",
        value: "PhD",
      },
      {
        option: "Masters Degree",
        value: "Masters Degree",
      },
      {
        option: "Bachelor's Degree",
        value: "Bachelor's Degree",
      },
      {
        option: "Diploma",
        value: "Diploma",
      },
      {
        option: "Higher Certificate",
        value: "Higher Certificate",
      },
    ],
  },

  qualification: [
    {
      option: "Doctorate",
      value: "Doctorate",
    },
    {
      option: "Master's Degree",
      value: "Master's Degree",
    },
    {
      option: "Bachelor's Degree",
      value: "Bachelor's Degree",
    },
    {
      option: "Hons Degree",
      value: "Hons Degree",
    },
    {
      option: "Diploma",
      value: "Diploma",
    },

    {
      option: "Higher Certificate",
      value: "Higher Certificate",
    },
  ],
  allCourses: [
    {
      option: "Project Management",
      value: "Project Management",
    },
    {
      option: "Software Engineering",
      value: "Software Engineering",
    },
    {
      option: "Cyber Security",
      value: "Cyber Security",
    },
    {
      option: "Data Science",
      value: "Data Science",
    },
    // {
    //   option: "Digital Marketing",
    //   value: "Digital Marketing",
    // },
    {
      option: "Artificial Intelligence",
      value: "Artificial Intelligence",
    },
  ],
};

export default Data;
