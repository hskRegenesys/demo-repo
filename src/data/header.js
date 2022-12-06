import icon from "@/images/icons/close-1-1.png";
import logo4 from "@/images/logo-2.png";
import logo3 from "@/images/logo-3.png";
import logo2 from "@/images/logo-dark.png";
import logo1 from "@/images/logo.png";
import logo6 from "@/images/update-01-10-2021/logo-6-dark.png";
import logo7 from "@/images/update-01-10-2021/logo-7-dark.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5.png";
import logo10 from "@/images/update-09-06-2021/logo-6.png";
import logo9 from "@/images/update-26-02-2021/logo-horizontal-portfolio.png";

const home = {
  id: 1,
  name: "Home",
  href: "/", 
};

const navItemsTwo = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Services",
    href: "#services",
  },
  {
    id: 4,
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    id: 5,
    name: "Team",
    href: "#team",
  },
  {
    id: 6,
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    id: 7,
    name: "Blog",
    href: "#blog",
  },
  {
    id: 8,
    name: "Contact",
    href: "#contact",
  },
];

const navItems = [
  home,
  {
    id: 2,
    name: "About Us",
    href: "/about",
   
  },  
  {
   id: 3,
  name: "Courses",
   href: "/shop",
   subNavItems: [
    { id: 1, name: "Cart Page", href: "/cart" },
     { id: 2, name: "Pricing 02", href: "/pricing-2", isNew: true },
    { id: 3, name: "How it Works", href: "/how-it-works" },
       { id: 4, name: "Coming Soon", href: "/coming-soon" },
    { id: 5, name: "Testimonials", href: "/testimonials" },
    { id: 6, name: "Testimonials Two", href: "/testimonials-2" },
    { id: 7, name: "FAQs", href: "/faqs" }, 
    { id: 9, name: "Event Details", href: "/event-details" },
     { id: 10, name: "Clients Page", href: "/clients" },
   { id: 11, name: "404 Page", href: "/404" },
   ],
 },
{
   id: 4,
   name: "Courses",
   href: "/shop",
   subNavItems: [
   { id: 1, name: "All Courses", href: "/shop" },
   { id: 3, name: "Website Development", href: "/web-development" },
    { id: 4, name: "Graphic Designing", href: "/graphic-designing" },
     { id: 5, name: "Digital Marketing", href: "/digital-marketing" },
   { id: 6, name: "SEO & Content Writing", href: "/seo" },
     { id: 7, name: "App Development", href: "/app-development" },
    { id: 8, name: "UI/UX Designing", href: "/ui-designing" },
    ],
 },
  {
    id: 8,
   name: "Contact",
    href: "/contact", 
  },  

];

export const socials = [
  {
    id: 1,
    icon: "fab fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-instagram",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-pinterest-p",
    href: "#",
  },
];

const headerData = {
  title: "",
  title2: "",
  title3: ".",
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  navItems,
  navItemsTwo,
  address: "",
  phone: "",
  phone2: "",
  email: "",
  icon,
  socials,
  text: "",
};

export default headerData;
