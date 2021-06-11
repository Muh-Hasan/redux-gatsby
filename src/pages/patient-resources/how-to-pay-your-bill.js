import React from "react"
import HeaderComponent from "../../components/header/header.component"
import heroImage from "../../img/pay-bills-hero.png"
import ctaImage from "../../img/pay-bills-left-col.png"
import CTAComponent from "../../components/call-to-action/cta-footer.component"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"

const pageTitle = "How to pay your bills"

const htmlCTACopy = `<h4>Pay by phone</h4>
            <p>To pay your bill over the phone, please call <a href="tel:+17028770814">1-702-877-0814</a></p>
            <br>
            <h4>Pay by mail</h4>
            Send a check or money order to:
            <br>
            Urology Specialists of Nevada<br>
            PO Box 204646 Dallas, TX 75320-4646
            <br><br>
            Please make check or money order payable to
            Urology Specialists of Nevada.
            <br><br>
            <h4>Pay your bill in person</h4>
            Visit any of our four locations. Find a location near you.
        `
const HowToPayYourBillPage = () => (
  <Layout>
    <main>
      <Helmet>
        <title>{pageTitle} | USONV</title>
      </Helmet>
      <HeaderComponent imageUrl={heroImage} title="How to pay your bill" />
      <div className="row justify-content-around">
        <div className="col-md-8 col-sm-12">
          <p className="text-centered">
            Payments to Urology Specialists of Nevada can be made by phone, by
            mail, or in-person.
          </p>
        </div>
      </div>
      <CTAComponent
        imageUrl={ctaImage}
        imageHeight="450"
        htmlCopy={htmlCTACopy}
      />
    </main>
  </Layout>
)

export default HowToPayYourBillPage
