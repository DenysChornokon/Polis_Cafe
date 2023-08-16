import { useState, useEffect } from 'react'
import './HeaderDesktop.css'
import Navigation from './Navigation'
import Logo from '../assets/images/logo_white.png'

function HeaderDesktop({ bgScrollColor}) {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [bg, setBg] = useState("transparent");

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 0) {
            setBg(bgScrollColor);
        } else {
            setBg('transparent');
        }
    }, [scrollPosition]);


    return (
        <header className="desktop" style={{backgroundColor: bg}}>
            <div className="width-container">
                <div className="logo-container">
                    <a href="#" className="logo">
                        <img id='logo' src={Logo} alt="logo" />
                    </a>
                </div>
                <Navigation />
            </div>
        </header>
    )
}

export default HeaderDesktop
