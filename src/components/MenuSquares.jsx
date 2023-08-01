import React from 'react'
import './MenuSquares.css'
import TestImg from '../assets/mint.jpg'

function MenuSquares() {
    return (
        <div className='menu-squares-container'>
            <div className="card one">
                <div className="card-details">
                    <p className="text-title">Menu</p>
                    <p className="text-body">Here are the details of the card</p>
                </div>
                <button className="card-button">Перейти</button>
            </div>
            <div className="card two">
                <div className="card-details">
                    <p className="text-title">Drinks</p>
                    <p className="text-body">Here are the details of the card</p>
                </div>
                <button className="card-button">Перейти</button>
            </div>
            <div className="card three">
                <div className="card-details">
                    <p className="text-title">Reservation</p>
                    <p className="text-body">Here are the details of the card</p>
                </div>
                <button className="card-button">Перейти</button>
            </div>
            
        </div>
    )
}

export default MenuSquares
