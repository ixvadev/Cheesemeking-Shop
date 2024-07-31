import React from 'react'
import Hero from './Hero'
import Ingredient from '../components/Ingredient'
import Card from '../components/Card'
import Delya from './Delya'

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
                <div className='flex item-center gap-5 mt-5'>
                    <a href="" className='text-[#FD9339] border-b-2 border-[#FD9339]'>Популярные товары </a>
                    <a href="">Акции</a>
                </div>
                <Card/>
                <p className='text-[22px] text-[#4E2D2D] font-bold'>Оборудование</p>
                <Card/>
            </div>
        </div>
        <Delya/>
    </div>
  )
}

export default Home