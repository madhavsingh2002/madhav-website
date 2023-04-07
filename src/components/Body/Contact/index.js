import React from 'react'
import './contact.css'
import SocialContact from '../../common/social-Contact/social'
function Contact() {
  return (
    <div className='contact'>
      <label className='section-title'>Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p className='des'>
            Want to get in touch? Contact me on any of the platform

          </p>
          <SocialContact/>
        </div>
        <div className="download">
          <a download className='down'>
            Download Resume
          </a>

        </div>
      </div>
    </div>
  )
}

export default Contact
