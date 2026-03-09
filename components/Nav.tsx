import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        Jonathan <span>Dobrowolski</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="#work">Work</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-right">jdobro.com</div>
    </nav>
  );
}
