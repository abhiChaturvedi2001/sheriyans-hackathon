import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaSearchengin } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Star from "./Star";
import Footer from "./Footer";
import SP from "./SP";

const SinglePage = () => {
  const [singleProductData, setSingleProductData] = useState([]);
  let [count, setCount] = useState(1);
  const { id } = useParams();

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
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await data.json();
    setSingleProductData(json);
  };

  return singleProductData === null ? (
    <h1>Loadingg......</h1>
  ) : (
    <>
      <div className=" min-h-screen">
        <SP title={"Single Product Page"} />
        <div className="bg-white text-center shadow-lg z-10 flex  w-[70rem] max-lg:w-[40rem] max-md:w-[32rem] px-5 py-5 min-h-[40vh] absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            className="w-[300px] max-md:mx-auto h-[300px]"
            src={singleProductData.image}
            alt=""
          />
          <div className="ml-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-bold">{singleProductData.title}</h1>
                <h1 className="font-bold">$ {singleProductData.price}</h1>
              </div>
              <Star
                rate={singleProductData?.rating?.rate}
                count={singleProductData?.rating?.count}
              />
            </div>
            <p className="mt-4">{singleProductData.description}</p>
            <p className="mt-3">
              Size <span>M X L XL</span>{" "}
            </p>
            <div className="flex mt-4">
              <div className="bg-[#f6f6f6] flex justify-around items-center w-[10rem] px-5 py-2">
                <div className="cursor-pointer" onClick={handleDecrement}>
                  -
                </div>
                <div className="cursor-pointer ">{count}</div>
                <div className="cursor-pointer " onClick={handleIncrement}>
                  +
                </div>
              </div>
              <div className="ml-4 bg-[#f6f6f6] flex justify-around items-center w-[10rem] px-5 py-2">
                <CiHeart className="cursor-pointer " />
                <FaSearchengin className="cursor-pointer " />
                <FaShoppingCart className="cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
