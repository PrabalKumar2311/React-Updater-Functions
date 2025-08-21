import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
          <li className="navbar">
            <Link to='/'>Var Update</Link>
            <Link to='/arrayupdate'>Array Update</Link>
            <Link to='/objectupdate'>Object Update</Link>
            <Link to='/arrayofobject'>Array Of Object Update</Link>
          </li>
        </ul>
    </nav>
  )
}
