import React from 'react';

function Hero() {
  return (
    <div className='container mx-auto px-4'>
        <div className="flex flex-col gap-4 md:flex-row md:gap-5">
            <div className="w-full md:w-[590px] h-[300px] pt-[25px] bg-[url('./src/assets/svg/hero1.svg')] pl-[25px] text-white flex flex-col justify-between">
                <p className="text-[24px] md:text-[36px] font-bold">Наборы для сыроделия</p>
                <p className="mt-2 text-[14px] md:text-[18px] pb-[40px] md:pb-[70px]">Все что вам нужно для приготовления сыра <br /> в домашних условиях</p>
                <button className="w-full md:w-[200px] h-[46px] bg-orange-500 hover:bg-[#FD9339] text-white text-[14px] md:text-[16px] py-2 px-4 rounded">Смотреть наборы</button>
            </div>
            <div className="w-full md:w-[293px] h-[300px] bg-[url('./src/assets/svg/hero2.svg')] flex flex-col justify-center p-4 md:pt-[220px] text-white">
                <p className="text-[14px] md:text-[16px] text-[#FD9339]">Рецепты</p>
                <p className="text-[18px] md:text-[22px] font-bold">Сыры с плесенью</p>
            </div>
            <div className="w-full md:w-[293px] h-[300px] bg-[url('./src/assets/svg/hero3.svg')] flex flex-col justify-center p-4 md:pt-[220px] text-white">
                <p className="text-[14px] md:text-[16px] text-[#FD9339]">Акции</p>
                <p className="text-[18px] md:text-[22px] font-bold">Закваски для сыра</p>
            </div>
        </div>
    </div>
  );
}

export default Hero;
