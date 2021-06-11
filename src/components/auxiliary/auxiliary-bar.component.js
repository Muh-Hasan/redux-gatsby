import React from "react"
import "./auxiliary.styles.scss"

const AuxiliaryComponent = () => (
  <div className="container-fluid top-bar">
    <div className="row">
      <div className="d-flex col-12 justify-content-end">
        <ul className="social">
          <li>
            <a
              href="https://www.facebook.com/USONV"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/USONV"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default AuxiliaryComponent
