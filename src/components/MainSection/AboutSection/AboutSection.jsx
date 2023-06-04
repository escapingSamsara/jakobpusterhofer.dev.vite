import profileImage from '../../../assets/Jakob_Pusterhofer_freeSmaller_cut.png'
import './AboutSection.css'
const AboutSection = ({ theme }) => {
  return (
    <section id="about" className="about-section section">
      <div className="about-container">
        <div className="about-box-1 about-box">
          <div className="text-box">
            <p>
              Hey there and welcome to my page! I'm Jakob, a front-end developer
              and code enthusiast based in Graz, Austria. This website
              represents the canvas of my creative journey as a developer.
            </p>
          </div>
          <div className="text-box">
            <p>
              I'm passionate about crafting beautiful, responsive web
              applications. I love expressing and channeling my creativity
              through code, to make the internet a more beautiful and exciting
              place.
            </p>
          </div>
        </div>
        <div className="about-box-2 about-box">
          <img
            src={profileImage}
            alt="profile-image"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  )
}
export default AboutSection
