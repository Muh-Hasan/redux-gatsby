import image1 from "../../img/home-5.png"
import image2 from "../../img/Home7.png"
import image3 from "../../img/home-6.png"
import image4 from "../../img/home-10.png"

const HOMEPAGE_GALLERY_DATA = {
  sections: [
    {
      title: "Importance of Prostate Cancer Screening",
      imageUrl: image1,
      bodyCopy:
        "When caught early, prostate cancer is treatable. Men, when you reach age 50 it's time to talk to your doctor about a PSA screening.",
      linkUrl: "/articles/the-importance-of-prostate-cancer-screening",
      id: 1,
    },
    {
      title: "Kidney Stones and Desert Climate",
      imageUrl: image2,
      bodyCopy:
        "Hydration is key for prevention. Find out if you have any other risk factors for kidney stones.",
      linkUrl: "/articles/kidney-stones-and-desert-climate",
      id: 2,
    },
    {
      title: "Bladder Issues and the Importance of Seeing a Urologist",
      imageUrl: image3,
      bodyCopy:
        "Going to the bathroom more than eight times in 24 hours is considered frequent. If this is an issue you are dealing with, there are treatment options.",
      linkUrl:
        "/articles/bladder-issues-and-the-importance-of-seeing-a-urologist",
      id: 3,
    },
    {
      title: "Need to contact us?",
      imageUrl: image4,
      bodyCopy: "Call us at 1-702-877-0814",
      bodyCopy2: "Monday - Friday: 8 a.m. to 5 p.m.",
      linkUrl: "tel:+17028770814",
      buttonText: "Call us now",
      specialButton: true,
      id: 4,
    },
  ],
}

export default HOMEPAGE_GALLERY_DATA
