"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Loader } from "lucide-react"
import { AdminGuard } from "@/components/admin-guard"

function CreateOutfitContent() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    store: "Kazami Store",
    image: "",
    colors: "",
    materials: "",
    occasions: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/outfits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push("/admin")
      } else {
        alert("Gagal membuat outfit")
      }
    } catch (error) {
      console.error("Failed to create outfit:", error)
      alert("Gagal membuat outfit")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Link href="/admin" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </Link>
            <h1 className="text-xl font-bold">Tambah Outfit Baru</h1>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Form Tambah Outfit</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nama Outfit</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Contoh: Abaya Luna"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Toko</label>
                <select
                  name="store"
                  value={formData.store}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option>Kazami Store</option>
                  <option>Hijab Alila</option>
                  <option>Pelangi Hijab</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">URL Gambar</label>
                <Input
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="/luna-abaya.jpg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Warna (pisahkan dengan koma)</label>
                <Input
                  name="colors"
                  value={formData.colors}
                  onChange={handleChange}
                  placeholder="Hitam, Brown, Maroon"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Bahan (pisahkan dengan koma)</label>
                <Input
                  name="materials"
                  value={formData.materials}
                  onChange={handleChange}
                  placeholder="Chiffon, Crepe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cocok untuk (pisahkan dengan koma)</label>
                <Input
                  name="occasions"
                  value={formData.occasions}
                  onChange={handleChange}
                  placeholder="Formal, Pesta"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Deskripsi</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Deskripsi outfit..."
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading ? (
                    <>
                      <Loader className="h-4 w-4 mr-2 animate-spin" />
                      Menyimpan...
                    </>
                  ) : (
                    "Simpan Outfit"
                  )}
                </Button>
                <Link href="/admin" className="flex-1">
                  <Button type="button" variant="outline" className="w-full bg-transparent">
                    Batal
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function CreateOutfitPage() {
  return (
    <AdminGuard>
      <CreateOutfitContent />
    </AdminGuard>
  )
}
