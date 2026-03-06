import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "wishlist.json")

async function readJSON() {
  try {
    const data = await fs.readFile(filePath, "utf-8")
    if (!data || data.trim() === "") return []
    return JSON.parse(data)
  } catch {
    return []
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const items = await readJSON()

  const updated = items.map((item: any) => {
    if (item.id === params.id) {
      return {
        ...item,
        completed: !item.completed
      }
    }
    return item
  })

  await fs.writeFile(filePath, JSON.stringify(updated, null, 2))

  return NextResponse.json({ success: true })
}