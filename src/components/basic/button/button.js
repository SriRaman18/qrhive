import React from 'react'
import './button.css'

const Button = ({ btnText, icon }) => {
  return (
    <div className="button">
      <p className="btnText"> {btnText} </p>

      {icon ? <img src={icon} className="btn-icon" /> : ''}
    </div>
  )
}

export default Button
