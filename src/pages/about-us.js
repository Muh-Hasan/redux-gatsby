import React from "react"
import { Helmet } from "react-helmet"
import HeaderComponent from "../components/header/header.component"
import Layout from "../components/layout"
import headerImage from "../img/about-us.png"

class AboutUsPage extends React.Component {
  pageTitle = "About us"
  render() {
    return (
      <Layout>
        <main>
          <Helmet>
            <title>{this.pageTitle} | USONV</title>
          </Helmet>
          <HeaderComponent imageUrl={headerImage} title={this.pageTitle} />
          <div className="row justify-content-around">
            <div className="col-md-8 col-sm-12">
              <p>
                Urology Specialists of Nevada (USONV) was founded in 1996 by Dr.
                Robert McBeath, a lifelong Nevada resident and second-generation
                physician. His goal was to create the highest-quality and most
                technologically advanced urology practice in the Las Vegas
                valley. Today, USONV is one of the largest urology practices in
                Southern Nevada.
              </p>
              <p className="mt-5">
                We are dedicated to continuously offering the most advanced
                surgical procedures and technology. USONV continues to use the
                latest in diagnostic and treatment options for urologic
                conditions such as:
                <br />
                <br />• Calypso System • da Vinci surgical procedures •
                Microwave therapy • 3D ultrasound/MRI Fusion Biopsy
              </p>
              <p className="mt-5">
                For the past 17 years, USONV has gathered some of the brightest
                urologists trained at renowned educational institutes like Brown
                University, MIT, and University of Southern California. Our own
                Dr. Mulugeta Kassahun has performed the most robotic
                prostatectomies and partial nephrectomies in Las Vegas.
                <br />
                <br />
                In 2012, radiation oncologist Dr. Michael Becker joined to form
                Nevada Cancer Specialists. Urology and oncology are
                complementary specialties. With Dr. Becker’s leadership, we are
                able to deliver unparalleled continuity of care to our patients
                who require both.
                <br />
                <br />
                Our innovative technology and ongoing commitment to implement
                best practices in urologic care make USONV the preferred choice
                for patients in Southern Nevada, Northern Arizona and
                California.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default AboutUsPage
