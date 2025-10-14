"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Sparkles, ArrowLeft, Star, ShoppingBag, RotateCcw, Scale, Crown } from "lucide-react"
import {
  calculateSAW,
  getScoreInterpretation,
  type SAWResult,
  type UserPreferences,
  type Outfit,
} from "@/lib/saw-calculator"

const allOutfits: Outfit[] = [
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
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
  } as Outfit,
]

export default function RekomendasiPage() {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null)
  const [selectedOutfitIds, setSelectedOutfitIds] = useState<number[]>([])
  const [allResults, setAllResults] = useState<SAWResult[]>([])
  const [selectedResults, setSelectedResults] = useState<SAWResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get user preferences and selected outfits from localStorage
    const storedPreferences = localStorage.getItem("userPreferences")
    const storedSelectedOutfits = localStorage.getItem("selectedOutfits")

    if (storedPreferences) {
      const userPrefs = JSON.parse(storedPreferences) as UserPreferences
      setPreferences(userPrefs)

      const allSawResults = calculateSAW(allOutfits, userPrefs)
      setAllResults(allSawResults)

      if (storedSelectedOutfits) {
        const selectedIds = JSON.parse(storedSelectedOutfits) as number[]
        setSelectedOutfitIds(selectedIds)

        const selectedOutfits = allOutfits.filter((outfit) => selectedIds.includes(outfit.id))
        const selectedSawResults = calculateSAW(selectedOutfits, userPrefs)
        setSelectedResults(selectedSawResults)
      }
    }
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Menghitung rekomendasi terbaik...</p>
        </div>
      </div>
    )
  }

  if (!preferences || allResults.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Data tidak ditemukan</h2>
          <p className="text-muted-foreground mb-6">Silakan mulai dari awal untuk mendapatkan rekomendasi</p>
          <Link href="/">
            <Button>Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    )
  }

  const topOverallResult = allResults[0]
  const overallInterpretation = getScoreInterpretation(topOverallResult.score)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/preferensi" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Kembali
              </Link>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">NyariOutfit</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/pilih-outfit">
                <Button variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Coba Lagi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Rekomendasi Outfit untuk Kamu</h1>
          <p className="text-muted-foreground text-lg">
            Berdasarkan preferensimu, berikut adalah rekomendasi outfit syar'i terbaik
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Crown className="h-6 w-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">Rekomendasi Outfit Terbaik</h2>
            <Badge variant="secondary" className="ml-2">
              Dari Semua Koleksi
            </Badge>
          </div>

          {/* Top Overall Recommendation */}
          <Card className="mb-6 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <CardTitle className="text-xl">Pilihan Terbaik Untukmu</CardTitle>
                <Badge variant="secondary" className={overallInterpretation.color}>
                  {overallInterpretation.text}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={topOverallResult.outfit.image || "/placeholder.svg"}
                    alt={topOverallResult.outfit.name}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{topOverallResult.outfit.name}</h3>
                      <p className="text-muted-foreground">{topOverallResult.outfit.store}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{topOverallResult.outfit.description}</p>

                  {/* Score Display */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Skor Kesesuaian</span>
                      <span className="text-2xl font-bold text-primary">
                        {Math.round(topOverallResult.score * 100)}%
                      </span>
                    </div>
                    <Progress value={topOverallResult.score * 100} className="h-3" />
                  </div>

                  {/* Reasoning */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Mengapa outfit ini cocok untukmu:</h4>
                    <ul className="space-y-1">
                      {topOverallResult.reasoning.map((reason, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button className="flex-1">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Lihat di Toko
                    </Button>
                    <Button variant="outline">Simpan Favorit</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Other Top Recommendations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allResults.slice(1, 4).map((result, index) => {
              const resultInterpretation = getScoreInterpretation(result.score)
              return (
                <Card key={result.outfit.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={result.outfit.image || "/placeholder.svg"}
                        alt={result.outfit.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          #{index + 2}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{result.outfit.name}</h3>
                      </div>

                      <p className="text-muted-foreground text-sm mb-3">{result.outfit.store}</p>

                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Kesesuaian</span>
                          <span className={`text-sm font-bold ${resultInterpretation.color}`}>
                            {Math.round(result.score * 100)}%
                          </span>
                        </div>
                        <Progress value={result.score * 100} className="h-2" />
                      </div>

                      <div className="space-y-1 mb-4">
                        {result.reasoning.slice(0, 2).map((reason, reasonIndex) => (
                          <p key={reasonIndex} className="text-xs text-muted-foreground">
                            • {reason}
                          </p>
                        ))}
                      </div>

                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ShoppingBag className="h-3 w-3 mr-2" />
                        Lihat Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {selectedResults.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Perbandingan Outfit yang Kamu Pilih</h2>
              <Badge variant="outline" className="ml-2">
                {selectedResults.length} outfit dipilih
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedResults.map((result, index) => {
                const resultInterpretation = getScoreInterpretation(result.score)
                return (
                  <Card
                    key={result.outfit.id}
                    className={`hover:shadow-lg transition-shadow ${index === 0 ? "border-blue-500/50 bg-blue-50/50" : ""}`}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={result.outfit.image || "/placeholder.svg"}
                          alt={result.outfit.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-3 right-3 flex gap-2">
                          {index === 0 && <Badge className="bg-blue-500 text-white">Terbaik dari Pilihanmu</Badge>}
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                            #{index + 1}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold">{result.outfit.name}</h3>
                        </div>

                        <p className="text-muted-foreground text-sm mb-3">{result.outfit.store}</p>

                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Skor Kesesuaian</span>
                            <span className={`text-sm font-bold ${resultInterpretation.color}`}>
                              {Math.round(result.score * 100)}%
                            </span>
                          </div>
                          <Progress value={result.score * 100} className="h-2" />
                        </div>

                        {/* Detailed criteria scores */}
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-xs">
                            <span>Kesesuaian Warna:</span>
                            <span className="font-medium">{Math.round(result.criteria.skinToneScore * 100)}%</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Kesesuaian Acara:</span>
                            <span className="font-medium">{Math.round(result.criteria.occasionScore * 100)}%</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Kesesuaian Cuaca:</span>
                            <span className="font-medium">{Math.round(result.criteria.weatherScore * 100)}%</span>
                          </div>
                        </div>

                        <div className="space-y-1 mb-4">
                          {result.reasoning.slice(0, 2).map((reason, reasonIndex) => (
                            <p key={reasonIndex} className="text-xs text-muted-foreground">
                              • {reason}
                            </p>
                          ))}
                        </div>

                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <ShoppingBag className="h-3 w-3 mr-2" />
                          Lihat Detail
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* SAW Method Info */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Tentang Metode SAW</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Rekomendasi ini dihitung menggunakan metode Simple Additive Weighting (SAW) dengan bobot: Kesesuaian Warna
              (40%), Kesesuaian Acara (35%), dan Kesesuaian Cuaca/Bahan (25%). Semakin tinggi skor, semakin cocok outfit
              tersebut dengan preferensimu.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
