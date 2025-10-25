// Simple authentication utility for admin
// In production, use proper authentication like NextAuth.js or Supabase Auth

const ADMIN_PASSWORD = "admin123" // Change this in production!

export const verifyAdminPassword = (password: string): boolean => {
  return password === ADMIN_PASSWORD
}

export const setAdminSession = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("admin_token", token)
  }
}

export const getAdminSession = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("admin_token")
  }
  return null
}

export const clearAdminSession = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_token")
  }
}

export const generateAdminToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
