import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navBar">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
        <Link href="/" style={{ fontWeight: 'light' }}>Sorta.</Link>
        </div>
        <div className="flex space-x-8 hover">
        <Link className="nav-button"href="/sort">
            Sort
          </Link>
        <Link className="nav-button"href="/groups">
            Groups
          </Link>
          <Link className="nav-button"href="/about">
            About
          </Link>
          <Link className="source-button"href="/source">
            Source
          </Link>
        </div>
      </div>
    </nav>
  );
}
