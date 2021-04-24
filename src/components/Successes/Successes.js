import './Successes.css'
import Carousel from 'react-bootstrap/Carousel'
import {successes} from "../../data/carouselContent"


const Successes = () => {


  const successContent = successes.map((success, index) => 
    <Carousel.Item key={index}>
        <img className="d-block w-100 h-50" src={success.imageUrl} alt={success.imageAlt} />
        <Carousel.Caption key={index}>
            <blockquote>{success.quote}</blockquote>
            <figcaption>-{success.author}</figcaption>
        </Carousel.Caption>
    </Carousel.Item>
    )

  return (
    <section className="successes-container row">
      <Carousel>
          {successContent}
      </Carousel>
    </section>
  )
}

export default Successes
