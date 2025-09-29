"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Sparkles, ArrowLeft, Shirt } from "lucide-react"

const materialOptions = [
  {
    value: "panas",
    label: "Cuaca Panas",
    description: "Bahan adem dan breathable untuk cuaca tropis",
    materials: ["Katun", "Linen", "Rayon", "Jersey"],
    icon: "☀️",
    benefits: ["Menyerap keringat", "Tidak gerah", "Nyaman dipakai lama"],
  },
  {
    value: "dingin",
    label: "Cuaca Dingin",
    description: "Bahan hangat dan tebal untuk cuaca sejuk",
    materials: ["Wol", "Jersey Tebal", "Fleece", "Crepe"],
    icon: "❄️",
    benefits: ["Menghangatkan tubuh", "Tidak mudah kusut", "Tahan lama"],
  },
  {
    value: "formal",
    label: "Bahan Premium",
    description: "Bahan berkualitas tinggi untuk acara formal",
    materials: ["Crepe", "Chiffon", "Satin", "Silk"],
    icon: "✨",
    benefits: ["Tampilan mewah", "Jatuh bagus", "Tidak mudah kusut"],
  },
  {
    value: "fleksibel",
    label: "Fleksibel",
    description: "Sesuai keinginan, tidak terbatas bahan tertentu",
    materials: ["Semua Bahan"],
    icon: "🌈",
    benefits: ["Pilihan beragam", "Sesuai budget", "Banyak variasi"],
  },
]

export default function PilihBahanPage() {
  const router = useRouter()
  const [selectedMaterial, setSelectedMaterial] = useState("")
  const [selectedOccasion, setSelectedOccasion] = useState("")
  const [selectedSkinTone, setSelectedSkinTone] = useState("")

  useEffect(() => {
    const occasion = localStorage.getItem("selectedOccasion")
    const skinTone = localStorage.getItem("selectedSkinTone")

    if (!occasion || !skinTone) {
      router.push("/pilih-tema")
      return
    }

    setSelectedOccasion(occasion)
    setSelectedSkinTone(skinTone)
  }, [router])

  const handleNext = () => {
    if (selectedMaterial) {
      localStorage.setItem("selectedMaterial", selectedMaterial)
      router.push("/rekomendasi-final")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/pilih-warna" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Kembali
              </Link>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">NyariOutfit</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Langkah 3 dari 4</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Pilih Bahan yang Nyaman</h1>
          <p className="text-muted-foreground text-lg">
            Bahan yang tepat bikin outfit makin nyaman dipakai. Pilih sesuai cuaca dan preferensimu!
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
                ✓
              </div>
              <span className="text-sm font-medium">Warna</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-sm font-medium text-primary">Bahan</span>
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

        {/* Material Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shirt className="h-5 w-5 text-primary" />
              Pilih Jenis Bahan
            </CardTitle>
            <p className="text-muted-foreground">Pilih bahan yang paling sesuai dengan cuaca dan kenyamananmu</p>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedMaterial} onValueChange={setSelectedMaterial} className="space-y-4">
              {materialOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{option.icon}</span>
                      <div className="font-medium">{option.label}</div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">{option.description}</div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs font-medium text-muted-foreground">Bahan:</span>
                        {option.materials.map((material) => (
                          <span key={material} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                            {material}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs font-medium text-muted-foreground">Keunggulan:</span>
                        {option.benefits.map((benefit) => (
                          <span key={benefit} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">
                            {benefit}
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

        {/* Next Button */}
        <div className="mt-8 flex justify-center">
          <Button onClick={handleNext} disabled={!selectedMaterial} size="lg" className="px-8 py-6 text-lg">
            {selectedMaterial ? "Lihat Rekomendasi Outfit" : "Pilih Bahan Dulu"}
          </Button>
        </div>

        {/* Selection Summary */}
        {selectedMaterial && (
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Ringkasan Pilihan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">Tema:</span>
                  <div className="capitalize">{selectedOccasion?.replace("-", " ")}</div>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Tone Kulit:</span>
                  <div className="capitalize">{selectedSkinTone?.replace("-", " ")}</div>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Bahan:</span>
                  <div className="capitalize">
                    {materialOptions.find((opt) => opt.value === selectedMaterial)?.label}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
