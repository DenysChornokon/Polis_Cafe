import React from 'react'
import './Card.css'

function Card() {
    return (

        <div className="box">

            <div id="container" className="closed">
                <div id="toggle">
                    <div className="title">М'ятний джулеп</div>
                </div>
            </div>

            <article>
                <ul className="ingredients">
                    <li>
                        <div className="amount">50мг</div>
                        <div className="ingredient">Ром</div>
                    </li>
                    <li>
                        <div className="amount">2 сл</div>
                        <div className="ingredient">Цукор</div>
                    </li>
                    <li>
                        <div className="amount">4 гілочки</div>
                        <div className="ingredient">М'ята</div>
                    </li>
                    <li>
                        <div className="amount">додати</div>
                        <div className="ingredient">Вода</div>
                    </li>
                </ul>

                <div className="preperation">
                    <div>Add the mint sprigs, caster sugar and a couple of tablespoons of crushed ice.</div>
                    <div>Begin 'massaging' the mix together with a spoon. The caster sugar helps to bring out the flavour of the mint. Breaking or crushing the mint makes the taste sour, hence the need to gently fold and stir.</div>
                    <div>Add 25ml of rum, more crushed ice and continue 'massaging'. Fill with ice, pour in the second 25ml shot of rum and add a dash of soda, if desired.</div>
                </div>
            </article>

        </div>

    )
}

export default Card
