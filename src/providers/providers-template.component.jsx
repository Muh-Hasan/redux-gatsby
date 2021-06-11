import React from "react"
import { Helmet } from "react-helmet"
import { connect } from "react-redux"
import { selectIndividualProvider } from "../redux/provider/provider.selectors"
import Layout from "../components/layout"
import "../styles/providers-template.styles.scss"

const ProviderTemplatePage = ({ provider }) => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>{provider.providerName} | USONV</title>
        </Helmet>
        <section className="container-fluid block-container-3 breathing-room provider-single shop-page">
          <a href="/" className="provider-single-breadcrumb">
            Providers
          </a>
          <div className="row justify-content-around">
            <div className=" col-md-3 col-sm-12 no-padding">
              <img
                src={provider.providerInteriorImage}
                className="float-right"
                alt="..."
              />
            </div>
            <div className=" col-md-9 col-sm-12 no-padding info">
              <h1 className="border-bottom">{provider.providerName}</h1>
              <h2>Overview</h2>
              <h4>Biography</h4>
              <p className="border-bottom">
                <div
                  dangerouslySetInnerHTML={{ __html: provider.providerBio }}
                />
              </p>
              <div className="breathing-room">
                <h3>Qualifications</h3>
                {provider.qualifications.map(function (item, i) {
                  return (
                    <div key={i} className="media">
                      <i
                        className="fas fa-graduation-cap mr-3 align-self-center"
                        aria-hidden="true"
                      ></i>
                      <div className="media-body">
                        {provider.qualifications[i].type}
                        <br />
                        <strong>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: provider.qualifications[i].name,
                            }}
                          />
                        </strong>
                      </div>
                    </div>
                  )
                })}
              </div>

              {provider.organizations.length > 0 && (
                <div className="breathing-room-bottom organizations-section">
                  <hr />
                  <h3 className="organizations-heading">
                    Professional Organizations
                  </h3>
                  <ul>
                    {provider.organizations.map(function (item, i) {
                      return <li key={i}>{provider.organizations[i]}</li>
                    })}
                  </ul>
                </div>
              )}

              <div className="row">
                <div className="col-lg-6 ">
                  <h1 className="border-top">Languages</h1>
                  <p>
                    <i
                      className="fas fa-user-md mr-3 align-self-center"
                      aria-hidden="true"
                    ></i>
                    I speak <b>English</b>
                  </p>
                </div>
                <div className="col-lg-6">
                  <h1 className="border-top">Gender</h1>
                  <p>
                    <i
                      className="fas fa-user-md mr-3 align-self-center"
                      aria-hidden="true"
                    ></i>
                    {provider.sex}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

const mapToStateProps = (state, ownProps) => ({
  provider: selectIndividualProvider(ownProps.providerId)(state),
})

export default connect(mapToStateProps)(ProviderTemplatePage)
