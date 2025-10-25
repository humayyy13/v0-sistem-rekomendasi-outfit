"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Sparkles, ArrowLeft, ShoppingBag, Check, Loader } from "lucide-react"
import type { Outfit } from "@/lib/types"

export default function PilihOutfitPage() {
  const [outfits, setOutfits] = useState<Outfit[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedOutfits, setSelectedOutfits] = useState<number[]>([])
  const [filterStore, setFilterStore] = useState<string>("all")

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

  const stores = ["all", ...new Set(outfits.map((o) => o.store))]

  const filteredOutfits = filterStore === "all" ? outfits : outfits.filter((outfit) => outfit.store === filterStore)

  const handleOutfitSelect = (outfitId: number) => {
    setSelectedOutfits((prev) => (prev.includes(outfitId) ? prev.filter((id) => id !== outfitId) : [...prev, outfitId]))
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
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">NyariOutfit</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{selectedOutfits.length} outfit dipilih</span>
              {selectedOutfits.length > 0 && (
                <Link href="/preferensi">
                  <Button>Lanjut ke Preferensi</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Pilih Outfit untuk Dibandingkan</h1>
          <p className="text-muted-foreground text-lg">
            Pilih beberapa outfit yang ingin kamu bandingkan. Sistem akan memberikan rekomendasi terbaik berdasarkan
            preferensimu.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Filter berdasarkan Toko</h3>
          <div className="flex flex-wrap gap-2">
            {stores.map((store) => (
              <Button
                key={store}
                variant={filterStore === store ? "default" : "outline"}
                onClick={() => setFilterStore(store)}
                className="capitalize"
              >
                {store === "all" ? "Semua Toko" : store}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid Outfit */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOutfits.map((outfit) => (
              <Card key={outfit.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={outfit.image || "/placeholder.svg"}
                      alt={outfit.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {outfit.store}
                        </Badge>
                        <div
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors ${
                            selectedOutfits.includes(outfit.id)
                              ? "bg-primary border-primary text-primary-foreground"
                              : "bg-background/80 border-border hover:border-primary"
                          }`}
                          onClick={() => handleOutfitSelect(outfit.id)}
                        >
                          {selectedOutfits.includes(outfit.id) && <Check className="h-4 w-4" />}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{outfit.name}</h3>
                    </div>

                    <p className="text-muted-foreground text-sm mb-3">{outfit.description}</p>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs font-medium text-muted-foreground">Warna:</span>
                        {outfit.colors.map((color) => (
                          <Badge key={color} variant="outline" className="text-xs">
                            {color}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs font-medium text-muted-foreground">Bahan:</span>
                        {outfit.materials.map((material) => (
                          <Badge key={material} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs font-medium text-muted-foreground">Cocok untuk:</span>
                        {outfit.occasions.map((occasion) => (
                          <Badge key={occasion} variant="outline" className="text-xs">
                            {occasion}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={selectedOutfits.includes(outfit.id)}
                            onCheckedChange={() => handleOutfitSelect(outfit.id)}
                          />
                          <span className="text-sm">Pilih untuk dibandingkan</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ShoppingBag className="h-4 w-4 mr-1" />
                          Lihat Toko
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {selectedOutfits.length > 0 && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <Card className="bg-primary text-primary-foreground shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">{selectedOutfits.length} outfit dipilih</span>
                  <Link href="/preferensi">
                    <Button variant="secondary">Lanjut ke Preferensi</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
