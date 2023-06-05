import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fiverrIcon from '../../../../assets/icons8-fiverr2.svg'
import './ContactSocials.css'
import { contactSocialsList } from './contactSocialsList'
const ContactSocials = ({ theme }) => {
  return (
    <div className="contact-socials">
      <div className="contact-socials-list-box">
        <div className="contact-socials-text">
          <h4 className="socials-cta-text">
            Let's connect across platforms! Discover my latest projects on
            GitHub, explore my design work on Figma, and dive into my published
            articles on Medium. I look forward to connecting with you!
          </h4>
        </div>
        <ul className="contact-socials-list">
          {contactSocialsList.map((socialsListItem) => {
            const { id, name, link, icon } = socialsListItem
            return (
              <a href={link} key={id} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={icon}
                  className={`contact-socials-list-item  ${(name, theme)}`}
                />
              </a>
            )
          })}
        </ul>
      </div>
      <div className="fiverr-contact">
        {' '}
        <a
          href="https://www.fiverr.com/escapinsamsara?up_rollout=true"
          className={`fiverr-cta-btn ${theme}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={`fiverr-cta-btn ${theme}`} type="button">
            <h4 className="fiverr-cta-text">Hire me on fiverr!</h4>
            <div className={`fiverr-icon-box ${theme}`}>
              <img src={fiverrIcon} className="fiverr-logo" alt="fiverr logo" />
            </div>{' '}
          </button>
        </a>
      </div>
    </div>
  )
}
export default ContactSocials
