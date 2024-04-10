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

import { apiEndPoints } from "@/data/axisos";
import axios from "axios";

// extra css
import "@/styles/style.css";
import "@/styles/hover.css";
import "@/styles/responsive.css";
import Schemas from "src/schemas";

const MyApp = ({ Component, pageProps }: any) => {
  //const salesforceResponse = `${process.env.NEXT_PUBLIC_SALESFORCE_API_BASE_URL}/salesforce`;
  const vineCrmTawk = `https://api.vinecrms.com/api/`;
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

      <Script
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
      />

      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/6513f6520f2b18434fdad936/1hbavkcmj';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_API.onPrechatSubmit = function(data){
        const salesForceUrl = '${vineCrmTawk}';
        const salesForceData = {
          name: "",
          email: "",
          mobile: "",
          city: "",
          source: "",
          campaign: "",
          utm_term: "",
          utm_content: "",
          utm_url: "",
          interest: "",
          utm_source: "DR website chat ",
          utm_medium: "DR Website",
          Source_Campaign:"DR Website",
          Lead_Source: "DR website chat",
        };   
        data.forEach(item => {
          const labelMapping = {
              "Name": "Name",
              "Email": "Email",
              "Mobile Number": "Phone",
              "Course you are looking for": "Interested_Topic"
          };
          const propertyName = labelMapping[item.label] || item.label; 
          salesForceData[propertyName] = item.answer;
      });
      console.log("vineCrmData",vineCrmData)
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
        console.log('Salesforce response:', responseData);
    })
    .catch(error => {
        console.error('Error submitting data to Salesforce:', error);
    });
      };
    `,
        }}
      />

      {/* Google Tag Script End */}
    </ContextProvider>
  );
};

export default MyApp;
