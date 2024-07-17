import "next-auth";

declare module "next-auth" {
  interface Session {
    user:
      | ({
          id: string;
          name: string;
          role: string;
          email: string;
        } & DefaultSession["user"])
      | null;

    tokens: {
      accessToken: string;
    } | null;
  }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
    user:
      | ({
          id: string;
          name: string;
          role: string;
          email: string;
        } & DefaultSession["user"])
      | null;
    token: {
      accessToken: string;
    } | null;
  }
}
