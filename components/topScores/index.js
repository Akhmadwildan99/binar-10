export default function TopScores() {
    return (
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
      
    )
}
