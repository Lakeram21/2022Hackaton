import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import MenuItem from './MenuItem';

=======
import WelcomeSearch from './WelcomeSearch';
import './RestaurantPage.css'
import MenuItem from './MenuItem';
>>>>>>> 2810b5c36a527cc624c4896d385abd2717ad96b1
function RestaurantPage({restaurant}) {
    const [selectedResturant, setSelectedRest] = useState()
    const location = useLocation();
    const data = location.state;

    console.log(data);
//    useEffect(()=>{
//     setSelectedRest= selectedResturant;
//    }, [selectedResturant])
    return (
        <div className='restaurantpage'>
            <WelcomeSearch dataRest={data}/>
            <img src={data.banner} alt={`${data.name} banner image`} className='banner'/>
            <div className='favorites'>
                <p> ❤️ Your favorites from {data.name}</p>
                <MenuItem menu={data.menu}/>
            </div>
            <div className='today-menu'>
                <p>Today’s Menu</p>
                <MenuItem menu={data.menu}/>
            </div>
        </div>
        
    )
}

export default RestaurantPage
