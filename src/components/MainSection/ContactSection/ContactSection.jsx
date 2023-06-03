import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { ContactForm } from './ContactForm'
import './ContactSection.css'
const ContactSection = ({ theme }) => {
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-form-box">
            <ContactForm theme={theme} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
