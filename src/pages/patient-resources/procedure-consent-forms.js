import React from "react"
import HeaderComponent from "../../components/header/header.component"
import heroImage from "../../img/procedure-header.png"
import DocumentGalleryComponent from "../../components/document-gallery/document-gallery.component"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"

const pageTitle = "Procedure consent forms"

const ProcedureConsentFormsPage = () => (
  <Layout>
    <main>
      <Helmet>
        <title>{pageTitle} | USONV</title>
      </Helmet>
      <HeaderComponent
        imageUrl={heroImage}
        title={pageTitle}
        innerCopy="How to see the information we’ve recorded about your health."
      />
      <div className="row justify-content-around">
        <div className="col-md-8 col-sm-12">
          <p className="text-centered">
            You may download and print forms by clicking on the links below. Our
            forms are PDF Files.
            <a
              href="https://get.adobe.com/reader/"
              target="_blank"
              rel="noreferrer"
            >
              Click here to download the most recent version of Adobe Reader.
            </a>
          </p>
        </div>
      </div>
      <DocumentGalleryComponent />
    </main>
  </Layout>
)
export default ProcedureConsentFormsPage
