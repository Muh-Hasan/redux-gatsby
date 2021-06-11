import React from "react"
import "./document-gallery-item.styles.scss"

const DocumentGalleryItemComponent = ({
  imageUrl,
  linkUrl,
  bodyCopy,
  title,
  id,
  buttonText,
}) => (
  <div className="col col-md-4 mb-4" key={id}>
    <div className="card document-gallery-item-card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{bodyCopy}</p>
        <a
          href={`${linkUrl}`}
          className={`${buttonText ? "phone-button " : ""}button-link`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  </div>
)

export default DocumentGalleryItemComponent
