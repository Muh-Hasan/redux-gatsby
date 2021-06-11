import React from "react"
import HeaderComponent from "../../components/header/header.component"
import MENS_HEALTH_DATA from "../../data/mens-health.data"
import Image2Paragraphs from "../../components/image-with-paragraphs/image-with-paragraphs.component"
import CTAComponent from "../../components/call-to-action/cta-footer.component"
import heroImage from "../../img/mh-header.png"
import ctaImage from "../../img/mh-5.png"
import ButtonsDirectoryComponent from "../../components/buttons-directory/buttons-directory.component"

import "../../styles/mens-health.styles.scss"

import { Helmet } from "react-helmet"
import Layout from "../../components/layout"

class MensHealthPage extends React.Component {
  state = MENS_HEALTH_DATA

  render() {
    return (
      <Layout>
        <div className="mens-health-page">
          <Helmet>
            <title>Men's Health | USONV</title>
          </Helmet>
          <HeaderComponent imageUrl={heroImage} title="Men's Health" />
          <ButtonsDirectoryComponent buttons={this.state.buttons} />
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <Image2Paragraphs key={id} {...otherSectionProps} />
          ))}
          <CTAComponent imageUrl={ctaImage} />
        </div>
      </Layout>
    )
  }
}

export default MensHealthPage
