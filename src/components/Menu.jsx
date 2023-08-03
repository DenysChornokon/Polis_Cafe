import React, { useState } from 'react';
import './Menu.css';
import menuData from '../data/menu.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import ImageExample from '../assets/images/Картопля по-селянські.jpg';
function Menu() {
    const [selectedItems, setSelectedItems] = useState({});
    const [showSalads, setShowSalads] = useState(false);
    const [showZacusky, setShowZacusky] = useState(false);
    const [showOsnovni_stravy, setShowOsnovni_stravy] = useState(false);
    const [showSupy, setShowSupy] = useState(false);
    const [showDomashnia_kukhnia, setShowDomashnia_kukhnia] = useState(false);
    const [showGarniry, setShowGarniry] = useState(false);
    const [showPizza_and_burgers, setShowPizza_and_burgers] = useState(false);
    const [showStravy_na_kompaniyu, setShowStravy_na_kompaniyu] = useState(false);

    function toggleLongShort(key) {
        setSelectedItems(prevState => ({ ...prevState, [key]: !prevState[key] }));
    }
    return (
        <div className="menu-bg-container">
            <section className="menu" id="menu">
                <h2 className="menuHeading">Меню</h2>
                <h2 className="menuSection" id='salads' onClick={() => setShowSalads(!showSalads)}>Салати</h2>
                {showSalads && (
                    <div className="menuSectionContainer salads">
                        {menuData.salaty && Object.keys(menuData.salaty).map((key) => (
                            <div key={key} className="menuItem">
                                <div className="highlight">
                                    <div
                                        className="imageContainer"
                                        onClick={() => toggleLongShort(key)}
                                    >
                                        <img
                                            className="meal-image"
                                            src={ImageExample}
                                            alt="blin, ne gruze cartynku :("
                                        />
                                        <div className={`short-info ${!selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.salaty[key].name}</h2>
                                            <span>{menuData.salaty[key].price}грн / {menuData.salaty[key].weight}г</span>
                                        </div>
                                        <div className={`long-info ${selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.salaty[key].name}</h2>
                                            <p>Вага: {menuData.salaty[key].weight}г.</p>
                                            <p>Ціна: {menuData.salaty[key].price}грн.</p>
                                            <p>{menuData.salaty[key].sklad}</p>
                                        </div>
            
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="iconContainer">
                            <a href='#salads'>
                                <FontAwesomeIcon className='icon' icon={faCircleUp} />
                            </a>
                        </div>
                    </div>
                )}
            
                <h2 className="menuSection" id='zacusky' onClick={() => setShowZacusky(!showZacusky)}>Закуски</h2>
                {showZacusky && (
                    <div className="menuSectionContainer zacusky">
                        {menuData.zacusky && Object.keys(menuData.zacusky).map((key) => (
                            <div key={key} className="menuItem">
                                <div className="highlight">
                                    <div
                                        className="imageContainer"
                                        onClick={() => toggleLongShort(key)}
                                    >
                                        <img
                                            className="meal-image"
                                            src={ImageExample}
                                            alt="blin, ne gruze cartynku :("
                                        />
                                        <div className={`short-info ${!selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.zacusky[key].name}</h2>
                                            <span>{menuData.zacusky[key].price}грн / {menuData.zacusky[key].weight}г</span>
                                        </div>
                                        <div className={`long-info ${selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.zacusky[key].name}</h2>
                                            <p>Вага: {menuData.zacusky[key].weight}г.</p>
                                            <p>Ціна: {menuData.zacusky[key].price}грн.</p>
                                            <p>{menuData.zacusky[key].sklad}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="iconContainer">
                            <a href='#zacusky'>
                                <FontAwesomeIcon className='icon' icon={faCircleUp} />
                            </a>
                        </div>
                    </div>
                )}
                <h2 className="menuSection" id='os' onClick={() => setShowOsnovni_stravy(!showOsnovni_stravy)}>Основні страви</h2>
                {showOsnovni_stravy && (
                    <div className="menuSectionContainer zacusky">
                        {menuData.osnovni_stravy && Object.keys(menuData.osnovni_stravy).map((key) => (
                            <div key={key} className="menuItem">
                                <div className="highlight">
                                    <div
                                        className="imageContainer"
                                        onClick={() => toggleLongShort(key)}
                                    >
                                        <img
                                            className="meal-image"
                                            src={ImageExample}
                                            alt="blin, ne gruze cartynku :("
                                        />
                                        <div className={`short-info ${!selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.osnovni_stravy[key].name}</h2>
                                            <span>{menuData.osnovni_stravy[key].price}грн / {menuData.osnovni_stravy[key].weight}г</span>
                                        </div>
                                        <div className={`long-info ${selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.osnovni_stravy[key].name}</h2>
                                            <p>Вага: {menuData.osnovni_stravy[key].weight}г.</p>
                                            <p>Ціна: {menuData.osnovni_stravy[key].price}грн.</p>
                                            <p>{menuData.osnovni_stravy[key].sklad}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="iconContainer">
                            <a href='#os'>
                                <FontAwesomeIcon className='icon' icon={faCircleUp} />
                            </a>
                        </div>
                    </div>
                )}
                <h2 className="menuSection" id='soups' onClick={() => setShowSupy(!showSupy)}>Супи</h2>
                {showSupy && (
                    <div className="menuSectionContainer zacusky">
                        {menuData.supy && Object.keys(menuData.supy).map((key) => (
                            <div key={key} className="menuItem">
                                <div className="highlight">
                                    <div
                                        className="imageContainer"
                                        onClick={() => toggleLongShort(key)}
                                    >
                                        <img
                                            className="meal-image"
                                            src={ImageExample}
                                            alt="blin, ne gruze cartynku :("
                                        />
                                        <div className={`short-info ${!selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.supy[key].name}</h2>
                                            <span>{menuData.supy[key].price}грн / {menuData.supy[key].weight}г</span>
                                        </div>
                                        <div className={`long-info ${selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.supy[key].name}</h2>
                                            <p>Вага: {menuData.supy[key].weight}г.</p>
                                            <p>Ціна: {menuData.supy[key].price}грн.</p>
                                            <p>{menuData.supy[key].sklad}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="iconContainer">
                            <a href='#soups'>
                                <FontAwesomeIcon className='icon' icon={faCircleUp} />
                            </a>
                        </div>
                    </div>
                )}
                <h2 className="menuSection" id='dk' onClick={() => setShowDomashnia_kukhnia(!showDomashnia_kukhnia)}>Домашня кухня</h2>
                {showDomashnia_kukhnia && (
                    <div className="menuSectionContainer zacusky">
                        {menuData.domashnia_kukhnia && Object.keys(menuData.domashnia_kukhnia).map((key) => (
                            <div key={key} className="menuItem">
                                <div className="highlight">
                                    <div
                                        className="imageContainer"
                                        onClick={() => toggleLongShort(key)}
                                    >
                                        <img
                                            className="meal-image"
                                            src={ImageExample}
                                            alt="blin, ne gruze cartynku :("
                                        />
                                        <div className={`short-info ${!selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.domashnia_kukhnia[key].name}</h2>
                                            <span>{menuData.domashnia_kukhnia[key].price}грн / {menuData.domashnia_kukhnia[key].weight}г</span>
                                        </div>
                                        <div className={`long-info ${selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.domashnia_kukhnia[key].name}</h2>
                                            <p>Вага: {menuData.domashnia_kukhnia[key].weight}г.</p>
                                            <p>Ціна: {menuData.domashnia_kukhnia[key].price}грн.</p>
                                            <p>{menuData.domashnia_kukhnia[key].sklad}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="iconContainer">
                            <a href='#dk'>
                                <FontAwesomeIcon className='icon' icon={faCircleUp} />
                            </a>
                        </div>
                    </div>
                )}
                <h2 className="menuSection" id='garniry' onClick={() => setShowGarniry(!showGarniry)}>Гарніри</h2>
                {showGarniry && (
                    <div className="menuSectionContainer garniry">
                        {menuData.garniry && Object.keys(menuData.garniry).map((key) => (
                            <div key={key} className="menuItem">
                                <div className="highlight">
                                    <div
                                        className="imageContainer"
                                        onClick={() => toggleLongShort(key)}
                                    >
                                        <img
                                            className="meal-image"
                                            src={ImageExample}
                                            alt="blin, ne gruze cartynku :("
                                        />
                                        <div className={`short-info ${!selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.garniry[key].name}</h2>
                                            <span>{menuData.garniry[key].price}грн / {menuData.garniry[key].weight}г</span>
                                        </div>
                                        <div className={`long-info ${selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.garniry[key].name}</h2>
                                            <p>Вага: {menuData.garniry[key].weight}г.</p>
                                            <p>Ціна: {menuData.garniry[key].price}грн.</p>
                                            <p>{menuData.garniry[key].sklad}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="iconContainer">
                            <a href='#garniry'>
                                <FontAwesomeIcon className='icon' icon={faCircleUp} />
                            </a>
                        </div>
                    </div>
                )}
                <h2 className="menuSection" id='p/b' onClick={() => setShowPizza_and_burgers(!showPizza_and_burgers)}>Піца & Бургери</h2>
                {showPizza_and_burgers && (
                    <div className="menuSectionContainer pizza_and_burgers">
                        {menuData.pizza_and_burgers && Object.keys(menuData.pizza_and_burgers).map((key) => (
                            <div key={key} className="menuItem">
                                <div className="highlight">
                                    <div
                                        className="imageContainer"
                                        onClick={() => toggleLongShort(key)}
                                    >
                                        <img
                                            className="meal-image"
                                            src={ImageExample}
                                            alt="blin, ne gruze cartynku :("
                                        />
                                        <div className={`short-info ${!selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.pizza_and_burgers[key].name}</h2>
                                            <span>{menuData.pizza_and_burgers[key].price}грн / {menuData.pizza_and_burgers[key].weight}г</span>
                                        </div>
                                        <div className={`long-info ${selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.pizza_and_burgers[key].name}</h2>
                                            <p>Вага: {menuData.pizza_and_burgers[key].weight}г.</p>
                                            <p>Ціна: {menuData.pizza_and_burgers[key].price}грн.</p>
                                            <p>{menuData.pizza_and_burgers[key].sklad}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="iconContainer">
                            <a href='#p/b'>
                                <FontAwesomeIcon className='icon' icon={faCircleUp} />
                            </a>
                        </div>
                    </div>
                )}
                <h2 className="menuSection" id='snc' onClick={() => setShowStravy_na_kompaniyu(!showStravy_na_kompaniyu)}>Страви на компанію</h2>
                {showStravy_na_kompaniyu && (
                    <div className="menuSectionContainer stravy_na_kompaniyu">
                        {menuData.stravy_na_kompaniyu && Object.keys(menuData.stravy_na_kompaniyu).map((key) => (
                            <div key={key} className="menuItem">
                                <div className="highlight">
                                    <div
                                        className="imageContainer"
                                        onClick={() => toggleLongShort(key)}
                                    >
                                        <img
                                            className="meal-image"
                                            src={ImageExample}
                                            alt="blin, ne gruze cartynku :("
                                        />
                                        <div className={`short-info ${!selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.stravy_na_kompaniyu[key].name}</h2>
                                            <span>{menuData.stravy_na_kompaniyu[key].price}грн / {menuData.stravy_na_kompaniyu[key].weight}г</span>
                                        </div>
                                        <div className={`long-info ${selectedItems[key] ? 'show' : ''}`}>
                                            <h2>{menuData.stravy_na_kompaniyu[key].name}</h2>
                                            <p>Вага: {menuData.stravy_na_kompaniyu[key].weight}г.</p>
                                            <p>Ціна: {menuData.stravy_na_kompaniyu[key].price}грн.</p>
                                            <p>{menuData.stravy_na_kompaniyu[key].sklad}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="iconContainer">
                            <a href='#snc'>
                                <FontAwesomeIcon className='icon' icon={faCircleUp} />
                            </a>
                        </div>
                    </div>
                )}
            </section>
            <div className="iconContainerDeskTop">
                <a href='#menu'>
                    <FontAwesomeIcon className='icon' icon={faCircleUp} />
                </a>
            </div>
        </div>
    );
}
export default Menu;