import { JsxElement } from "typescript";

export interface IPostListTypes {
  category: string | number;
  posts: Array<{
    id: number;
    slug: number;
    yoast_head_json: {
      og_image: Array<{ [key: string]: string | number }>;
      og_title: string;
      og_description: string;
    };
  }>;
}

export interface IPostTypes {
  id: number;
  slug: number;
  yoast_head_json: {
    og_image: Array<{ [key: string]: string | number }>;
    og_title: string;
    og_description: string;
  };
  title: { rendered: string };
  content: { rendered: string };
}
