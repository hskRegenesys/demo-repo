import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="fbevents"
          strategy="beforeInteractive"
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
          id="gtm-script"
          type="text/javascript"
          strategy="afterInteractive"
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
          id="gtm-script"
          type="text/javascript"
          strategy="afterInteractive"
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
          id="snap-licdn-script"
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-873313553"
        />
        {/* <!-- Google tag (gtag.js) --> Ramesh  */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-232125756-1"
        />

        <Script
          id="gtag"
          strategy="afterInteractive"
          async
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
          id="gtag"
          strategy="afterInteractive"
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
      </Head>
      <body>
        <Main />
        <NextScript />
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
            alt=""
            width="1"
            style={{ display: "none", visibility: "hidden" }}
            src="https://www.facebook.com/tr?id=613242390822464&ev=PageView&noscript=1"
          />
        </noscript>

        <noscript>
          <img
            alt=""
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
      </body>
    </Html>
  );
}
