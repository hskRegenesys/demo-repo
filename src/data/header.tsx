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
    id: 4,
    name: "Courses",
    href: "/all-course",
    subNavItems: [
      { id: 5, name: "Digital Marketing", href: "/digital-marketing-main" },
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
  logo4: "/assets/images/logo-dark.png",
  logo3: "/assets/images/logo-3.png",
  logo2: "/assets/images/logo-dark.png",
  logo1: "/assets/images/logo.png",
  logo6: "/assets/images/update-01-10-2021/logo-6-dark.png",
  logo7: "/assets/images/update-01-10-2021/logo-7-dark.png",
  logo8: "/assets/images/update-01-10-2021/logo-8-light.png",
  logo5: "/assets/images/update-09-06-2021/logo-5.png",
  logo10: "/assets/images/update-09-06-2021/logo-6.png",
  logo9: "/assets/images/update-26-02-2021/logo-horizontal-portfolio.png",
  navItems,
  navItemsTwo,
  address: "",
  phone: "",
  phone2: "",
  email: "",
  icon: "/assets/images/icons/close-1-1.png",
  socials,
  text: "",
};

export default headerData;
