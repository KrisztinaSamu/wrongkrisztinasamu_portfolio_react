import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Samu Krisztina
            </Link>
          </li>
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
      <main className={heading}>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p>Designed & coded by Krisztina Samu -- 2023</p>
      </footer>
    </div>
  );
};

export default Layout;

