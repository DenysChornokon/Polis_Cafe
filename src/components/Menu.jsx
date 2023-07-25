import React from 'react'
import './Menu.css'
import ExamplePhoto from '../assets/product-1.avif'

function Menu() {
  return (
    <section className="menu">
        <h2 className="menuHeading">Меню</h2>

        <div className="productContainer">
            <div className="box">
                <img src={ExamplePhoto} alt="Product" />
                <h3>Name</h3>
                <div className="content">
                    <span className='span1'>500uah</span>
                    <span className='span2'>100gr</span>
                </div>
            </div>
            <div className="box">
                <img src={ExamplePhoto} alt="Product" />
                <h3>Name</h3>
                <div className="content">
                    <span className='span1'>500uah</span>
                    <span className='span2'>100gr</span>
                </div>
            </div>
            <div className="box">
                <img src={ExamplePhoto} alt="Product" />
                <h3>Name</h3>
                <div className="content">
                    <span className='span1'>500uah</span>
                    <span className='span2'>100gr</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu
