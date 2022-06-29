import React, { useState, useEffect, useContext } from 'react'
import './Restaurants.css'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import {Link} from "react-router-dom"
import { CategoryContext } from './MainMenu'


function Restaurants() {

    const [resturants,setRestaurants]=useState([]);
    const {selectedCategory, setSelectedCategory} = useContext(CategoryContext)

    const getData=()=>{
        fetch('./rest.json').then(function(response){
             console.log(response)
             return response.json();
           })
           .then(function(myJson) {
            if (selectedCategory !== 'all') {
                let filteredRest = myJson.filter(rest => rest.categories.includes(selectedCategory))
                console.log(myJson);
                setRestaurants(filteredRest)
            } else {
                console.log(myJson);
                setRestaurants(myJson)
            }
            
           });
        }

    

    useEffect(()=>{getData()},[selectedCategory])

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
  
    console.log('this is rest', selectedCategory)
    return (
        <div className='resturants'>
            <h1>Restaurants</h1>
            <span style={{float:'left', paddingTop:'50px', paddingRight:'10px'}}>
            <FaChevronCircleLeft className='cursor-pointer text-[#F9CA26]' onClick={slideLeft} size={40}/>
            </span>
            <div id='slider' className='w-[680px] h-[170px] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide' style={{float:'left'}}>
                
                {resturants.map((resturant) => {
                
                    return(
                        <Link to = '/restaurantpage'><div className='inline-block pr-5 pt-1 pl-5 cursor-pointer hover:scale-105 ease-in-out duration-300 '><img src={resturant.image} width='125px'></img></div></Link>
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
