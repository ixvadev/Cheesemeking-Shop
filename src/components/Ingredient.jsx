import React from 'react'

function Ingredient() {
  return (
    <div>
        <div className='py-[20px]'>
            <div className=''>
                <div className='flex items-center gap-[10px] bg-[#FBE8BB] w-[280px] h-[48px] pl-[10px] boder-[1px] border-[#FBE8BB]'>
                    <img src=" src/assets/svg/cheese.logo.svg" alt="" className='h-8' />
                    <p className='text-[18px] text-[#4E2D2D] font-bold'>Ингредиенты</p>
                </div>
                <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                    <a href="" className='text-[#292929] text-[16px] '>Закваски для сыра</a>
                    <img className='' src="/src/assets/svg/arrows-diagrams.svg" alt="" />
                </div>
                <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                    <a href="" className='text-[#292929] text-[16px] '>Ферменты для сыра</a>
                    <img className='' src="/src/assets/svg/arrows-diagrams.svg" alt="" />
                </div>
                <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                    <a href="">Хлористый кальций</a>
                </div>
                <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                    <a href="" className='text-[#292929] text-[16px] '>Плесень для сыра</a>
                    <img className='' src="/src/assets/svg/arrows-diagrams.svg" alt="" />
                </div>
                <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px]  border-[#E6E6E6] hover:bg-[#FD9339]'>
                    <a href="" className='text-[#292929] text-[16px] '>Кисломолочные закваски</a>
                    <img className='' src="/src/assets/svg/arrows-diagrams.svg" alt="" />
                </div>
                <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                    <a href="" className='text-[#292929] text-[16px] '>Красители для сыра</a>
                </div>
                <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                    <a href="" className='text-[#292929] text-[16px] '>Специи для сыра</a>
                    <img className='' src="/src/assets/svg/arrows-diagrams.svg" alt="" />
                </div>
            </div>
        </div>

        <div className='py-[10px]'> 
            <div className='flex items-center gap-[10px] bg-[#FBE8BB] w-[280px] h-[48px] pl-[10px] boder-[1px] border-[#FBE8BB]'>
                <img src="/src/assets/svg/cereal-logo.svg" alt="" className='h-8' />
                <p className='text-[18px] text-[#4E2D2D] font-bold'>Оборудование</p>
            </div>
            <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6]  hover:bg-[#FD9339]'>
                <a href="" className='text-[#292929] text-[16px] '>Формы для сыра</a>
                <img className='' src="/src/assets/svg/arrows-diagrams.svg" alt="" />
            </div>
            <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                <a href="" className='text-[#292929] text-[16px] '>Латексное покрытие</a>
            </div>
            <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                <a href="" className='text-[#292929] text-[16px] '>Воск для сыра</a>
            </div>
            <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                <a href="" className='text-[#292929] text-[16px] '>Термоусадочные пакеты</a>
                <img className='' src="/src/assets/svg/arrows-diagrams.svg" alt="" />
            </div>
            <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[60px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                <a href="" className='text-[#292929] text-[16px] '>Дренажные мешки и салфетки <br /> для прессования</a>
            </div>
            <div className='flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[280px] h-[48px] px-[10px] border-[1px] border-[#E6E6E6] hover:bg-[#FD9339]'>
                <a href="" className='text-[#292929] text-[16px] '>Дренажные контейнеры</a>
            </div>
        </div>
    </div>
  )
}

export default Ingredient