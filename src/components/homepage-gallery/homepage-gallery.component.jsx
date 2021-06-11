import React from "react"
import HomepageGalleryItemComponent from "./homepage-gallery-item/homepage-gallery-item.component"
import "./homepage-gallery.styles.scss"

import HOMEPAGE_GALLERY_DATA from "./homepage-gallery.data"

class HomepageGalleryComponent extends React.Component {
  state = HOMEPAGE_GALLERY_DATA

  render() {
    return (
      <section className="container-fluid cards-no-border breathing-room-bottom">
        <div className="row row-cols-1 row-cols-md-4">
          {this.state.sections.map(({ id, ...sectionProps }) => (
            <HomepageGalleryItemComponent key={id} {...sectionProps} />
          ))}
        </div>
      </section>
    )
  }
}

export default HomepageGalleryComponent
