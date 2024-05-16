import Navbar from '../navbar';
import Sortbar from '../sortbar'
import Link from 'next/link';
import Image from "next/image";

export default function Sort() {
  return (
    <>
      <Navbar />
      <main className="flex flex-row ">
        <div className='group-bar-container'>
        <h3 className='text-white text-2xl font-bold p-5'>Groups</h3>
        <div className='groups-container'>
          </div>
        <div className="flex justify-center">
        <Link className="text-center text-white px-4 py-2 rounded w-full border hover:bg-gray-700" href="/groups">All Groups</Link>
          </div>
        </div>
        <div className='members-container'>
        <Sortbar />
        </div>
      </main>
      <div className="footer">
            Sorta © 2024.
        </div>
    </>
  );
}
