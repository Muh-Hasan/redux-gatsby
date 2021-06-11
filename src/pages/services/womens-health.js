import React from "react"
import HeaderComponent from "../../components/header/header.component"
import WOMENS_HEALTH_DATA from "../../data/womens-health.data"
import Image2Paragraphs from "../../components/image-with-paragraphs/image-with-paragraphs.component"
import CTAComponent from "../../components/call-to-action/cta-footer.component"

import heroImage from "../../img/wh-hero.png"
import ctaImage from "../../img/wh-2.png"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"

class WomensHealthPage extends React.Component {
  state = WOMENS_HEALTH_DATA
  pageTitle = "Women's Health"
  render() {
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{this.pageTitle} | USONV</title>
          </Helmet>
          <HeaderComponent imageUrl={heroImage} title={this.pageTitle} />
          <div className="row justify-content-around">
            <div className="col-md-8 col-sm-12">
              <p className="text-centered">
                Women have unique needs that require a specialist who
                understands the female anatomy. Urology Specialists of Nevada is
                a premier care provider for all female urologic conditions.
              </p>
            </div>
          </div>
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <Image2Paragraphs key={id} {...otherSectionProps} />
          ))}
          <CTAComponent imageUrl={ctaImage} />
        </div>
      </Layout>
    )
  }
}

export default WomensHealthPage
