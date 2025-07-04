import {PrismaClient} from "@/app/generated/prisma"

// Define a custom global object to cache the Prisma client instance
const globalForPrisma = global as unknown as {
  prisma: PrismaClient
}

// Create a new PrismaClient instance only if one doesn't already exist
const prisma = globalForPrisma.prisma || new PrismaClient()

// In development (non-production), cache the client on the global object to avoid multiple instances during hot reloads
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// Export the singleton Prisma client instance for use across your app
export default prisma
