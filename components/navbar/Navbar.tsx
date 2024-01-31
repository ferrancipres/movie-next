import "./Navbar.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="nav__links">
      <ul>
        <li>
          <Link href="/">Discover</Link>
        </li>
        <li>
          <Link href="/popular">Popular</Link>
        </li>
        <li>
          <Link href="/unreleased">Coming soon</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
