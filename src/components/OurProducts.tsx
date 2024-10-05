import React from "react";
import Image from "next/image";
import pImage from "@/components/images/bx-chevron-right 1.png";
import xImage from "@/components/images/1.png";
import cImage from "@/components/images/2.png";
import vImage from "@/components/images/3.png";
import bImage from "@/components/images/4.png";

const productImages = [xImage, cImage, vImage, bImage]; // Array of product images

const OurProducts = () => {
  return (
    <div className="h-auto bg-light-beige flex flex-col items-center w-full py-10">
      <div className="flex flex-col w-full max-w-6xl">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-5xl ml-4 mr-4">
            Let’s take a look{" "}
            <span className="block">our beauty products</span>
          </h1>
          <button className="bg-customBrown text-light-beige px-6 py-3 rounded-lg font-semibold hover:bg-light-orange hover:text-white transition-colors duration-300 mr-4">
            Discover Now
          </button>
        </div>

        <div className="flex flex-row mt-10 items-center">
          <h2 className="text-3xl ml-4">New Arrivals</h2>
          <h2 className="text-3xl ml-auto mr-4">Recommended</h2>
          <Image
            src={pImage}
            alt="arrow"
            width={23}
            height={23}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 mx-4">
          {/* Product Cards */}
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={productImages[index % productImages.length]} // Alternate through the images
                  alt="Product"
                  width={367}
                  height={400}
                  className="object-contain"
                />
                <h3 className="text-lg font-bold">Product {index + 1}</h3>
                <h4>${(Math.random() * 100 + 100).toFixed(2)}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
