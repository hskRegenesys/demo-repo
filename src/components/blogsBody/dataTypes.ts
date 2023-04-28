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
  title: { rendered: string };
  content: { rendered: string };
}
