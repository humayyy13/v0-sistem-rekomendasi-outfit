"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Sparkles, ArrowLeft, Calendar, Briefcase, Heart, Coffee, Users, Star } from "lucide-react"

const occasionOptions = [
  {
    value: "pengajian",
    label: "Pengajian",
    description: "Acara keagamaan dan kajian",
    icon: Star,
    colors: ["Navy", "Burgundy", "Black", "Olive Green", "Dark Brown"],
  },
  {
    value: "kerja-kuliah",
    label: "Kerja/Kuliah",
    description: "Aktivitas profesional dan akademik",
    icon: Briefcase,
    colors: ["Navy", "Gray", "Black", "Beige", "Light Blue", "Burgundy"],
  },
  {
    value: "pesta",
    label: "Pesta",
    description: "Acara perayaan dan resepsi",
    icon: Heart,
    colors: ["Burgundy", "Navy", "Black", "Dusty Rose", "Mauve", "Coral"],
  },
  {
    value: "jalan-santai",
    label: "Jalan Santai",
    description: "Aktivitas rekreasi dan hangout",
    icon: Coffee,
    colors: ["Pink", "Coral", "Sage", "Beige", "Light Blue", "Mustard"],
  },
  {
    value: "formal",
    label: "Formal",
    description: "Acara resmi dan bisnis",
    icon: Users,
    colors: ["Black", "Navy", "Charcoal", "Burgundy", "Dark Brown"],
  },
  {
    value: "casual",
    label: "Casual",
    description: "Pemakaian sehari-hari",
    icon: Coffee,
    colors: ["Pink", "Coral", "Sage", "Beige", "Brown", "Dusty Pink", "Light Blue"],
  },
]

export default function PilihTemaPage() {
  const router = useRouter()
  const [selectedOccasion, setSelectedOccasion] = useState("")

  const handleNext = () => {
    if (selectedOccasion) {
      localStorage.setItem("selectedOccasion", selectedOccasion)
      router.push("/pilih-warna")
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
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">NyariOutfit</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Langkah 1 dari 4</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Pilih Tema Outfitmu</h1>
          <p className="text-muted-foreground text-lg">
            Mau kemana nih hari ini? Pilih acara atau aktivitas yang akan kamu lakukan
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="text-sm font-medium text-primary">Tema</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="text-sm text-muted-foreground">Warna</span>
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

        {/* Occasion Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Pilih Acara atau Aktivitas
            </CardTitle>
            <p className="text-muted-foreground">
              Setiap acara punya dress code yang berbeda. Pilih yang paling sesuai dengan kegiatanmu hari ini.
            </p>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedOccasion}
              onValueChange={setSelectedOccasion}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {occasionOptions.map((option) => {
                const IconComponent = option.icon
                return (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <div className="font-medium">{option.label}</div>
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">{option.description}</div>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs font-medium text-muted-foreground">Warna cocok:</span>
                        {option.colors.slice(0, 3).map((color) => (
                          <span key={color} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                            {color}
                          </span>
                        ))}
                        {option.colors.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                            +{option.colors.length - 3} lainnya
                          </span>
                        )}
                      </div>
                    </Label>
                  </div>
                )
              })}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Next Button */}
        <div className="mt-8 flex justify-center">
          <Button onClick={handleNext} disabled={!selectedOccasion} size="lg" className="px-8 py-6 text-lg">
            {selectedOccasion ? "Lanjut Pilih Warna" : "Pilih Tema Dulu"}
          </Button>
        </div>

        {/* Selected Summary */}
        {selectedOccasion && (
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  {React.createElement(
                    occasionOptions.find((opt) => opt.value === selectedOccasion)?.icon || Calendar,
                    { className: "h-4 w-4 text-primary" },
                  )}
                </div>
                <div>
                  <div className="font-medium">
                    {occasionOptions.find((opt) => opt.value === selectedOccasion)?.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {occasionOptions.find((opt) => opt.value === selectedOccasion)?.description}
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
