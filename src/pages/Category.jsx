import React from 'react'
import Hero from './Hero'
import Ingredient from '../components/Ingredient'
import Card from '../components/Card'

const Category = () => {
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
                    <p className='font-bold text-[28px] text-[#4E2D2D]'>Кисломолочные закваски</p>
                </div>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
  )
}

export default Category