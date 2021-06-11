import React from "react"
import { Helmet } from "react-helmet"
import FooterComponent from "../footer/footer.component"
import AuxiliaryComponent from "../auxiliary/auxiliary-bar.component"
import NavigationComponent from "../navigation/navigation.component"

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          src="https://kit.fontawesome.com/59134a6014.js"
          crossorigin="anonymous"
        />
      </Helmet>

      <AuxiliaryComponent />
      <NavigationComponent />
      {children}
      <FooterComponent />
    </div>
  )
}

export default Layout
