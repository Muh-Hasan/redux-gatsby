import React from "react"
import { Helmet } from "react-helmet"
import HeaderComponent from "../components/header/header.component"
import LocationsRowComponent from "../components/locations-row/locations-row.component"
import LOCATIONS_DATA from "../data/locations.data"
import heroImage from "../img/locations-header.png"
import Layout from "../components/layout"

class LocationsPage extends React.Component {
  state = LOCATIONS_DATA
  pageTitle = "Locations"
  render() {
    return (
      <Layout>
        <main>
          <Helmet>
            <title>{this.pageTitle} | USONV</title>
          </Helmet>
          <HeaderComponent imageUrl={heroImage} title={this.pageTitle} />
          <div className="row justify-content-around">
            <div className="col-md-8 col-sm-12">
              <p className="text-centered">
                Urology Specialists of Nevada has four convenient locations
                throughout Las Vegas and Henderson to serve you.
              </p>
              <hr />
            </div>
          </div>
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <LocationsRowComponent key={id} {...otherSectionProps} />
          ))}
        </main>
      </Layout>
    )
  }
}

export default LocationsPage
