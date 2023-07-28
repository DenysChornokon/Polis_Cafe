import React from 'react'
import { useState, useEffect } from 'react'
import './Menu.css'
import menuData from '../data/menu.json'
import ImageExample from '../assets/menu-example.jpg'

function Menu() {

    const [longInfoHeight, setLongInfoHeight] = useState(0);
    const [shortInfoHeight, setShortInfoHeight] = useState('auto');

    function toggleLongShort() {
        longInfoHeight == 0 ? setLongInfoHeight('auto')
            : setLongInfoHeight(0);

        shortInfoHeight == 'auto' ? setShortInfoHeight(0)
            : setShortInfoHeight('auto');
    }


    return (
        <section className="menu" id='menu'>
            <h2 className="menuHeading">Меню</h2>

            <h2 className="menuSection">Салати</h2>
            <img src="" alt="" />
            <h2 className="menuSection">Супи</h2>
            <h2 className="menuSection">Основні страви</h2>
            <h2 className="menuSection">Домашня кухня</h2>
            <h2 className="menuSection">Сніданки</h2>

            <div className="menuSectionContainer salads">

                {menuData.salaty && Object.keys(menuData.salaty).map((key) => (
                    <div key={key} className='menuItem'>

                        <div className="highlight">
                            <div className="imageContainer" onClick={() =>  {toggleLongShort()}  }>

                                <img className='meal-image' src={ImageExample} alt='blin, ne gruze cartynku :(' />
                                <div className="short-info" style={{ height: shortInfoHeight }}>

                                    <h2>{menuData.salaty[key].name}</h2>
                                    <span>{menuData.salaty[key].price}грн / {menuData.salaty[key].weight}г</span>

                                </div>

                                <div className="long-info" style={{ height: longInfoHeight }}>

                                    <h2>{menuData.salaty[key].name}</h2>
                                    <p>Вага: {menuData.salaty[key].weight}г.</p>
                                    <p>Ціна: {menuData.salaty[key].price}грн.</p>
                                    <p>{menuData.salaty[key].sklad}</p>

                                </div>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Menu
