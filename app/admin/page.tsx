"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Edit2, Trash2, Loader, LogOut } from "lucide-react"
import { AdminGuard } from "@/components/admin-guard"
import type { Outfit } from "@/lib/types"

function AdminPageContent() {
  const router = useRouter()
  const [outfits, setOutfits] = useState<Outfit[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<number | null>(null)

  useEffect(() => {
    fetchOutfits()
  }, [])

  const fetchOutfits = async () => {
    try {
      const response = await fetch("/api/outfits")
      const data = await response.json()
      setOutfits(data)
    } catch (error) {
      console.error("Failed to fetch outfits:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah kamu yakin ingin menghapus outfit ini?")) return

    setDeleting(id)
    try {
      const response = await fetch(`/api/outfits/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setOutfits(outfits.filter((o) => o.id !== id))
      } else {
        alert("Gagal menghapus outfit")
      }
    } catch (error) {
      console.error("Failed to delete outfit:", error)
      alert("Gagal menghapus outfit")
    } finally {
      setDeleting(null)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/admin/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Kembali
              </Link>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/admin/create">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Tambah Outfit
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout} className="bg-transparent">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Kelola Outfit</h2>
          <p className="text-muted-foreground">Total: {outfits.length} outfit</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outfits.map((outfit) => (
              <Card key={outfit.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={outfit.image || "/placeholder.svg"}
                    alt={outfit.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{outfit.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {outfit.store}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{outfit.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex flex-wrap gap-1">
                      {outfit.colors.slice(0, 3).map((color) => (
                        <Badge key={color} variant="secondary" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                      {outfit.colors.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{outfit.colors.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/admin/edit/${outfit.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <Edit2 className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(outfit.id)}
                      disabled={deleting === outfit.id}
                      className="flex-1"
                    >
                      {deleting === outfit.id ? (
                        <Loader className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <Trash2 className="h-4 w-4 mr-1" />
                          Hapus
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && outfits.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground mb-4">Belum ada outfit</p>
              <Link href="/admin/create">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Buat Outfit Pertama
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default function AdminPage() {
  return (
    <AdminGuard>
      <AdminPageContent />
    </AdminGuard>
  )
}
