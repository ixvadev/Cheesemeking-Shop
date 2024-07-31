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
        <img src="/src/assets/svg/Features.svg" alt="" className='' />
        <Delya/>
        
        <div className='contianer py-[30px]'>
            <p className='text-[#4E2D2D] text-[28px] font-bold my-3'>наше оборудование</p>
            <div className="bg-[url('/src/assets/svg/nashe.svg')] p-[60px] h-[440px]">
                <p className='text-[28px] uppercase text-[#4E2D2D] font-bold'>ПРЕССЫ ДЛЯ СЫРА</p>
                <p className='text-[18px] py-[30px] text-[#79766E]'>Пресс можно использовать для прессования твердых <br /> сыров. Он разбирается, и вы можете компактно <br /> его упаковать в коробку.</p>
                <button className='w-[160px] h-[44px] mt-[100px] text-[#ffffff] bg-[#FD9339]' >Узнать больше</button>
            </div>
        </div>
        <div className='contianer'>
            <div className='flex justify-center m-[50px]'>
                <div className=''>
                    <img src="/src/assets/svg/homecenter.svg" alt="" />
                    <div className='p-[20px] bg-[#ffff]'>
                        <p className='text-[#4E2D2D] text-[16px] font-bold py-[6px]'>Сырная тарелка</p>
                        <p className='text-[#4E2D2D] text-[16px] py-[5px]'>Так называется блюдо, которое состоит <br /> из разных сортов сыра. </p>
                        <div className='flex mt-[5px]'>
                            <a href="" className='text-[#FD9339]'>Читать далее</a>
                            <img src="/src/assets/svg/homeadd.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home