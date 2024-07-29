import React from 'react'

function Ingredient() {
  return (
    <div>
        <div class="max-w-xs mx-auto mt-8">
            {/* <!-- Ingredients Section --> */}
            <div class="bg-yellow-100 rounded-lg mb-4">
                <div class="flex gap-[5px] bg-[#FBE8BB] px-4 py-2 rounded-t-lg">
                    <img src=".../../public/svg/cheese.logo.svg" alt="" />
                    <h2 class="font-semibold text-gray-700">Ингредиенты</h2>
                </div>
                <ul class="divide-y divide-gray-200">
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Закваски для сыра</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Ферменты для сыра</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Хлористый кальций</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Плесень для сыра</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Кисломолочные закваски</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Красители для сыра</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Специи для сыра</a></li>
                </ul>
            </div>

            {/* <!-- Equipment Section --> */}
            <div class="bg-yellow-100 rounded-lg">
                <div class="bg-yellow-200 px-4 py-2 rounded-t-lg">
                    <h2 class="font-semibold text-gray-700">Оборудование</h2>
                </div>
                <ul class="divide-y divide-gray-200">
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Формы для сыра</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Латексное покрытие</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Воск для сыра</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Термоусадочные пакеты</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Дренажные коврики</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Дренажные мешки и салфетки для прессования</a></li>
                    <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-yellow-50">Дренажные контейнеры</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Ingredient