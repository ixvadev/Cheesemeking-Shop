import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-white py-8 text-[#292929] text-[14px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            {/* Logo and Description */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <img src="/src/assets/Footer svg/Logo.svg" alt="Logo" />
              </div>
              <p className="text-[#808080]">
                Все материалы данного сайта являются объектами авторского права.
              </p>
              <p className="mt-4 text-[#292929]">Разработка сайта: ЛяЧиз</p>
            </div>

            {/* Company */}
            <div className="w-full md:w-1/6 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Компания</h3>
              <ul className="leading-[30px]">
                <li><a href="#" className="hover:text-[#FD9339]">О компании</a></li>
                <li><a href="#" className="hover:text-[#FD9339]">Акции и скидки</a></li>
                <li><a href="#" className="hover:text-[#FD9339]">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-[#FD9339]">Отзывы</a></li>
                <li><a href="#" className="hover:text-[#FD9339]">Гарантия и возврат</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="w-full md:w-1/6 mb-8 md:mb-0 px-[10px]">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Поддержка</h3>
              <ul className="leading-[30px]">
                <li><a href="#" className="py-[10px] hover:text-[#FD9339]">Вопрос-ответ</a></li>
                <li><a href="#" className="py-[10px] hover:text-[#FD9339]">Бонусная программа</a></li>
                <li><a href="#" className="py-[10px] hover:text-[#FD9339]">Политика конфиденциальности</a></li>
                <li><a href="#" className="py-[10px] hover:text-[#FD9339]">Персональные данные</a></li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div className="w-full md:w-1/6 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Способы оплаты</h3>
              <div className="flex gap-[10px]">
                <img src="/src/assets/Footer svg/Ruble.svg" alt="Ruble" />
                <img src="/src/assets/Footer svg/Vector.svg" alt="Vector" />
                <img src="/src/assets/Footer svg/Sberbank.svg" alt="Sberbank" />
                <img src="/src/assets/Footer svg/Yandex.svg" alt="Yandex" />
              </div>
              <div className="flex py-[10px] gap-[10px]">
                <img src="/src/assets/Footer svg/Mastercard.svg" alt="Mastercard" />
                <img src="/src/assets/Footer svg/Visa.svg" alt="Visa" />
              </div>
            </div>

            {/* Contacts */}
            <div className="w-full md:w-1/4 text-end">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Контакты</h3>
              <p className="text-gray-900 font-bold mb-2">+7 495 120-00-00</p>
              <div className="flex mb-2 justify-end">
                <img src="/src/assets/svg/alarm-clock-time-timer.2.svg" alt="Alarm Clock" />
                <p className="ml-2">Пн-пт 9:00 - 19:00</p>
              </div>
              <div className='flex justify-end'>
                <img src="/src/assets/Footer svg/footerlocation.svg" alt="" />
                <p>г. Москва, улица Свободы 1/7</p>
              </div>
              <div className="mt-[30px] flex space-x-10 justify-end">
                <a href="#"><img className="" src="/src/assets/Footer svg/instagram.svg" alt="Instagram" /></a>
                <a href="#"><img className="" src="/src/assets/Footer svg/vk.svg" alt="VK" /></a>
                <a href="#"><img className="" src="/src/assets/Footer svg/twitter.svg" alt="Twitter" /></a>
                <a href="#"><img className="" src="/src/assets/Footer svg/facebook.svg" alt="Facebook" /></a>
                <a href="#"><img className="" src="https://github.com/noderjan/imglar/blob/main/img/assets/Footer%20svg/youtube.svg" alt="YouTube" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
