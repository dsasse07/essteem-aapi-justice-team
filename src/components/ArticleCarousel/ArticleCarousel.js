import './ArticleCarousel.css'
import Carousel from 'react-bootstrap/Carousel'

import {articles} from "../../data/carouselContent"

const ArticleCarousel = () => {

    const articleContent = articles.map((article, index) => 
        <Carousel.Item key={index}>
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-fluid" src={article.imageUrl} alt={article.imageAlt} />
            </a>
            {/* <Carousel.Caption
              key={index}
              className="m-0 p-0"
            >
                <a href={article.url} target="_blank" rel="noreferrer">
                  <h6>{article.title}</h6>
                </a>
            </Carousel.Caption> */}
        </Carousel.Item>
        )

  return (
    <section>
      <Carousel indicators={true} nextLabel='' prevLabel=''>
          {articleContent}
      </Carousel>
    </section>
  );
}

export default ArticleCarousel


//  image dimension:   1724 × 1204
