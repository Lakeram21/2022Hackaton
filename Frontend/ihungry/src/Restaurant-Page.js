import React from 'react'
import './Restaurant-Page.css'
import Categories from './Categories'
import Restaurants from './Restaurants'
import Favorite from './Favorite'
import MenuItem from './MenuItem'
import {FaSearch} from 'react-icons/fa'

function RestaurantPage() {
    return (
        <div className='menu'>
            {/* <div className='welcome-search'>
                <h1>Chick-fill-a✨</h1>
                <i style={{position:'absolute', marginTop:'35px', marginLeft:'70px', color:'#9ca3af'}}>{<FaSearch size={'20px'}/>}</i>
                <input className='search-bar' type={'text'} placeholder={'Search'}>
                    
                </input>
            </div>
            <div className='banner'></div> */}

<MenuItem/>

            

        </div>
    )
}

export default RestaurantPage