import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, deleteFromWishlist } from "../../../redux/actions/Actions";
import { Cart } from "./../../../assets/icons/Icons";
import { Heart } from "./../../../assets/icons/Icons";
import { addToWishlist } from "../../../redux/actions/Actions";
import { AiFillHeart } from "react-icons/ai";
const Products = ({ el, idx }) => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state);
  const item = wishlist.find((item) => item.id === el.id);

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
          <div
            onClick={() => dispatch(addCart(el))}
            className="icons bg-white rounded-full p-2 mb-2 hover:bg-gray-900"
          >
            <Cart />
          </div>
          <div
            onClick={() => {
              return item
                ? item.liked
                  ? dispatch(deleteFromWishlist(el))
                  : ""
                : dispatch(addToWishlist(el));
            }}
            className="icons bg-white rounded-full p-2 hover:bg-gray-900"
          >
            <AiFillHeart
              className={`${
                item
                  ? item.liked
                    ? "text-red-800"
                    : "text-gray-100"
                  : "text-gray-100"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
