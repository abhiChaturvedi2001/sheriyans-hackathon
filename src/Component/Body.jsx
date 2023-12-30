import React from "react";
import ProductPage from "./ProductPage";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <div className="banner-container">
        <div className="text-center">
          <h1 className="text-white font-rubikMaps tracking-wide text-7xl max-md:text-4xl ">
            Get Started
          </h1>
          <h1 className="text-white font-rubikMaps  text-7xl max-md:text-3xl ">
            Your Favirot Shopping
          </h1>
          <button className="mt-4 text-xl border text-white px-4 py-4 cursor-pointer  font-rubikGlitch  w-[15rem] transition-all duration-100 hover:text-white hover:bg-black hover:border-none ">
            <a href="#product">Shop Now</a>
          </button>
        </div>
      </div>
      <ProductPage />
      <Footer />
    </>
  );
};

export default Body;
