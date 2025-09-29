// SAW (Simple Additive Weighting) Calculator for Outfit Recommendations

export interface Outfit {
  id: number
  name: string
  store: string
  price: string
  colors: string[]
  materials: string[]
  occasions: string[]
  description: string
  image?: string
}

export interface UserPreferences {
  skinTone: string
  occasion: string
  weather: string
}

export interface SAWResult {
  outfit: Outfit
  score: number
  criteria: {
    skinToneScore: number
    occasionScore: number
    weatherScore: number
  }
  reasoning: string[]
}

// Criteria weights (total should be 1.0)
const CRITERIA_WEIGHTS = {
  skinTone: 0.4, // 40% - Most important for color matching
  occasion: 0.35, // 35% - Important for appropriateness
  weather: 0.25, // 25% - Important for comfort
}

// Color compatibility matrix for skin tones
const SKIN_TONE_COLOR_COMPATIBILITY = {
  putih: {
    // Light skin tones
    excellent: ["Navy", "Royal Blue", "Emerald", "Maroon", "Black"],
    good: ["Dusty Pink", "Sage Green", "Coklat", "Abu-abu"],
    fair: ["Cream", "Putih", "Khaki", "Camel"],
  },
  "sawo-matang": {
    // Medium warm skin tones
    excellent: ["Cream", "Camel", "Olive", "Gold", "Coklat"],
    good: ["Navy", "Sage Green", "Dusty Pink", "Khaki"],
    fair: ["Black", "Abu-abu", "Putih"],
  },
  "kuning-langsat": {
    // Medium yellow undertone skin tones
    excellent: ["Navy", "Emerald", "Royal Blue", "Coklat", "Gold"],
    good: ["Cream", "Sage Green", "Olive", "Camel"],
    fair: ["Black", "Dusty Pink", "Abu-abu"],
  },
  gelap: {
    // Deep skin tones
    excellent: ["Cream", "Gold", "Silver", "Rose Gold", "Putih"],
    good: ["Camel", "Royal Blue", "Emerald", "Dusty Pink"],
    fair: ["Navy", "Black", "Maroon", "Abu-abu"],
  },
}

// Material suitability for weather conditions
const WEATHER_MATERIAL_COMPATIBILITY = {
  panas: {
    // Hot weather
    excellent: ["Katun", "Linen", "Rayon"],
    good: ["Chiffon", "Crepe"],
    fair: ["Jersey", "Polyester"],
    poor: ["Wol", "Fleece"],
  },
  dingin: {
    // Cold weather
    excellent: ["Wol", "Jersey", "Fleece"],
    good: ["Polyester", "Crepe"],
    fair: ["Katun"],
    poor: ["Linen", "Rayon", "Chiffon"],
  },
  fleksibel: {
    // Flexible - all materials are acceptable
    excellent: ["Katun", "Jersey", "Crepe", "Chiffon"],
    good: ["Linen", "Rayon", "Polyester", "Wol"],
    fair: ["Satin", "Organza", "Fleece"],
  },
}

// Occasion appropriateness scoring
const OCCASION_APPROPRIATENESS = {
  pengajian: {
    excellent: ["Pengajian", "Formal"],
    good: ["Kerja", "Kuliah"],
    fair: ["Casual"],
    poor: ["Pesta", "Jalan Santai"],
  },
  "kerja-kuliah": {
    excellent: ["Kerja", "Kuliah", "Formal"],
    good: ["Casual", "Pengajian"],
    fair: ["Jalan Santai"],
    poor: ["Pesta"],
  },
  pesta: {
    excellent: ["Pesta", "Formal"],
    good: ["Pengajian"],
    fair: ["Kerja", "Kuliah"],
    poor: ["Casual", "Jalan Santai"],
  },
  "jalan-santai": {
    excellent: ["Jalan Santai", "Casual"],
    good: ["Kerja", "Kuliah"],
    fair: ["Pengajian"],
    poor: ["Pesta", "Formal"],
  },
  formal: {
    excellent: ["Formal", "Pesta"],
    good: ["Pengajian", "Kerja", "Kuliah"],
    fair: ["Casual"],
    poor: ["Jalan Santai"],
  },
  casual: {
    excellent: ["Casual", "Jalan Santai"],
    good: ["Kerja", "Kuliah"],
    fair: ["Pengajian"],
    poor: ["Pesta", "Formal"],
  },
}

function calculateSkinToneScore(outfit: Outfit, skinTone: string): number {
  const compatibility = SKIN_TONE_COLOR_COMPATIBILITY[skinTone as keyof typeof SKIN_TONE_COLOR_COMPATIBILITY]
  if (!compatibility) return 0.5

  let maxScore = 0
  for (const color of outfit.colors) {
    if (compatibility.excellent.includes(color)) {
      maxScore = Math.max(maxScore, 1.0)
    } else if (compatibility.good.includes(color)) {
      maxScore = Math.max(maxScore, 0.75)
    } else if (compatibility.fair.includes(color)) {
      maxScore = Math.max(maxScore, 0.5)
    } else {
      maxScore = Math.max(maxScore, 0.25)
    }
  }

  return maxScore
}

function calculateOccasionScore(outfit: Outfit, occasion: string): number {
  const appropriateness = OCCASION_APPROPRIATENESS[occasion as keyof typeof OCCASION_APPROPRIATENESS]
  if (!appropriateness) return 0.5

  let maxScore = 0
  for (const outfitOccasion of outfit.occasions) {
    if (appropriateness.excellent.includes(outfitOccasion)) {
      maxScore = Math.max(maxScore, 1.0)
    } else if (appropriateness.good.includes(outfitOccasion)) {
      maxScore = Math.max(maxScore, 0.75)
    } else if (appropriateness.fair.includes(outfitOccasion)) {
      maxScore = Math.max(maxScore, 0.5)
    } else if (appropriateness.poor.includes(outfitOccasion)) {
      maxScore = Math.max(maxScore, 0.25)
    } else {
      maxScore = Math.max(maxScore, 0.4)
    }
  }

  return maxScore
}

function calculateWeatherScore(outfit: Outfit, weather: string): number {
  const compatibility = WEATHER_MATERIAL_COMPATIBILITY[weather as keyof typeof WEATHER_MATERIAL_COMPATIBILITY]
  if (!compatibility) return 0.5

  let maxScore = 0
  for (const material of outfit.materials) {
    if (compatibility.excellent.includes(material)) {
      maxScore = Math.max(maxScore, 1.0)
    } else if (compatibility.good.includes(material)) {
      maxScore = Math.max(maxScore, 0.75)
    } else if (compatibility.fair.includes(material)) {
      maxScore = Math.max(maxScore, 0.5)
    } else if (compatibility.poor && compatibility.poor.includes(material)) {
      maxScore = Math.max(maxScore, 0.25)
    } else {
      maxScore = Math.max(maxScore, 0.4)
    }
  }

  return maxScore
}

function generateReasoning(
  outfit: Outfit,
  preferences: UserPreferences,
  criteria: { skinToneScore: number; occasionScore: number; weatherScore: number },
): string[] {
  const reasoning: string[] = []

  // Skin tone reasoning
  if (criteria.skinToneScore >= 0.75) {
    reasoning.push(
      `Warna ${outfit.colors.join(", ")} sangat cocok untuk kulit ${preferences.skinTone.replace("-", " ")}`,
    )
  } else if (criteria.skinToneScore >= 0.5) {
    reasoning.push(
      `Warna ${outfit.colors.join(", ")} cukup cocok untuk kulit ${preferences.skinTone.replace("-", " ")}`,
    )
  }

  // Occasion reasoning
  if (criteria.occasionScore >= 0.75) {
    reasoning.push(`Sangat sesuai untuk acara ${preferences.occasion.replace("-", "/")}`)
  } else if (criteria.occasionScore >= 0.5) {
    reasoning.push(`Cocok untuk acara ${preferences.occasion.replace("-", "/")}`)
  }

  // Weather reasoning
  if (criteria.weatherScore >= 0.75) {
    const weatherText =
      preferences.weather === "panas"
        ? "cuaca panas"
        : preferences.weather === "dingin"
          ? "cuaca dingin"
          : "berbagai cuaca"
    reasoning.push(`Bahan ${outfit.materials.join(", ")} ideal untuk ${weatherText}`)
  } else if (criteria.weatherScore >= 0.5) {
    const weatherText =
      preferences.weather === "panas"
        ? "cuaca panas"
        : preferences.weather === "dingin"
          ? "cuaca dingin"
          : "berbagai cuaca"
    reasoning.push(`Bahan ${outfit.materials.join(", ")} cukup nyaman untuk ${weatherText}`)
  }

  return reasoning
}

export function calculateSAW(outfits: Outfit[], preferences: UserPreferences): SAWResult[] {
  const results: SAWResult[] = []

  for (const outfit of outfits) {
    // Calculate individual criteria scores
    const skinToneScore = calculateSkinToneScore(outfit, preferences.skinTone)
    const occasionScore = calculateOccasionScore(outfit, preferences.occasion)
    const weatherScore = calculateWeatherScore(outfit, preferences.weather)

    // Calculate weighted total score using SAW method
    const totalScore =
      skinToneScore * CRITERIA_WEIGHTS.skinTone +
      occasionScore * CRITERIA_WEIGHTS.occasion +
      weatherScore * CRITERIA_WEIGHTS.weather

    const criteria = {
      skinToneScore,
      occasionScore,
      weatherScore,
    }

    const reasoning = generateReasoning(outfit, preferences, criteria)

    results.push({
      outfit,
      score: Math.round(totalScore * 100) / 100, // Round to 2 decimal places
      criteria,
      reasoning,
    })
  }

  // Sort by score (highest first)
  return results.sort((a, b) => b.score - a.score)
}

// Helper function to get score interpretation
export function getScoreInterpretation(score: number): {
  level: "excellent" | "good" | "fair" | "poor"
  text: string
  color: string
} {
  if (score >= 0.8) {
    return {
      level: "excellent",
      text: "Sangat Cocok",
      color: "text-green-600",
    }
  } else if (score >= 0.65) {
    return {
      level: "good",
      text: "Cocok",
      color: "text-blue-600",
    }
  } else if (score >= 0.5) {
    return {
      level: "fair",
      text: "Cukup Cocok",
      color: "text-yellow-600",
    }
  } else {
    return {
      level: "poor",
      text: "Kurang Cocok",
      color: "text-red-600",
    }
  }
}
