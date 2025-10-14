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
    name: "Aleeza Dress",
    store: "Kazami Store",
    image: "/aleeza-dress.jpg",
    colors: ["Mint", "Maroon", "Terracotta", "Ungu", "Hijau"],
    materials: ["Crepe", "Chiffon"],
    occasions: ["Formal", "Pengajian"],
    description: "Aleeza Dress sage berlayer yang anggun dan flowy.",
  },
  {
    id: 2,
    name: "Abaya Noor",
    store: "Kazami Store",
    image: "/abaya-noor.jpg",
    colors: ["Brown", "Dusty Pink", "Hitam", "Grey", "Blue"],
    materials: ["Crepe", "Satin"],
    occasions: ["Formal", "Pesta", "Pengajian"],
    description: "Abaya Noor dengan detail embellishment vertikal.",
  },
  {
    id: 3,
    name: "Abaya Kalila",
    store: "Kazami Store",
    image: "/abaya-kalila.jpg",
    colors: ["Dark Brown", "Taupe", "Cream", "Hitam", "Army", "olive"],
    materials: ["Crepe"],
    occasions: ["Formal", "Kerja"],
    description: "Abaya Kalila Set inner + outer dengan lapel berpayet yang mewah.",
  },
  {
    id: 4,
    name: "Abaya Haneen",
    store: "Kazami Store",
    image: "/abaya-haneen.jpg",
    colors: ["Cream", "Soft Pink", "Brown", "Hitam", "Olive",
    materials: ["Chiffon", "Crepe"],
    occasions: ["Pesta", "Formal", "Pengajian"],
    description: "Abaya Haneen dengan cape lembut yang feminin.",
  },
  {
    id: 5,
    name: "Abaya Mihra",
    store: "Kazami Store",
    image: "/abaya-mihra.jpg",
    colors: ["Caramel", "Army", "Dusty pink", "Merah", "Olive", "Cream"],
    materials: ["Satin", "Crepe"],
    occasions: ["Formal", "Pesta"],
    description: "Abaya Mihra dengan detail mutiara pada lengan.",
  },
  {
    id: 6,
    name: "Abaya Alezandria",
    store: "Kazami Store",
    image: "/alezandria-abaya.jpg",
    colors: ["Black", "Cream", "Brown"],
    materials: ["Chiffon", "Crepe"],
    occasions: ["Travel", "Pengajian", "Formal"],
    description: "Abaya Alezandria printing modern cocok untuk travel look.",
  },
  {
    id: 7,
    name: "Kaftan Deeba",
    store: "Kazami Store",
    image: "/deeba-kaftan.jpg",
    colors: ["Almond", "Coffe", "Olive", "Pink", "Orange", "Grey"],
    materials: ["Chiffon"],
    occasions: ["Pesta", "Formal"],
    description: "Kaftan Deeba flowy dengan cape transparan elegan.",
  },
  {
    id: 8,
    name: "Fay Dress",
    store: "Kazami Store",
    image: "/fay-dress.jpg",
    colors: ["Dark Brown", "Putih", "Pink", "Mocha"],
    materials: ["Crepe"],
    occasions: ["Pengajian", "Formal"],
    description: "Fay Dress syar'i simpel dengan khimar panjang.",
  },
  {
    id: 9,
    name: "Abaya Camellia",
    store: "Kazami Store",
    image: "/abaya-camellia.jpg",
    colors: ["Black", "Mint", "Putih", "Ungu", "Pink", "Merah", "Brown" ],
    materials: ["Crepe"],
    occasions: ["Pesta", "Formal"],
    description: "Abaya Camellia dengan piping hitam & bunga 3D.",
  },
  {
    id: 10,
    name: "Abaya Elaya",
    store: "Kazami Store",
    image: "/abaya-elaya.jpg",
    colors: ["Hitam", "Pink", "Hijau tua", "Maroon", "Orange"],
    materials: ["Crepe"],
    occasions: ["Pesta", "Formal", "Pengajian"],
    description: "Abaya Elaya dengan embellishment manis.",
  },
  {
    id: 11,
    name: "Abaya Moana",
    store: "Kazami Store",
    image: "/moana-abaya.jpg",
    colors: ["Lilac", "Maroon", "Mint", "Hitam", "Sky Blue"],
    materials: ["Crepe", "Chiffon"],
    occasions: ["Formal", "Pesta", "Pengajian"],
    description: "Abaya Moana berlayer dengan tali pinggang dan aksen manik.",
  },
  {
    id: 12,
    name: "Gemersik Raya",
    store: "Kazami Store",
    image: "/gemersik-raya.jpg",
    colors: ["Hitam", "Silver Blue", "Brown", "Maroon", "Olive"],
    materials: ["Chiffon", "Lace"],
    occasions: ["Formal", "Pesta", "Pengajian"],
    description: "Gemersik Raya Nuansa aquamarine lembut dengan outer ringan untuk tampilan lebaran elegan.",
  },
  {
    id: 13,
    name: "Abaya luna",
    store: "Kazami Store",
    image: "/luna-abaya.jpg",
    colors: ["Hitam", "Brown", "MAroon", "Mauve", "Cream", "Hijau"],
    materials: ["Chiffon"],
    occasions: ["Formal", "Pesta"],
    description: "Abaya Luna dengan dekor kristal setengah lingkar yang mewah.",
  },
  {
    id: 14,
    name: "Abaya Layl",
    store: "Kazami Store",
    image: "/layl-abaya.jpg",
    colors: ["Toska", "Olive", "Mocca", "Black", "Grey", "Sage"],
    materials: ["Crepe"],
    occasions: ["Formal", "Pengajian"],
    description: "Abaya Layl signature beraksen studs di lengan, banyak varian warna.",
  },
  {
    id: 15,
    name: "Petals Sarimbit",
    store: "Kazami Store",
    image: "/petals-sarimbit.jpg",
    colors: ["Sage", "Hitam", "Coklat muda", "Pink soft", "Biru tua"],
    materials: ["Chiffon"],
    occasions: ["Pesta", "Formal"],
    description: "Petals Sarimbit Motif floral pastel feminin yang lembut untuk acara spesial.",
  },
  {
    id: 16,
    name: "Meulaboh Dress",
    store: "Kazami Store",
    image: "/meulaboh-dress.jpg",
    colors: ["Navy", "Black", "Beige", "Terracotta", "Hijau muda", "Denim"],
    materials: ["Satin", "Chiffon"],
    occasions: ["Formal", "Pesta"],
    description: "Meulaboh Dress Set motif etnik elegan dengan palet navy–slate.",
  },
  {
    id: 17,
    name: "Kaftan Layali",
    store: "Kazami Store",
    image: "/kaftan-layali.jpg",
    colors: ["Hitam", "Brown", "Pearl", "Lavender", "Sky Blue", "Olive", "Merah"],
    materials: ["Chiffon", "Crepe"],
    occasions: ["Formal", "Pesta", "Pengajian"],
    description: "Kaftan Layali yang flowy dan seragam, sangat anggun.",
  },
  {
    id: 18,
    name: "Luxe Harmony",
    store: "Kazami Store",
    image: "/luxe-harmony.jpg",
    colors: ["Vanilla", " Hitam", "Soft Pink", "Coklat", "Grey"],
    materials: ["Crepe", "Lace"],
    occasions: ["Pesta", "Formal"],
    description: "Luxe Harmony Koleksi terracotta bertekstur dengan detail ruffle/lace.",
  },
]

export default function PilihOutfitPage() {
  const [selectedOutfits, setSelectedOutfits] = useState<number[]>([])
  const [filterStore, setFilterStore] = useState<string>("all")

  const stores = ["all", "Kazami Store"]

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
