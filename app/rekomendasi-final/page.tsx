"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowLeft, Star, ShoppingBag, Heart, Share2 } from "lucide-react"

// Import outfit data
const outfits = [
  {
    id: 1,
    name: "Aleeza Dress",
    store: "Kazami Store",
    image: "/aleeza-dress.jpg",
    colors: ["Sage", "Olive", "Beige"],
    materials: ["Crepe", "Chiffon"],
    occasions: ["Formal", "Pengajian"],
    description: "Dress hijau sage berlayer yang anggun dan flowy.",
    price: "Rp 600.000 - Rp 850.000",
  },
  {
    id: 2,
    name: "Abaya Noor",
    store: "Kazami Store",
    image: "/abaya-noor.jpg",
    colors: ["Brown", "Dusty Pink"],
    materials: ["Crepe", "Satin"],
    occasions: ["Formal", "Pesta", "Pengajian"],
    description: "Abaya elegan dengan detail embellishment vertikal.",
    price: "Rp 750.000 - Rp 1.050.000",
  },
  {
    id: 3,
    name: "Abaya Kalila",
    store: "Kazami Store",
    image: "/abaya-kalila.jpg",
    colors: ["Dark Brown", "Taupe"],
    materials: ["Crepe"],
    occasions: ["Formal", "Kerja"],
    description: "Set inner + outer dengan lapel berpayet yang mewah.",
    price: "Rp 850.000 - Rp 1.200.000",
  },
  {
    id: 4,
    name: "Abaya Haneen",
    store: "Kazami Store",
    image: "/abaya-haneen.jpg",
    colors: ["Blush", "Soft Pink"],
    materials: ["Chiffon", "Crepe"],
    occasions: ["Pesta", "Formal", "Pengajian"],
    description: "Abaya pastel dengan cape lembut yang feminin.",
    price: "Rp 800.000 - Rp 1.100.000",
  },
  {
    id: 5,
    name: "Abaya Mihra",
    store: "Kazami Store",
    image: "/abaya-mihra.jpg",
    colors: ["Olive", "Army"],
    materials: ["Satin", "Crepe"],
    occasions: ["Formal", "Pesta"],
    description: "Abaya olive dengan detail mutiara pada lengan.",
    price: "Rp 950.000 - Rp 1.300.000",
  },
  {
    id: 6,
    name: "Alezandria Abaya",
    store: "Kazami Store",
    image: "/alezandria-abaya.jpg",
    colors: ["Black", "Cream", "Brown"],
    materials: ["Chiffon", "Crepe"],
    occasions: ["Travel", "Pengajian", "Formal"],
    description: "Abaya printing modern cocok untuk travel look.",
    price: "Rp 900.000 - Rp 1.200.000",
  },
  {
    id: 7,
    name: "Deeba Kaftan",
    store: "Kazami Store",
    image: "/deeba-kaftan.jpg",
    colors: ["Mauve", "Rose"],
    materials: ["Chiffon"],
    occasions: ["Pesta", "Formal"],
    description: "Kaftan flowy dengan cape transparan elegan.",
    price: "Rp 900.000 - Rp 1.200.000",
  },
  {
    id: 8,
    name: "Fay Dress",
    store: "Kazami Store",
    image: "/fay-dress.jpg",
    colors: ["Dark Brown"],
    materials: ["Crepe"],
    occasions: ["Pengajian", "Formal"],
    description: "Dress syar'i simpel dengan khimar panjang.",
    price: "Rp 700.000 - Rp 900.000",
  },
  {
    id: 9,
    name: "Abaya Camellia",
    store: "Kazami Store",
    image: "/abaya-camellia.jpg",
    colors: ["Lavender", "Black Trim"],
    materials: ["Crepe"],
    occasions: ["Pesta", "Formal"],
    description: "Abaya lavender dengan piping hitam & bunga 3D.",
    price: "Rp 900.000 - Rp 1.250.000",
  },
  {
    id: 10,
    name: "Abaya Elaya",
    store: "Kazami Store",
    image: "/abaya-elaya.jpg",
    colors: ["Brick Rose"],
    materials: ["Crepe"],
    occasions: ["Pesta", "Formal", "Pengajian"],
    description: "Abaya ruffle dengan embellishment manis.",
    price: "Rp 850.000 - Rp 1.150.000",
  },
  {
    id: 11,
    name: "Moana Abaya",
    store: "Kazami Store",
    image: "/moana-abaya.jpg",
    colors: ["Lilac", "Mauve", "Taupe"],
    materials: ["Crepe", "Chiffon"],
    occasions: ["Formal", "Pesta", "Pengajian"],
    description: "Abaya lilac berlayer dengan tali pinggang dan aksen manik.",
    price: "Rp 850.000 - Rp 1.200.000",
  },
  {
    id: 12,
    name: "Gemersik Raya",
    store: "Kazami Store",
    image: "/gemersik-raya.jpg",
    colors: ["Aquamarine", "Silver Blue", "Ivory"],
    materials: ["Chiffon", "Lace"],
    occasions: ["Formal", "Pesta", "Pengajian"],
    description: "Nuansa aquamarine lembut dengan outer ringan.",
    price: "Rp 900.000 - Rp 1.300.000",
  },
  {
    id: 13,
    name: "Luna Abaya",
    store: "Kazami Store",
    image: "/luna-abaya.jpg",
    colors: ["Cherry Wood", "Terracotta"],
    materials: ["Chiffon"],
    occasions: ["Formal", "Pesta"],
    description: "Abaya flowy dengan dekor kristal mewah.",
    price: "Rp 950.000 - Rp 1.350.000",
  },
  {
    id: 14,
    name: "Layl Abaya",
    store: "Kazami Store",
    image: "/layl-abaya.jpg",
    colors: ["Teal", "Olive", "Camel", "Black"],
    materials: ["Crepe"],
    occasions: ["Formal", "Pengajian"],
    description: "Abaya signature beraksen studs di lengan.",
    price: "Rp 800.000 - Rp 1.150.000",
  },
  {
    id: 15,
    name: "Petals Sarimbit",
    store: "Kazami Store",
    image: "/petals-sarimbit.jpg",
    colors: ["Sage", "Peach Floral", "Beige"],
    materials: ["Chiffon"],
    occasions: ["Pesta", "Formal"],
    description: "Motif floral pastel feminin untuk momen spesial.",
    price: "Rp 900.000 - Rp 1.250.000",
  },
  {
    id: 16,
    name: "Meulaboh Dress",
    store: "Kazami Store",
    image: "/meulaboh-dress.jpg",
    colors: ["Navy", "Slate", "Beige"],
    materials: ["Satin", "Chiffon"],
    occasions: ["Formal", "Pesta"],
    description: "Motif etnik elegan dengan palet navy–slate.",
    price: "Rp 950.000 - Rp 1.400.000",
  },
  {
    id: 17,
    name: "Kaftan Layali",
    store: "Kazami Store",
    image: "/kaftan-layali.jpg",
    colors: ["Ivory", "White", "Pearl"],
    materials: ["Chiffon", "Crepe"],
    occasions: ["Formal", "Pesta", "Pengajian"],
    description: "Kaftan putih seragam yang sangat anggun.",
    price: "Rp 1.000.000 - Rp 1.500.000",
  },
  {
    id: 18,
    name: "Luxe Harmony",
    store: "Kazami Store",
    image: "/luxe-harmony.jpg",
    colors: ["Terracotta", "Rose Brown"],
    materials: ["Crepe", "Lace"],
    occasions: ["Pesta", "Formal"],
    description: "Koleksi terracotta dengan detail ruffle dan lace.",
    price: "Rp 900.000 - Rp 1.350.000",
  },
]

export default function RekomendasiFinalPage() {
  const [selectedOccasion, setSelectedOccasion] = useState("")
  const [selectedSkinTone, setSelectedSkinTone] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState("")
  const [recommendedOutfits, setRecommendedOutfits] = useState<any[]>([])

  useEffect(() => {
    // Get user selections from localStorage
    const occasion = localStorage.getItem("selectedOccasion")
    const skinTone = localStorage.getItem("selectedSkinTone")
    const material = localStorage.getItem("selectedMaterial")

    if (!occasion || !skinTone || !material) {
      // Redirect to start if missing data
      window.location.href = "/pilih-tema"
      return
    }

    setSelectedOccasion(occasion)
    setSelectedSkinTone(skinTone)
    setSelectedMaterial(material)

    // Filter and recommend outfits based on selections
    const filtered = filterOutfitsByPreferences(occasion, skinTone, material)
    setRecommendedOutfits(filtered)
  }, [])

  const filterOutfitsByPreferences = (occasion: string, skinTone: string, material: string) => {
    // Define skin tone color mapping
    const skinToneColors: { [key: string]: string[] } = {
      putih: ["Navy", "Burgundy", "Black", "Coral", "Light Blue", "Dusty Rose"],
      "sawo-matang": ["Coral", "Mustard", "Brown", "Olive Green", "Burgundy", "Beige"],
      "kuning-langsat": ["Navy", "Black", "Burgundy", "Brown", "Sage", "Dusty Pink"],
      gelap: ["Pink", "Coral", "Light Blue", "Sage", "Cream", "Lavender", "Mustard"],
    }

    // Define material mapping
    const materialMapping: { [key: string]: string[] } = {
      panas: ["Katun", "Linen", "Rayon", "Jersey"],
      dingin: ["Wol", "Jersey", "Fleece", "Crepe"],
      formal: ["Crepe", "Chiffon", "Satin", "Silk"],
      fleksibel: ["Katun", "Rayon", "Jersey", "Crepe", "Chiffon", "Satin"],
    }

    const preferredColors = skinToneColors[skinTone] || []
    const preferredMaterials = materialMapping[material] || []

    // Filter outfits based on occasion, colors, and materials
    const filtered = outfits.filter((outfit) => {
      // Check occasion match
      const occasionMatch = outfit.occasions.some(
        (occ) => occ.toLowerCase().includes(occasion.replace("-", " ")) || occasion.includes(occ.toLowerCase()),
      )

      // Check color match
      const colorMatch = outfit.colors.some((color) =>
        preferredColors.some(
          (prefColor) =>
            color.toLowerCase().includes(prefColor.toLowerCase()) ||
            prefColor.toLowerCase().includes(color.toLowerCase()),
        ),
      )

      // Check material match
      const materialMatch =
        material === "fleksibel" ||
        outfit.materials.some((mat) =>
          preferredMaterials.some(
            (prefMat) =>
              mat.toLowerCase().includes(prefMat.toLowerCase()) || prefMat.toLowerCase().includes(mat.toLowerCase()),
          ),
        )

      return occasionMatch && colorMatch && materialMatch
    })

    // Sort by relevance and return top 6
    return filtered.slice(0, 6).map((outfit, index) => ({
      ...outfit,
      score: 95 - index * 3, // Simulate SAW scores
      matchReasons: [
        `Cocok untuk ${occasion.replace("-", " ")}`,
        `Warna sesuai tone kulit ${skinTone.replace("-", " ")}`,
        `Bahan ${material === "fleksibel" ? "beragam" : "sesuai cuaca"}`,
      ],
    }))
  }

  const getOccasionLabel = (occasion: string) => {
    const labels: { [key: string]: string } = {
      pengajian: "Pengajian",
      "kerja-kuliah": "Kerja/Kuliah",
      pesta: "Pesta",
      "jalan-santai": "Jalan Santai",
      formal: "Formal",
      casual: "Casual",
    }
    return labels[occasion] || occasion
  }

  const getSkinToneLabel = (skinTone: string) => {
    const labels: { [key: string]: string } = {
      putih: "Putih",
      "sawo-matang": "Sawo Matang",
      "kuning-langsat": "Kuning Langsat",
      gelap: "Gelap",
    }
    return labels[skinTone] || skinTone
  }

  const getMaterialLabel = (material: string) => {
    const labels: { [key: string]: string } = {
      panas: "Cuaca Panas",
      dingin: "Cuaca Dingin",
      formal: "Bahan Premium",
      fleksibel: "Fleksibel",
    }
    return labels[material] || material
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/pilih-bahan" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Kembali
              </Link>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">NyariOutfit</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Bagikan
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Rekomendasi Outfit Terbaik Untukmu! 🎉</h1>
          <p className="text-muted-foreground text-lg">
            Berdasarkan pilihan tema, warna, dan bahan yang kamu pilih, ini dia outfit syar'i terbaik yang cocok untukmu
          </p>
        </div>

        {/* User Preferences Summary */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">Preferensi Kamu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">🎯</div>
                <div>
                  <div className="font-medium">Tema</div>
                  <div className="text-sm text-muted-foreground">{getOccasionLabel(selectedOccasion)}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">🎨</div>
                <div>
                  <div className="font-medium">Tone Kulit</div>
                  <div className="text-sm text-muted-foreground">{getSkinToneLabel(selectedSkinTone)}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">🧵</div>
                <div>
                  <div className="font-medium">Bahan</div>
                  <div className="text-sm text-muted-foreground">{getMaterialLabel(selectedMaterial)}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommended Outfits */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Outfit Rekomendasi ({recommendedOutfits.length} pilihan)</h2>

          {recommendedOutfits.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-6xl mb-4">😔</div>
                <h3 className="text-xl font-semibold mb-2">Belum Ada Outfit yang Cocok</h3>
                <p className="text-muted-foreground mb-4">
                  Maaf, belum ada outfit yang sesuai dengan preferensi kamu. Coba ubah pilihan atau pilih "Fleksibel"
                  untuk bahan.
                </p>
                <Link href="/pilih-tema">
                  <Button>Coba Lagi</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedOutfits.map((outfit, index) => (
                <Card key={outfit.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={outfit.image || "/placeholder.svg"}
                        alt={outfit.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-primary text-primary-foreground">#{index + 1} Rekomendasi</Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{outfit.score}%</span>
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <Button size="sm" variant="secondary" className="bg-background/90 backdrop-blur-sm">
                          <Heart className="h-4 w-4 mr-1" />
                          Suka
                        </Button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{outfit.name}</h3>
                          <Badge variant="outline" className="mt-1">
                            {outfit.store}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-3">{outfit.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex flex-wrap gap-1">
                          <span className="text-xs font-medium text-muted-foreground">Kenapa cocok:</span>
                          {outfit.matchReasons.map((reason: string, idx: number) => (
                            <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">
                              {reason}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1">
                          <span className="text-xs font-medium text-muted-foreground">Warna:</span>
                          {outfit.colors.map((color: string) => (
                            <Badge key={color} variant="outline" className="text-xs">
                              {color}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1">
                          <span className="text-xs font-medium text-muted-foreground">Bahan:</span>
                          {outfit.materials.map((material: string) => (
                            <Badge key={material} variant="outline" className="text-xs">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-sm font-medium text-primary">{outfit.price}</div>
                        <Button size="sm">
                          <ShoppingBag className="h-4 w-4 mr-1" />
                          Lihat Toko
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Suka dengan rekomendasinya? 💕</h3>
            <p className="text-muted-foreground mb-6">
              Coba lagi dengan preferensi berbeda atau bagikan ke teman-temanmu!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pilih-tema">
                <Button size="lg">Coba Preferensi Lain</Button>
              </Link>
              <Button variant="outline" size="lg">
                <Share2 className="h-4 w-4 mr-2" />
                Bagikan Hasil
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
