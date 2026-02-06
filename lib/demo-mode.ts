// Demo mode detection for frontend-only deployment
export const isDemoMode = () => {
  // Check if we're in a serverless environment without real database
  return process.env.VERCEL === '1' || process.env.NETLIFY === 'true' || !process.env.DATABASE_URL?.includes('postgresql://');
}

export const DEMO_USER = {
  id: 'demo-user-id',
  email: 'demo@taxhacker.app',
  name: 'Demo User',
  avatar: null,
  membershipPlan: 'demo',
  storageUsed: 0,
  storageLimit: -1,
  aiBalance: 100,
}
