import profileImage from '../../../assets/Jakob_Pusterhofer_freeSmaller_cut.png'
import './AboutSection.css'
const AboutSection = ({ theme }) => {
  return (
    <section id="about" className="about-section section">
      <div className="about-container">
        <div className="about-box-1 about-box">
          <p>
            Hey there and welcome to my page! I'm Jakob, a front-end developer
            and code enthusiast based in Graz, Austria. This website represents
            the canvas of my creative journey as a developer. I'm passionate
            about crafting beautiful, responsive websites and web applications.
            <br />I love expressing and channeling my creativity through code,
            to make the internet a more beautiful and exciting place. In
            addition to my work as a developer, I also pursue my passions for
            music and writing.
          </p>
        </div>
        <div className="about-box-2 about-box">
          <div className={`about-card ${theme}`}>
            <div className="text-card">
              {/* <p className="text-card-text">
                jakob pusterhofer <br />
                front-end developer <br />
                austria <br />
                react.js, express.js, mongoDB, scss
              </p> */}
            </div>
            <div className="image-card">
              <img
                src={profileImage}
                alt="profile-image"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
