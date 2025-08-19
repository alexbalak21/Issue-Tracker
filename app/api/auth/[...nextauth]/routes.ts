import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/client";
import GoogleProvider from "next-auth/providers/google";
import { authConfig } from "@/auth.config";

const handler = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
  },
});

// Export the handler for NextAuth
export { handler as GET, handler as POST };

// Export the auth functions
export const { auth, signIn, signOut } = handler;