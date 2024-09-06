import React, { useContext, useEffect, useState, useCallback } from "react";
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
  const [sortType, setSortType] = useState('relevant');

  // Function to filter products based on selected categories and subcategories
  const filterProductsList = useCallback(() => {
    let filtered = products;

    if (category.length > 0) {
      filtered = filtered.filter(product => category.includes(product.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter(product => subCategory.includes(product.subCategory));
    }

    return filtered;
  }, [category, subCategory, products]);

  // Effect to update filtered products based on selected categories and subcategories
  useEffect(() => {
    setFilterProducts(filterProductsList());
  }, [filterProductsList]);

  // Function to sort products
  const sortProductList = useCallback((products) => {
    const sorted = [...products];

    switch (sortType) {
      case 'low-high':
        return sorted.sort((a, b) => a.price - b.price);
      case 'high-low':
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  }, [sortType]);

  // Effect to sort products when sortType changes
  useEffect(() => {
    setFilterProducts(sortProductList(filterProductsList()));
  }, [sortType, filterProductsList, sortProductList]);

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
        <div className="flex items-center gap-2 mb-4">
          <p className="text-xl font-semibold">FILTERS</p>
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
          <select onChange={(e) => setSortType(e.target.value)} className="border text-sm border-gray-300 px-2">
            <option value="relevant">Sort by Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Listings */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
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
