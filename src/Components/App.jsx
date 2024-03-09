import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Qualification from './Qualification'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import ScrollUp from './ScrollUp'

export default function App() {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Qualification />
                <Projects />
                <Contact />
                <Footer />
                <ScrollUp />
            </main>
        </>
    )
}
