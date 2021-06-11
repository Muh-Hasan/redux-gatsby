import React, { useState } from "react"
import "./navigation.styles.scss"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"

import NAVIGATION_DATA from "./navigation.data"

const NavigationComponent = () => {
  const navInfo = NAVIGATION_DATA
  return (
    <>
      <div className="container-fluid top-nav">
        <div className="row d-flex justify-content-between">
          <Navbar.Brand href="/">
            <img id="main-logo" src={navInfo.navLogo} alt="Website Logo" />
          </Navbar.Brand>
          {navInfo.logoDivider && <img src={navInfo.logoDivider} />}
          {navInfo.navLogo2 && (
            <Navbar.Brand id="alt-logo" href="/">
              <img src={navInfo.navLogo2} alt="Partner Logo" />
            </Navbar.Brand>
          )}
        </div>
      </div>
      <div className="top-nav-line">
        <div className="row d-flex justify-content-between bottom-nav vertical-center">
          <div className="container-fluid optum-menu-nav">
            <Navbar
              collapseOnSelect
              expand="lg"
              className="navbar optum-nav navbar-light mobile-nav"
            >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  {navInfo.linkItems.map(({ id, ...otherSectionProps }) => (
                    <>
                      {otherSectionProps.children.length > 0 && (
                        <NavDropdown
                          className="nav-link"
                          title={otherSectionProps.name}
                          id="collapsible-nav-dropdown"
                        >
                          {otherSectionProps.children.map(({ name, link }) => (
                            <NavDropdown.Item href={link}>
                              {name}
                            </NavDropdown.Item>
                          ))}
                        </NavDropdown>
                      )}

                      {otherSectionProps.children.length === 0 && (
                        <Nav.Link
                          className="nav-item"
                          key={id}
                          href={otherSectionProps.link}
                        >
                          {otherSectionProps.name}
                        </Nav.Link>
                      )}
                    </>
                  ))}
                </Nav>
                {navInfo.rightHtml && (
                  <div
                    dangerouslySetInnerHTML={{ __html: navInfo.rightHtml }}
                  />
                )}
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationComponent
