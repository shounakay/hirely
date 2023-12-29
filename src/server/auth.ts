import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import * as encrypt from "bcrypt";
import { env } from "@/env";
import { db } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
    jwt: (jwtProps) => {
      console.log("jwtProps", jwtProps);
      return {};
    },
    signIn: (signinProps) => {
      console.log("signinProps", signinProps);
      return {} as any;
    },
  },
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 2 * 60,
  },
  pages: {
    signIn: "/signin",
    // signup: '/signup',
  },
  theme: {
    colorScheme: "light",
    brandColor: "#2c5958",
    logo: "",
    buttonText: "#bd4549",
  },
  adapter: PrismaAdapter(db),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Creds",
      credentials: {
        username: { label: "Email", placeholder: "" },
        password: { label: "Password", placeholder: "" },
      },
      async authorize(credentials, req) {
        console.log("cred auth", credentials, req);
        const { email, password } = credentials;
        const user = await db.user.findUnique({ where: { email } });
        const isPasswordMatch = await encrypt.compare(
          password,
          user?.password as string,
        );
        console.log("isPasswordMatch", isPasswordMatch);
        if (user && isPasswordMatch) {
          return user;
        }
        if (!user) {
          throw new Error("User not authorized");
        }
        return null;
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
