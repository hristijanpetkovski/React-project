import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return <nav>
    <ul>
      <li>
        <Link to='/'> Home </Link>
      </li>
      <li>
        <Link to='/login'> Login </Link>
      </li>
      <li>
        <Link to='/songs'> Songs </Link>
      </li>
      <li>
        <Link to='/albums'> Albums </Link>
      </li>
      <li>
        <Link to='/artists'> Artists </Link>
      </li>
      <li>
        <Link to='/contact'> About us </Link>
      </li>
    </ul>
  </nav>
}

export default Menu