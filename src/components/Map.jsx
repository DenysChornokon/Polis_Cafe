import React from 'react'
import './Map.css'

function Map() {
  return (
    <div className='map-container'>
      <iframe id='map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1287.410341614253!2d30.098980374685638!3d49.808238765603086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d34231bc4914c5%3A0xc402012f05dc1b8a!2z0JrRg9C70ZbQvdCw0YDQvdC40Lkg0JTRltC8INCf0L7Qu9GW0YE!5e0!3m2!1suk!2sua!4v1691678190493!5m2!1suk!2sua"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map
