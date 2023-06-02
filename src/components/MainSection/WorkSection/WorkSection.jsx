import Carousel from '../Carousel/Carousel'
import './WorkSection.css'
const WorkSection = ({ theme }) => {
  return (
    <section id="work" className="work-section section">
      <div className="work-container">
        {/* <div className="work-box-1 work-box"></div> */}
        <div className="work-box-2 work-box">
          <Carousel theme={theme} />
        </div>
      </div>
    </section>
  )
}
export default WorkSection
