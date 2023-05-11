import { PrismaClient } from "@prisma/client";

// /declared variable will be global for the whole Node.js process running the Next.js app
declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
//creating a new instance for session in prod environment
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  //Looking for cached instance if in development environment to increase speed of development process. reduce the overhead of establishing a new database connection and improves development speed.
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
