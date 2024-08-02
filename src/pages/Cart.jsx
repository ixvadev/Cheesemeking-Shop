import React from "react";

const Cart = ({card,deleteToCart}) => {
  return (
    <div className="contianer py-[50px] flex flex-wrap gap-[20px]">
      {card.map((item) => (
        <div key={item.id}>
          <div className="w-[215px] h-[330px] bg-white border-[1px] border-[#E7E7E7] rounded-md">
            <img className="p-5" src={item.image} alt={item.title} />
            <div className="px-3">
              <p>{item.title}</p>
              <hr className="mt-2" />
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-[12px]">
                    <span className="text-[16px]">{item.price}₽</span>/ 1 шт.
                  </p>
                  <del className="text-[#FF4F4F] text-[14px]">
                    {item.oldPrice}₽
                  </del>
                </div>
                <div>
                  <button
                    onClick={() => deleteToCart(item)}
                    className="text-white w-20 h-10  bg-orange-500  hover:bg-[#FD9339] rounded-lg text-[14px]"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
