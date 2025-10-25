import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const outfit = db.getOutfitById(id)

    if (!outfit) {
      return NextResponse.json({ error: "Outfit not found" }, { status: 404 })
    }

    return NextResponse.json(outfit)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch outfit" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const data = await request.json()
    const outfit = db.updateOutfit(id, data)

    if (!outfit) {
      return NextResponse.json({ error: "Outfit not found" }, { status: 404 })
    }

    return NextResponse.json(outfit)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update outfit" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const success = db.deleteOutfit(id)

    if (!success) {
      return NextResponse.json({ error: "Outfit not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Outfit deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete outfit" }, { status: 500 })
  }
}
