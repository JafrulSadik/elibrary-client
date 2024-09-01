export type UserAuth = {
  user?: {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user";
  };
  tokens?: {
    accessToken: string;
  };
};
