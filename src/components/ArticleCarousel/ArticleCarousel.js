import './ArticleCarousel.css'

const ArticleCarousel = () => {
  return (
    <div className="article-container row">
      <div id="ArticleCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="ArticleCarousel" data-slide-to="0" className="active"></li>
                <li data-target="ArticleCarousel" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="./assets/article-slide-01.png" alt="First Slide"></img> 
                    <div className="carousel-caption">
                        <h3>first slide</h3>
                        <p>paragraph text</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="" alt="Second Slide"></img>
                    <div className="carousel-caption">
                        <h3>second slide</h3>
                        <p>paragraph text</p>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#ArticleCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#ArticleCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
      </div>
    </div>
  );
}

export default ArticleCarousel


//  image dimension:   1724 × 1204