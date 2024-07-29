import React from 'react'

function Header() {
  return (
    <div className='contianer'>
        <div className='flex my-[20px] justify-between'>
            <div className='flex gap-[30px]'>
                <div className='flex gap-[5px]'>
                    <img src="../../public/svg/location.svg" alt="" />
                    <p>Ваш город: Москва</p>
                </div>
                <div className='flex gap-[5px]'>
                    <img src="../../public/svg/alarm-clock-time-timer.svg" alt="" />
                    <p>Пн-Пт 9:00 - 19:00</p>
                </div>
            </div>
            <div className='flex gap-[25px]'>
                <a href="">О компании</a>
                <a href="">Преимущества</a>
                <a href="">Акционные товары</a>
                <div className='flex gap-[5px]'>
                    <img src="../../public/svg/users-login.svg" alt="" />
                    <a href="">Войти в аккаунт</a>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className='flex'>
                <div className="flex items-center">
                    <img src="../../public/svg/logo.svg" alt="Logo"  />
                </div>
                <div className="text-[13px] text-[#808080] flex gap-[20px] ml-3">
                    <div className="flex items-center space-x-2">
                        <img src="../../public/svg/Бесплатная доставка.svg" alt="Бесплатная доставка"  />
                        <a href="" className="leading-tight">Бесплатная <br /> доставка</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="../../public/svg/Скидка при оплате на сайте.svg" alt="Скидка при оплате на сайте" className="h-6" />
                        <a href="">Скидка при <br /> оплате на сайте</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="../../public/svg/Защита покупателей.svg" alt="Защита покупателей" className="h-6" />
                        <a href="" className="leading-tight">Защита <br /> покупателей</a>
                    </div>
                </div>
            </div>

            <div className="flex gap-[20px] items-center">
                <div className="flex gap-[5px]">
                    <img src="../../public/svg/Telegram.svg" alt="Telegram"  />
                    <img src="../../public/svg/WhatsUp.svg" alt="WhatsUp"  />
                    <img src="../../public/svg/Messenger.svg" alt="Messenger"  />
                </div>
                <div className="flex gap-[20px] items-center">
                    <div className="items-center space-x-2">
                        <div className=''>  
                            <a href="tel:+8 916 460-19-60" className="text-[#4E2D2D] text-[16px] my-[10px] font-semibold">+8 916 460-19-60</a>
                            <div className='flex items-center border-[#FD9339] border-[1px] text-[#FD9339] rounded-md text-[12px] gap-[3px] px-[4px] '>
                                <img src="../../public/svg/phonestele.svg" alt="Phone"  />
                                <p className="leading-tight ">Заказать звонок</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <div className='pl-[20px]'> 
                            <p className="font-semibold">Ваша корзина</p>
                            <a href="" className=" text-[#FD9339] text-[14px] my-[3] flex justify-end">1680 руб.</a>
                        </div>
                        <img src="../../public/svg/shopping-cart add.svg" alt="Cart" className="h-[48px]" />
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
                <img src="../../public/svg/search-loupe.svg" alt="" />
                <input for="default-search" type="text" placeholder="Введите название товара или артикул" />
            </div>
        </div>
    </div>
  )
}

export default Header