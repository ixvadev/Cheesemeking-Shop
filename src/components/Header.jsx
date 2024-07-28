import React from 'react'

function Header() {
  return (
    <div className='w-[1180px] h-[300px] m-auto'>
        <div className='flex my-[20px] justify-between'>
            <div className='flex gap-[30px]'>
                <div className='flex gap-[5px]'>
                    <img src="/src/assets/location.svg" alt="" />
                    <p>Ваш город: Москва</p>
                </div>
                <div className='flex gap-[5px]'>
                    <img src="/src/assets/alarm-clock-time-timer.svg" alt="" />
                    <p>Пн-Пт 9:00 - 19:00</p>
                </div>
            </div>
            <div className='flex gap-[25px]'>
                <a href="">О компании</a>
                <a href="">Преимущества</a>
                <a href="">Акционные товары</a>
                <div className='flex gap-[5px]'>
                    <img src="/src/assets/users-login.svg" alt="" />
                    <a href="">Войти в аккаунт</a>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className='flex'>
                <div className="flex items-center">
                    <img src="/src/assets/logo.svg" alt="Logo" className="" />
                </div>
                <div className="text-[13px] text-[#808080] flex gap-[20px] ml-3">
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/Бесплатная доставка.svg" alt="Бесплатная доставка" className="" />
                        <a href="" className="leading-tight">Бесплатная <br /> доставка</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/Скидка при оплате на сайте.svg" alt="Скидка при оплате на сайте" className="h-6" />
                        <a href="">Скидка при <br /> оплате на сайте</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/Защита покупателей.svg" alt="Защита покупателей" className="h-6" />
                        <a href="" className="leading-tight">Защита <br /> покупателей</a>
                    </div>
                </div>
            </div>

            <div className="flex gap-[20px] items-center">
                <div className="flex gap-[5px]">
                    <img src="/src/assets/Telegram.svg" alt="Telegram" className="" />
                    <img src="/src/assets/WhatsUp.svg" alt="WhatsUp" className="" />
                    <img src="/src/assets/Messenger.svg" alt="Messenger" className="" />
                </div>
                <div className="flex gap-[20px] items-center">
                    <div className="items-center space-x-2">
                        <div className=''>  
                            <a href="tel:+8 916 460-19-60" className="text-[#4E2D2D] text-[16px] my-[10px] font-semibold">+8 916 460-19-60</a>
                            <div className='flex items-center border-[#FD9339] border-[1px] text-[#FD9339] rounded-md text-[12px] gap-[3px] px-[4px] '>
                                <img src="/src/assets/phonestele.svg" alt="Phone" className="" />
                                <p className="leading-tight ">Заказать звонок</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <div className='pl-[20px]'> 
                            <p className="font-semibold">Ваша корзина</p>
                            <a href="" className=" text-[#FD9339] text-[14px] my-[3] flex justify-end">1680 руб.</a>
                        </div>
                        <img src="/src/assets/shopping-cart add.svg" alt="Cart" className="h-[48px]" />
                    </div>
                </div>
            </div>
        </div>

        <div className='flex my-[20px] justify-between'>
            <div className='flex gap-[20px] text-[14px]'>
                <a href="">Рецепты</a>
                <a href="">Доставка и оплата</a>
                <a href="">Калькулятор Сыродела</a>
                <a href="">Отзывы</a>
                <a href="">Вопросы и ответы</a>
                <a href="">Контакты</a>
            </div>
            <div className='flex'>
                <img src="/src/assets/search-loupe.svg" alt="" />
                <input for="default-search" type="text" placeholder="Введите название товара или артикул" />
            </div>
        </div>
    </div>
  )
}

export default Header