import Navbar from './navbar';
import Sortbar from './sortbar'
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center text-center">
        <h1 class="text-6xl md:text-7xl lg:text-8xl p-24">Welcome to Sorta</h1>
        <div className='flex flex-row justify-center text-center'>
          <div className='feature-element'>

          </div>
          <div className='feature-element'>
              
          </div>
          <div className='feature-element'>
              
          </div>
        </div>
        <div className="flex justify-center">
          <button className='p-4 border border-white w-64 m-4 rounded-md hover:border-blue-700'>Get Started</button>
        </div>
      </main>
      <div className="footer">
        Sorta © 2024.
      </div>
    </>
  );
}
