import React from "react"
//import {render} from "@testing-library/react";

const ButtonComponent = ({ id, buttonCopy, buttonLink }) => {
  return (
    <a
      key={id}
      className="no-underline btn"
      href={`${buttonLink}`}
      target="_self"
    >
      {buttonCopy}
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </a>
  )
}

export default ButtonComponent
