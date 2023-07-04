import React from 'react'
import Style from "./nav.module.css"
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div id={Style.ButtonBlock}>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="none">svg</svg>
            <li><Link to="/"><p>Get Started</p></Link></li>
        </button>
      
    </div>
  )
}

export default Button
