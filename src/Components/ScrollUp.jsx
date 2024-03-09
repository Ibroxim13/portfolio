import React from 'react'
import '../style/scrollup.css'

export default function ScrollUp() {
    window.addEventListener("scroll", () => {
        const scrollUp = document.querySelector(".scroll__up")
        if (window.scrollY >= 560) {
            scrollUp.classList.add("show__scroll__up")
        } else {
            scrollUp.classList.remove("show__scroll__up")
        }
    })

    return (
        <footer className='scroll__up'>
            <a href="#home">
                <i className='uil uil-arrow-up'></i>
            </a>
        </footer>
    )
}
