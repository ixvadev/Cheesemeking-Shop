import React from 'react'
import Ingredient from '../components/Ingredient'
import Cardinfo from '../components/Cardinfo'

const Product1 = () => {
  return (
    <div>
        <div className='contianer py-4 flex gap-3 '>
            <div>
                <Ingredient/>
            </div>
            <div>
                <Cardinfo/>
            </div>
        </div>
    </div>
  )
}

export default Product1