export type Blog = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  title?: string;
  body?: string;
  category?: Category;
  tags?: BlogTag[];
  image?: ImageType;
};

export type Category = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  name?: string;
};

export type BlogTag = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  tag?: string;
};

export type ImageType = {
  url?: string;
  height?: number;
  width?: number;
};
