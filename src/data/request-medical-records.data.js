import innerImage1 from "../img/medical-records-large-2.png"
import innerImage2 from "../img/medical-records-large.png"

const MEDICAL_RECORDS_DATA = {
  imageWithParagraphs: [
    {
      htmlCopy1: `<h4>Here’s what you need to know about gaining access to your protected health information 
                        (PHI).</h4><p><b>Request form for your medical records</b></p><p>For information or help with 
                        your request for your Urology Specialists of Nevada records, please call 
                        <a href="tel:1-702-560-2880" style="white-space: nowrap;">1-702-560-2880</a>.</p><p>For 
                        information or help with your request for your Urology Specialists of Nevada records, please 
                        call <a href="tel:1-702-560-2880" style="white-space: nowrap;">1-702-560-2880</a>.</p>`,
      sectionId1: "what-you-need-to-know",
      htmlCopy2:
        "<h4>To get a copy of your Urology Specialists of Nevada records:</h4><a class='no-underline btn' href='../assets/img/documents/Auth_to_release_health_rec_to_patient1.pdf' target='_blank'>Request for medical records</a>",
      htmlCopy3:
        "<h4>To get a copy of your Urology Specialists of Nevada records:</h4><a class='no-underline btn' href='../assets/img/documents/SMA_PHI_FORM_OBTAIN_ENG.pdf' target='_blank'>Request for medical records</a>",
      imageUrl: innerImage1,
      id: 1,
    },
    {
      sectionHeader1: "You have rights regarding your PHI:",
      sectionCopy1: "Request form for your medical records",
      sectionId1: "what-you-need-to-know",
      sectionHeader2: "Right to inspect and copy",
      sectionCopy2:
        "You have the right to look at and receive a copy of your PHI. The PHI may be used to make decisions about you. A service fee of 60 cents per page may be charged.",
      sectionHeader3: "Right to amend",
      htmlCopy3: `<p>If you feel that the PHI we have is not right or not complete, you may ask us to fix it. Your request
                        must be made in writing. Send it to:
                    </p><br>
                    <p>Attn: Health Information Management for USONV, PO Box 15645 Las Vegas, NV 89114-5645
                    </p><br>
                    <p><b>We may deny your request if the information:</b></p>
                    <ul>
                        <li>you ask us to fix is not part of your PHI that we maintain</li>
                        <li>was not created by us</li>
                        <li>is not part of the information that you are permitted to inspect or copy
                        </li>
                        <li>is correct and complete</li>
                    </ul>
                    <br>
                    <p>You will be provided a copy of the final decision.</p>`,
      sectionId3: "right-to-amend",
      imageUrl: innerImage2,
      id: 2,
    },
    {
      sectionHeader1: "Right to an accounting of disclosures",
      sectionCopy1:
        "You have the right to ask for an “accounting of disclosures.” This lists any time we have disclosed your PHI for any purpose other than treatment, payment, health care operations or other purposes under the Federal Privacy Law. We have 60 days to respond to your written request. We may take an additional 30 days in certain circumstances. In these cases, you will be notified of the delay before the 60 days has passed. To ask for an accounting of disclosures, make your request in writing to the Health Information Management department at the address above.",
      sectionId1: "right-to-an-accounting-of-disclosures",
      sectionHeader2: "Right to request restriction",
      sectionCopy2: `You have the right to ask for a restriction or limitation on the PHI we use or disclose about you for treatment, payment or health care operations. You also have the right to request a limit on the PHI we disclose about you to someone involved in your care or the payment for your care. This could be a family member or friend. For example, you could ask that we not use or disclose information about a surgery you had. Southwest Medical is not required to agree to your request, though we will attempt to if possible.`,
      sectionId2: "right-to-request-restriction",
      sectionHeader3: "Right to request confidential communications",
      sectionCopy3:
        "You have the right to request that our communications with you about your PHI be carried out in a certain way or at a certain location. For example, you may ask that we contact you only at work.",
      sectionId3: "right-to-request-confidential-communications",
      imageUrl: "",
      id: 3,
    },
  ],
  buttons: [
    {
      id: 1,
      buttonCopy: "What you need to know",
      buttonLink: "#what-you-need-to-know",
    },
    {
      id: 2,
      buttonCopy: "Right to inspect and copy",
      buttonLink: "#right-to-inspect-and-copy",
    },
    {
      id: 3,
      buttonCopy: "Right to amend",
      buttonLink: "#right-to-amend",
    },
    {
      id: 4,
      buttonCopy: "Right to an accounting of disclosures",
      buttonLink: "#right-to-an-accounting-of-disclosures",
    },
    {
      id: 5,
      buttonCopy: "Right to request restriction",
      buttonLink: "#right-to-request-restriction",
    },
    {
      id: 6,
      buttonCopy: "Right to request confidential communications",
      buttonLink: "#right-to-request-confidential-communications",
    },
  ],
}

export default MEDICAL_RECORDS_DATA
