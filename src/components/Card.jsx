// import { useEffect, useState } from "react";

const Index = () => {
  // const API = 'https://dummyjson.com/c/6baf-ff76-4e80-a140';
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await fetch(API);
  //       const result = await response.json();
  //       const products = result.products;
  //       setData(products);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getData();
  // }, []);

  const data = [
    {
      "title": "Мезофильная закваска Danisco CHOOZIT MM...",
      "price": "1300",
      "oldPrice": "1800",
      "image": "https://raw.githubusercontent.com/DevResHub/CARD-PRODUCT-API/main/Rectangle%2065.png"
    },
    {
      "title": "Душистый перец горошком (100г)",
      "price": "200",
      "oldPrice": "320",
      "image": "https://raw.githubusercontent.com/DevResHub/CARD-PRODUCT-API/main/Rectangle%2065%20(3).png"
    },
    {
      "title": "Красный перец молотый (100г)",
      "price": "380",
      "oldPrice": "400",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(2).png?raw=true"
    },
    {
      "title": "Мускатный орех молотый (100г)",
      "price": "420",
      "oldPrice": "560",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(1).png?raw=true"
    },
    {
      "title": "Форма для твердого сыра 1 кг",
      "price": "1330",
      "oldPrice": "1800",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(4).png?raw=true"
    },
    {
      "title": "Форма для твердого сыра 1 кг",
      "price": "200",
      "oldPrice": "320",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(5).png?raw=true"
    },
    {
      "title": "Красный перец молотый (100г)",
      "price": "380",
      "oldPrice": "400",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(6).png?raw=true"
    },
    {
      "title": "Мускатный орех молотый (100г)",
      "price": "420",
      "oldPrice": "560",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(7).png?raw=true"
    }
  ]

  return (
    <div className="py-[10px]  bg-[#FFFBED] flex flex-wrap  gap-2">
      {data.map((item) => (
        <div key={item.id}>
          <div className="w-[215px] h-[330px] bg-white border-[1px] border-[#E7E7E7] rounded-md">
            <img className="p-5" src={item.image} alt={item.title} />
            <div className="px-3">
              <p>{item.title}</p>
              <hr className="mt-2" />
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-[12px]"><span className="text-[16px]">{item.price}₽</span>/ 1 шт.</p>
                    <del className="text-[#FF4F4F] text-[14px]">{item.oldPrice}₽</del>
                </div>
                <div>
                  <button className="text-white w-20 h-10  bg-orange-500  hover:bg-[#FD9339] rounded-lg text-[14px]">Добавить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;