import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);
  console.log(latestProduct, "latestProduct");

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dolorem
          distinctio dicta cum nam, quis illo praesentium laboriosam, autem quia
          maxime laborum expedita quibusdam?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        
      {latestProduct.map((item) => (
          <ProductItem
            id={item._id}
            image={item.image}
            key={item._id} // Using item.id as the key is preferable to index
            price={item.price}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
