import React, { useState, useEffect} from 'react'
import './Restaurants.css'
// import shaka from './img/80630.png'
// import wraps from './img/80628.png'
// import oriental from './img/80622.png'
// import fire from './img/80619.png'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'


function Restaurants() {

    const [resturants,setRestaurants]=useState([]);

    const getData=()=>{
        fetch('./rest.json').then(function(response){
             console.log(response)
             return response.json();
           })
           .then(function(myJson) {
             console.log(myJson);
             setRestaurants(myJson)
           });
        }

    

    useEffect(()=>{getData()},[])

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    } 
    const restaurantsList = resturants.map((resturant) => {
        <div className='inline-block pr-5 pt-1 pl-5 cursor-pointer hover:scale-105 ease-in-out duration-300 '><img src='#' width='125px'></img>{resturant.name}</div>
    })
  
    return (
        <div className='resturants'>
            <h1>Restaurants</h1>
            <span style={{float:'left', paddingTop:'50px', paddingRight:'10px'}}>
            <FaChevronCircleLeft className='cursor-pointer text-[#F9CA26]' onClick={slideLeft} size={40}/>
            </span>
            <div id='slider' className='w-[680px] h-[170px] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide' style={{float:'left'}}>
                
                {resturants.map((resturant) => {
                    return(
                        <div className='inline-block pr-5 pt-1 pl-5 cursor-pointer hover:scale-105 ease-in-out duration-300 '><img src={resturant.image} width='125px'></img></div>
                        )
                })}            
            </div>
            <span style={{float:'right', paddingTop:'50px'}}>
            <FaChevronCircleRight onClick={slideRight} className='cursor-pointer text-[#F9CA26]' size={40}/>
            </span>
        </div>
    )
}

export default Restaurants
