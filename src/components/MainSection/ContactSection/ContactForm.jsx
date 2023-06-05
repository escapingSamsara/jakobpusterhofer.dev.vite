import emailjs from '@emailjs/browser'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'react-toastify'

export const ContactForm = ({ theme }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [recaptcha, setRecaptcha] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && message && email && !recaptcha) {
      toast.error('Please verify you are not a robot.')
      return
    }
    if (!name || !email || !message) {
      toast.error('Please fill out all fields.')
      return
    }
    // emailjs send function which takes the service ID, template ID and variables as arguments
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          toast.success('Message sent, thank you for contacting me.')
          setName('')
          setEmail('')
          setMessage('')
          setRecaptcha(null)
        },
        (error) => {
          toast.error('An error occurred, please try again.')
        }
      )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={`contact-form ${theme}`}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          value={name}
          type="text"
          name="user_name"
          className={`user-input-name textfield ${theme}`}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          name="user_email"
          className={`user-input-email textfield ${theme}`}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          name="message"
          className={`user-input-message textfield ${theme}`}
        />
        <div className="captcha-btn-box">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={setRecaptcha}
          />
          <input
            type="submit"
            value="Send"
            className={`form-send-btn ${theme}`}
          />
        </div>
      </form>
    </>
  )
}
