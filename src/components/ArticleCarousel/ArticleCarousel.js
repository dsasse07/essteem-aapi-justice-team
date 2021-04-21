import './ArticleCarousel.css'
import Carousel from 'react-bootstrap/Carousel'

import {articles} from "./carouselContent"

const ArticleCarousel = () => {

    const articleContent = articles.map(article => 
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={article.imageUrl}
            alt={article.imageAlt}
            />
            <Carousel.Caption>
                <a href={article.url} target="_blank" rel="noopener"><h3>{article.title}</h3></a>
            </Carousel.Caption>
        </Carousel.Item>
        )

  return (
    <div className="article-container row">
      <Carousel>
          {articleContent}
      </Carousel>
    </div>
  );
}

export default ArticleCarousel


//  image dimension:   1724 × 1204




{/* <Carousel>
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
</Carousel> */}