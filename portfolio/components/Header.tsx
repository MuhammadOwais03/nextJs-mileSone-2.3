import Link from 'next/link';
import style from '../styles/header.module.css'

function Header() {
  return (
    <header className={style.header}>

      <div className="name">
        <h3>Muhammad Owais</h3>
      </div>

      <nav className={style.nav}>
        <ul className="flex list-none">
          <li className="ml-8">
            <Link href="/home" className="text-white font-bold no-underline hover:underline">Home</Link>
          </li>
          <li className="ml-8">
            <Link href="/about" className="text-white font-bold no-underline hover:underline">About</Link>
          </li>
          <li className="ml-8">
            <Link href="/contact" className="text-white font-bold no-underline hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;