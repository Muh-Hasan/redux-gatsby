import navLogo from "../../img/standard/logo.svg"

const NAVIGATION_DATA = {
  navLogo: navLogo,
  homeUrl: "/",
  linkItems: [
    {
      id: 1,
      name: "Services",
      link: "#",
      children: [
        {
          name: "Men's Health",
          link: "/services/mens-health",
        },
        {
          name: "Women's Health",
          link: "/services/womens-health",
        },
        {
          name: "Cancer Care",
          link: "/services/cancer-care",
        },
      ],
    },
    {
      id: 2,
      name: "Locations",
      link: "/locations",
      children: [],
    },
    {
      id: 3,
      name: "Providers",
      link: "/providers",
      children: [],
    },
    {
      id: 4,
      name: "Patient Resources",
      link: "#",
      children: [
        {
          name: "New patient information",
          link: "/patient-resources/new-patient-information",
        },
        {
          name: "Procedure consent forms",
          link: "/patient-resources/procedure-consent-forms",
        },
        {
          name: "How to pay your bill",
          link: "/patient-resources/how-to-pay-your-bill",
        },
        {
          name: "Request your medical records",
          link: "/patient-resources/request-your-medical-records",
        },
      ],
    },
  ],
  rightHtml: ``,
}

export default NAVIGATION_DATA
