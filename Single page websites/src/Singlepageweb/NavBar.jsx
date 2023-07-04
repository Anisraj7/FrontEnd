import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Button from './Button'
import style from "./nav.module.css"

const NavBar = () => {
  return (
    <section id={style.nav}>
        <article>
            <div className={style.Logo}>LOGO</div>
            <div className={style.Menu}>MENU</div>
            <div className={style.Button}>BUTTON</div>
        </article>
        <div>
            <svg className='dot1' width="186" fill='none' xmlns='http://www.w3.org'>logo</svg>
            <svg className='dot2' width="186" fill='none' xmlns='http://www.w3.org'>logo1</svg>
        </div>
    </section>
  )
}

export default NavBar
