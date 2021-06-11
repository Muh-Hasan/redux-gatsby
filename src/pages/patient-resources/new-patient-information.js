import React from "react"
import HeaderComponent from "../../components/header/header.component"
import heroImage from "../../img/np-hero.png"
import ctaImage from "../../img/new-patient-2.png"
import ButtonsDirectoryComponent from "../../components/buttons-directory/buttons-directory.component"
import CTAComponent from "../../components/call-to-action/cta-footer.component"

import NEW_PATIENT_INFO_DATA from "../../data/new-patient-information.data"
import ImageWithParagraphsComponent from "../../components/image-with-paragraphs/image-with-paragraphs.component"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"

const pageTitle = "New patient information"

class NewPatientInformationPage extends React.Component {
  state = NEW_PATIENT_INFO_DATA

  render() {
    return (
      <Layout>
        <main>
          <Helmet>
            <title>{pageTitle} | USONV</title>
          </Helmet>
          <HeaderComponent
            imageUrl={heroImage}
            title="New Patient Information"
          />
          <div className="row justify-content-around">
            <div className="col-md-8 col-sm-12">
              <p className="text-centered">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                congue sit nec enim ornare. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Congue congue sit nec enim ornare.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                congue sit nec enim ornare.
              </p>
            </div>
          </div>
          <ButtonsDirectoryComponent buttons={this.state.buttons} />
          {this.state.imageWithParagraphs.map(
            ({ id, ...otherSectionProps }) => (
              <ImageWithParagraphsComponent key={id} {...otherSectionProps} />
            )
          )}
          <CTAComponent imageUrl={ctaImage} />
        </main>
      </Layout>
    )
  }
}

export default NewPatientInformationPage
