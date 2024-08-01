import React from 'react'
function Cardinfo() {
  return (
    <div className=''>
        <div>
            <p>Мезофильная закваска Hansen Flora Danica (50U)</p>
            <div className='flex gap-[25px]'>
                <img src="/src/assets/Cardinfo/Yulduzcha.svg" alt="" />
                <img src="/src/assets/Cardinfo/chat-messages.svg" alt="" />
                <p className='text-[13px] text-[#4E2D2D]'>2 Отзыва</p>
            </div>
        </div>
        <div className='flex gap-[30px]'>
            <div className='w-[360px] h-[310px]'>
                <div className='bg-[#ffffff]  rounded-[8px] my-[20px]'>
                    <img src="/src/assets/Cardinfo/cardinfo.svg" alt="" className='m-auto' />
                    <div className='flex justify-center gap-[15px] py-[10px]'>
                        <img src="/src/assets/Cardinfo/info1.svg" alt="" />
                        <img src="/src/assets/Cardinfo/info2.svg" alt="" />
                        <img src="/src/assets/Cardinfo/info3.svg" alt="" />
                    </div>
                    <div className='flex justify-center gap-[10px] py-[10px]'>
                        <img src="/src/assets/Cardinfo/graduz320.svg" alt="" />
                        <p className='text-[14px] text-[#808080]'>Посмотреть товар в 3D</p>
                    </div>
                </div>
            </div>

            <div className='w-[470px] h-[220px]'>
                <img className='mt-[20px]' src="/src/assets/Cardinfo/online.svg" alt="" />
                <div>
                    <div className='flex justify-between py-[5px]'>
                        <div className='flex'>
                            <p className='text-[28px] text-[#FD9339]'>950 руб.</p>
                            <p className='text-[#808080] text-[14px]'>1200 руб.</p>
                        </div>
                        <div>
                            <img src="/src/assets/Cardinfo/likecommit.svg" alt="" />
                        </div>
                    </div>
                    <div className='flex gap-[10px] py-[5px]'>
                        <p className='text-[#FD9339] text-[14px]'>+95 <span className='text-[#808080]'>бонусных рублей</span></p>
                        <img src="/src/assets/Cardinfo/question.svg" alt="" />
                    </div>
                    <div className='py-[5px]'>
                        <p className='text-[16px]'>Артикул: <span className='text-[#808080]'>23006</span></p>
                    </div>
                    <div className='py-[5px]'>
                        <p className='text-[16px]'>Производитель: <span className='text-[#808080]'>Lactofarm ECO, Италия</span></p>
                    </div>
                    <div className='flex justify-between py-[10px]'>
                        <div className='flex justify-center py-[10px] gap-[28px] bg-[#FFFFFF] w-[140px] h-[44px]'>
                            <img src="/src/assets/Cardinfo/Minus.svg" alt="" />
                            <p>3</p>
                            <img src="/src/assets/Cardinfo/Plus.svg" alt="" />
                        </div>
                        <div>
                            <button className='bg-[#FD9339] w-[320px] h-[44px] text-[#FFFFFF]' >В корзину</button>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cardinfo