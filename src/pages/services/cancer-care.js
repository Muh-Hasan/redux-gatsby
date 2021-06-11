import React from "react"
import HeaderComponent from "../../components/header/header.component"
import Image2Paragraphs from "../../components/image-with-paragraphs/image-with-paragraphs.component"
import CTAComponent from "../../components/call-to-action/cta-footer.component"
import CANCER_CARE_DATA from "../../data/cancer-care.data"
import ctaImage from "../../img/cc-2.png"
import heroImage from "../../img/cancer-care-hero.png"
import ButtonsDirectoryComponent from "../../components/buttons-directory/buttons-directory.component"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"

class CancerCarePage extends React.Component {
  pageTitle = "Cancer care"
  state = CANCER_CARE_DATA
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
                Urology Specialists of Nevada has the technology and experience
                to offer excellent care in treating urologic cancers. Our team
                of specialists will guide you through each step of a diagnosis.
                We will make sure you understand all your options, then work
                with you to determine the best treatment plan.
              </p>
            </div>
          </div>
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

export default CancerCarePage
