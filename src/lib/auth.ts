import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { config } from "../config/config";
import { getIsTokenValid } from "./session-checker";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          if (!email || !password)
            throw new Error("All the fields are required.");

          const response: any = await fetch(
            `${config.baseUrl}/api/v1/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                password: password,
              }),
            }
          );

          if (
            response.status === 404 ||
            response.status === 401 ||
            response.status === 400
          ) {
            throw new Error("Invalid username or password.");
          }

          const parsedData = await response.json();

          if (response.ok && parsedData) {
            return parsedData.data;
          }

          throw new Error("Something went wrong");
        } catch (error: any) {
          throw new Error(error?.message);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },

    async session({ session, token }) {
      if (!token.token) {
        return { user: null, tokens: null };
      }

      const isTokenValid = getIsTokenValid(token.token.accessToken);
      if (!isTokenValid) return { user: null, tokens: null };

      let sessionData = {
        user: token.user,
        tokens: { accessToken: token.token.accessToken },
      };
      return sessionData;
    },
  },
});
