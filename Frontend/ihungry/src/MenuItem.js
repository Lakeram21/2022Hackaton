import React from 'react'
import './MenuItem.css'

import spice from './img/spicy-sandwich.png'


function MenuItem({menu}) {
console.log("This is menu", menu);
    return (
        <div>
            {/* <div className='img'><img src={spice} alt="item-image"></img></div>
            <div className='description'>
            <h1 className='title'>Spicy Sandwich Chicken</h1>
            <p >A boneless breast of chicken seasoned to perfection, freshly breaded, 

            </p>
            </div>
            <span className='price'>$4.90</span>
            <button >Add</button> */}

            {Object.entries(menu).map((key, value) => (
                <div className='ItemContainer'>
                 <div className='img'><img src={spice} alt="item-image"></img></div>
                 <div className='description'>
                 <h1 className='title'>{key}</h1>
                 <p >A boneless breast of chicken seasoned to perfection, freshly breaded, 
     
                 </p>
                 </div>
                 <span className='price'>{value}</span>
                 <button >Add</button> 
                 </div>
            ))}
         
        </div>
            
    )
}

export default MenuItem
