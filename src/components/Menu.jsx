import React, { useState } from "react";
import "./Menu.css";
import menuData from "../data/menu.json";
import napoiData from "../data/napoi.json";
import peredzamData from "../data/peredzamovlennia.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faPlus } from "@fortawesome/free-solid-svg-icons";

//* IMAGES

import Menu_1 from "../assets/images/menu_page-0001.jpg";
import Menu_2 from "../assets/images/menu_page-0002.jpg";
import Menu_3 from "../assets/images/Drinks.jpg";

//* SALADS C:/Users/Windows10/Desktop/Container/polis-react/src/assets/images/Salads/Олівє.jpg"

import "../assets/images/Salads/Олівє.jpg";
import Salads_2 from "../assets/images/Salads/Салат Цезар.jpg"
import Salads_3 from "../assets/images/Salads/Салат касабланка.jpg"
import Salads_4 from "../assets/images/Salads/Салат Італія.jpg"
import Salads_5 from "../assets/images/Salads/Салат Норвегія.jpg"
import Salads_6 from "../assets/images/Salads/Салат з грибами.jpg"
import Salads_7 from "../assets/images/Salads/Салат Буржуй.jpg"
import Salads_8 from "../assets/images/Salads/Салат Сир.jpg"
import Salads_9 from "../assets/images/Salads/Олівє.jpg"//! !!!!!!!!!!!!!!!
import Salads_10 from "../assets/images/Salads/Салат Грецький.jpg"
import Salads_11 from "../assets/images/Salads/Салат по домашньому.jpg"
import Salads_12 from "../assets/images/Salads/Салат з капусти.jpg"
import Salads_13 from "../assets/images/Salads/Олівє.jpg"
import Salads_14 from "../assets/images/Salads/Салат крабові палички.jpg"
import Salads_15 from "../assets/images/Salads/Салат Мімоза.jpg"
import Salads_16 from "../assets/images/Salads/Салат оселедець під шубою.jpg"


import ImageExample from "../assets/images/Картопля по-селянські.jpg";
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
  const [showPropozytsii_do_piva, setShowPropozytsii_do_piva] = useState(false);
  const [showDeserti, setShowDeserti] = useState(false);
  const [showSnidanky, setShowSnidanky] = useState(false);
  const [showBiznes_lanch, setShowBiznes_lanch] = useState(false);
  const [showKava, setShowKava] = useState(false);
  const [showChai, setShowChai] = useState(false);

  function toggleLongShort(key) {
    setSelectedItems((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  }

  // function togglePlus() {
  //   showKava ? setShowKava(!showKava) : setShowKava(showKava);
  // }

  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  const handleButtonClick = () => {
    isMenuDisplayed === false ? setIsMenuDisplayed(true) : setIsMenuDisplayed(false);
  };

  return (
    <div className="menu-bg-container">
      <section className="menu" id="menu">
        <h2 className="menuHeading">Меню</h2>
        <div className="stravy">
          <div className="sectionHeading">
            <h2 id="main-menu">Основне меню</h2>
            <button className="open-menu-btn" onClick={handleButtonClick}>
              Скорочене меню
            </button>
          </div>

          {/* Image Menu */}

          {isMenuDisplayed && (
            <>
              <img src={Menu_1} alt="" className="menu-photo" />
              <img src={Menu_2} alt="" className=" menu-photo" />
              <img
                src={Menu_3}
                alt=""
                className=" menu-photo menu-photo-last"
              />
            </>
          )}

          <h2
            className="menuSection"
            id="salads"
            onClick={() => setShowSalads(!showSalads)}
          >
            Салати
          </h2>
          {showSalads && (
            <div className="menuSectionContainer salads">
              {menuData.salaty &&
                Object.keys(menuData.salaty).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={menuData.salaty[key].image}
                          alt="Image"
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.salaty[key].name}</h2>
                          <span>
                            {menuData.salaty[key].price}грн /{" "}
                            {menuData.salaty[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
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
                <a href="#salads">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="zacusky"
            onClick={() => setShowZacusky(!showZacusky)}
          >
            Закуски
          </h2>
          {showZacusky && (
            <div className="menuSectionContainer zacusky">
              {menuData.zacusky &&
                Object.keys(menuData.zacusky).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt="Image"
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.zacusky[key].name}</h2>
                          <span>
                            {menuData.zacusky[key].price}грн /{" "}
                            {menuData.zacusky[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
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
                <a href="#zacusky">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="soups"
            onClick={() => setShowSupy(!showSupy)}
          >
            Супи
          </h2>
          {showSupy && (
            <div className="menuSectionContainer zacusky">
              {menuData.supy &&
                Object.keys(menuData.supy).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt="Image"
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.supy[key].name}</h2>
                          <span>
                            {menuData.supy[key].price}грн /{" "}
                            {menuData.supy[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
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
                <a href="#soups">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="os"
            onClick={() => setShowOsnovni_stravy(!showOsnovni_stravy)}
          >
            Основні страви
          </h2>
          {showOsnovni_stravy && (
            <div className="menuSectionContainer zacusky">
              {menuData.osnovni_stravy &&
                Object.keys(menuData.osnovni_stravy).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt="Image"
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.osnovni_stravy[key].name}</h2>
                          <span>
                            {menuData.osnovni_stravy[key].price}грн /{" "}
                            {menuData.osnovni_stravy[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
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
                <a href="#os">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="dk"
            onClick={() => setShowDomashnia_kukhnia(!showDomashnia_kukhnia)}
          >
            Домашня кухня
          </h2>
          {showDomashnia_kukhnia && (
            <div className="menuSectionContainer zacusky">
              {menuData.domashnia_kukhnia &&
                Object.keys(menuData.domashnia_kukhnia).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt="Image"
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.domashnia_kukhnia[key].name}</h2>
                          <span>
                            {menuData.domashnia_kukhnia[key].price}грн /{" "}
                            {menuData.domashnia_kukhnia[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.domashnia_kukhnia[key].name}</h2>
                          <p>
                            Вага: {menuData.domashnia_kukhnia[key].weight}г.
                          </p>
                          <p>
                            Ціна: {menuData.domashnia_kukhnia[key].price}грн.
                          </p>
                          <p>{menuData.domashnia_kukhnia[key].sklad}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="iconContainer">
                <a href="#dk">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="garniry"
            onClick={() => setShowGarniry(!showGarniry)}
          >
            Гарніри
          </h2>
          {showGarniry && (
            <div className="menuSectionContainer garniry">
              {menuData.garniry &&
                Object.keys(menuData.garniry).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt="Image"
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.garniry[key].name}</h2>
                          <span>
                            {menuData.garniry[key].price}грн /{" "}
                            {menuData.garniry[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
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
                <a href="#garniry">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="p/b"
            onClick={() => setShowPizza_and_burgers(!showPizza_and_burgers)}
          >
            Піца & Бургери
          </h2>
          {showPizza_and_burgers && (
            <div className="menuSectionContainer pizza_and_burgers">
              {menuData.pizza_and_burgers &&
                Object.keys(menuData.pizza_and_burgers).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt=":("
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.pizza_and_burgers[key].name}</h2>
                          <span>
                            {menuData.pizza_and_burgers[key].price}грн /{" "}
                            {menuData.pizza_and_burgers[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.pizza_and_burgers[key].name}</h2>
                          <p>
                            Вага: {menuData.pizza_and_burgers[key].weight}г.
                          </p>
                          <p>
                            Ціна: {menuData.pizza_and_burgers[key].price}грн.
                          </p>
                          <p>{menuData.pizza_and_burgers[key].sklad}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="iconContainer">
                <a href="#p/b">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="snc"
            onClick={() => setShowStravy_na_kompaniyu(!showStravy_na_kompaniyu)}
          >
            Страви на компанію
          </h2>
          {showStravy_na_kompaniyu && (
            <div className="menuSectionContainer stravy_na_kompaniyu">
              {menuData.stravy_na_kompaniyu &&
                Object.keys(menuData.stravy_na_kompaniyu).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt="Image"
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.stravy_na_kompaniyu[key].name}</h2>
                          <span>
                            {menuData.stravy_na_kompaniyu[key].price}грн /{" "}
                            {menuData.stravy_na_kompaniyu[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.stravy_na_kompaniyu[key].name}</h2>
                          <p>
                            Вага: {menuData.stravy_na_kompaniyu[key].weight}г.
                          </p>
                          <p>
                            Ціна: {menuData.stravy_na_kompaniyu[key].price}грн.
                          </p>
                          <p>{menuData.stravy_na_kompaniyu[key].sklad}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="iconContainer">
                <a href="#snc">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="pdp"
            onClick={() => setShowPropozytsii_do_piva(!showPropozytsii_do_piva)}
          >
            Пропозиції до пива
          </h2>
          {showPropozytsii_do_piva && (
            <div className="menuSectionContainer propozytsii_do_piva">
              {menuData.propozytsii_do_piva &&
                Object.keys(menuData.propozytsii_do_piva).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt=":("
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.propozytsii_do_piva[key].name}</h2>
                          <span>
                            {menuData.propozytsii_do_piva[key].price}грн /{" "}
                            {menuData.propozytsii_do_piva[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.propozytsii_do_piva[key].name}</h2>
                          <p>
                            Вага: {menuData.propozytsii_do_piva[key].weight}г.
                          </p>
                          <p>
                            Ціна: {menuData.propozytsii_do_piva[key].price}грн.
                          </p>
                          <p>{menuData.propozytsii_do_piva[key].sklad}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="iconContainer">
                <a href="#p/b">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="deserti"
            onClick={() => setShowDeserti(!showDeserti)}
          >
            Десерти
          </h2>
          {showDeserti && (
            <div className="menuSectionContainer propozytsii_do_piva">
              {menuData.deserti &&
                Object.keys(menuData.deserti).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt=":("
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.deserti[key].name}</h2>
                          <span>
                            {menuData.deserti[key].price}грн /{" "}
                            {menuData.deserti[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.deserti[key].name}</h2>
                          <p>Вага: {menuData.deserti[key].weight}г.</p>
                          <p>Ціна: {menuData.deserti[key].price}грн.</p>
                          <p>{menuData.deserti[key].sklad}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="iconContainer">
                <a href="#p/b">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="deserti"
            onClick={() => setShowSnidanky(!showSnidanky)}
          >
            Сніданки
          </h2>
          {showSnidanky && (
            <div className="menuSectionContainer snidanky">
              {menuData.snidanky &&
                Object.keys(menuData.snidanky).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt=":("
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.snidanky[key].name}</h2>
                          <span>
                            {menuData.snidanky[key].price}грн /{" "}
                            {menuData.snidanky[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.snidanky[key].name}</h2>
                          <p>Вага: {menuData.snidanky[key].weight}г.</p>
                          <p>Ціна: {menuData.snidanky[key].price}грн.</p>
                          <p>{menuData.snidanky[key].sklad}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="iconContainer">
                <a href="#p/b">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
          <h2
            className="menuSection"
            id="deserti"
            onClick={() => setShowBiznes_lanch(!showBiznes_lanch)}
          >
            Бізнес-ланч
          </h2>
          {showBiznes_lanch && (
            <div className="menuSectionContainer Biznes_lanch">
              {menuData.biznes_lanch &&
                Object.keys(menuData.biznes_lanch).map((key) => (
                  <div key={key} className="menuItem">
                    <div className="highlight">
                      <div
                        className="imageContainer"
                        onClick={() => toggleLongShort(key)}
                      >
                        <img
                          className="meal-image"
                          src={ImageExample}
                          alt=":("
                        />
                        <div
                          className={`short-info ${
                            !selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.biznes_lanch[key].name}</h2>
                          <span>
                            {menuData.biznes_lanch[key].price}грн /{" "}
                            {menuData.biznes_lanch[key].weight}г
                          </span>
                        </div>
                        <div
                          className={`long-info ${
                            selectedItems[key] ? "show" : ""
                          }`}
                        >
                          <h2>{menuData.biznes_lanch[key].name}</h2>
                          <p>Вага: {menuData.biznes_lanch[key].weight}г.</p>
                          <p>Ціна: {menuData.biznes_lanch[key].price}грн.</p>
                          <p>{menuData.biznes_lanch[key].sklad}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="iconContainer">
                <a href="#p/b">
                  <FontAwesomeIcon className="icon" icon={faCircleUp} />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="iconContainerDeskTop">
        <a href="#menu">
          <FontAwesomeIcon className="icon" icon={faCircleUp} />
        </a>
      </div>
      <h2 id="drinks-heading" className="lowerHeading">
        Напої
      </h2>

      <div className="drinks-container">
        <ul className="drinks-peredzam">
          <li className="kava">
            Кава
            <FontAwesomeIcon
              id="plus-icon"
              icon={faPlus}
              onClick={() => {
                setShowKava(!showKava);
              }}
            />
          </li>

          <div className="extra">
            {showKava &&
              Object.keys(napoiData.kava).map((key) => (
                <ul key={key} className="list">
                  <li>
                    {napoiData.kava[key].name} - {napoiData.kava[key].size}мг/
                    {napoiData.kava[key].price}грн
                  </li>
                </ul>
              ))}
          </div>
          <li className="kava">
            Чай
            <FontAwesomeIcon
              id="plus-icon"
              icon={faPlus}
              onClick={() => {
                setShowChai(!showChai);
              }}
            />
          </li>

          <div className="extra">
            {showChai &&
              Object.keys(napoiData.chai).map((key) => (
                <ul key={key} className="list">
                  <li>
                    {napoiData.chai[key].name} - {napoiData.chai[key].size}мг /
                    {napoiData.chai[key].price}грн
                  </li>
                </ul>
              ))}
          </div>
          <li>
            {napoiData.Uzvar.name} - {napoiData.Uzvar.size}мг /
            {napoiData.Uzvar.price}грн
          </li>
          <li>
            {napoiData.lymonad.name} - {napoiData.lymonad.size}мг /
            {napoiData.lymonad.price}грн
          </li>
          <li>
            {napoiData.gazovani_napoi.name} - {napoiData.gazovani_napoi.size}мг
            /{napoiData.gazovani_napoi.price}грн
          </li>
          <li>
            {napoiData.vodi_asort.name} - {napoiData.vodi_asort.size}мг /
            {napoiData.vodi_asort.price}грн
          </li>
          <li>
            {napoiData.soki_asort.name} - {napoiData.soki_asort.size}мг /
            {napoiData.soki_asort.price}грн
          </li>
          <li>
            {napoiData.bavariya.name} - {napoiData.bavariya.size}мг /
            {napoiData.bavariya.price}грн
          </li>
          <li>
            {napoiData.vine.name} - {napoiData.vine.size}мг /
            {napoiData.vine.price}грн
          </li>
        </ul>
      </div>

      <h2 id="stravy" className="lowerHeading">
        Передзамовлення страв
      </h2>
      <div className="meels-container">
        {Object.keys(peredzamData).map((key) => (
          <ul key={key} className="drinks-peredzam">
            <li>
              {peredzamData[key].name} - {peredzamData[key].weight}г /{" "}
              {peredzamData[key].price}грн
            </li>
          </ul>
        ))}
      </div>
      <div className="reserv-number">
        <h3>Номер для замовлення: (+38) 050 837 20 31 .</h3>
      </div>
    </div>
  );
}
export default Menu;
