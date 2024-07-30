import React from 'react'

function Ingredient() {
  return (
    <div>
        <div className="max-w-xs mx-auto mt-8">
            {/* <!-- Ingredients Section --> */}
            <div className="bg-yellow-100 rounded-lg mb-4">
                <div className="flex gap-[5px] bg-[#FBE8BB] px-4 py-2 rounded-t-lg">
                    <img src="./src/assets/svg/cheese.logo.svg" alt="" />
                    <h2 className="font-semibold ">Ингредиенты</h2>
                </div>
                <ul className="divide-y divide-gray-200">
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Закваски для сыра</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Ферменты для сыра</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Хлористый кальций</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Плесень для сыра</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Кисломолочные закваски</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Красители для сыра</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Специи для сыра</a></li>
                </ul>
            </div>

            {/* <!-- Equipment Section --> */}
            <div className="bg-yellow-100 rounded-lg">
                <div className="bg-yellow-200 px-4 py-2 rounded-t-lg flex">
                    <img src="/src/assets/svg/cheese.logo.svg" alt="" />
                    <h2 className="font-semibold ">Оборудование</h2>

                </div>
                <ul className="divide-y divide-gray-200">
                    <li><a href="#" className="w-[280px] h-[48px] hover:bg-yellow-50">Формы для сыра</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Латексное покрытие</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Воск для сыра</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Термоусадочные пакеты</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Дренажные коврики</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Дренажные мешки и салфетки для прессования</a></li>
                    <li><a href="#" className="block px-4 py-2  hover:bg-yellow-50">Дренажные контейнеры</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Ingredient