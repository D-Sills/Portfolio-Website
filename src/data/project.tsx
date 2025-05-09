export type Project = {
  title: string;
  description: string;
  tags: string[];
  // array of carousal images with caption
  images: { src: string; caption?: string }[];
  repoLink?: string;
};
