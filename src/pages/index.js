import React from "react"
import { Helmet } from "react-helmet"
import HeaderComponent from "../components/header/header.component"
import Interior5050Component from "../components/interior-50-50/interior-50-50.component"
import HomepageGalleryComponent from "../components/homepage-gallery/homepage-gallery.component"
import headerImage from "../img/home-hero.png"
import HOMEPAGE_DATA from "../data/homepage.data"
import Layout from "../components/layout"

class HomePage extends React.Component {
  state = HOMEPAGE_DATA
  render() {
    return (
      <Layout>
        <Helmet>
          <title>USONV</title>
        </Helmet>
        <main>
          <HeaderComponent
            imageUrl={headerImage}
            title="Urology Specialists of Nevada"
            innerCopy="The preferred choice for excellent, innovative, and compassionate urologic care."
            shouldHideHomeButton={true}
          />
          <HomepageGalleryComponent />
          {this.state.interiorSections.map(({ id, ...otherSectionProps }) => (
            <Interior5050Component key={id} {...otherSectionProps} />
          ))}
        </main>
      </Layout>
    )
  }
}

export default HomePage
