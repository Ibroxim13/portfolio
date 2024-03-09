import React from 'react'
import '../style/skills.css'

export default function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className='section__title'>Skills</h2>
            <span className='section__subtitle'>My technical level</span>

            <div className="skills__container container grid">
                <div className="skills__content">
                    <h3 className="skills__title">Frontend Development</h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">HTML</h3>
                                    <span className='skills__level'>Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Css</h3>
                                    <span className='skills__level'>Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Bootstrap 5</h3>
                                    <span className='skills__level'>Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Git</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className='skills__level'>Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">React</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Ant design</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Sass</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Web Application</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Problem Solving</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Responsive Design</h3>
                                    <span className='skills__level'>Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title">Languages</h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Uzbek</h3>
                                    <span className='skills__level'>Native</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">Russian</h3>
                                    <span className='skills__level'>B1 Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">English</h3>
                                    <span className='skills__level'>B2 Pre-Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
