import React from "react"
//import {render} from "@testing-library/react";

const HomepageGalleryItemComponent = ({
  imageUrl,
  linkUrl,
  bodyCopy,
  bodyCopy2,
  title,
  id,
  buttonText,
  specialButton,
}) => (
  <div className="col col-md-3 mb-4" key={id}>
    <div className="home-card card h-100">
      <div className="card-body">
        <img alt="" className="card-img-top" src={`${imageUrl}`} />
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
          {bodyCopy}
          <br />
          {bodyCopy2}
        </p>
        <a
          href={`${linkUrl}`}
          className={`${buttonText ? "phone-button btn " : "button-link"}`}
        >
          {`${buttonText ? "Call us now" : "Learn more"}`}
        </a>
      </div>
    </div>
  </div>
)

export default HomepageGalleryItemComponent
