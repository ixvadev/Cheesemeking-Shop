import React from 'react'
import Hero from './Hero'
import Ingredient from '../components/Ingredient'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
        <div>
           <Hero/>
        </div>
        <div className='flex contianer gap-[16px] '>
            <div className=''>
                <Ingredient/>
            </div>
            <div className='contianer'> 
                <div className='flex item-center gap-5 mb-5'>
                    <a href="" className='text-[#FD9339] border-b-2 border-[#FD9339]'>Популярные товары </a>
                    <a href="">Акции</a>
                </div>
                <Card/>
                <p>Оборудование</p>
                <Card/>
            </div>
        </div>
    </div>
  )
}

export default Home