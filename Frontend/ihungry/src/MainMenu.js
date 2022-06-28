import React from 'react'
import './MainMenu.css'
import Categories from './Categories'
import Restaurants from './Restaurants'
import Favorite from './Favorite'
import {FaSearch} from 'react-icons/fa'

function MainMenu() {
    return (
        <div className='menu'>
            <div className='welcome-search'>
                <h1>Welcome to Crossdrop ✨</h1>
                <i style={{position:'absolute', marginTop:'35px', marginLeft:'70px', color:'#9ca3af'}}>{<FaSearch size={'20px'}/>}</i>
                <input className='search-bar' type={'text'} placeholder={'Search'}>
                    
                </input>
            </div>
           
            <Categories />
            <Restaurants />
            <Favorite />
        </div>
    )
}

export default MainMenu
