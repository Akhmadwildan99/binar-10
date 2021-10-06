export default function Carousel() {
    return (
        <section id="main-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h3 className="sub-title-1"> Whats so special?</h3>
              <h1 className="sub-title-2">The games</h1>
            </div>
            <div className="col-lg-8">
              <div id="carouselGallery" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-bs-target="#carouselGallery" data-bs-slide-to="0" className="active" ></li>
                  <li data-bs-target="#carouselGallery" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselGallery" data-bs-slide-to="2"></li>
                  <li data-bs-target="#carouselGallery" data-bs-slide-to="3"></li>
                  <li data-bs-target="#carouselGallery" data-bs-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/rockpaperstrategy-1600.jpg" className="d-block w-100" alt="rock paper strategy"/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/puzzle.jpg" className="d-block w-100" alt="puzzle"/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/dunk.jpg" className="d-block w-100" alt="papan target dunk"/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/puzzle.jpg" className="d-block w-100" alt="puzzle"/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/dunk.jpg" className="d-block w-100" alt="papan target dunk"/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev">
                  <div className="bnr-icon">
                    <i className="bi bi-caret-left"></i>
                  </div>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next">
                  <div className="bnr-icon">
                    <i className="bi bi-caret-right"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
