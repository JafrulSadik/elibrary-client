export type UserAuth = {
  user?: {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user";
    profileImg?: string;
    about?: string;
  };
  tokens?: {
    accessToken: string;
  };
};
