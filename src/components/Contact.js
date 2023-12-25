import React, { useRef } from 'react'
import { MdOutlineMessage } from "react-icons/md";
import emailjs from 'emailjs-com'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f4toes6', 'template_6osm5g3', form.current, 'wxh4dq178oDznP9Ft')

    e.target.reset()
  };

  return (
    <div className='contact-container'>
      <div className="contact-options">
        <article className='contact-option'>
            <a href="https://github.com/RogueSandy"><FaGithub className='git-icon' />Github</a>
            <a href="https://www.linkedin.com/in/sandesh-lawhale-057586294/"><FaLinkedin className='git-icon' />LinkedIn</a>
        </article>
        <div className="privacy">
          <h5>Privacy Note:</h5>
          <p>We respect your privacy. Any information shared with us will be kept confidential and used solely for the purpose of responding to your inquiry</p>
        </div>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='xyz@gamil.com' required />
          <textarea name="message" placeholder='Your Message..!' rows="7" required ></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}
