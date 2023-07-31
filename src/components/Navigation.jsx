import React, { useState, useEffect } from 'react';
import './Navigation.css'

function Navigation({ scrollPosition, bgScrollColor, iconDefaultColor, iconScrollColor }) {

    const [bg, setBg] = useState("transparent");
    const [iconColor, setIconColor] = useState(iconDefaultColor);




    useEffect(() => {
        if (scrollPosition > 0) {
            setBg(bgScrollColor);
            setIconColor(iconScrollColor);
        } else {
            setBg('transparent');
            setIconColor(iconDefaultColor);
        }
    }, [scrollPosition]);

  return (
    <section className="navigation-mobile" style={{backgroundColor: bg}}>
        <ul className="navContainer">
            <li className="navItem"><a style={{ color: iconColor }} href="#" className="i">Головна</a></li>
            <li className="navItem"><a style={{ color: iconColor }} href="#about" className="i">Про Нас</a></li>
            <li className="navItem"><a style={{ color: iconColor }} href="#menu" className="i">Меню</a></li>
            <li className="navItem"><a style={{ color: iconColor }} href="#contacts" className="i">Контакти</a></li>
        </ul>
    </section>
  )
}

export default Navigation
