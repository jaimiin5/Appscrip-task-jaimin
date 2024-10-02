/* eslint-disable @next/next/no-img-element */
"use client";
import Head from "next/head";  // Import Head for adding schema to <head>
import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as S from "./Home.module.css";
import { CiHeart } from "react-icons/ci";
import FilterOptions from "./FilterOptions/FilterOption";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [productsData, setProductsData] = useState();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProductsData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const recommendDropDown = [
    "Recommended",
    "Newest First",
    "Popular",
    "Price: High to Low",
    "Price: Low to High",
  ];

  return (
    <section className={S.homeSection}>
      <Head>
        <title>Discover Our Products - [Your Store Name]</title>
        <meta
          name="description"
          content="Explore our wide range of products, specially curated for you."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": productsData
                ? productsData.map((product, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                      "@type": "Product",
                      "name": product.title,
                      "image": product.image,
                      "description": product.description,
                      "sku": product.id,
                      "offers": {
                        "@type": "Offer",
                        "priceCurrency": "USD",
                        "price": product.price,
                        "availability": "https://schema.org/InStock"
                      }
                    }
                  }))
                : []
            }),
          }}
        />
      </Head>

      <h1 className={S.sectionTitle}>Discover Our Products</h1>
      <p className={S.sectionDesc}>
        Explore our wide range of products, specially curated for you.
      </p>

      <div className={S.filters}>
        <button className={S.filterButton} onClick={toggleFilter}>
          {isFilterOpen ? "Hide Filter" : "Show Filter"}
        </button>
        <div className={S.dropdown}>
          <button onClick={toggleDropdown} className={S.dropdownButton}>
            <span style={{ display: "flex", alignItems: "center" }}>
              {selectedOption}&nbsp;
              {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </button>
          <div className={`${S.dropdownMenu} ${isDropdownOpen ? S.open : ""}`}>
            {recommendDropDown.map((items, i) => (
              <div
                className={S.dropItems}
                key={i}
                onClick={() => handleOptionSelect(items)}
              >
                {items}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={S.contentContainer}>
        <div className={`${S.filterSidebar} ${isFilterOpen ? S.open : ""}`}>
          <FilterOptions />
        </div>

        <div className={`${S.gridContainer} ${isFilterOpen ? S.shift : ""}`}>
          {productsData &&
            productsData.map((product) => (
              <div key={product.id} className={S.productCard}>
                <div className={S.imageContainer}>
                  <img
                    className={S.productImage}
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className={S.productInfo}>
                  <h2 className={S.productName}>{product.title}</h2>
                  <CiHeart className={S.heartIcon} />
                </div>
                <p className={S.productPrice}>{product.price}$</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
