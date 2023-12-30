import React from "react";
import SP from "./SP";
import CartComponent from "./CartComponent";
import Footer from "./Footer";

const Cart = () => {
  const buttons = [
    {
      id: "",
      btnName: "Shopping Cart",
    },
    {
      id: "",
      btnName: "Wishlist",
    },
    {
      id: "",
      btnName: "Checkout",
    },
    {
      id: "",
      btnName: "Order Complete",
    },
  ];
  return (
    <>
      <div className="">
        <SP title={"Shopping Cart"} />
        <div>
          <div className="flex justify-center flex-wrap items-center h-[20vh]">
            {buttons.map((btn) => {
              return (
                <button className=" text-center text-white font-bold font-rubikMaps px-10 w-[15rem] bg-[#c8a165] py-4 ml-4">
                  {btn.btnName}
                </button>
              );
            })}
          </div>
          <CartComponent />
          <div className="flex justify-around my-10 w-[70%]  max-xl:flex-wrap mx-auto max-md:mt-[5rem]">
            <div className="left w-[55%] max-md:w-[100%]  h-[25vh] px-5 py-3 shadow-xl">
              <h1>Coupon Discount</h1>
              <p>Enter your coupon code if you have one!</p>
              <input
                type="text"
                className="py-1 px-3 mt-2 w-full border"
              />{" "}
              <br />
              <button className="border mt-3 px-2 py-2 bg-pink-900 text-white border-none">
                Apply Coupon
              </button>
            </div>
            <div className="right w-[30rem] min-h-[25vh] px-5 py-3 shadow-xl">
              <h1>Payement Details</h1>
              <div className=" px-4">
                <div className="flex justify-between py-1">
                  <p>Cart Total</p>
                  <p>$ 50</p>
                </div>
                <div className="flex justify-between border-t-2 py-1">
                  <p>Cart SubTotal</p>
                  <p>$150</p>
                </div>
                <div className="flex justify-between border-t-2 py-1">
                  <p>Vat</p>
                  <p>$50</p>
                </div>
                <div className="flex justify-between border-t-2 py-2">
                  <p>Order total</p>
                  <p>$10.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
