// import { jarallax, jarallaxVideo } from "jarallax";
// import "jarallax/dist/jarallax.css";
// import React, { useEffect, useRef } from "react";

// // Optional video extension
// jarallaxVideo();

/**
 * @param {JarallaxOptions&{className?: string, children: ReactNode}} props
 */

// const Jarallax = (propps:any) => {
//   const { className = "", children, ...props } = propps; 
//   const element = useRef();

//   // Init Jarallax.
//   useEffect(() => {
//     const { current } = element;
//     if (current) {
//       jarallax(current, props);
//     }

//     // Destroy Jarallax.
//     return () => {
//       if (current) {
//         jarallax(current, "destroy");
//       }
//     };
//   }, [props]);

//   // Update options.
//   useEffect(() => {
//     const { current } = element;
//     if (current) {
//       jarallax(current, "destroy");
//       jarallax(current, props);
//     }
//   }, [props]);

//   return (
//     <div 
//     // ref={element} 
//     className={`${className} jarallax`}>
//       {children}
//     </div>
//   );
// };

const Jarallax = (props:any) => {
  return props.children
}

export default Jarallax;
