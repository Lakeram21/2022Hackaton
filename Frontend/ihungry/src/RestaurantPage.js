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
            <MenuItem/>
            {/* <h1>{data.name}</h1>
            <img src='#' alt={`${data.name} banner image`}/>
            <div>
                <p>Today’s Menu</p>
                 {data.map((menu) => {
                
                    return(
                        <div></div>
                        )
                })} 
            </div> */}
        </div>
        
    )
}

export default RestaurantPage
