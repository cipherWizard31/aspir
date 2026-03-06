import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "bucketlist.json")

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
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params   // ⭐ important

  const items = await readJSON()

  const updated = items.map((item: any) => {
    if (item.id === id) {
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