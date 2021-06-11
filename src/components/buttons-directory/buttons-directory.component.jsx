import React from "react"
import "./buttons-directory.styles.scss"
import ButtonComponent from "../buttons/button.component"

const ButtonsDirectoryComponent = ({ buttons }) => {
  console.log(buttons)
  return (
    <div className="row border-bottom border-top buttons-component">
      <div className="col-9 text-center">
        {buttons.map(({ id, ...otherSectionProps }) => (
          <ButtonComponent key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
  )
}

export default ButtonsDirectoryComponent
