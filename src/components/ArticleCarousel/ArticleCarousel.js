import './ArticleCarousel.css'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from './assets/article-slide-01.png'
import slide2 from './assets/article-slide-02.png'
import slide3 from './assets/article-slide-03.png'

const ArticleCarousel = () => {
  return (
    <div className="article-container row">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <a href="https://www.theatlantic.com/politics/archive/2021/03/anti-asian-harassments-long-history-america/618211/" target="_blank" rel="noopener"><h3>What it's like when racism comes for you</h3></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Secondslide"
          />
          <Carousel.Caption>
            <a href="https://www.papermag.com/help-stop-hate-crimes-asian-americans-2651116989.html?rebelltitem=24#rebelltitem24" target="_blank" rel="noopener"><h3>How to help stop hate crimes against Asian Americans</h3></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide3}
            alt="ThirdSlide"
            />
            <Carousel.Caption>
                <a href="https://www.npr.org/transcripts/978832077" target="_blank" rel="noopener"><h3>The History of Anti-Asian Sentiment in the U.S.</h3></a>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ArticleCarousel


//  image dimension:   1724 × 1204