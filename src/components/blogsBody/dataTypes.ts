export interface IPostListTypes {
  slug?: string;
  category: string | number;
  posts: Array<{
    id: number;
    slug: string;
    yoast_head_json: {
      og_image: Array<{ [key: string]: string | number }>;
      og_title: string;
      og_description: string;
    };
  }>;
}

export interface IPostTypes {
  id: number;
  slug: string;
  yoast_head_json: {
    og_image: Array<{ [key: string]: string | number }>;
    og_title: string;
    og_description: string;
  };
  title?: { rendered: string };
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
    mobileImage: "blog-home-Cyber-Security-responsive.webp",
  },
  {
    desktopImage: "blog-home-Data-Science.webp",
    mobileImage: "blog-home-Data-Science-Responsive.webp",
  },
  {
    desktopImage: "blog-home-Design-Thinking.webp",
    mobileImage: "blog-home-desig-thinking-responsive.webp",
  },
  {
    desktopImage: "blog-home-Digital-Marketing.webp",
    mobileImage: "blog-home-Digital-Marketing-responsive.webp",
  },
  {
    desktopImage: "blog-home-Project-Management.webp",
    mobileImage: "blog-home-Project-Management-Responsive.webp",
  },
];

export const bannerImages = [
  "Project-Management.webp",
  "digital-marketing.webp",
  "data-science.webp",
  "cyber-security.jpg",
];
