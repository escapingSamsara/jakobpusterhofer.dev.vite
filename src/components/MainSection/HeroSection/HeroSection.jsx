import './HeroSection.css'
// import './heroParticlesName'
const HeroSection = ({ theme }) => {
  return (
    <section id="hero" className="hero-section section">
      <div className="hero-container">
        <div className="hero-box" id="hero-canvas-box">
          <h1 className="hero-text">
            Hi, I'm Jakob <br /> I'm a front-end developer
          </h1>
          {/* <canvas id="canvas-name-header" className={`${theme}`}></canvas> */}
        </div>
      </div>
    </section>
  )
}
export default HeroSection
