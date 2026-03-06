"use client"

import { useEffect, useState } from "react"

export default function WishlistPage() {
  const [items, setItems] = useState<any[]>([])

  async function loadItems() {
    const res = await fetch("/api/wishlist")
    const data = await res.json()
    setItems(data)
  }

  async function toggleComplete(id: string) {
    await fetch(`/api/wishlist/${id}`, {
      method: "PATCH"
    })

    loadItems()
  }

  useEffect(() => {
    loadItems()
  }, [])

  return (
    <div>
      <h1>Wishlist</h1>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none"
              }}
            >
              {item.title}
            </span>

            <button onClick={() => toggleComplete(item.id)}>
              {item.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}