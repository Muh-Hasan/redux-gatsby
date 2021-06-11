import React from "react"
import { Helmet } from "react-helmet"
import ProviderGallery from "../components/provider-gallery/provider-gallery.component"
import HeaderComponent from "../components/header/header.component"
import "../styles/providers-gallery.styles.scss"
import heroImage from "../img/providers-header.png"
const pageTitle = "Providers"
const ProvidersPage = (props) => {
  return (
    <main>
      <Helmet>
        <title>{pageTitle} | USONV</title>
      </Helmet>
      <div className="provider-gallery-page">
        <HeaderComponent title={pageTitle} imageUrl={heroImage} />
        <div className="row justify-content-around">
          <div className="col-md-8 col-sm-12">
            <p className="text-centered">Our Providers</p>
            <div className="divider-broken arrow-down"></div>
          </div>
        </div>
        <ProviderGallery />
      </div>
    </main>
  )
}

export default ProvidersPage
