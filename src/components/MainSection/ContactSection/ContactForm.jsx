import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export const ContactForm = ({ theme }) => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_h7rg8vg',
        'template_wc9bwcj',
        form.current,
        'zNxumeuk9MjEZai2h'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          placeholder="Name"
          required
          type="text"
          name="user_name"
          className={`user-input-name textfield ${theme}`}
        />
        <input
          placeholder="Email"
          required
          type="email"
          name="user_email"
          className={`user-input-email textfield ${theme}`}
        />
        <textarea
          placeholder="Message"
          name="message"
          required
          className={`user-input-message textfield ${theme}`}
        />
        <input
          type="submit"
          value="Send"
          disabled
          className={`form-send-btn ${theme}`}
        />
      </form>
      {/* <ReCAPTCHA
        sitekey={CAPTCHA_SITE_KEY}
        onChange={sendEmail}
        className="recaptcha"
      /> */}
    </>
  )
}
