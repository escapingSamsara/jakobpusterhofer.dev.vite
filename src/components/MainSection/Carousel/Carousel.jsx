import { faTurnUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import card1 from '../../../assets/card-1.jpg'
import card2 from '../../../assets/card-2.jpg'
import card3 from '../../../assets/card-3.jpg'
import { workList } from '../WorkSection/workList'
import './Carousel.css'
const Carousel = ({ theme }) => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={`carousel-container ${theme}`}>
      <Slider {...settings} className="slider">
        {workList.map((workListItem) => {
          const { id, title, description, tech, link, code, image } =
            workListItem
          return (
            <a
              key={id}
              className="card-tips"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`carousel-card-box`}>
                <div className={`carousel-card-content-holder ${theme}`}>
                  <div className={`carousel-card`}>
                    <div className="card-image-box">
                      <img src={image} alt={title} className="card-image" />
                    </div>
                    <div className={`card-text`}>
                      <div className="card-text-content">
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <p>{tech}</p>
                      </div>
                      <div className={`card-code `}>
                        <a href={code} className={`card-tips-code ${theme}`}>
                          <p className="code-paragraph">code</p>
                          <p className="code-paragraph">
                            <FontAwesomeIcon
                              icon={faTurnUp}
                              className="fa-icon"
                            />
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </Slider>
    </div>
  )
}
export default Carousel
