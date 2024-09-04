import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  // Effect to update filtered products based on selected categories and subcategories
  useEffect(() => {
    let filtered = products;

    if (category.length > 0) {
      filtered = filtered.filter(product => category.includes(product.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter(product => subCategory.includes(product.subCategory));
    }

    setFilterProducts(filtered);
  }, [category, subCategory, products]);

  // Handle category checkbox change
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  // Handle subcategory checkbox change
  const handleSubCategoryChange = (e) => {
    const value = e.target.value;
    setSubCategory(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  // Toggle filter visibility
  const handleFilterToggle = () => setShowFilter(prevState => !prevState);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t">
      {/* Left section for filter */}
      <div className="min-w-[240px] sm:min-w-[300px]">
        {/* Filter heading is always visible */}
        <div className="flex items-center gap-2 mb-4">
          <p className="text-xl font-semibold">FILTERS</p>
          {/* Only show the toggle icon on screens smaller than 'sm' */}
          <img
            src={assets.dropdown_icon}
            alt="dropdown icon"
            className={`h-4 transition-transform duration-300 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            onClick={handleFilterToggle}
          />
        </div>

        {/* Filter Sections */}
        <div className={`border border-gray-200 py-3 pl-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-5 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4" value="Men" onChange={handleCategoryChange} />
              Men
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4" value="Women" onChange={handleCategoryChange} />
              Women
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4" value="Kids" onChange={handleCategoryChange} />
              Kids
            </label>
          </div>
        </div>

        <div className={`border border-gray-200 py-3 mt-6 pl-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-5 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4" value="Topwear" onChange={handleSubCategoryChange} />
              Topwear
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4" value="Bottomwear" onChange={handleSubCategoryChange} />
              Bottomwear
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4" value="Winterwear" onChange={handleSubCategoryChange} />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Main content or product listing area */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Product sort */}
          <select className="border text-sm border-gray-300 px-2">
            <option value="relevant">Sort by Relevant</option>
            <option value="low">Sort by: High to Low</option>
            <option value="high">Sort by: Low to High</option>
          </select>
        </div>

        {/* Product Listings */}
        <div className="grid grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              price={item.price}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
