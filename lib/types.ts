export interface Outfit {
  id: number
  name: string
  store: string
  image: string
  colors: string[]
  materials: string[]
  occasions: string[]
  description: string
  createdAt?: string
  updatedAt?: string
}

export interface OutfitFormData {
  name: string
  store: string
  image: string
  colors: string
  materials: string
  occasions: string
  description: string
}
