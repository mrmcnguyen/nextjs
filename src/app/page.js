import Navbar from './navbar';
import Sortbar from './sortbar'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <main className="text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl p-24 pb-8">Welcome to Sorta</h1>
        <p className="text-gray-500 mb-4">Group your data quickly and effectively.</p>
        <div className="flex flex-row justify-center text-center">
          <div className="feature-element">
            Sort your data into groups
            <div className="icon-container">
              <FontAwesomeIcon className="" icon={faPeopleGroup} />
            </div>
          </div>
          <div className="feature-element">
            Easy to use interface
            <div className="icon-container">
              <FontAwesomeIcon className="" icon={faLaptop} />
            </div>
          </div>
          <div className="feature-element">
            Simple export process
            <div className="icon-container">
              <FontAwesomeIcon className="" icon={faFileExport} />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link className="p-4 border border-white w-64 m-4 rounded-md hover:border-blue-700" href="./sort">Get Started</Link>
        </div>
      </main>
      <div className="footer">
        Sorta © 2024.
      </div>
    </div>
  );
}
