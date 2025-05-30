import React from 'react'

import '../css/drawer-toggle-button.css'

const drawToggleButton = (props) => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
)

export default drawToggleButton
