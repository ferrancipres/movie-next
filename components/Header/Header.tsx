import "./Header.css";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";

async function Header() {
  const user = await getSession();
  return (
    <header>
      <div className="header-container">
        <p>Movie Tracker</p>
        <div className="nav-container">
          <nav className="nav__links">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          {/* Faltaria autentificación de auth0 */}
          <div>
            {user ? (
              <a href="/api/auth/logout">
                <button>Log out</button>
              </a>
            ) : (
              <a href="/api/auth/login">
                <button>Log in</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
