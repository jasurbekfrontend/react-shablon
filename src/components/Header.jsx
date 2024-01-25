import React from 'react'
import logo from "../assets/header/logo.png"

export default function Header() {
  return (
    <div className='header'>
        <div className="h-left">

            <img src={logo} alt="" />
 
              <p>BEAUTY</p>
        </div>
        <div className="h-right">
              <a href="tel:8 (812) 123-45-67">8 (812) 123-45-67</a>
              <button>Обратный звонок</button>
        </div>


    </div>
  )
}
