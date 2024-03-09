import React, { useState } from 'react'
import "../style/header.css"

export default function Header() {
    const [toggle, setToggle] = useState(false)

    return (
        <header className="header">
            <nav className='nav container'>
                <a href="#home" className='nav__logo'>Ibroxim</a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list'>
                        <li>
                            <a href="#home" className='nav__link active-link'>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li>
                            <a href="#about" className='nav__link'>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li>
                            <a href="#skills" className='nav__link'>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li>
                            <a href="#education" className='nav__link'>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Education
                            </a>
                        </li>

                        <li>
                            <a href="#projects" className='nav__link'>
                                <i className="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>

                        <li>
                            <a href="#contact" className='nav__link'>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav__icon nav__close' onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}><i className='uil uil-apps'></i></div>
            </nav>
        </header>
    )
}
