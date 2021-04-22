import './Successes.css'
import Carousel from 'react-bootstrap/Carousel'
import {successes} from "../../carouselContent"


const Successes = () => {

  const successContent = successes.map((success, index) => 
    <Carousel.Item key={index}>
        <img
        className="d-block w-100"
        src={success.imageUrl}
        alt={success.imageAlt}
        />
        <Carousel.Caption key={index}>
            <a href={success.url} target="_blank" rel="noreferrer"><h3>{success.title}</h3></a>
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
