import React from 'react'
import './WelcomeSearch.css'
import {FaSearch} from 'react-icons/fa'
import { data } from 'autoprefixer'

function WelcomeSearch(props) {
    return (
        <div className='welcome-search'>
                <h1>{props.dataRest.name}✨</h1>
                <i style={{position:'absolute', marginTop:'15px', marginLeft:'220px', color:'#9ca3af'}}>{<FaSearch size={'20px'}/>}</i>
                <input className='search-bar' type={'text'} placeholder={'Search'}>
                    
                </input>
        </div>
    )
}

export default WelcomeSearch
