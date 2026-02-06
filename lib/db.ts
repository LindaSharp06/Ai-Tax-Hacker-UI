import { PrismaClient } from "@/prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// For demo/frontend-only deployments, create a mock Prisma client
const isDemoMode = process.env.VERCEL === '1' || process.env.NETLIFY === 'true'

export const prisma = isDemoMode 
  ? ({} as PrismaClient) // Mock client for demo mode
  : (globalForPrisma.prisma ?? new PrismaClient({ log: ["query", "info", "warn", "error"] }))

if (process.env.NODE_ENV !== "production" && !isDemoMode) {
  globalForPrisma.prisma = prisma
}
