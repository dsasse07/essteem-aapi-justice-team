import './Successes.css'
import Carousel from 'react-bootstrap/Carousel'
import {successes} from "../../data/carouselContent"
import { useTranslation } from 'react-i18next'

const Successes = () => {

  const { t }  = useTranslation()

  const successContent = successes.map((success, index) => 
    <Carousel.Item key={index}>
      <figure className="success-item row p-5">
        <img className="" src={success.imageUrl} alt={success.imageAlt} />
        <div className="quote">
          <blockquote className="fs-3">
            {success.quote}
          </blockquote>
          <figcaption className="fs-4">
            -{success.author}
          </figcaption>
        </div>
      </figure>
    </Carousel.Item>
    )

  return (
    <section className="successes-container row">
      <header>
        <h2>
          {t('Successes')}
        </h2>
      </header>
      <div className="carousel-container ">
        <Carousel nextLabel='' prevLabel=''>
            {successContent}
        </Carousel>
      </div>
    </section>
  )
}

export default Successes
