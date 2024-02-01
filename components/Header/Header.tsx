import "./Header.css";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
import { getSession } from "@auth0/nextjs-auth0";

async function Header() {
  const user = await getSession();

  return (
    <header>
      <div className="header__container">
        <h1>Movie Tracker</h1>
        <section className="nav__container">
          <Navbar />
          <div>
            {user ? (
              <Link href="/api/auth/logout">
                <button type="button" className="nav__btn">
                  Log out
                </button>
              </Link>
            ) : (
              <Link href="/api/auth/login">
                <button type="button" className="nav__btn">
                  Log in
                </button>
              </Link>
            )}
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
