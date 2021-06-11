import innerImage1 from "../img/new-patient-1.png"
import newPatientPacket from "../img/documents/PD2576_16389-USONV-New-Patient-Packet_081519_V5d_test.pdf"

const NEW_PATIENT_INFO_DATA = {
  imageWithParagraphs: [
    {
      sectionHeader1: "Registration",
      htmlCopy1:
        `<b>To get you registered as a patient, here is a checklist to follow:</b>
            <ul>
                <li>Fill out the New patient registration forms prior to your first appointment</li>
                <li>Arrive 60 minutes prior to the start time of your appointment If you have any information, such as lab results, X-rays, or anything pertinent to your condition, please bring that with you. Failure to bring necessary documents may result in your appointment being canceled or rescheduled.</li>
                <li>Please provide any information regarding your medical insurance benefits</li>
                <a class="no-underline btn" href="` +
        newPatientPacket +
        `"target="
                              _blank">Adult Patient Packet</a>
            </ul>`,
      sectionId1: "registration",
      sectionHeader2: "What to bring",
      sectionCopy2: "",
      htmlCopy2: `<p><b>Please bring the following to your appointment/scheduling:</b></p>
                    <ul>
                        <li>Your insurance card(s)</li>
                        <li>Valid photo ID</li>
                        <li>Any recent radiology films</li>
                        <li>New patient registration forms</li>
                    </ul>`,
      sectionId2: "what-to-bring",
      sectionHeader3: "Right to request confidential communications",
      sectionCopy3:
        "You have the right to request that our communications with you about your PHI be carried out in a certain way or at a certain location. For example, you may ask that we contact you only at work.",
      sectionId3: "prescription-refill-requests",
      imageUrl: innerImage1,
      id: 1,
    },
    {
      sectionHeader1: "Prescription refill requests",
      htmlCopy1:
        "<p>Please have your pharmacy fax a request to 1-702-877-0351.</p><p>Please allow two business days for your request to be completed. All prescription refill requests are processed during normal business hours. Physicians do not refill medications after hours, on weekends or on holidays.</p>",
      sectionId1: "prescription-refill-requests",
      sectionHeader2: "Referrals",
      htmlCopy2: "",
      sectionCopy2:
        "Many patients are sent to us by referral from their family physician for specialty care. If you were referred to our office, please make this fact known so that we may share our findings with your personal physician.",
      sectionId2: "referrals",
      sectionHeader3: "Hospitalization",
      sectionCopy3:
        "If you require hospitalization, our office will make arrangements for your admission. Any business matters regarding the payment of the hospital account are customarily discussed with the Hospital Admitting Office at the time of the admission. Our office and the hospitals are separate business organizations, and bills for each will be submitted separately. Our office bill will include medical care administered by our physicians during your hospital stay.",
      sectionId3: "hospitalization",
      imageUrl: "",
      id: 2,
    },
  ],
  buttons: [
    {
      id: 1,
      buttonCopy: "Registration",
      buttonLink: "#registration",
    },
    {
      id: 2,
      buttonCopy: "What to bring",
      buttonLink: "#what-to-bring",
    },
    {
      id: 3,
      buttonCopy: "Prescription refill requests",
      buttonLink: "#prescription-refill-requests",
    },
    {
      id: 4,
      buttonCopy: "Referrals",
      buttonLink: "#referrals",
    },
    {
      id: 5,
      buttonCopy: "Hospitalization",
      buttonLink: "#hospitalization",
    },
  ],
}

export default NEW_PATIENT_INFO_DATA
