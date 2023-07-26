import React, { useState, useEffect } from 'react';
import './Navigation.css'

function Navigation({ bgScrollColor, iconDefaultColor, iconScrollColor }) {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [bg, setBg] = useState("transparent");
    const [item, setItem] = useState(iconDefaultColor);


    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return (() => {
            window.removeEventListener('scroll', handleScroll);
        })
    }, []);

    useEffect(() => {
        if (scrollPosition > 0) {
            setBg(bgScrollColor);
            setItem(iconScrollColor);
        } else {
            setBg('transparent');
            setItem(iconDefaultColor);
        }
    }, [scrollPosition]);

  return (
    <section className="navigation" style={{backgroundColor: bg}}>
        <ul className="navContainer">
            <li className="navItem"><a style={{ color: item }} href="#" className="i">item</a></li>
            <li className="navItem"><a style={{ color: item }} href="#" className="i">item</a></li>
            <li className="navItem"><a style={{ color: item }} href="#" className="i">item</a></li>
            <li className="navItem"><a style={{ color: item }} href="#" className="i">item</a></li>
            <li className="navItem"><a style={{ color: item }} href="#" className="i">item</a></li>
        </ul>
    </section>
  )
}

export default Navigation
