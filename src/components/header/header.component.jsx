import React from "react"
import "./header.styles.scss"

const HeaderComponent = ({
  title,
  id,
  imageUrl,
  innerCopy,
  shouldHideHomeButton,
}) => (
  <header className="container-fluid breathing-room-bottom">
    <div className="row">
      <div className="col-lg-6 col-12 left-column bg-grey order-last order-lg-first">
        <div className="row h-100">
          {!shouldHideHomeButton && (
            <a href="/" className="header-breadcrumb">
              Home
            </a>
          )}
          <div className="col-12 left-column-content">
            <h1>{title}</h1>
            <p>{innerCopy}</p>
          </div>
        </div>
      </div>
      <div className=" col-lg-6 col-12 no-padding order-first order-lg-last">
        <img
          src={`${imageUrl}`}
          className="img-fluid"
          width="100%"
          height="auto"
          alt=""
        />
      </div>
    </div>
  </header>
)

export default HeaderComponent
