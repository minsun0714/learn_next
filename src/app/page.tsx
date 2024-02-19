import os from "os";
import Counter from "./components/Counter";
import Image from "next/image";

export default function Home() {
  console.log("서버");

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-6xl font-bold'>Welcome to Next.js!</h1>
      <Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='shop'
        width={1100}
        height={1100}
        priority
      />
      <Counter />
    </main>
  );
}
