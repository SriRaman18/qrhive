import React from 'react'
import './shopping.css'
import Usecasestemplate from '../../../components/basic/usecasestemplate'
import usecasepagesdata from '../../../usecasepagesdata'
import Usecases from '../../home/usecases'
import Getstarted from '../../../components/basic/getstarted'
import Footer from '../../../components/basic/footer'
import Navbar from '../../../components/basic/navbar'
function Shopping() {
  console.log('usecasepagesdata[0].pic0', usecasepagesdata[0].pic)
  return (
    <div className="shopping">
      <Navbar highlightButton={'usecase'} />

      <Usecasestemplate
        key={usecasepagesdata[0].id}
        headTitle={usecasepagesdata[0].headerTitle}
        headText={usecasepagesdata[0].headerText}
        bodyTitleOne={usecasepagesdata[0].bodyTitleOne}
        bodyTextOne={usecasepagesdata[0].bodyTextOne}
        bodyTitleTwo={usecasepagesdata[0].bodyTitleTwo}
        bodyTextTwo={usecasepagesdata[0].bodyTextTwo}
        bodyTitleThree={usecasepagesdata[0].bodyTitleThree}
        bodyTextThree={usecasepagesdata[0].bodyTextThree}
        pic={usecasepagesdata[0].pic}
        icon={usecasepagesdata[0].icon}
      />
      <Usecases />
      <Getstarted />
      <Footer />
    </div>
  )
}

export default Shopping
