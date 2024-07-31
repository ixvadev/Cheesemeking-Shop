import React from 'react'
import {telegram} from '../assets/images'

function Header() {
  return (
    <div className=''>
        <div className='contianer flex py-[20px] justify-between'>
            <div className='flex gap-[30px]'>
                <div className='flex gap-[5px]'>
                    <img src="/src/assets/svg/location.svg" alt="" />
                    <p>Ваш город: Москва</p>
                </div>
                <div className='flex gap-[5px]'>
                    <img src="/src/assets/svg/alarm-clock-time-timer.svg" alt="" />
                    <p>Пн-Пт 9:00 - 19:00</p>
                </div>
            </div>
            <div className='flex gap-[25px]'>
                <a href="">О компании</a>
                <a href="">Преимущества</a>
                <a href="">Акционные товары</a>
                <div className='flex gap-[5px]'>
                    <img src="/src/assets/svg/users-login.svg" alt="" />
                    <a href="">Войти в аккаунт</a>
                </div>
            </div>
        </div>
        <hr />
        <div className="contianer py-[10px] flex items-center justify-between">
            <div className='flex'>
                <div className="flex items-center">
                    <img src="/src/assets/svg/Logo.svg" alt="Logo"  />
                </div>
                <div className="text-[13px] text-[#808080] flex gap-[20px] ml-3">
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/svg/Бесплатная доставка.svg" alt="Бесплатная доставка"  />
                        <a href="" className="leading-tight">Бесплатная <br /> доставка</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/svg/Скидка при оплате на сайте.svg" alt="Скидка при оплате на сайте" className="h-6" />
                        <a href="">Скидка при <br /> оплате на сайте</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/svg/Защита покупателей.svg" alt="Защита покупателей" className="h-6" />
                        <a href="" className="leading-tight">Защита <br /> покупателей</a>
                    </div>
                </div>
            </div>

            <div className="flex gap-[20px] items-center">
                <div className="flex gap-[5px]">
                    <img src={telegram} alt="Telegram"  />
                    <img src="/src/assets/svg/WhatsUp.svg" alt="WhatsUp"  />
                    <img src="/src/assets/svg/Messenger.svg" alt="Messenger"  />
                </div>
                <div className="flex gap-[20px] items-center">
                    <div className="items-center space-x-2">
                        <div className=''>  
                            <a href="tel:+8 916 460-19-60" className="text-[#4E2D2D] text-[16px] my-[10px] font-semibold">+8 916 460-19-60</a>
                            <div className='flex items-center border-[#FD9339] border-[1px] text-[#FD9339] rounded-md text-[12px] gap-[3px] px-[4px] '>
                                <img src="/src/assets/svg/phonestele.svg" alt="Phone"  />
                                <p className="leading-tight">Заказать звонок</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <div className='pl-[20px]'> 
                            <p className="font-semibold">Ваша корзина</p>
                            <a href="" className=" text-[#FD9339] text-[14px] my-[3] flex justify-end">1680 руб.</a>
                        </div>
                        <img src="/src/assets/svg/shopping-cart add.svg" alt="Cart" className="h-[48px]" />
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className='contianer flex py-[10px] justify-between'>
            <div className='flex items-center gap-[20px] text-[14px]'>
                <a href="">Рецепты</a>
                <a href="">Доставка и оплата</a>
                <a href="">Калькулятор Сыродела</a>
                <a href="">Отзывы</a>
                <a href="">Вопросы и ответы</a>
                <a href="">Контакты</a>
            </div>
            <div className='flex'>
                <img className='absolute ml-[10px] mt-[6px]' src="/src/assets/svg/search-loupe.svg" alt="" />
                <input type="search" id="default-search" className="block w-[300px] px-5 ps-10 py-2 text-sm bg-inherit outline-none rounded-lg border border-solid border-[#FD9339]" placeholder="Введите название товара или артикул" required />
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Header