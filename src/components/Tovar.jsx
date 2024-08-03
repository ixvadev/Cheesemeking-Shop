import React from 'react';

const products = [
  {
    origin: "Стойк, Россия",
    name: "Мезофильная закваска Biochem Lactoferm MSO (20U)",
    price: "1,250₽",
    rating: 4.5,
  },
  {
    origin: "Углич, Россия",
    name: "Мезофильная закваска БК-Углич-5А (1ЕА)",
    price: "650₽",
    rating: 4.5,
  },
  {
    origin: "Chr. Hansen, Дания",
    name: "Мезофильная закваска Hansen Flora Danica (50U)",
    price: "850₽",
    rating: 4.5,
  },
];

const Tovar = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800">Аналогичные товары</h2>
      <div className="flex">
        {products.map((product, index) => (
          <div key={index} className="flex-shrink-0 w-60 p-4 bg-white shadow-lg rounded-lg">
            <div className="bg-gray-200 h-48 flex items-center justify-center rounded-md">
              <img src="https://via.placeholder.com/100" alt={product.name} className="w-24 h-24" />
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500">{product.origin}</div>
              <div className="mt-1 text-md font-semibold text-gray-800">{product.name}</div>
              <div className="mt-2 text-lg font-bold text-orange-600">{product.price}</div>
              <div className="mt-2 flex items-center">
                <div className="text-yellow-500">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <div className="ml-2 text-sm text-gray-500">({product.rating} stars)</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tovar;
