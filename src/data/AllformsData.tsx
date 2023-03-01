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
};

export default Data;
