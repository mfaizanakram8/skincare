import React from "react";
import Image from "next/image";
import sImage from "@/components/images/5.png";
import dImage from "@/components/images/6.png";
import fImage from "@/components/images/7.png";
import gImage from "@/components/images/8.png";
import hImage from "@/components/images/Rectangle 3.png";
import productImage from "@/components/images/Group 76.png"; // Example image import

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-light-beige py-16 px-4 sm:px-8">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight">
          The benefits to use our service <br />
          <span>and our products</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mt-4 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper elit id tellus proin aliquam tempus. Pharetra viverra augue{" "}
          <span>egestas feugiat sollicitudin. Posuere vitae ante eget quis.</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full max-w-6xl">
        {/* Left Side (Icons and Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full md:w-7/12">
          {/* Card 1 */}
          <div className="flex flex-col items-start">
            <div className="relative w-16 h-16 mb-4">
              <Image src={hImage} alt="Background Icon" fill style={{ objectFit: "cover" }} />
              <Image
                src={dImage}
                alt="Signature Facial Icon"
                className="absolute inset-0 w-8 h-8 mx-auto mt-[16px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 leading-snug">No Side Effects</h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start">
            <div className="relative w-16 h-16 mb-4">
              <Image src={hImage} alt="Background Icon" fill style={{ objectFit: "cover" }} />
              <Image
                src={fImage}
                alt="Vegan Friendly Icon"
                className="absolute inset-0 w-8 h-8 mx-auto mt-[16px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 leading-snug">Vegan Friendly</h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start">
            <div className="relative w-16 h-16 mb-4">
              <Image src={hImage} alt="Background Icon" fill style={{ objectFit: "cover" }} />
              <Image
                src={gImage}
                alt="Fast Delivery Icon"
                className="absolute inset-0 w-8 h-8 mx-auto mt-[16px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 leading-snug">Fast & Secure Delivery</h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-start">
            <div className="relative w-16 h-16 mb-4">
              <Image src={hImage} alt="Background Icon" fill style={{ objectFit: "cover" }} />
              <Image
                src={sImage}
                alt="For All Skin Types Icon"
                className="absolute inset-0 w-8 h-8 mx-auto mt-[16px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 leading-snug">For All Skin Types</h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper.
            </p>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-5/12 flex justify-center mt-8 md:mt-0">
          <Image
            src={productImage}
            alt="Product Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
