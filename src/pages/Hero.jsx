import React from 'react';

function Hero() {
  return (
    <div className='contianer py-[10px]'>
      <div className="flex gap-[5px]">
        <div className="w-[590px] h-[300px] pt-[25px] bg-[url('./src/assets/svg/hero1.svg')] pl-[25px] text-white">
          <p className="text-[36px] font-bold">Наборы для сыроделия</p>
          <p className="mt-2 text-[18px] pb-[70px]">Все что вам нужно для приготовления сыра <br /> в домашних условиях</p>
          <button className="w-[200px] h-[46px] bg-orange-500 hover:bg-[#FD9339] text-white text-[16px] py-2 px-4 rounded">Смотреть наборы</button>
        </div>
        <div className="w-[293px] h-[300px] bg-[url('./src/assets/svg/hero2.svg')] flex flex-col justify-center p-4 pt-[220px] text-white">
          <p className="text-[16px] text-[#FD9339]">Рецепты</p>
          <p className="text-[22px] font-bold">Сыры с плесенью</p>
        </div>
        <div className="w-[293px] h-[300px] bg-[url('./src/assets/svg/hero3.svg')] flex flex-col justify-center p-4 pt-[220px] text-white">
          <p className="text-[16px] text-[#FD9339]">Акции</p>
          <p className="text-[22px] font-bold">Закваски для сыра</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
