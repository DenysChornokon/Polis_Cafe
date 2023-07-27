import React from 'react'
import './Contacts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contacts() {
  return (
      <section className="contact" id='contacts'>
          <h2>Контакти</h2>
          <div className="contactContainer">
              <FontAwesomeIcon className='icon' icon={faLocationDot} area-hidden='true' />
              <p>Біла Церква, бульв. Олександрійський, 107</p>
          </div>
          <div className="contactContainer">
              <FontAwesomeIcon className='icon' icon={faPhone} area-hidden='true' />
              <p>(+38) 050 837 20 31</p>
          </div>
          <div className="contactContainer">
              <FontAwesomeIcon className='icon' icon={faEnvelope} area-hidden='true' />
              <p>julia_polis@ukr.net</p>
          </div>
      </section>
  )
}

export default Contacts
