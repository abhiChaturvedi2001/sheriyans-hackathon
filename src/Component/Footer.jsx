import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold mb-4 uppercase font-rubikMaps">
              ECommerce
            </h3>
            <p className="text-gray-600 md:w-80">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam cum ipsam ducimus, facere eius numquam perspiciatis id
              aspernatur aliquid sed!
            </p>
          </div>
          <div className="">
            <h3 className="text-lg font-bold mb-4 font-rubikMaps">Links</h3>
            <p className="text-gray-600">About us</p>
            <p className="text-gray-600">Product</p>
            <p className="text-gray-600">Home</p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 font-rubikMaps ">
              Contact Us
            </h3>
            <p className="text-gray-600">Email: example@email.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
