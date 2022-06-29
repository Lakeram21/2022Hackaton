import {React, useState, useContext} from 'react'
import './Categories.css'
import all from './img/all.png'
import burger from './img/burgers.png'
import pizza from './img/pizza.png';
import salads from './img/salad.png'
import noodles from './img/noodles.png'
import curry from './img/curry.png'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import { CategoryContext } from './MainMenu'


function Categories() {

    const {selectedCategory, setSelectedCategory} = useContext(CategoryContext)


    console.log('this is categories', selectedCategory)
    const slideLeft = () => {
        var slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft + 500;
    } 

    return (
        <div className='categories'>
            <h1>Categories</h1>
            <span style={{float:'left', paddingTop:'50px', paddingRight:'10px'}}>
            <FaChevronCircleLeft className='cursor-pointer text-[#F9CA26]' onClick={slideLeft} size={40}/>
            </span>
            <div id='slider2' className='w-[680px] h-[170px] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide' style={{float:'left'}}>
                
                <div className='inline-block pr-5 pt-1 pl-5 cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                    <div className='categories-items'>
                        <div className='images-categories'  onClick={() => setSelectedCategory('all')}><img src={all} width='50px' style={{paddingTop:'20px'}}></img></div>
                        <p style={{paddingTop:'10px'}}>All</p>
                    </div>
                </div>

                <div className='inline-block pr-5 pt-1 pl-5 cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                    <div className='categories-items' onClick={() => setSelectedCategory('burgers')}>
                        <div className='images-categories'><img src={burger} width='50px' style={{paddingTop:'30px'}} ></img></div>
                        <p style={{paddingTop:'10px'}}>Burgers</p>
                    </div>
                </div>

                <div className='inline-block pr-5 pt-1 pl-5 cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                    <div className='categories-items' onClick={() => setSelectedCategory('pizza')}>
                        <div className='images-categories' ><img src={pizza} width='50px' style={{paddingTop:'20px'}}></img></div>
                        <p style={{paddingTop:'10px'}}>Pizza</p>
                    </div>
                </div>
                
                <div className='inline-block pr-5 pt-1 pl-5 cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                    <div className='categories-items' onClick={() => setSelectedCategory('salad')}>
                        <div className='images-categories'><img src={salads} width='50px' style={{paddingTop:'25px'}}></img></div>
                        <p style={{paddingTop:'10px'}}>Salads</p>
                    </div>
                </div>

                <div className='inline-block pr-5 pt-1 pl-5 cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                    <div className='categories-items' onClick={() => setSelectedCategory('noodles')}>
                        <div className='images-categories'><img src={noodles} width='50px' style={{paddingTop:'20px', paddingLeft:'5px'}}></img></div>
                        <p style={{paddingTop:'10px'}}>Noodles</p>
                    </div>
                </div>

                <div className='inline-block pr-5 pt-1 pl-5 cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                    <div className='categories-items' onClick={() => setSelectedCategory('indian')}>
                        <div className='images-categories'><img src={curry} width='50px' style={{paddingTop:'30px'}}></img></div>
                        <p style={{paddingTop:'10px'}}>Indian</p>
                    </div>
                </div>


            </div>
            <span style={{float:'right', paddingTop:'50px'}}>
            <FaChevronCircleRight onClick={slideRight} className='cursor-pointer text-[#F9CA26]' size={40}/>
            </span>
                
        </div>
            

       
    )
}

export default Categories
