import React from 'react'

export default function Requirements() {
    return (
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
    )
}
