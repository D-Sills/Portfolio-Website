export type Project = {
  title: string;
  description: string;
  tags: string[];
  images: { src: string; caption?: string }[];
  repoLink?: string;
};
