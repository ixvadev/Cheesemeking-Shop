import React from 'react'
import Ingredient from '../components/Ingredient'
import Cardinfo from '../components/Cardinfo'
import Tovar from '../components/Tovar'

const Product1 = ({count,increment,decrement}) => {
  return (
    <div>
        <div className='contianer py-4 flex gap-3 '>
            <div>
                <Ingredient/>
            </div>
            <div>
                <Cardinfo count={count} increment={increment} decrement={decrement}/>
                <Tovar/>
            </div>
        </div>
    </div>
  )
}

export default Product1