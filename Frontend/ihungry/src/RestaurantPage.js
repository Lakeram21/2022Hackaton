import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import WelcomeSearch from './WelcomeSearch';

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
            <WelcomeSearch dataRest={data}/>
            <img src={data.banner} alt={`${data.name} banner image`} className='banner'/>
            <div>
                <p> ❤️ Your favorites from Chick-fill-a</p>
            </div>
            <div>
                <p>Today’s Menu</p>
            </div>
        </div>
        
    )
}

export default RestaurantPage
