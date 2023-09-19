import React from 'react'
import './whyqrhive.css'

import { ArrowRight, Scanning } from '../../../assets'

import Button from '../../../components/basic/button/button'

function Whyqrhive() {
  return (
    <div className="why-qrhive" id='why-qrhive'>
      <div className="why-qrhive-pic">
        <Scanning className="why-qrhive-svg"/>
      </div>
      <div className="why-qrhive-texts">
        <h2 className="why-qrhive-heading">Why QRhive</h2>
        <p className="why-qrhive-text">
          QRhive empowers you to conveniently generate online QR codes for a
          range of content, connecting videos, campaigns, landing pages, PDFs,
          menus, apps, portfolios, and electronic versions of your flyers or
          brochures. Additionally, you can craft custom forms, outlining a
          variety of fields to gather different types of data. Effortlessly
          distribute documents, links, videos, images, or facilitate immediate
          WhatsApp interactions with your target audience.
        </p>
        <Button btnText={'Know More'} icon={ArrowRight} />
      </div>
    </div>
  )
}

export default Whyqrhive
