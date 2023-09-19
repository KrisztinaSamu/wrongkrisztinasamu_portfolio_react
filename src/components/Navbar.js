import React from "react";
import { Link } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  home,
} from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <header className={container}>
        <nav>
        <ul className={navLinks}>
          <div className={home}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Samu Krisztina
              </Link>
            </li>
          </div>

          
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                Rólam
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/portfolio" className={navLinkText}>
                Portfólió
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/skills_and_tools" className={navLinkText}>
                Készségek és eszközök
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/feedback" className={navLinkText}>
                Visszacsatolás
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={navLinkText}>
                Kapcsolat
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
