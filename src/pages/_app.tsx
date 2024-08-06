import ContextProvider from "@/context/ContextProvider";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import { Constants } from "src/schemas/data";
import { Toaster } from "react-hot-toast";
import "@fortawesome/fontawesome-free/css/all.min.css";

// extra css
import "@/styles/style.css";
import "@/styles/hover.css";
import "@/styles/responsive.css";
import Schemas from "src/schemas";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, handleSetCookie } from "src/utils/cookieutils";

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const [currentUtmUrl, setCurrentUtmUrl] = useState("");
  const { utm_source, utm_medium, utm_campaign, utm_content, id } =
    router.query;
  const salesForceUrl = `https://api.vinecrms.com/api/`;
  const leadsGenerateUrl = `https://uat-api-leads.digitalregenesys.com/leads/`;
  const cookieName = "ukUser";

  //const vineCrmTawk = `https://api.vinecrms.com/api/`;

  //const vineCrmTawk = `https://api.vinecrms.com/api/`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUtmUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    const isCookieSet = getCookie(cookieName);
    if (isCookieSet == null) {
      const updateCityText = (geoipResponse: any) => {
        const countryCode = geoipResponse.country.iso_code.toLowerCase();

        const url = window.location.href;
        const { hostname, pathname } = new URL(
          url.startsWith("http") ? url : "http://" + url
        );
        console.log("GEO---", hostname, pathname, url, countryCode);
        if (
          countryCode === "gb" &&
          (url.includes("/all-courses") || pathname == "/")
        ) {
          handleSetCookie(cookieName, true);
          let ukURL =
            process.env.ENV_NAME === "PRODUCTION"
              ? "https://digitalregenesys.com/uk"
              : "https://qa.digitalregenesys.com/uk";
          router.push(ukURL);
        } else {
          handleSetCookie(cookieName, false);
        }
      };
      const onSuccess = (geoipResponse: any) => {
        updateCityText(geoipResponse);
      };

      const onError = (error: any) => {
        console.log("GEOPIP_Error", error);
      };

      if (typeof (window as any).geoip2 !== "undefined") {
        (window as any).geoip2.country(onSuccess, onError);
        console.log();
      } else {
        console.log("Error fetching country");
      }
    } else {
      if (isCookieSet === "true") {
        const url = window.location.href;
        const { hostname, pathname } = new URL(
          url.startsWith("http") ? url : "http://" + url
        );
        if (url.includes("/all-courses") || pathname == "/") {
          handleSetCookie(cookieName, true);
          let ukURL =
            process.env.ENV_NAME === "PRODUCTION"
              ? "https://digitalregenesys.com/uk"
              : "https://qa.digitalregenesys.com/uk";
          router.push(ukURL);
        }
      }
    }
  }, []);

  return (
    <ContextProvider>
      <div id="tawk_5825dfc218d9f16af02abeea"></div>
      <Component {...pageProps} />
      <Schemas type={Constants.image} />
      <Schemas type={Constants.organization} />
      <Schemas type={Constants.localbusiness} />
      {/* Pixel code script start */}
      <Toaster />

      {/*End Google Tag Manager (noscript) */}

      {/* <Script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/64d7316f94cf5d49dc69f045/1h7k9i7u2';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
              `,
              `,
        }}
      /> */}

      <Script
        id="Tawk_API"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/64d7316f94cf5d49dc69f045/1h7k9i7u2';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_API.onPrechatSubmit = function(data){
      
        const salesForceUrl = '${salesForceUrl}';
        const leadForceUrl = '${leadsGenerateUrl}';
        const utmSource = '${utm_source ? utm_source : "DR website chat"}'
        const utmCompaign = '${utm_campaign ? utm_campaign : "DR_Website"}'
        const utmContent = '${utm_content ? utm_content : "Dr_website_chat"}'
        const utmMedium = '${utm_medium ? utm_medium : "DR Website"}'
       
        const salesForceData = {
          domain: "crm",
          type: "add_lead_to_crm",
          name: "",
          email: "",
          city: "",
          country: "",
          mobile:"",
          interest: "",
          source: utmSource,
          campaign: utmCompaign,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCompaign,
          utm_content: utmContent,
          utm_term:"DR+Website+chat",
          utm_url:window?.location?.href,
          Source_Campaign:'DR Website',
          Lead_Source:"DR website chat" 
        };   

        const getCurrentDateNew = () => {
          const current = new Date();
          const date = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
          return date;
           };

        const leadsData = {
          Email: "",
          Interested_Topic:"",
          Name: "",
          Phone:"", 
          Programme_Of_Interest: "",
          date:getCurrentDateNew(), 
          page_url:window?.location?.href,
          utm_parameters:window?.location?.href ,
        };   

        function getCountryCode(countryName) {
          switch (countryName) {
              case "Nigeria":
                  return "+234";
              case "Kenya":
                  return "+254";
              case "Tanzania":
                  return "+255";
              case "Uganda":
                  return "+256";
              case "Others":
              return "+27";      
              default:
                  return "+27";
          }
        }

        data.forEach(item => {
          switch (item.label) {
            case "Name":
              salesForceData.name = item.answer;
              leadsData.Name = item.answer;
                break;
            case "Email":
              salesForceData.email = item.answer;
              leadsData.Email = item.answer;
                break;
            case "Country":
              if(item?.answer === "Others"){
                salesForceData.country = "South Africa";
              } else {
                salesForceData.country = item.answer;
              }
            break;
            case "Mobile Number":     
              if (!item?.answer?.startsWith("+")) {
                  const countryCode = getCountryCode(salesForceData?.country);
                  salesForceData.mobile = countryCode + item?.answer?.substring(0, 9);
                  leadsData.Phone = countryCode + item?.answer?.substring(0, 9);
              } else {
                let mobileNumber = "";
              for (let char of item?.answer) {
                  if (char !== ' ') {
                    mobileNumber += char;
                  }
              } 
              salesForceData.mobile = mobileNumber;
                  leadsData.Phone = mobileNumber;
              }
              break;   
            case "Course you are looking for":
              salesForceData.interest = item.answer;
              leadsData.Interested_Topic = item.answer;
              leadsData.Programme_Of_Interest = item.answer;
            break;
            default:
            console.log("item", item);
        }
        });

        try {
          fetch(salesForceUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(salesForceData),
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(responseData => {
              console.log('Data submitted successfully:', responseData);
              generateNewLead()
            })
            .catch(error => {
              console.error('Error submitting data:', error);
            });
        } catch (error) {
          console.error('Error in fetch operation:', error);
        }

        const generateNewLead=()=>{
          fetch(leadForceUrl, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(leadsData),
          })
         .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
           return response.json(); 
         })
         .then(responseData => {
            console.log('Lead Generated successfully:', responseData);
         })
         .catch(error => {
            console.error('Error submitting data:', error);
         });
         }
      };

      window.Tawk_API.onOfflineSubmit = function(data){
        const salesForceUrl = '${salesForceUrl}';
        const leadForceUrl = '${leadsGenerateUrl}';
        const utmSource = '${utm_source ? utm_source : "DR website chat"}'
        const utmCompaign = '${utm_campaign ? utm_campaign : "DR_Website"}'
        const utmContent = '${utm_content ? utm_content : "Dr_website_chat"}'
        const utmMedium = '${utm_medium ? utm_medium : "DR Website"}'
        
        const salesForceNewData = {
          domain: "crm",
          type: "add_lead_to_crm",
          name: "",
          email: "",
          city: "",
          country: "",
          mobile:"",
          interest: "",
          source: utmSource,
          campaign: utmCompaign,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCompaign,
          utm_content: utmContent,
          utm_term:"DR+Website+chat",
          utm_url:window?.location?.href,
          Source_Campaign:'DR Website',
          Lead_Source:"DR website chat"  
        };   
 
        const getCurrentDate = () => {
          const current = new Date();
          const date = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
          return date;
           };

        const leadsNewData = {
          Email: "",
          Interested_Topic:"",
          Name: "",
          Phone:"", 
          Programme_Of_Interest: "",
          date:getCurrentDate(), 
          page_url:window?.location?.href,
          utm_parameters:window?.location?.href ,
        };   
        
        function getCountryCode(countryName) {
          switch (countryName) {
              case "Nigeria":
                  return "+234";
              case "Kenya":
                  return "+254";
              case "Tanzania":
                  return "+255";
              case "Uganda":
                  return "+256";
              case "Others":
              return "+27";    
              default:
                  return "+27";
          }
         }

        data.questions.forEach(question => {
          switch (question.label) {
              case "Name":
                  salesForceNewData.name = question.answer;
                  leadsNewData.Name = question.answer;
                  break;
              case "Email":
                  salesForceNewData.email = question.answer;
                  leadsNewData.Email = question.answer;
                  break;
              case "Country":
                if(question?.answer === "Others"){
                  salesForceNewData.country = "South Africa";
                } else {
                  salesForceNewData.country = question.answer;
                }
              break;
              case "Mobile Number":     
              if (!question?.answer?.startsWith("+")) {
                  const countryCode = getCountryCode(salesForceNewData?.country);
                  salesForceNewData.mobile = countryCode + question?.answer?.substring(0, 9);
                  leadsNewData.Phone = countryCode + question?.answer?.substring(0, 9);
              } else {
                let newMobileNumber = "";
              for (let char of question?.answer) {
                  if (char !== ' ') {
                    newMobileNumber += char;
                  }
              } 
                  salesForceNewData.mobile = newMobileNumber;
                  leadsNewData.Phone = newMobileNumber;
              }
              break;   
              case "Course you are looking for":
                salesForceNewData.interest = question.answer;
                leadsNewData.Interested_Topic = question.answer;
                leadsNewData.Programme_Of_Interest = question.answer;
                break; 
              default:
              console.log("question", question);
          }
        });
      fetch(salesForceUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(salesForceNewData),
     })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(responseData => {
        console.log('Data submitted successfully:', responseData);
        generateLead()
    })
    .catch(error => {
        console.error('Error submitting data:', error);
    });

     const generateLead=()=>{
      fetch(leadForceUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(leadsNewData),
      })
     .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
       return response.json(); 
     })
     .then(responseData => {
        console.log('Lead Generated successfully:', responseData);
     })
     .catch(error => {
        console.error('Error submitting data:', error);
     });
     }
      };
    `,
        }}
      />

      {/* Google Tag Script End */}
    </ContextProvider>
  );
};

export default MyApp;
