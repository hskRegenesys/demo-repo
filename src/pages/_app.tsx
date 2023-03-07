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

// extra css
import "@/styles/style.css";
import "@/styles/hover.css";
import "@/styles/responsive.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />

      {/* Pixel code script start */}
      <Script
        strategy="lazyOnload"
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
              fbq('init', '374594639870766');
              `,
        }}
      />
      {/* Pixel code script end */}
      {/* GTM code start */}
      <Script
        strategy="lazyOnload"
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

      {/* Google Tag Script Start  */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=AW-873313553"
      />
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-873313553');
            gtag('config', 'UA-232125756-1');
            gtag('config', 'AW-10930930903');
              `,
        }}
      />
      {/* Google Tag Script End */}
    </ContextProvider>
  );
};

export default MyApp;