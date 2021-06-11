import React from "react"
import backToTopImage from "../../img/standard/back-to-top-icon.svg"

class FooterComponent extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-4 col-md-4 col-lg-4 text-centered mobile-link-center">
                <a
                  href="https://www.optumcare.com/nondiscrimination-notice.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Language Assistance / Non-Discrimination Notice{" "}
                </a>
              </div>
              <div className="col-xs-4 col-md-4 col-lg-5 text-centered mobile-link-center">
                <a
                  href="https://www.optumcare.com/nondiscrimination-notice.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Asistencia de Idiomas / Aviso de no Discriminación{" "}
                </a>
              </div>
              <div className="col-xs-4 col-md-4 col-lg-3 text-centered mobile-link-center">
                <a
                  href="https://www.optumcare.com/nondiscrimination-notice.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  語言協助 / 不歧視通知
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid footer-fluid">
          <div className="footer">
            <div className="row flip-mobile flip-tablet">
              <div className="col-xs-12 col-md-12 col-lg-4 text-center">
                <span>
                  ©<span id="year"></span> Urology Specialists of Nevada, All
                  rights reserved.
                </span>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-8 text-center">
                <a target="_self" href="/about-us" rel="noreferrer">
                  {" "}
                  ABOUT US{" "}
                </a>
                <a
                  target="_blank"
                  href="https://www.optum.com/terms-of-use.html"
                  rel="noreferrer"
                >
                  {" "}
                  TERMS OF USE{" "}
                </a>
                <a
                  target="_blank"
                  href="https://www.optum.com/opt-out.html"
                  rel="noreferrer"
                >
                  {" "}
                  OPT-OUT{" "}
                </a>
                <a
                  target="_blank"
                  href="https://www.optum.com/accessibility1.html?s=optum"
                  rel="noreferrer"
                >
                  {" "}
                  ACCESSIBILITY{" "}
                </a>
                <a
                  target="_blank"
                  href="https://www.optum.com/vulnerability.html"
                  rel="noreferrer"
                >
                  {" "}
                  VULNERABILITY REPORT
                </a>
                <a
                  target="_blank"
                  href="https://www.optum.com/privacy-policy.html"
                  rel="noreferrer"
                >
                  {" "}
                  PRIVACY POLICY{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <button id="back-to-top" href="#" className="back-to-top hide-mobile">
          <img src={backToTopImage} alt="Back to top of page button" />
        </button>
      </footer>
    )
  }
}

export default FooterComponent
