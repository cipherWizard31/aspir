async function getWishlist() {
    const res = await fetch("http://localhost:3000/api/wishlist", {
      cache: "no-store"
    })
    return res.json()
  }
  
  export default async function WishlistPage() {
    const items = await getWishlist()
  
    return (
      <div>
        <h1>My Wishlist</h1>
        <ul>
          {items.map((item: any, index: number) => (
            <li key={index}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }