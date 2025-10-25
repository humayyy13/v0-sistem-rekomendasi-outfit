import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Users, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">NyariOutfit</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                Tentang
              </Link>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Masuk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Sistem Rekomendasi Cerdas
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Temukan Outfit Syar'i
            <span className="text-primary"> Terbaik</span> Untukmu
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Biar makin percaya diri dengan outfit syar'i yang sesuai gaya & kebutuhanmu. Sistem kami menggunakan metode
            SAW untuk rekomendasi terpersonalisasi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/pilih-tema">
              <Button size="lg" className="text-lg px-8 py-6">
                Mulai Pilih Outfit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kenapa Pilih NyariOutfit?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Platform rekomendasi outfit syar'i pertama yang menggunakan teknologi AI untuk memberikan saran terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Rekomendasi Personal</h3>
                <p className="text-muted-foreground">
                  Sistem kami mempertimbangkan tone kulit, acara, dan preferensi cuaca untuk memberikan rekomendasi yang
                  tepat
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Koleksi Terpercaya</h3>
                <p className="text-muted-foreground">
                  Outfit dari toko-toko syar'i terpercaya seperti Hijab Alila, Kazami Store, dan Pelangi Hijab
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Metode SAW</h3>
                <p className="text-muted-foreground">
                  Menggunakan Simple Additive Weighting untuk perhitungan rekomendasi yang akurat dan objektif
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Siap Menemukan Outfit Impianmu?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Mulai perjalananmu untuk menemukan outfit syar'i yang sempurna dalam 3 langkah mudah
              </p>
              <Link href="/pilih-tema">
                <Button size="lg" className="text-lg px-8 py-6">
                  Mulai Sekarang
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-semibold">NyariOutfit</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">
                Tentang
              </Link>
              <Link href="/kontak" className="hover:text-foreground transition-colors">
                Kontak
              </Link>
              <Link href="/privasi" className="hover:text-foreground transition-colors">
                Privasi
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 NyariOutfit. Sistem Pendukung Keputusan Rekomendasi Outfit Syar'i.
          </div>
        </div>
      </footer>
    </div>
  )
}
