import {createContext, React, useContext, useState} from 'react'
import './MainMenu.css'
import Categories from './Categories'
import Restaurants from './Restaurants'
import Favorite from './Favorite'
import {FaSearch} from 'react-icons/fa'

export const CategoryContext = createContext()

function MainMenu() {

    const [selectedCategory, setSelectedCategory] = useState('all')
    console.log('this is the sate',selectedCategory)
    
    return (
        <div className='menu'>
            <div className='welcome-search'>
                <h1>Welcome to Crossdrop ✨</h1>
                <i style={{position:'absolute', marginTop:'35px', marginLeft:'70px', color:'#9ca3af'}}>{<FaSearch size={'20px'}/>}</i>
                <input className='search-bar' type={'text'} placeholder={'Search'}>
                    
                </input>
            </div>
           <CategoryContext.Provider value={{selectedCategory, setSelectedCategory}}>
                <Categories />
                <Restaurants />
                <Favorite />
            </CategoryContext.Provider>
        </div>
    )
}

export default MainMenu
