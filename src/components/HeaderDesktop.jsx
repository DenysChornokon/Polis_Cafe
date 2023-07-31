import React from 'react'
import './HeaderDesktop.css'
import Navigation from './Navigation'

function HeaderDesktop() {
    return (
        <header className="desktop">
            <div className="logo-container">
                <a href="#" className="logo">
                    Polis
                </a>
            </div>

            <Navigation />
        </header>
    )
}

export default HeaderDesktop
