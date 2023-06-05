import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { ContactForm } from './ContactForm'
import './ContactSection.css'
import ContactSocials from './ContactSocials/ContactSocials'
const ContactSection = ({ theme }) => {
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container">
        <div className="contact-box">
          <div className={`contact-socials-box `}>
            <ContactSocials theme={theme} />
          </div>
          <div className={`contact-form-box `}>
            <ContactForm theme={theme} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
