export interface IPostListTypes {
  slug?: string;
  category: string | number;
  posts: Array<IPostTypes>;
}

export interface IPostTypes {
  id: number;
  slug: string;
  link: string;
  yoast_head_json: {
    og_image: Array<{ [key: string]: string | number }>;
    og_title: string;
    og_description: string;
    author: string;
    og_site_name: string;
    article_published_time: string;
  };
  title: { rendered: string };
  content?: { rendered: string };
}

export interface IPostCarouselTypes {
  values: IPostListTypes;
  screen: string;
}
export interface IPostContainerTypes {
  post: IPostTypes;
  restPost?: boolean;
}
interface IImage {
  desktopImage: string;
  mobileImage: string;
  link: string;
  label?: string;
  caption?: string;
}
export interface ICarouselProps {
  carouselProps: IImage[];
}

interface IPostToShow {
  [key: string]: number;
}
export const postToShow: IPostToShow = {
  sm: 1,
  md: 2,
  lg: 3,
};

export const carousalProps = [
  {
    desktopImage: "blog-home-Cyber-Security.webp",
    link: "/all-courses/cyber-security",
    mobileImage: "blog-home-Cyber-Security-responsive.webp",
  },
  {
    desktopImage: "blog-home-Data-Science.webp",
    link: "/all-courses/data-science",
    mobileImage: "blog-home-Data-Science-Responsive.webp",
  },
  {
    desktopImage: "blog-home-Design-Thinking.webp",
    link: "/all-courses/design-thinking",
    mobileImage: "blog-home-desig-thinking-responsive.webp",
  },
  {
    desktopImage: "blog-home-Digital-Marketing.webp",
    link: "/all-courses/digital-marketing-course",
    mobileImage: "blog-home-Digital-Marketing-responsive.webp",
  },
];

export const bannerImages = [
  "Project-Management.webp",
  "digital-marketing.webp",
  "data-science.webp",
  "cyber-security.jpg",
];
