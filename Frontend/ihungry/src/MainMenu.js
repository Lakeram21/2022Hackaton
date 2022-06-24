import React from 'react'
import './MainMenu.css'
import Categories from './Categories'
import Restaurants from './Restaurants'

function MainMenu() {
    return (
        <div className='menu'>
            <Categories />
            <Restaurants />
        </div>
    )
}

export default MainMenu
