import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center space-x-52">
      <Link href={'/bucket-list'} className="text-center p-15 duration-300 rounded-3xl hover:-translate-y-4 hover:shadow-xl">
        <Image
          src="/water-bucket.png"
          height={200}
          width={200}
          alt="water bucket"
        />
        <h1 className="pt-6 text-xl">Bucket List</h1>
      </Link>
      <Link href={'/wishlist'} className="text-center p-15 duration-300 rounded-3xl hover:-translate-y-4 hover:shadow-xl">
        <Image
          src="/spring-notebook.png"
          height={200}
          width={200}
          alt="spring notebook"
          />
        <h1 className="pt-6 text-xl">Wishlist</h1>
      </Link>
    </div>
  );
}
