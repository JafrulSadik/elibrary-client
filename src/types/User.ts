export type User = {
  _id: string;
  name: string;
  role: string;
  email: string;
  about: string;
};

export type PopularAuthorType = {
  _id: string;
  name: string;
  totalBooks: number;
  totalDownloads: number;
};
