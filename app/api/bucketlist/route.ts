import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "bucketlist.json")

async function readJSON() {
  try {
    const data = await fs.readFile(filePath, "utf-8")

    if (!data || data.trim() === "") {
      return []
    }

    return JSON.parse(data)

  } catch {
    return []
  }
}

export async function GET() {
  const items = await readJSON()
  return NextResponse.json(items)
}

export async function POST(req: Request) {
  const newItem = await req.json()

  const items = await readJSON()

  items.push(newItem)

  await fs.writeFile(filePath, JSON.stringify(items, null, 2))

  return NextResponse.json({ success: true })
}