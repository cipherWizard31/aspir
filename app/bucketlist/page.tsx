async function getBucketlist() {
    const res = await fetch("http://localhost:3000/api/bucketlist", {
      cache: "no-store"
    })
  
    return res.json()
  }
  
  export default async function BucketlistPage() {
    const items = await getBucketlist()
  
    return (
      <div>
        <h1>Bucket List</h1>
  
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