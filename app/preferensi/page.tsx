"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Sparkles, ArrowLeft, User, Calendar, Thermometer } from "lucide-react"

interface Preferences {
  skinTone: string
  occasion: string
  weather: string
}

export default function PreferensiPage() {
  const router = useRouter()
  const [preferences, setPreferences] = useState<Preferences>({
    skinTone: "",
    occasion: "",
    weather: "",
  })

  const skinToneOptions = [
    { value: "putih", label: "Putih", description: "Kulit cerah dengan undertone pink atau yellow" },
    { value: "sawo-matang", label: "Sawo Matang", description: "Kulit medium dengan undertone warm" },
    { value: "kuning-langsat", label: "Kuning Langsat", description: "Kulit medium dengan undertone yellow" },
    { value: "gelap", label: "Gelap", description: "Kulit deep dengan undertone warm atau cool" },
  ]

  const occasionOptions = [
    { value: "pengajian", label: "Pengajian", description: "Acara keagamaan dan kajian" },
    { value: "kerja-kuliah", label: "Kerja/Kuliah", description: "Aktivitas profesional dan akademik" },
    { value: "pesta", label: "Pesta", description: "Acara perayaan dan resepsi" },
    { value: "jalan-santai", label: "Jalan Santai", description: "Aktivitas rekreasi dan hangout" },
    { value: "formal", label: "Formal", description: "Acara resmi dan bisnis" },
    { value: "casual", label: "Casual", description: "Pemakaian sehari-hari" },
  ]

  const weatherOptions = [
    {
      value: "panas",
      label: "Cuaca Panas",
      description: "Bahan adem seperti katun, linen, rayon",
      materials: ["Katun", "Linen", "Rayon"],
    },
    {
      value: "dingin",
      label: "Cuaca Dingin",
      description: "Bahan hangat seperti wol, jersey tebal",
      materials: ["Wol", "Jersey", "Fleece"],
    },
    {
      value: "fleksibel",
      label: "Fleksibel",
      description: "Sesuai keinginan, tidak terbatas bahan tertentu",
      materials: ["Semua Bahan"],
    },
  ]

  const handlePreferenceChange = (category: keyof Preferences, value: string) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: value,
    }))
  }

  const handleSubmit = () => {
    // Store preferences in localStorage for the SAW calculation
    localStorage.setItem("userPreferences", JSON.stringify(preferences))
    router.push("/rekomendasi")
  }

  const isFormComplete = preferences.skinTone && preferences.occasion && preferences.weather

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/pilih-outfit"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali
              </Link>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">NyariOutfit</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Langkah 2 dari 3</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Ceritakan Preferensimu</h1>
          <p className="text-muted-foreground text-lg">
            Isi preferensi di bawah ini agar sistem dapat memberikan rekomendasi outfit yang paling sesuai untukmu
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="text-sm font-medium">Pilih Outfit</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="text-sm font-medium text-primary">Preferensi</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-sm text-muted-foreground">Rekomendasi</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Skin Tone Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Tone Kulit
              </CardTitle>
              <p className="text-muted-foreground">
                Pilih tone kulit yang paling sesuai denganmu untuk mendapatkan rekomendasi warna outfit yang cocok
              </p>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={preferences.skinTone}
                onValueChange={(value) => handlePreferenceChange("skinTone", value)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {skinToneOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Occasion Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Tujuan / Acara
              </CardTitle>
              <p className="text-muted-foreground">
                Pilih jenis acara atau aktivitas yang akan kamu lakukan dengan outfit ini
              </p>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={preferences.occasion}
                onValueChange={(value) => handlePreferenceChange("occasion", value)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {occasionOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Weather Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-primary" />
                Cuaca / Bahan
              </CardTitle>
              <p className="text-muted-foreground">Pilih kondisi cuaca atau preferensi bahan yang kamu inginkan</p>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={preferences.weather}
                onValueChange={(value) => handlePreferenceChange("weather", value)}
                className="space-y-4"
              >
                {weatherOptions.map((option) => (
                  <div key={option.value} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent">
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      <div className="font-medium mb-1">{option.label}</div>
                      <div className="text-sm text-muted-foreground mb-2">{option.description}</div>
                      <div className="flex flex-wrap gap-1">
                        {option.materials.map((material) => (
                          <span key={material} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                            {material}
                          </span>
                        ))}
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <Button onClick={handleSubmit} disabled={!isFormComplete} size="lg" className="px-8 py-6 text-lg">
            {isFormComplete ? "Dapatkan Rekomendasi" : "Lengkapi Preferensi Dulu"}
          </Button>
        </div>

        {/* Summary Card */}
        {isFormComplete && (
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Ringkasan Preferensi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">Tone Kulit:</span>
                  <div className="capitalize">
                    {skinToneOptions.find((opt) => opt.value === preferences.skinTone)?.label}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Acara:</span>
                  <div className="capitalize">
                    {occasionOptions.find((opt) => opt.value === preferences.occasion)?.label}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Cuaca:</span>
                  <div className="capitalize">
                    {weatherOptions.find((opt) => opt.value === preferences.weather)?.label}
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
