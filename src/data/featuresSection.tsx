import bg from "src/assets/images/background/video-bg.png";
import image from "src/assets/images/resource/featured-image-13.jpg";
import image2 from "src/assets/images/update-26-02-2021/resources/feature-2-1.jpg";
import image3 from "src/assets/images/update-26-02-2021/resources/feature-3-1.jpg";

const featuresSection = {
  bg,
  title: "Grow With Community & Experience Endless Possibilities",
  features: [
    {
      id: 1,
      icon: "flaticon-design-tools",
      title: "latest\ntechnology",
    },
    {
      id: 2,
      icon: "flaticon-idea",
      title: "amazing\nfree support",
    },
    {
      id: 3,
      icon: "flaticon-clock",
      title: "quick\nservices",
    },
  ],
};

export default featuresSection;

export const featuresSectionTwo = {
  image,
  title: "Get in touch \n with us",
  title2: "Everything you need to know about digital regenesis",  
};

export const featureSix = {
  image: image2,
  imageCaption: "Total design freedom \n for everyone",
  title: "Linoor place a very strong impact",
  text: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour, or randomised words.",
  items: [
    "Self-contained, state-of-the-art time clock",
    "Scalability of up to 500 employees per time clock",
    "The ability to connect up to 32 time clocks",
    "Employee self-enrollment",
  ],
};

export const featureSeven = {
  title: "Meet our faculties",
  desc: "Revolutionise your career with future ready skills",
  features: [
    {
      id: 1,
      image: "7.jpg",
      title: "Bhupendra Mishra",
      text: "Bhupendra Mishra has key skills in SEO, Google Ads, Digital Marketing, Google Analytics, Facebook Marketing, etc. Bhupendra Mishra holds an MBA degree in International Business from the Devi Ahilya University of Indore and is pursuing his Ph.D. from ITM University, Raipur.",
      designation : "Senior lecture",
    },
    {
      id: 2,
      image: "7.jpg",
      title: "Dr. Deepika Sharma",
      text: "Dr. Deepika Sharma is a Ph.D. holder in Business Management. She has also obtained an MBA in Finance & Marketing, and B.E. in Electronics & Telecommunication. She has worked as a software engineer at Patni Computer Systems Ltd.",
      designation : "Senior lecture",
    },    
  ],
};

export const featureEight = {
  image: image3,
  title: "We’re here to help your businesses growth",
  text: "There are many variations of pass of lorem ips but the majority have suffered alteration in some form. Injected humour not randomised words which.",
  barTitle: "Digital marketing",
  percent: 70,
};
