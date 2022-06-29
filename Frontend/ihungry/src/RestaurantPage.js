import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

function RestaurantPage({restaurant}) {
    const [selectedResturant, setSelectedRest] = useState()
    const location = useLocation();
    const data = location.state;

    console.log(data);
//    useEffect(()=>{
//     setSelectedRest= selectedResturant;
//    }, [selectedResturant])
    return (
        <div>
            <h1>{data.name}</h1>
            <img src='#' alt={`${data.name} banner image`}/>
            <div>
                <p> ❤️ Your favorites from Chick-fill-a</p>
            </div>
            <div>
                <p>Today’s Menu</p>
                <MenuItem menu={data.menu}/>
            </div>
        </div>
        
    )
}

export default RestaurantPage
