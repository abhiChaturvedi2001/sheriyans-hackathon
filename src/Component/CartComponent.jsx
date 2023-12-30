import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const CartComponent = () => {
  let [count, setCount] = useState(1);
  const handleDecrement = () => {
    if (count > 1) {
      count--;
      setCount(count);
    }
  };
  const handleIncrement = () => {
    count++;
    setCount(count);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white shadow-md w-[62rem] px-10 h-[50vh]">
          <div className="bg-[#f6f6f6] w-full shadow-md mt-5 py-4 rounded-md font-bold flex justify-around">
            <p>Product</p>
            <p>Price</p>
            <p>Quanitity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <div className="mt-4 flex justify-between  items-center">
            <div className="flex items-center">
              <img
                className="w-[100px]"
                src="https://template.hasthemes.com/hurst-v1/hurst/img/product/2.jpg"
                alt=""
              />
              <div className="text-[2px] ml-3">
                <h2>Product Name</h2>
                <p>Color:Black</p>
                <p>Size : 3xl</p>
              </div>
            </div>
            <p>$56.00</p>
            <div className="bg-[#f6f6f6] flex justify-around items-center w-[10rem] px-5 ">
              <div className="cursor-pointer" onClick={handleDecrement}>
                -
              </div>
              <div className="cursor-pointer ">{count}</div>
              <div className="cursor-pointer " onClick={handleIncrement}>
                +
              </div>
            </div>
            <div>$127.00</div>
            <div>
              <RxCross2 className="text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
