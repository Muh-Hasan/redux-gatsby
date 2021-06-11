import React from "react"
import HeaderComponent from "../../components/header/header.component"
import ctaImage from "../../img/med-records-3.png"
import headerImage from "../../img/medical-records-hero.png"
import ButtonsDirectoryComponent from "../../components/buttons-directory/buttons-directory.component"

import MEDICAL_RECORDS_DATA from "../../data/request-medical-records.data"
import CTAComponent from "../../components/call-to-action/cta-footer.component"
import ImageWithParagraphsComponent from "../../components/image-with-paragraphs/image-with-paragraphs.component"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"

const pageTitle = "Request your medical records"

class RequestYourMedicalRecordsPage extends React.Component {
  state = MEDICAL_RECORDS_DATA

  render() {
    return (
      <Layout>
        <main>
          <Helmet>
            <title>{pageTitle} | USONV</title>
          </Helmet>
          <HeaderComponent
            imageUrl={headerImage}
            title={pageTitle}
            innerCopy="How to see the information we’ve recorded about your health."
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
          {/*<Image2Paragraphs htmlCopy1={this.state.imageWithParagraphs[0].htmlCopy1}*/}
          {/*                  sectionId1={this.state.imageWithParagraphs[0].sectionId1}*/}
          {/*                  htmlCopy2={this.state.imageWithParagraphs[0].htmlCopy2}*/}
          {/*                  sectionId2={this.state.imageWithParagraphs[0].sectionId2}*/}
          {/*                  htmlCopy3={this.state.imageWithParagraphs[0].htmlCopy3}*/}
          {/*                  sectionId3={this.state.imageWithParagraphs[0].sectionId3}*/}
          {/*                  sectionCopy4={this.state.imageWithParagraphs[0].sectionCopy4}*/}
          {/*                  imageUrl={this.state.imageWithParagraphs[0].imageUrl}*/}
          {/*/>*/}
          {/*<Image2Paragraphs sectionHeader1={this.state.imageWithParagraphs[1].sectionHeader1}*/}
          {/*                  sectionId1={this.state.imageWithParagraphs[1].sectionId1}*/}
          {/*                  sectionHeader2={this.state.imageWithParagraphs[1].sectionHeader2}*/}
          {/*                  sectionCopy2={this.state.imageWithParagraphs[1].sectionCopy2}*/}
          {/*                  sectionId2={this.state.imageWithParagraphs[1].sectionId2}*/}
          {/*                  sectionHeader3={this.state.imageWithParagraphs[1].sectionHeader3}*/}
          {/*                  htmlCopy3={this.state.imageWithParagraphs[1].htmlCopy3}*/}
          {/*                  sectionId3={this.state.imageWithParagraphs[1].sectionId3}*/}
          {/*                  imageUrl={this.state.imageWithParagraphs[1].imageUrl}*/}
          {/*/>*/}
          {/*<Image2Paragraphs sectionHeader1={this.state.imageWithParagraphs[2].sectionHeader1}*/}
          {/*                  sectionCopy1={this.state.imageWithParagraphs[2].sectionCopy2}*/}
          {/*                  sectionId1={this.state.imageWithParagraphs[2].sectionId1}*/}
          {/*                  sectionHeader2={this.state.imageWithParagraphs[2].sectionHeader2}*/}
          {/*                  sectionCopy2={this.state.imageWithParagraphs[2].sectionCopy2}*/}
          {/*                  sectionId2={this.state.imageWithParagraphs[2].sectionId2}*/}
          {/*                  sectionHeader3={this.state.imageWithParagraphs[2].sectionHeader3}*/}
          {/*                  sectionCopy3={this.state.imageWithParagraphs[2].sectionCopy3}*/}
          {/*                  sectionId3={this.state.imageWithParagraphs[2].sectionId3}*/}
          {/*/>*/}
          <CTAComponent imageUrl={ctaImage} />
        </main>
      </Layout>
    )
  }
}

export default RequestYourMedicalRecordsPage
