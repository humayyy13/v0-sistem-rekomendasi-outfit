"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Sparkles, ArrowLeft, ShoppingBag, Check } from "lucide-react"

const outfits = [
  {
    id: 1,
    name: "Abaya Keffiyeh Collection",
    store: "Hijab Alila",
    image: "/hijab-alila-keffiyeh-collection.jpeg",
    colors: ["Hitam", "Beige", "Burgundy", "Olive", "Light Blue"],
    materials: ["Katun", "Rayon"],
    occasions: ["Pengajian", "Formal"],
    description: "Koleksi abaya keffiyeh dengan motif tradisional yang elegan dan syar'i",
  },
  {
    id: 2,
    name: "Swarna Bhumi Collection",
    store: "Kazami Store",
    image: "/kazami-swarna-bhumi-collection.jpeg",
    colors: ["Brown", "Taupe", "Mocha", "Camel"],
    materials: ["Crepe", "Chiffon"],
    occasions: ["Formal", "Pesta"],
    description: "Koleksi Swarna Bhumi dengan detail bordir mewah dan warna earth tone yang elegan",
  },
  {
    id: 3,
    name: "Syahidah Collection",
    store: "Pelangi Hijab",
    image: "/pelangi-syahidah-collection.jpeg",
    colors: ["Pink", "Burgundy", "Rose"],
    materials: ["Jersey", "Katun"],
    occasions: ["Pengajian", "Formal"],
    description: "Koleksi Syahidah dengan koordinasi warna pink dan burgundy yang anggun dan syar'i",
  },
  {
    id: 4,
    name: "Gamis Collection",
    store: "Hijab Alila",
    image: "/hijab-alila-gamis-collection.jpeg",
    colors: ["Coral", "Blue", "Burgundy", "Mustard"],
    materials: ["Jersey", "Katun"],
    occasions: ["Kerja", "Pengajian"],
    description: "Koleksi gamis dengan warna-warna cerah yang nyaman untuk pemakaian sehari-hari",
  },
  {
    id: 5,
    name: "Elegant Dark Collection",
    store: "Kazami Store",
    image: "/kazami-elegant-dark-collection.jpeg",
    colors: ["Navy", "Charcoal", "Black"],
    materials: ["Crepe", "Satin"],
    occasions: ["Formal", "Pesta"],
    description: "Koleksi abaya elegan dengan motif intricate dalam warna gelap yang mewah",
  },
  {
    id: 6,
    name: "Rayyan Collection",
    store: "Pelangi Hijab",
    image: "/pelangi-rayyan-collection.jpeg",
    colors: ["Pink", "Coral", "Brown", "Beige", "Sage"],
    materials: ["Katun", "Rayon"],
    occasions: ["Casual", "Kerja", "Pengajian"],
    description: "Koleksi Rayyan dengan variasi warna soft dan desain yang versatile untuk berbagai aktivitas",
  },
  {
    id: 7,
    name: "Mahra Collection",
    store: "Hijab Alila",
    image: "/hijab-alila-mahra-collection.jpg",
    colors: ["Navy", "Burgundy", "Beige", "Coral", "Black"],
    materials: ["Katun", "Rayon"],
    occasions: ["Pengajian", "Formal", "Kerja"],
    description: "Koleksi New Mahra dengan desain modern dan warna earth tone yang elegan",
  },
  {
    id: 8,
    name: "Elegant Abaya",
    store: "Hijab Alila",
    image: "/hijab-alila-single-model.jpeg",
    colors: ["Beige", "Taupe"],
    materials: ["Crepe", "Chiffon"],
    occasions: ["Formal", "Pesta"],
    description: "Abaya elegan dengan detail bordir untuk tampilan yang anggun dan syar'i",
  },
  {
    id: 9,
    name: "Casual Hijab Collection",
    store: "Hijab Alila",
    image: "/hijab-alila-casual-collection.jpeg",
    colors: ["Navy", "Gray", "Black", "Light Blue"],
    materials: ["Jersey", "Katun"],
    occasions: ["Casual", "Kuliah", "Kerja"],
    description: "Koleksi hijab casual yang nyaman dan praktis untuk aktivitas sehari-hari",
  },
  {
    id: 10,
    name: "Minimalist Duo Collection",
    store: "Kazami Store",
    image: "/kazami-minimalist-duo.jpeg",
    colors: ["Black", "Dusty Pink"],
    materials: ["Jersey", "Crepe"],
    occasions: ["Casual", "Kerja"],
    description: "Koleksi minimalis dengan desain clean dan warna netral yang versatile",
  },
  {
    id: 11,
    name: "Classic Duo Collection",
    store: "Kazami Store",
    image: "/kazami-burgundy-black-duo.jpeg",
    colors: ["Black", "Burgundy"],
    materials: ["Crepe", "Chiffon"],
    occasions: ["Formal", "Pengajian"],
    description: "Koleksi klasik dengan detail trim yang elegan dalam warna timeless",
  },
  {
    id: 12,
    name: "Ralila Collection",
    store: "Kazami Store",
    image: "/kazami-ralila-collection.jpeg",
    colors: ["Olive Green", "Beige", "Black", "Brown"],
    materials: ["Katun", "Rayon"],
    occasions: ["Kerja", "Pengajian", "Formal"],
    description: "Koleksi Ralila dengan variasi warna earth tone yang cocok untuk berbagai acara",
  },
  {
    id: 13,
    name: "Mona Collection",
    store: "Pelangi Hijab",
    image: "/pelangi-mona-collection.jpeg",
    colors: ["Olive Green", "Mustard", "Light Pink", "Burgundy"],
    materials: ["Crepe", "Chiffon"],
    occasions: ["Formal", "Pesta", "Pengajian"],
    description: "Koleksi Mona dengan pilihan warna beragam yang cocok untuk berbagai tone kulit",
  },
  {
    id: 14,
    name: "Shiya Collection",
    store: "Pelangi Hijab",
    image: "/pelangi-shiya-collection.jpeg",
    colors: ["Light Pink", "Mauve", "Dusty Rose", "Blush"],
    materials: ["Jersey", "Katun"],
    occasions: ["Pengajian", "Formal", "Kerja"],
    description: "Koleksi Shiya dengan gradasi warna pink yang lembut dan feminin",
  },
  {
    id: 15,
    name: "Thalia Collection",
    store: "Pelangi Hijab",
    image: "/pelangi-thalia-collection.jpeg",
    colors: ["Cream", "Pink", "Coral", "Sage", "Lavender", "Navy"],
    materials: ["Katun", "Rayon", "Jersey"],
    occasions: ["Casual", "Kerja", "Pengajian"],
    description: "Koleksi Thalia dengan spektrum warna lengkap dari pastel hingga bold untuk semua preferensi",
  },
]

export default function PilihOutfitPage() {
  const [selectedOutfits, setSelectedOutfits] = useState<number[]>([])
  const [filterStore, setFilterStore] = useState<string>("all")

  const stores = ["all", "Hijab Alila", "Kazami Store", "Pelangi Hijab"]

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Pilih Outfit untuk Dibandingkan</h1>
          <p className="text-muted-foreground text-lg">
            Pilih beberapa outfit yang ingin kamu bandingkan. Sistem akan memberikan rekomendasi terbaik berdasarkan
            preferensimu.
          </p>
        </div>

        {/* Store Filter */}
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

        {/* Outfit Grid */}
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
