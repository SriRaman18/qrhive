import React from 'react'

const Usecase = ({ title, content, image }) => {
  console.log(image)
  return (
    <div className="usecase">
      <div className="usecase-texts">
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
      {image}
    </div>
  )
}

export default Usecase
