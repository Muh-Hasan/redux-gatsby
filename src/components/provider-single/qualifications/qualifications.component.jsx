import React from "react"

const QualificationsComponent = ({ qualifications, key }) => (
  <>
    <div className="row gallery-row">
      <h3>Qualifications</h3>
      {qualifications.map(function (i) {
        return <li>{qualifications["name"]}</li>
      })}
    </div>
  </>
)

export default QualificationsComponent
