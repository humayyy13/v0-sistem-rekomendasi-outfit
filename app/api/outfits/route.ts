import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const outfits = db.getAllOutfits()
    return NextResponse.json(outfits)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch outfits" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const outfit = db.createOutfit(data)
    return NextResponse.json(outfit, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create outfit" }, { status: 500 })
  }
}
