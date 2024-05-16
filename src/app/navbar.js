import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navBar bg-gray-800">
      <div className="flex w-full justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/" style={{ fontWeight: 'light', marginLeft: '10px', fontWeight: "normal" }}>Sorta</Link>
        </div>
        <div className="flex items-center space-x-8 text-white">
          <Link className="nav-button" href="/sort">
            Sort
          </Link>
          <Link className="nav-button" href="/groups">
            Groups
          </Link>
          <Link className="nav-button" href="/about">
            About
          </Link>
          <Link className="source-button" href="/source">
            Source
          </Link>
        </div>
      </div>
    </nav>
  );
}
