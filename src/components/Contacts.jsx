import React from 'react'
import './Contacts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'


function Contacts() {
    return (
        <section className="contacts" id='contacts'>
            <div className="flex">
                <div className="links">
                    <div className="linksContent">
                        <h2>«Поліс»</h2>
                        <p>Ми пропонуємо домашні страви – не вдома, без клопоту,
                            тільки з свіжих та якісних продуктів, з посмішкою та позитивною енергетикою.
                        </p>
                    </div>

                    <ul className="socialMedias">
                        <li>
                            <a href="#" className="instagram">
                                <FontAwesomeIcon className='fa-instagram icon' icon={faInstagram} />
                            </a>

                        </li>
                        <li>
                            <a href="#" className="facebook">
                                <FontAwesomeIcon className='fa-fecebook icon' icon={faFacebook} />
                            </a>

                        </li>
                        <li>
                            <a href="#" className="telegram">
                                <FontAwesomeIcon className='fa-telegram icon' icon={faTelegram} />
                            </a>

                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>Контакти</h2>
                    <div className="contactContainer">
                        <FontAwesomeIcon icon={faLocationDot} area-hidden='true' />
                        <p>Біла Церква, бульвар Олександрійський, 107</p>
                    </div>
                    <div className="contactContainer">
                        <FontAwesomeIcon icon={faPhone} area-hidden='true' />
                        <p>(+38) 050 837 20 31</p>
                    </div>
                    <div className="contactContainer">
                        <FontAwesomeIcon icon={faEnvelope} area-hidden='true' />
                        <p>julia_polis@ukr.net</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
