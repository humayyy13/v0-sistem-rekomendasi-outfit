import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, ArrowLeft, Target, Users, Calculator, Heart } from "lucide-react"

export default function AboutPage() {
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
            <div className="flex items-center gap-6">
              <Link href="/pilih-outfit">
                <Button>Mulai Pilih Outfit</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tentang NyariOutfit</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Sistem Pendukung Keputusan Rekomendasi Outfit Syar'i Menggunakan Metode SAW
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Misi Kami
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              NyariOutfit hadir untuk membantu muslimah menemukan outfit syar'i yang tepat sesuai dengan preferensi
              personal mereka. Kami memahami bahwa memilih outfit yang sesuai dengan tone kulit, acara, dan kondisi
              cuaca bisa menjadi tantangan. Oleh karena itu, kami mengembangkan sistem rekomendasi cerdas yang
              menggunakan metode Simple Additive Weighting (SAW) untuk memberikan saran yang objektif dan
              terpersonalisasi.
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Bagaimana Cara Kerjanya?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-lg">Pilih Outfit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pilih beberapa outfit dari koleksi toko syar'i terpercaya seperti Hijab Alila, Kazami Store, dan
                  Pelangi Hijab untuk dibandingkan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle className="text-lg">Isi Preferensi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ceritakan preferensimu: tone kulit, jenis acara yang akan dihadiri, dan kondisi cuaca atau preferensi
                  bahan yang diinginkan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle className="text-lg">Dapatkan Rekomendasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sistem akan menghitung dan memberikan rekomendasi outfit terbaik berdasarkan preferensimu dengan
                  penjelasan yang detail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SAW Method Explanation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Metode Simple Additive Weighting (SAW)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              NyariOutfit menggunakan metode Simple Additive Weighting (SAW) untuk memberikan rekomendasi yang objektif
              dan terukur. Metode ini mengevaluasi setiap outfit berdasarkan tiga kriteria utama:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Kesesuaian Warna (40%)</h4>
                <p className="text-sm text-muted-foreground">
                  Menilai kesesuaian warna outfit dengan tone kulit pengguna berdasarkan teori warna dan kompatibilitas
                  kulit.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Kesesuaian Acara (35%)</h4>
                <p className="text-sm text-muted-foreground">
                  Mengevaluasi seberapa tepat outfit untuk jenis acara atau aktivitas yang akan dihadiri pengguna.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Kesesuaian Cuaca (25%)</h4>
                <p className="text-sm text-muted-foreground">
                  Menilai kesesuaian bahan outfit dengan kondisi cuaca atau preferensi kenyamanan pengguna.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              Setiap kriteria diberi bobot sesuai tingkat kepentingannya, kemudian dihitung skor total untuk menentukan
              ranking outfit yang paling sesuai dengan preferensi pengguna.
            </p>
          </CardContent>
        </Card>

        {/* Partner Stores */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Toko Partner Kami
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Kami berkolaborasi dengan toko-toko syar'i terpercaya untuk memberikan pilihan outfit berkualitas:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Hijab Alila</h4>
                <p className="text-sm text-muted-foreground">
                  Spesialis gamis syar'i dengan desain elegan dan bahan berkualitas tinggi.
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Kazami Store</h4>
                <p className="text-sm text-muted-foreground">
                  Menyediakan outfit casual dan trendy untuk muslimah modern dengan harga terjangkau.
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Pelangi Hijab</h4>
                <p className="text-sm text-muted-foreground">
                  Koleksi premium untuk acara spesial dengan detail dan finishing yang mewah.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Nilai-Nilai Kami
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Objektivitas</h4>
                <p className="text-sm text-muted-foreground">
                  Menggunakan metode ilmiah untuk memberikan rekomendasi yang objektif dan tidak bias.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Personalisasi</h4>
                <p className="text-sm text-muted-foreground">
                  Setiap rekomendasi disesuaikan dengan preferensi dan kebutuhan individual pengguna.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Kemudahan</h4>
                <p className="text-sm text-muted-foreground">
                  Interface yang sederhana dan mudah digunakan untuk semua kalangan.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Kualitas</h4>
                <p className="text-sm text-muted-foreground">
                  Berkolaborasi dengan toko-toko terpercaya untuk menjamin kualitas produk yang direkomendasikan.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Siap Menemukan Outfit Impianmu?</h2>
          <p className="text-muted-foreground mb-6">
            Mulai perjalananmu untuk menemukan outfit syar'i yang sempurna sekarang juga!
          </p>
          <Link href="/pilih-outfit">
            <Button size="lg" className="px-8 py-6 text-lg">
              Mulai Pilih Outfit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
