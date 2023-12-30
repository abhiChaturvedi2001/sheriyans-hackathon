import React from "react";
import { Link } from "react-router-dom";
import Star from "./Star";

const ProductCard = ({ data, getCategory }) => {
  const { id, image, title, category, price } = data;
  const { rate, count } = data?.rating;
  return (
    <>
      <div className="w-[15rem] mt-4 min-h-[250px] cursor-pointer duration transition-all px-4 py-5 hover:shadow-lg ">
        <img className="w-full h-full" src={image} alt="" />
        <div className="mt-2">
          <div className="flex  justify-between ">
            <h1>{title.substring(0, 4)}</h1>
            <p>{category}</p>
          </div>
          <div className="flex justify-between">
            <h1>${price}</h1>
            <Star rate={rate} count={count} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
