import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/Actions";
import Hero from "../hero/Hero";
import { data } from "../../utils/data";
import Categories from "./categories/Categories";
import Products from "./products/Products";


const Home = () => {

  const dispatch = useDispatch();
  const { products } = useSelector((s) => s);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts(data));
  }, []);

  return (
    <div className="">
      <Hero />
      <div className="container mx-auto px-9">
        <h1 className="gTitle font-bold py-4 text-2xl text-center ">FOR HIM</h1>
        <Categories />

        <div className="flex flex-wrap justify-between items-center">
          {products.allProducts.map((el, idx) => (
            <div key={idx}>
              <Products idx={idx} el={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
