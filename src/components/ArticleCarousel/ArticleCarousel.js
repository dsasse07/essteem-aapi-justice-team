import './ArticleCarousel.css'
import Carousel from 'react-bootstrap/Carousel'

import {articles} from "../../carouselContent"

const ArticleCarousel = () => {

    const articleContent = articles.map((article, index) => 
        <Carousel.Item key={index}>
            <img
            className="d-block w-100"
            src={article.imageUrl}
            alt={article.imageAlt}
            />
            <Carousel.Caption key={index}>
                <a href={article.url} target="_blank" rel="noreferrer"><h3>{article.title}</h3></a>
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
