import React from "react"
import "./cta-footer.styles.scss"
import CTAFooterTextComponent from "./cta-footer-text.component"

const CTAComponent = ({ imageUrl, htmlCopy, imageHeight }) => (
  <section className="container-fluid block-container-3 breathing-room-bottom cta-footer">
    <div className="row">
      <div className=" col-lg-6 col-12 no-padding">
        <img
          style={{ height: imageHeight + "px" }}
          src={`${imageUrl}`}
          className="img-fluid"
          width="100%"
          height="auto"
          alt=""
        />
      </div>
      <div className="col-lg-6 col-12 bg-grey text-div">
        {htmlCopy ? (
          <div dangerouslySetInnerHTML={{ __html: htmlCopy }} />
        ) : (
          <CTAFooterTextComponent />
        )}
      </div>
    </div>
  </section>
)
export default CTAComponent
