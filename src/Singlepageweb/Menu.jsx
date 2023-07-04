import React from 'react'
import style from "./nav.module.css"
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ol id={style.menuBlock}>
        <li><Link to="/explore">Explore Works</Link></li>
        <li><Link to="/hire">Hire Talents</Link></li>
        <li><Link to="/challenge">Challenges</Link></li>

    </ol>
  )
}

export default Menu
