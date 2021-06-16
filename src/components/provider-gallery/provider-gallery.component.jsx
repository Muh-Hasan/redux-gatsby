import React from "react"
import ProviderThumbnail from "./provider-thumbnail/provider-thumbnail.component"
import "./provider-gallery.styles.scss"
import { useSelector } from "react-redux"
import { selectProviderSections } from "../../redux/provider/provider.selectors"

const ProviderGallery = () => {
  const sections = useSelector(selectProviderSections)

  return (
    <div>
      <div className="row gallery-row">
        {sections?.map(({ id, ...otherSectionProps }) => (
          <ProviderThumbnail key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
  )
}

export default ProviderGallery
