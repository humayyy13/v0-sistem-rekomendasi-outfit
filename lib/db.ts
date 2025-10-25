// Simple in-memory database for outfits
// In production, replace with Supabase or another database

const outfits: any[] = [
  {
    id: 1,
    name: "Aleeza Dress",
    store: "Kazami Store",
    image: "/aleeza-dress.jpg",
    colors: ["Mint", "Maroon", "Terracotta", "Ungu", "Hijau"],
    materials: ["Crepe", "Chiffon"],
    occasions: ["Formal", "Pengajian"],
    description: "Aleeza Dress sage berlayer yang anggun dan flowy.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Abaya Kalila",
    store: "Kazami Store",
    image: "/abaya-kalila.jpg",
    colors: ["Dark Brown", "Taupe", "Cream", "Hitam", "Army", "Olive"],
    materials: ["Crepe"],
    occasions: ["Formal", "Kerja"],
    description: "Abaya Kalila Set inner + outer dengan lapel berpayet yang mewah.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Abaya Haneen",
    store: "Kazami Store",
    image: "/abaya-haneen.jpg",
    colors: ["Cream", "Soft Pink", "Brown", "Hitam", "Olive"],
    materials: ["Chiffon", "Crepe"],
    occasions: ["Pesta", "Formal", "Pengajian"],
    description: "Abaya Haneen dengan cape lembut yang feminin.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 9,
    name: "Abaya Camellia",
    store: "Kazami Store",
    image: "/abaya-camellia.jpg",
    colors: ["Black", "Mint", "Putih", "Ungu", "Pink", "Merah", "Brown"],
    materials: ["Crepe"],
    occasions: ["Pesta", "Formal"],
    description: "Abaya Camellia dengan piping hitam & bunga 3D.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 13,
    name: "Abaya Luna",
    store: "Kazami Store",
    image: "/luna-abaya.jpg",
    colors: ["Hitam", "Brown", "Maroon", "Mauve", "Cream", "Hijau"],
    materials: ["Chiffon"],
    occasions: ["Formal", "Pesta"],
    description: "Abaya Luna dengan dekor kristal setengah lingkar yang mewah.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 18,
    name: "Luxe Harmony",
    store: "Kazami Store",
    image: "/luxe-harmony.jpg",
    colors: ["Vanilla", "Hitam", "Soft Pink", "Coklat", "Grey"],
    materials: ["Crepe", "Lace"],
    occasions: ["Pesta", "Formal"],
    description: "Luxe Harmony Koleksi terracotta bertekstur dengan detail ruffle/lace.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

let nextId = 19

export const db = {
  getAllOutfits: () => outfits,

  getOutfitById: (id: number) => outfits.find((o) => o.id === id),

  createOutfit: (data: any) => {
    const newOutfit = {
      id: nextId++,
      ...data,
      colors: typeof data.colors === "string" ? data.colors.split(",").map((c: string) => c.trim()) : data.colors,
      materials:
        typeof data.materials === "string" ? data.materials.split(",").map((m: string) => m.trim()) : data.materials,
      occasions:
        typeof data.occasions === "string" ? data.occasions.split(",").map((o: string) => o.trim()) : data.occasions,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    outfits.push(newOutfit)
    return newOutfit
  },

  updateOutfit: (id: number, data: any) => {
    const index = outfits.findIndex((o) => o.id === id)
    if (index === -1) return null

    outfits[index] = {
      ...outfits[index],
      ...data,
      colors: typeof data.colors === "string" ? data.colors.split(",").map((c: string) => c.trim()) : data.colors,
      materials:
        typeof data.materials === "string" ? data.materials.split(",").map((m: string) => m.trim()) : data.materials,
      occasions:
        typeof data.occasions === "string" ? data.occasions.split(",").map((o: string) => o.trim()) : data.occasions,
      updatedAt: new Date().toISOString(),
    }
    return outfits[index]
  },

  deleteOutfit: (id: number) => {
    const index = outfits.findIndex((o) => o.id === id)
    if (index === -1) return false
    outfits.splice(index, 1)
    return true
  },
}
