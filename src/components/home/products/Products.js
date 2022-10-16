import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "./../../../assets/icons/Icons";
import { Heart } from "./../../../assets/icons/Icons";

const Products = ({ el, idx }) => {
  return (
    <div>
      <div className="flex relative productBlock">
        <div className="mb-6 rounded">
          <img src={el.image} alt={el.title} className="w-[290px] h-[300px]" />
          <div className="flex items-center justify-between py-2">
            <Link to="/" className="text-black">
              <span className="text-sm font-normal hover:underline">
                {el.name}
              </span>
            </Link>
            <span className="text-sm font-normal">{el.price}som</span>
          </div>
        </div>
        <div className="absolute top-48 right-1 iconsBlock">
          <div className="icons bg-white rounded-full p-2 mb-2 hover:bg-gray-900">
            <Cart />
          </div>
          <div
            className="icons bg-white rounded-full p-2 
                   hover:bg-gray-900"
          >
            <Heart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
