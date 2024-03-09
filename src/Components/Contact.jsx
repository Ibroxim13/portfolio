import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import '../style/contact.css'
import axios from 'axios'
import { Message } from './Message'

export default function Contact() {
    const [value, setValue] = React.useState()
    const name = React.useRef();
    const message = React.useRef();

    const submitMessage = (event) => {
        event.preventDefault();
        let data = {
            name: name.current.value,
            number: value,
            message: message.current.value
        }
        axios.post("https://65ea9890c9bf92ae3d3bbed3.mockapi.io/messages", { ...data }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => {
                setValue('');
                event.target.reset();
                Message()
            })
    }

    return (
        <section className="contact section" id='contact'>
            <h2 className='section__title'>Get in Touch</h2>
            <span className='section__subtitle'>Contact With Me</span>

            <div className="contact__container container grid">
                <div className="social__links">
                    <a href='https://telegram.me/frontend13' className="social__link">
                        <i className='bx bxl-telegram'></i>
                        <span>Telegram</span>
                    </a>
                    <a href='https://www.linkedin.com/in/ibrohim-ismoilov-2bb086246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="social__link">
                        <i className='bx bxl-linkedin-square' ></i>
                        <span>Linkedin</span>
                    </a>
                    <a href='https://www.facebook.com/ibrohim.ismoilov.1232?mibextid=ZbWKwL' className="social__link">
                        <i className='bx bxl-facebook-square'></i>
                        <span>Facebook</span>
                    </a>
                </div>
                <div className="contact__form">
                    <form onSubmit={submitMessage}>
                        <input ref={name} required type="text" placeholder='Enter your name' />
                        <PhoneInput
                            required
                            placeholder="Enter your phone number"
                            value={value}
                            onChange={setValue} />
                        <textarea ref={message} required placeholder='Write what you want'></textarea>
                        <button className='button' style={{ width: "150px" }} type='submit'>Submit</button>
                    </form>

                </div>
            </div>
        </section>
    )
}
