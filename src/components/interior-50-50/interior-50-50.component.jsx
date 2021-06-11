import React from "react"
import "./interior-50-50.styles.scss"

const Interior5050Component = ({
  title,
  id,
  imageUrl,
  bodyCopy,
  htmlCopy,
  imageLeft,
  imageHeight,
}) => (
  <section className="container-fluid cards-no-border breathing-room-bottom">
    <div
      className={`${imageLeft ? "reverse-row" : ""} row container interior-row`}
    >
      <div
        className={`${
          imageLeft ? "left-column" : "right-column"
        } col-md-5 vertically-center`}
      >
        <div className="row">
          <div className="col-12 left-column-content interior-row-container">
            {title && (
              <h1 className={`${title ? "dash" : ""}`}>
                {title} {imageLeft}
              </h1>
            )}
            {bodyCopy && <p className="interior-row-text">{bodyCopy}</p>}
            <div dangerouslySetInnerHTML={{ __html: htmlCopy }} />
          </div>
        </div>
      </div>
      <div
        className={`${imageLeft ? "right-column" : "left-column"}  col-md-7`}
      >
        <img
          style={{ height: imageHeight + "px" }}
          src={`${imageUrl}`}
          className="img-fluid"
          width="100%"
          height="auto"
          alt=""
        />
      </div>
    </div>
  </section>
)

export default Interior5050Component
