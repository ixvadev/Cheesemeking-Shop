import React from 'react'

function Footer() {
  return (
    <>
        <div className='flex w-[1180px] h-[300px] m-auto'>
            <div className='grid'>
                <img src="/src/assets/Logo.svg" alt="" />
                <a href="">Все материалы данного сайта <br /> являются объектами авторского <br /> права.</a>
                <a href="">Разработка сайта: ЛяЧиз</a>
            </div>
            <div className='grid'> 
                <p>Компания</p>
                <a href="">О компании</a>
                <a href="">Акции и скидки</a>
                <a href="">Доставка и оплата</a>
                <a href="">Отзывы</a>
                <a href="">Гарантия и возврат</a>
            </div>
            <div className='grid'>
                <p>Поддержка</p>
                <a href="">Вопрос-ответ</a>
                <a href="">Бонусная программа</a>
                <a href="">Политика конфиденциальности</a>
                <a href="">Персональные данных</a>
            </div>
            <div className='grid'>
                <p>Способы оплаты</p>
                <div className='flex'>
                    <img src="/src/assets/Ruble.svg" alt="" />
                    <img src="/src/assets/Ruble.svg" alt="" />
                    <img src="/src/assets/Sberbank.svg" alt="" />
                    <img src="/src/assets/Yandex.svg" alt="" />
                </div>
                <div className='flex'>
                    <img src="/src/assets/Mastercard.svg" alt="" />
                    <img src="/src/assets/Visa.svg" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer