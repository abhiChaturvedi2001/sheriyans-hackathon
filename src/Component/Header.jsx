import React, { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="flex bg-white fixed w-full h-auto  justify-between items-center min-h-[8vh] px-8 py-4">
        <div>
          <HiMiniBars3
            onClick={() => setToggle(true)}
            className="text-2xl cursor-pointer"
          />
        </div>
        <h1 className="font-bold uppercase tracking-widest text-3xl font-rubikGlitch ">
          E Commerce{" "}
        </h1>
        <div className="flex relative space-x-5 ">
          <Link to={"/cart"}>
            <FaShoppingCart className="text-2xl cursor-pointer" />
          </Link>
        </div>
      </nav>

      {/* mobile design */}
      <nav
        className={`bg-white fixed z-20 transition-all  duration-200 -left-96 w-[15rem] h-screen ${
          Toggle ? `left-0` : `-left-96`
        }`}
      >
        <RxCross2
          onClick={() => setToggle(false)}
          className="text-2xl cursor-pointer absolute right-0"
        />
        <ul className="px-10 font-rubikMaps py-10 text-3xl font-bold ">
          <Link to={"/"} onClick={() => setToggle(false)}>
            <li>Home</li>
          </Link>
          <Link>
            <li>Products</li>
          </Link>
          <Link>
            <li>About us</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
