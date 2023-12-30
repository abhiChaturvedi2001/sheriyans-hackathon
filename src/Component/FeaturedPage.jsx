import React from "react";
import ProductCard from "./ProductCard";

const FeaturedPage = () => {
    
  return (
    <>
      <div className="h-screen">
        <h1 className="text-center font-bold my-5 text-3xl">
          Featured Products
        </h1>
        <div>
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default FeaturedPage;
