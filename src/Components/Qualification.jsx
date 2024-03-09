import React from 'react'
import '../style/qualification.css'

export default function Qualification() {
    return (
        <section className="education section" id='education'>
            <h2 className='section__title'>Education</h2>
            <span className='section__subtitle'>My Educational Way</span>

            <div className='education__content container'>
                <div className="education__progressbar">
                    <span><i className='bx bxs-checkbox-checked'></i></span>
                    <span></span>
                    <span><i className='bx bxs-checkbox-checked'></i></span>
                    <span></span>
                    <span><i className='bx bx-loader-alt' ></i></span>
                    <span></span>
                </div>
                <div className="education__container">
                    <div className="education__item">
                        <h3>Lyceum TUIT</h3>
                        <p>Faculty: Technique faculty</p>
                        <p>Location: Tashkent</p>
                        <p>Year: 2020 - 2022</p>
                    </div>

                    <div className="education__item">
                        <h3>IT Park Tashkent</h3>
                        <p>Faculty: Frontend Development</p>
                        <p>Location: Tashkent</p>
                        <p>Year: 2023 - 2023 / 8 months</p>
                    </div>

                    <div className="education__item">
                        <h3>TUIT</h3>
                        <p>Faculty: Software Engineering</p>
                        <p>Location: Tashkent</p>
                        <p>Year: 2022 - 2027</p>
                    </div>


                </div>
            </div>
        </section >
    )
}
