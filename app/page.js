import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <h1 className="text-center font-extrabold text-4xl text-blue-600 underline "> CPRG 306: Web Development 2 - Assignments</h1>
      <div className=" box-border w-64 h-20 border-4 border-black bg-green-500 shadow-2xl hover:bg-neutral-400 hover:cursor-pointer m-4 flex justify-center items-center">
        <Link href="/week-2" className=" text-green-200 text-3xl font-bold">Week 2</Link>
      </div>
      <div className=" box-border w-64 h-20 border-4 border-black bg-green-500 shadow-2xl hover:bg-neutral-400 hover:cursor-pointer m-4 flex justify-center items-center">
        <Link href="/week-3" className=" text-green-200 text-3xl font-bold">Week 3</Link>
      </div>
      
    </main>
  )
}

