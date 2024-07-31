import React from 'react'

function Delya() {
  return (
    <div className='contianer'>
      <div className='mt-[20px] mb-[10px]'>
        <p className='text-[28px] text-[#4E2D2D] font-bold'>Мы подобрали для вас</p>
      </div>
      <div className='flex gap-[30px]'>
        <div className="bg-[url('./src/assets/svg/bg1.svg')] w-[580px] h-[350px] p-[40px]">
          <p className='text-[#4E2D2D] text-[25px] uppercase'>более 1000 лучших рецептов</p>
          <p className='text-[#000000] text-[16px] py-[20px]'>Мы собрали для Вас большую <br />базу рецептов.</p>
          <button className='mt-[110px] bg-[#FD9339] w-[132px] h-[44px] rounded-[5px] text-[16px] text-[#FFFFFF]'>Перейти</button>
        </div>
        <div className="bg-[url('./src/assets/svg/bg2.svg')] w-[580px] h-[350px] p-[40px]">
          <p className='text-[#FFFFFF] text-[25px] uppercase' >крутые Наборы для сыра</p>
          <p className='text-[#FFFFFF] text-[16px]  py-[20px]'>Готовые наборы сэкономят <br />время, мы всё сделали за Вас. </p>
          <button className='mt-[110px] bg-[#FD9339] w-[132px] h-[44px] rounded-[5px] text-[16px] text-[#FFFFFF]'>Перейти</button>
        </div>
      </div>
    </div>
  )
}

export default Delya