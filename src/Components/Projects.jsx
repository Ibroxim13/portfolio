import React, { useEffect, useState } from 'react'
import '../style/projects.css'
import calculator from '../Assets/images/age-calculator.png'
import countryApp from '../Assets/images/country.png'
import dashboard from '../Assets/images/dashboard.png'
import eCommerceMebel from '../Assets/images/e-commerce-mebel.png'
import eCommerce from '../Assets/images/e-commerce.png'
import axios from 'axios'

export default function Projects() {
    const [projects, setProjects] = useState([])
    const images = [dashboard, countryApp, eCommerce, calculator, eCommerceMebel]

    useEffect(() => {
        axios("https://65ea9890c9bf92ae3d3bbed3.mockapi.io/projects")
            .then(res => setProjects(res.data))
    }, [])

    return (
        <section className='projects section' id='projects'>
            <h2 className='section__title'>Projects</h2>
            <span className='section__subtitle'>My Projects</span>

            <div className="projects__container grid container">
                {
                    projects.map((item, idx) =>
                        <div className="project__box" key={item.id} >
                            <div className="project__img">
                                <a href={item.links[1]} target='_blank'>
                                    <img src={images[idx]} alt="dashboard" />
                                </a>
                            </div>
                            <div className="project__details">
                                <h3>Project : {item.name}</h3>
                                <p>
                                    <span>Description</span> : {item.description}
                                </p>
                                <div className="project__technologies">
                                    Technologies :
                                    {item?.technologies?.map(element =>
                                        <span key={element}>{element}</span>
                                    )}
                                </div>
                                <div className='project__links'>
                                    <a href={item.links[0]}><i className="uil uil-github"></i></a>
                                    <a href={item.links[1]}><i className="uil uil-link"></i></a>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </section >
    )
}
