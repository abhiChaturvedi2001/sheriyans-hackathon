import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const getUnique = (data, property) => {
    let newVal = data.map((items) => {
      return items[property];
    });

    return (newVal = ["All", ...new Set(newVal)]);
  };
  const getCategory = getUnique(productData, "category");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const json = await data.json();
    setProductData(json);
    setFilterData(json);
  };

  const handleFilter = (btn) => {
    const filter = productData.filter((items) => {
      if (items.category === btn) {
        return items;
      } else if (btn === "All") {
        return items;
      }
    });
    setFilterData(filter);
  };

  return (
    <>
      <div>
        <h1 className="text-center my-4 text-2xl tracking-wider font-bold font-rubikMaps capitalize">
          Purchase online in ECOMMERCE{" "}
        </h1>
        <div className="flex justify-center items-center h-[10vh] max-md:px-1">
          {getCategory.map((btn) => {
            return (
              <>
                <button
                  onClick={() => handleFilter(btn)}
                  className="border ml-3 px-3 max-md:px-1 py-1 transition-all duration-75 hover:bg-black hover:text-white "
                >
                  {btn}
                </button>
              </>
            );
          })}
        </div>
        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-3 max-md:grid-cols-2 gap-x-40 w-[70%] mx-auto justify-center gap-y-4 items-center  justify-items-center ">
          {filterData.map((prod) => {
            return (
              <Link to={`/singlePage/${prod.id}`}>
                <ProductCard data={prod} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
