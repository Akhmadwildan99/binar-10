
export default function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
              <a className="navbar-brand" href="#">Logo</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"                  data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav nav-1 ">
                      <a className="nav-link">Home</a>
                      <a className="nav-link" >Work</a>
                      <a className="nav-link" >Contact</a>
                      <a className="nav-link">About me</a>
                  </div>
                  <div className="navbar-nav nav-2 ">
                      <a className="nav-link" >Sign up</a>
                      <a className="nav-link" >Login</a>
                  </div>
              </div>
          </div>
      </nav>
     
      <section id="main-bg">
        <div className="container">
          <br/>
          <br/>
          <br/>
          <div>
            <h1 className="main-title">Play Traditional Game</h1>
            <h3 className="main-description">Experience new traditional game</h3>
          </div>
          <div>
            <a type="button" className="btn btn-warning tombol-1">Play now</a> 
          </div>
          <div className="scroll-down-button">
            <h4 >The story</h4>
            <i className="bi bi-caret-down"></i>
          </div>
        </div>
      </section>
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
      <section id="game-features">
        <div className="container">
          <div className="row feature">
            <div className="col-lg-6 offset-lg-6">
              <h3 className="title-features-1">Whats so special?</h3>
              <h1 className="title-features-2">Features</h1>
              <ol>
                <li className="elipse-1">
                  <p className="features">Traditional games</p>
                  <p className="text-features">If you miss your childhood, we provide many traditional games here</p>
                </li>
                <li className="elipse"><p className="features">Game suit</p></li>
                <li className="elipse"><p className="features">Tdb</p></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="system-req">
        <div className="container">
          <div className="row title">
            <div className="col-6">
              <h1 className="title-req">System requirements</h1>
            </div>
            <div className="col-6">
              <h3 className="sub-title-req">Can my computer run this game?</h3>
            </div>
          </div>
          <div className="row requi-1 ">
            <div className="col-3 req">
              <h3 className="title-spec">os:</h3>
              <p className="des-spec">
                Windows 7 64-bit only
              (No OSX support at this time</p>
            </div>
            <div className="col-3 req">
              <h3 className="title-spec">processor:</h3>
              <p className="des-spec">
                Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ
              </p>
            </div>
          </div>
          <div className="row requi">
            <div className="col-3 req">
              <h3 className="title-spec">memory:</h3>
              <p className="des-spec">4 GB RAM</p>
            </div>
            <div className="col-3 req">
              <h3 className="title-spec">storage:</h3>
              <p className="des-spec">
                8 GB available space
              </p>
            </div>
          </div>
          <div className="row requi ">
            <div className="col-6 req">
              <h3 className="title-spec">graphics:</h3>
              <p className="des-spec">
                NVIDIA GeForce GTX 660 2GB or 
                AMD Radeon HD 7850 2GB DirectX1(Shader Model 5)
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="top-scores">
        <div className="container">
          <div className="row top-score">
            <div className="col-md-6 score">
              <h1 className="title-score">Top scores</h1>
              <p className="des-score">This top score from various games provided on this platform</p>
              <a href="#" type="button" className="btn btn-warning tombol-2">see more</a>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col card-1">
                  <div className="card">
                    <div className="header-card">
                      <div className="img-card">
                        <img src="/images/evan.jpg" alt="evan lathi"/>
                      </div>
                      <div className="title-card">
                        <h2 className="title-card-1">Evan Lahti</h2>
                        <h3 className="title-card-2">PC Gamer</h3>
                      </div>
                      <div className="social-media-link">
                        <a href="#"><i className="bi bi-twitter"></i></a>
                      </div>
                    </div>
                    <div className="body-card">
                      <div className="des-card">
                        <p className="des-card-1">“One of my gaming highlights of the year.”</p>
                        <p className="des-card-2">October 18, 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col card-2">
                  <div className="card">
                    <div className="header-card">
                      <div className="img-card">
                        <img src="/images/jedda.jpg" alt="jedda"/>
                      </div>
                      <div className="title-card">
                        <h2 className="title-card-1">Jadda Griffin</h2>
                        <h3 className="title-card-2">Nerdreactor</h3>
                      </div>
                      <div className="social-media-link">
                        <a href="#"><i className="bi bi-twitter"></i></a>
                      </div>
                    </div>
                    <div className="body-card">
                      <div className="des-card">
                        <p className="des-card-1">“The next big thing in the world of streaming and survival games.”
                        </p>
                        <p className="des-card-2">December 21, 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col card-3">
                  <div className="card">
                    <div className="header-card">
                      <div className="img-card">
                        <img src="/images/aaron.jpg" alt="Aaron" />
                      </div>
                      <div className="title-card">
                        <h2 className="title-card-1">Aaron Williams </h2>
                        <h3 className="title-card-2">Uproxx</h3>
                      </div>
                      <div className="social-media-link">
                        <a href="#"><i className="bi bi-twitter"></i></a>
                      </div>
                    </div>
                    <div className="body-card">
                      <div className="des-card">
                        <p className="des-card-1">“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”</p>
                        <p className="des-card-2">December 24, 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="last-page">
        <div className="container">
          <div className="row trophy">
            <div className="col-md-4 trophy">
            </div>
            <div className="col-md-8 trophy ">
              <h3>Want to stay in touch?</h3>
              <h1>newsletter subscribe </h1>
              <p>In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.</p>
              <form>
                <label forHTML="email" className="form-label"></label>
                <input type="email" id="email" className="form-label" placeholder="your email adress"/>
                <button type="submit" className="btn btn-warning">Subscribe now</button>
              </form>
            </div>
          </div>
          <footer>
            <div className="row link">
              <div className="col-lg-8 link-1">
                <ul>
                  <li><a href="#main-bg">main</a></li>
                  <li><a href="#main-bg-2">about</a></li>
                  <li><a href="#game-features">game features</a></li>
                  <li><a href="#system-req">system requirements</a></li>
                  <li><a href="#top-scores">quotes</a></li>
                </ul>
              </div>
              <div className="col-lg-4 link-2">
                <ul>
                  <li><a href="#"><svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.65382 19.1726H2.56282V9.67859H0.517822V6.40559H2.56282V4.44159C2.56282 1.77259 3.71782 0.183594 6.99582 0.183594H9.72582V3.45659H8.02082C6.74282 3.45659 6.65882 3.91459 6.65882 4.76859L6.65382 6.40559H9.74582L9.38382 9.67859H6.65382V19.1726Z" fill="white"/>
                    </svg></a></li>
                  <li><a href="#"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="1" d="M18.3981 2.41449C17.7231 2.70013 17.0072 2.88765 16.2741 2.97084C17.0365 2.53297 17.623 1.84099 17.899 1.01526C17.1731 1.42694 16.3789 1.71699 15.5508 1.87286C14.8519 1.15947 13.8744 0.755389 12.8519 0.757085C10.8105 0.757085 9.15361 2.33909 9.15361 4.29061C9.15361 4.5679 9.18627 4.83816 9.25021 5.09623C6.17639 4.94862 3.45216 3.54236 1.62787 1.404C1.30934 1.92529 1.12764 2.53297 1.12764 3.18076C1.12764 4.40623 1.78024 5.48805 2.77231 6.12188C2.18494 6.10468 1.61046 5.95309 1.09706 5.67983V5.7249C1.09706 7.43659 2.37189 8.86495 4.06278 9.19027C3.5182 9.3312 2.94722 9.35187 2.39305 9.25072C2.86384 10.6549 4.22998 11.6764 5.8475 11.7061C4.5821 12.6524 2.98781 13.2184 1.25483 13.2184C0.960153 13.2181 0.66574 13.2015 0.373047 13.1689C2.00943 14.1713 3.95365 14.7571 6.04185 14.7571C12.8438 14.7571 16.5627 9.37118 16.5627 4.70056C16.5627 4.54779 16.5627 4.39502 16.5513 4.24335C17.2749 3.74295 17.8998 3.12372 18.3969 2.41449H18.3981Z" fill="white"/>
                    </svg></a></li>
                  <li><a href="#"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.61 0.183594H5.98961C3.12627 0.183594 0.799805 2.55085 0.799805 5.4644V12.8973C0.799805 15.8163 3.12627 18.1781 5.98961 18.1781H20.6046C23.4733 18.1781 25.7944 15.8108 25.7944 12.8973V5.4644C25.7998 2.55085 23.4733 0.183594 20.61 0.183594ZM17.0959 9.54779L10.2575 12.8642C10.0731 12.9524 9.86705 12.82 9.86705 12.6103V5.7679C9.86705 5.55821 10.084 5.42578 10.2629 5.51958L17.1013 9.04564C17.3074 9.15048 17.302 9.44846 17.0959 9.54779Z" fill="#FF1313"/>
                    </svg></a></li>
                  <li><a href="#"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9602 13.6252V9.5538V0.680176H2.93894L0.811279 2.97688V15.0868H6.13043V18.845H8.47085L11.024 16.1307H17.407L19.9602 13.6252ZM7.40694 13.4165H4.00268C3.76864 13.4165 3.57715 13.2286 3.57715 12.9989V2.76817C3.57715 2.5385 3.76864 2.35059 4.00268 2.35059H17.6197C17.8537 2.35059 18.0452 2.5385 18.0452 2.76817V10.7022C18.0452 10.8171 18.0027 10.9215 17.9229 10.9998L15.5825 13.2965C15.5027 13.3748 15.391 13.4165 15.2793 13.4165H11.3697L8.07183 15.6401C8.00268 15.6871 7.91757 15.7132 7.83247 15.7132C7.76332 15.7132 7.69949 15.6976 7.63566 15.6662C7.49204 15.5932 7.40694 15.4522 7.40694 15.2956V13.4165Z" fill="white"/>
                    <path d="M13.79 9.76274V5.58691H12.0878V9.76274H13.79ZM9.53465 9.76274V5.58691H7.83252V9.76274H9.53465Z" fill="white"/>
                    </svg></a></li>
                </ul>
              </div>
            </div>
            <div className="row credit">
              <div className="col-sm-4 credit">
                <p> © 2018 Your Games, Inc. All Rights Reserved</p>
              </div>
              <div className="col-sm-8 credit">
                <p>Privacy Policy | Terms of Services | Code of Conduct </p>
              </div>
            </div>
           
          </footer>
        </div>
      </section>
      </>
  )
}
