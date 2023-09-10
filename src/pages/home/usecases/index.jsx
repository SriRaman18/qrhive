import React from 'react'
import usecasedata from '../../../usecasedata'
import Usecase from '../../../components/basic/usecase'

const Usecases = () => {
  return (
    <div className="usecases-section">
      <h2>Use cases of QRhive</h2>
      <div className="usecases">
        {usecasedata.map((usecase) => {
          return (
            <Usecase
              key={usecase.id}
              title={usecase.title}
              content={usecase.content}
              image={usecase.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Usecases
