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
  image: string;
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
    image: "digital-marketing.jpeg",
  },
  {
    image: "data-science.jpeg",
  },
  {
    image: "Project-Management-Banner.png",
  },
  {
    image: "cyber-security.jpg",
  },
];
