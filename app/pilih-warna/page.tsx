"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Sparkles, ArrowLeft, Palette, User } from "lucide-react"

const skinToneOptions = [
  {
    value: "putih",
    label: "Putih",
    description: "Kulit cerah dengan undertone pink atau yellow",
    recommendedColors: ["Navy", "Burgundy", "Black", "Coral", "Light Blue", "Dusty Rose"],
    avoidColors: ["Yellow", "Orange"],
  },
  {
    value: "sawo-matang",
    label: "Sawo Matang",
    description: "Kulit medium dengan undertone warm",
    recommendedColors: ["Coral", "Mustard", "Brown", "Olive Green", "Burgundy", "Beige"],
    avoidColors: ["Neon", "Very Light Pink"],
  },
  {
    value: "kuning-langsat",
    label: "Kuning Langsat",
    description: "Kulit medium dengan undertone yellow",
    recommendedColors: ["Navy", "Black", "Burgundy", "Brown", "Sage", "Dusty Pink"],
    avoidColors: ["Yellow", "Orange", "Bright Green"],
  },
  {
    value: "gelap",
    label: "Gelap",
    description: "Kulit deep dengan undertone warm atau cool",
    recommendedColors: ["Pink", "Coral", "Light Blue", "Sage", "Cream", "Lavender", "Mustard"],
    avoidColors: ["Very Dark Colors", "Black"],
  },
]

export default function PilihWarnaPage() {
  const router = useRouter()
  const [selectedSkinTone, setSelectedSkinTone] = useState("")
  const [selectedOccasion, setSelectedOccasion] = useState("")

  useEffect(() => {
    const occasion = localStorage.getItem("selectedOccasion")
    if (!occasion) {
      router.push("/pilih-tema")
      return
    }
    setSelectedOccasion(occasion)
  }, [router])

  const handleNext = () => {
    if (selectedSkinTone) {
      localStorage.setItem("selectedSkinTone", selectedSkinTone)
      router.push("/pilih-bahan")
    }
  }

  const getColorRecommendations = () => {
    if (!selectedSkinTone) return []
    const skinTone = skinToneOptions.find((opt) => opt.value === selectedSkinTone)
    return skinTone?.recommendedColors || []
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/pilih-tema" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Kembali
              </Link>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">NyariOutfit</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Langkah 2 dari 4</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Pilih Warna Sesuai Tone Kulitmu</h1>
          <p className="text-muted-foreground text-lg">
            Setiap tone kulit punya warna yang paling cocok. Yuk pilih tone kulitmu untuk rekomendasi warna terbaik!
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="text-sm font-medium">Tema</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="text-sm font-medium text-primary">Warna</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-sm text-muted-foreground">Bahan</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">
                4
              </div>
              <span className="text-sm text-muted-foreground">Rekomendasi</span>
            </div>
          </div>
        </div>

        {/* Skin Tone Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Pilih Tone Kulit
            </CardTitle>
            <p className="text-muted-foreground">
              Pilih tone kulit yang paling sesuai denganmu untuk mendapatkan rekomendasi warna outfit yang cocok
            </p>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedSkinTone} onValueChange={setSelectedSkinTone} className="space-y-4">
              {skinToneOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div className="font-medium mb-1">{option.label}</div>
                    <div className="text-sm text-muted-foreground mb-3">{option.description}</div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs font-medium text-green-600">Warna cocok:</span>
                        {option.recommendedColors.map((color) => (
                          <span key={color} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">
                            {color}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs font-medium text-red-600">Hindari:</span>
                        {option.avoidColors.map((color) => (
                          <span key={color} className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-md">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Color Recommendations */}
        {selectedSkinTone && (
          <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Palette className="h-5 w-5 text-primary" />
                Rekomendasi Warna untuk {skinToneOptions.find((opt) => opt.value === selectedSkinTone)?.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {getColorRecommendations().map((color) => (
                  <div key={color} className="px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                    {color}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Next Button */}
        <div className="mt-8 flex justify-center">
          <Button onClick={handleNext} disabled={!selectedSkinTone} size="lg" className="px-8 py-6 text-lg">
            {selectedSkinTone ? "Lanjut Pilih Bahan" : "Pilih Tone Kulit Dulu"}
          </Button>
        </div>
      </div>
    </div>
  )
}
