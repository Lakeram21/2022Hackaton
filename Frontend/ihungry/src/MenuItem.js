import React from 'react'
import './MenuItem.css'
import spice from './img/spicy-sandwich.png'


function MenuItem() {

    return (
        <div className='ItemContainer'>
            <div className='img'><img src={spice} alt="item-image"></img></div>
            <div className='description'>
            <h1 className='title'>Item Name</h1>
            <p className='description'>Item Description</p>
            <span className='price'>$4.90</span>
            <button>Add</button>
            </div>
         
        </div>
            
    )
}

export default MenuItem
