import React from 'react';
import './MenuItem.css'


function Favorite() {
    return (
        <div className='menu-item' style={{clear:'both', marginLeft:'65px'}}>
            <h1>Favorite Items</h1>
            
                <div className='ItemContainer' style={{marginTop:'50px', marginBottom:'40px'}}>
                    <div className='img'><img src={"./spicy-sandwich.png"} alt="item-image"></img></div>
                    <h1 className='title'>Spicy Sandwich</h1>
                    <p className='description'>A boneless breast of chicken seasoned to perfection, freshly breaded.</p>
                    <p className='price' style={{fontSize:'20px', marginTop:'20px'}}>$4.49</p>
                    <button style={{fontSize:'15px'}}>Add</button> 
                </div>

                <div className='ItemContainer' style={{marginTop:'50px', marginBottom:'40px'}}>
                    <div className='img'><img src={"./pizza.png"} alt="item-image"></img></div>
                    <h1 className='title'>Pepperoni</h1>
                    <p className='description'>A hand-made pizza. Made with high quality ingredients. Just for you!</p>
                    <p className='price' style={{fontSize:'20px', marginTop:'20px'}}>$5.00</p>
                    <button style={{fontSize:'15px'}}>Add</button> 
                </div>

                <div className='ItemContainer' style={{marginTop:'50px', marginBottom:'40px'}}>
                    <div className='img'><img src={"./salad.png"} alt="item-image"></img></div>
                    <h1 className='title'>Small Salad</h1>
                    <p className='description'>Stay healthy with this fresh salad. You can choose protein,</p>
                    <p className='price' style={{fontSize:'20px', marginTop:'20px'}}>$5.29</p>
                    <button style={{fontSize:'15px'}}>Add</button> 
                </div>
           
         
        </div>
        
    )
}

export default Favorite
