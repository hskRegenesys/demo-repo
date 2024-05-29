import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.css";
import "@/vendors/custom-animate.css";
import "@/vendors/flaticon.css";
import "@/vendors/fontawesome-all.css";
import Script from "next/script";
import "@/vendors/linoor-icons.css";
import "@/vendors/reey-font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-circular-progressbar/dist/styles.css";
// import "react-modal-video/css/modal-video.min.css";
import "tiny-slider/dist/tiny-slider.css";
import { Constants } from "src/schemas/data";
import { leadService } from "src/services";
import { apiEndPoints } from "@/data/axisos";
import axios from "axios";

// extra css
import "@/styles/style.css";
import "@/styles/hover.css";
import "@/styles/responsive.css";
import Schemas from "src/schemas";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const { utm_source, utm_medium, utm_campaign, utm_content, id } =
    router.query;
  const salesForceUrl = `https://api.vinecrms.com/api/`;
  const leadsGenerateUrl = `https://uat-api-leads.digitalregenesys.com/leads/`;

  //const vineCrmTawk = `https://api.vinecrms.com/api/`;

  return (
    <ContextProvider>
      <div id="tawk_5825dfc218d9f16af02abeea"></div>
      <Component {...pageProps} />
      <Schemas type={Constants.image} />
      <Schemas type={Constants.organization} />
      <Schemas type={Constants.localbusiness} />
      {/* Pixel code script start */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '613242390822464');
          fbq('track', 'PageView');
              `,
        }}
      />

      {/* Pixel code script end */}

      {/* GTM code start */}
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M9XVQW4');
              `,
        }}
      />
      {/* GTM code end */}

      {/* Google Tag Manager GTM code nanddeep start */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K4F2983');
              `,
        }}
      />
      {/* GTM code end */}

      {/* linked start */}
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          _linkedin_partner_id = "5438577";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
         
          `,
        }}
      />
      {/* linked end */}

      {/* Google Tag Script Start  */}
      <Script
        strategy="beforeInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-873313553"
      />
      {/* <!-- Google tag (gtag.js) --> Ramesh  */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-232125756-1"
      />

      <Script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-232125756-1');
              `,
        }}
      />
      {/* <!-- Google tag (gtag.js) --> Ramesh END */}
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-873313553');
            gtag('config', 'AW-10930930903');
              `,
        }}
      />
      {/* linked start */}
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          _linkedin_partner_id = "5438577";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
 
          `,
        }}
      />

      {/* linked end */}
      {/* <noscript>
        <iframe
          src="https://www.facebook.com/tr?id=613242390822464&ev=PageView&noscript=1"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript> */}

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none", visibility: "hidden" }}
          src="https://www.facebook.com/tr?id=613242390822464&ev=PageView&noscript=1"
        />
      </noscript>

      <noscript>
        <img
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          src="https://px.ads.linkedin.com/collect/?pid=5438577&fmt=gif"
        />
      </noscript>

      {/* Google Tag Manager (noscript) */}

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K4F2983"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

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
        }}
      /> */}

      <Script
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
              salesForceData.mobile = item.answer;
              leadsData.Phone = question.answer;
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
              let mobileNumber = "";
              for (let char of question.answer) {
                  if (char !== ' ') {
                      mobileNumber += char;
                  }
              } 
              console.log("mobile numr", mobileNumber)
              if (!mobileNumber?.startsWith("+")) {
                console.log("checking")
                  const countryCode = getCountryCode(salesForceNewData?.country);
                  salesForceNewData.mobile = countryCode + mobileNumber?.substring(0, 9);
                  leadsNewData.Phone = countryCode + mobileNumber?.substring(0, 9);
              } else if (mobileNumber?.startsWith("+")) {
                console.log("new mvile", question.answer.trim())
                  salesForceNewData.mobile = mobileNumber;
                  leadsNewData.Phone = mobileNumber;
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
