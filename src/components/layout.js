import * as React from "react";
import { mainPage, heading } from "./layout.module.css";
import Navbar from "../components/Navbar";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={mainPage}>
      <Navbar/>
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
