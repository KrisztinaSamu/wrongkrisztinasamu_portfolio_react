import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Samu Krisztina</Link></li>
          <li><Link to="/about">Rólam</Link></li>
          <li><Link to="/portfolio">Portfólió</Link></li>
          <li><Link to="/skills_and_tools">Készségek és eszközök</Link></li>
          <li><Link to="/feedback">Visszacsatolás</Link></li>
          <li><Link to="/contact">Kapcsolat</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout