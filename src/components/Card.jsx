// import React from 'react'

// const API =
// [
//     {
//       "name": "Форма для твердого сыра 1 кг",
//       "price": "1300₽",
//       "oldPrice": "1800₽",
//       "image": "./src/assets/svg/form_for_hard_cheese.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Душистый перец горошком (100г)",
//       "price": "200₽",
//       "oldPrice": "320₽",
//       "image": "./src/assets/svg/pepper_peas.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Красный перец молотый (100г)",
//       "price": "380₽",
//       "oldPrice": "400₽",
//       "image": "./src/assets/svg/red_pepper.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Мускатный орех молотый (100г)",
//       "price": "420₽",
//       "oldPrice": "560₽",
//       "image": "./src/assets/svg/nutmeg.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Форма для твердого сыра 1 кг",
//       "price": "1300₽",
//       "oldPrice": "1800₽",
//       "image": "./src/assets/svg/form_for_hard_cheese.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Душистый перец горошком (100г)",
//       "price": "200₽",
//       "oldPrice": "320₽",
//       "image": "./src/assets/svg/pepper_peas.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Красный перец молотый (100г)",
//       "price": "380₽",
//       "oldPrice": "400₽",
//       "image": "./src/assets/svg/red_pepper.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Мускатный орех молотый (100г)",
//       "price": "420₽",
//       "oldPrice": "560₽",
//       "image": "./src/assets/svg/nutmeg.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Форма для твердого сыра 1 кг",
//       "price": "1300₽",
//       "oldPrice": "1800₽",
//       "image": "./src/assets/svg/form_for_hard_cheese.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Душистый перец горошком (100г)",
//       "price": "200₽",
//       "oldPrice": "320₽",
//       "image": "./src/assets/svg/pepper_peas.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Красный перец молотый (100г)",
//       "price": "380₽",
//       "oldPrice": "400₽",
//       "image": "./src/assets/svg/red_pepper.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     },
//     {
//       "name": "Мускатный орех молотый (100г)",
//       "price": "420₽",
//       "oldPrice": "560₽",
//       "image": "./src/assets/svg/nutmeg.png",
//       "quantity": "1 шт.",
//       "buttonText": "Добавить"
//     }
//   ]

//   const Card = ({ title, price, oldPrice, image }) => {
//     return (
//         <div className="border p-4 m-2 rounded">
//             <img src={image} alt={title} className="w-full h-40 object-cover mb-2" />
//             <h3 className="text-lg font-bold mb-2">{title}</h3>
//             <p className="text-gray-600 mb-2">{price}₽ / 1 шт.</p>
//             <p className="text-red-600 line-through mb-2">{oldPrice}₽</p>
//             <button className="bg-sariq text-white py-1 px-4 rounded">Добавить</button>
//         </div>
//     );
// };
  

// function Card() {
//   return (
//     <div>
//         <div className="w-3/4 p-4">
//                 <div className='flex gap-4 pl-3 pb-4'>
//                     <p className='font-semibold text-sariq border-b-2 border-sariq hover:border-white transition'>Популярные товары</p>
//                     <p className='text-arrow-100 font-semibold'>Акции</p>
//                 </div>
//                 <h2 className='pl-3 py-6 text-2xl text-[#4E2D2D] font-semibold'>Ингредиенты</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {cards.map((card, index) => (
//                         <Card
//                             key={index}
//                             title={card.title}
//                             price={card.price}
//                             oldPrice={card.oldPrice}
//                             image={card.image}
//                         />
//                     ))}
//                 </div>
//                 <h2 className='pl-3 py-6 text-2xl text-[#4E2D2D] font-semibold'>Оборудование</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {cards.map((card, index) => (
//                         <Card
//                             key={index}
//                             title={card.title}
//                             price={card.price}
//                             oldPrice={card.oldPrice}
//                             image={card.image}
//                         />
//                     ))}
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default Card