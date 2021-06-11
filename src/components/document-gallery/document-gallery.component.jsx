import React from "react"
//import {render} from "@testing-library/react";
import DocumentGalleryItemComponent from "./document-gallery-item.component"
import "./document-gallery.styles.scss"

import linkUrl1 from "../../img/documents/PD2576_16389-USONV-New-Patient-Packet_081519_V5d_test.pdf"
import linkUrl2 from "../../img/documents/ProstateUltrasoundConsent-bx.pdf"
import linkUrl3 from "../../img/documents/CystoConsent.pdf"
import linkUrl4 from "../../img/documents/VasectomyConsent.pdf"
import linkUrl5 from "../../img/documents/Notice_of_Privacy_Practices.pdf"
import linkUrl6 from "../../img/documents/PD2718_USONV_Release_of_Information_Form_0421.pdf"
import linkUrl7 from "../../img/documents/PD2719_USONV_Obtain_PHI_Form_with_sign_here_0421.pdf"

class DocumentGalleryComponent extends React.Component {
  state = {
    sections: [
      {
        title: "Adult Patient Packet",
        buttonText: "Download packet",
        linkUrl: linkUrl1,
        id: 1,
      },
      {
        title: "Prostate Ultrasound / Biopsy Procedure Consent Form",
        buttonText: "Download form",
        linkUrl: linkUrl2,
        id: 2,
      },
      {
        title: "Cystoscopy Procedure Consent Form",
        buttonText: "Download form",
        linkUrl: linkUrl3,
        id: 3,
      },
      {
        title: "Vasectomy Procedure Consent Form",
        buttonText: "Download packet",
        linkUrl: linkUrl4,
        id: 4,
      },
      {
        title: "Notice of Privacy Practices",
        buttonText: "Download form",
        linkUrl: linkUrl5,
        id: 5,
      },
      {
        title: "Authorization to Release Health Records to Patient",
        buttonText: "Download form",
        linkUrl: linkUrl6,
        id: 6,
      },
      {
        title: "Authorization to Release Health Records to USONV",
        buttonText: "Download packet",
        linkUrl: linkUrl7,
        id: 7,
      },
    ],
  }

  render() {
    return (
      <div className="container gallery-container">
        <div className="row">
          {this.state.sections.map(({ id, ...sectionProps }) => (
            <DocumentGalleryItemComponent key={id} {...sectionProps} />
          ))}
        </div>
      </div>
    )
  }
}

export default DocumentGalleryComponent
