import type { DefaultSession, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

// Define the auth configuration
export const authConfig = {
  // Specify pages
  pages: {
    signIn: "/login",
  },
  // Configure authentication providers
  providers: [],
  // Session configuration
  session: {
    strategy: "jwt" as const,
  },
  // Callbacks for JWT and session handling
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }): Promise<JWT> {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (session.user) {
        // @ts-ignore - We know this exists from our type declaration
        session.user.id = token.sub || "";
      }
      return session;
    },
    // Handle redirects
    redirect({ url, baseUrl }: { url: string; baseUrl: string }): string {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      try {
        if (new URL(url).origin === baseUrl) return url;
      } catch (e) {
        // Invalid URL, return base URL
      }
      return baseUrl;
    },
  },
  // Secret for JWT encryption
  secret: process.env.NEXTAUTH_SECRET,
  // Enable debug in development
  debug: process.env.NODE_ENV === "development",
} as const;
