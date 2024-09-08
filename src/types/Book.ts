import { Genre } from "./Genre";
import { User } from "./User";

type UserType = Pick<User, "_id" | "name" | "about" | "profileImg">;

export type Book = {
  _id: string;
  title: string;
  genre: Genre;
  cover: string;
  description: string;
  author: UserType;
  status: "pending" | "approved" | "blocked" | "decline";
  downloads: number;
  file: string;
  prevStart?: number;
  prevEnd?: number;
  previewFile?: string;
  price?: number;
  totalRating: number;
  numOfRating: number;
  createdAt: Date;
  updatedAt: Date;
};

export type PaginationType = {
  next: null | number;
  page: number;
  prev: null | number;
  totalPage: number;
};

export type GetUserBooksProps = {
  page: number;
};

export type GetBooksProps = {
  page: number;
  sortBy: string;
  sortType: string;
  apiUrl: string;
};

export type Reviews = {
  bookId: string;
  authorId: User;
  profileImg?: string;
  rating?: number;
  comment?: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type RatingCount = {
  _id: number;
  count: number;
};
