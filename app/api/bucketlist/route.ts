import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "bucketlist.json")

export async function GET() {
  const data = await fs.readFile(filePath, "utf-8")
  const items = JSON.parse(data)
  return NextResponse.json(items)
}

export async function POST(req: Request) {
  const newItem = await req.json()

  const data = await fs.readFile(filePath, "utf-8")
  const items = JSON.parse(data)

  items.push(newItem)

  await fs.writeFile(filePath, JSON.stringify(items, null, 2))

  return NextResponse.json({ message: "Wishlist item added" })
}