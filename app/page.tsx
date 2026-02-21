import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center space-x-52">
      <button className="p-15 duration-300 rounded-3xl hover:-translate-y-4 hover:shadow-xl">
        <Image
          src="/water-bucket.png"
          height={200}
          width={200}
          alt="water bucket"
        />
        <h1 className="pt-6 text-xl">Bucket List</h1>
      </button>
      {/* <div className="p-15 duration-300 rounded-3xl hover:-translate-y-4 hover:shadow-xl"> */}
      <div>
        <Image
          src="/spring-notebook.png"
          height={200}
          width={200}
          alt="spring notebook"
          />
        <h1 className="pt-6 text-xl">Wishlist</h1>
      </div>
    </div>
  );
}
