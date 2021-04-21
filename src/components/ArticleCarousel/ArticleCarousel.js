import './ArticleCarousel.css'

const ArticleCarousel = () => {
  return (
    <div className="article-container row">
      <div id="artical-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="artical-carousel" data-slide-to="0" class="active"></li>
                <li data-target="artical-carousel" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="./img/sample_image01.jpg" alt="First Slide">
                    <div class="carousel-caption">
                        <h3>first slide</h3>
                        <p>paragraph text</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./img/sample_image02.jpg" alt="Second Slide">
                    <div class="carousel-caption">
                        <h3>second slide</h3>
                        <p>paragraph text</p>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#artical-carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#artical-carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
      </div>
    </div>
  );
}

export default ArticleCarousel
