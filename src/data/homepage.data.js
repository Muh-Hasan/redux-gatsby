import image1 from "../img/home-5.png"
import image2 from "../img/Home7.png"
import image3 from "../img/home-6.png"
import image4 from "../img/home-10.png"

const HOMEPAGE_DATA = {
  interiorSections: [
    {
      title: "About us",
      bodyCopy:
        "Urology Specialists of Nevada (USONV) was founded in 1996 by Dr. Robert McBeath, a lifelong Nevada resident and second-generation physician. His goal was to create the highest-quality and most technologically advanced urology practice in the Las Vegas valley. Today, USONV is one of the largest urology practices in Southern Nevada.",
      imageUrl: image1,
      id: 1,
    },
    {
      bodyCopy:
        "We are dedicated to continuously offering the most advanced surgical procedures and technology. USONV continues to use the latest in diagnostic and treatment options for urologic conditions.",
      imageUrl: image2,
      imageLeft: true,
      id: 2,
    },
    {
      bodyCopy:
        "Our innovative technology and ongoing commitment to implement best practices in urologic care make USONV the preferred choice for patients in Southern Nevada, Northern Arizona and California.",
      imageUrl: image3,
      id: 3,
    },
    {
      htmlCopy: `In 2012, radiation oncologist Dr. Michael Becker joined to form Nevada Cancer Specialists. Urology and oncology are complementary specialties. With Dr. Becker’s leadership, we are able to deliver unparalleled continuity of care to our patients who require both.
                       <br><br>Our innovative technology and ongoing commitment to implement best practices in urologic care make USONV the preferred choice for patients in Southern Nevada, Northern Arizona and California.
                       `,
      imageUrl: image4,
      imageLeft: true,
      id: 4,
    },
  ],
}

export default HOMEPAGE_DATA
