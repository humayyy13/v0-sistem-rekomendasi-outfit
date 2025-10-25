"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader } from "lucide-react"

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await fetch("/api/auth/verify")
        if (response.ok) {
          setAuthenticated(true)
        } else {
          setAuthenticated(false)
          router.push("/admin/login")
        }
      } catch (error) {
        setAuthenticated(false)
        router.push("/admin/login")
      }
    }

    verifyAuth()
  }, [router])

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!authenticated) {
    return null
  }

  return <>{children}</>
}
