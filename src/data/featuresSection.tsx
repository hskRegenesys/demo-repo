import bg from "@/images/background/image-3.jpg";
import image from "@/images/resource/featured-image-13.jpg";
import image2 from "@/images/update-26-02-2021/resources/feature-2-1.jpg";
import image3 from "@/images/update-26-02-2021/resources/feature-3-1.jpg";

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
  title: "planning and strategy",
  features: [
    {
      id: 1,
      image: "strategy-1-1.jpg",
      title: "Take a look around our business growth",
      text: "Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.",
      href: "/services",
    },
    {
      id: 2,
      image: "strategy-1-2.jpg",
      title: "Our Mission and unique vissions",
      text: "Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.",
      href: "/about",
    },
    {
      id: 3,
      image: "strategy-1-3.jpg",
      title: "Finance advice and a global solution",
      text: "Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.",
      href: "/services",
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
