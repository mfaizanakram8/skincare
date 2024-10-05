import React from "react";
import Image from "next/image";
import oImage from "@/components/images/image (2).png";

const About = () => {
  return (
    <div className="w-full h-auto lg:h-[600px] py-12 bg-gradient-to-r from-white via-light-beige to-dark-beige">
      <div className="flex flex-col lg:flex-row items-center justify-between h-full bg-customBrown p-6 lg:p-10 rounded-lg">
        {/* Left Section: Image */}
        <div className="w-full lg:w-[35%] mt-8 lg:mt-28 lg:ml-16 flex justify-center lg:block">
          <Image
            src={oImage}
            alt="Product Image"
            width={658}
            height={735}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-[55%] mt-8 lg:mt-0 lg:pl-10 text-center lg:text-left px-4 lg:px-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-5">
            We always open for whoever wants to know about us
          </h1>
          <p className="text-white mb-5 leading-relaxed text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing
            ullamcorper elit id tellus proin aliquam tempus. Pharetra viverra
            augue egestas feugiat sollicitudin. Posuere vitae ante eget quis.
          </p>
          <p className="text-white mb-8 leading-relaxed text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing
            ullamcorper elit id tellus proin aliquam tempus. Pharetra viverra
            augue egestas feugiat sollicitudin. Posuere vitae ante eget quis.
            Aliquam scelerisque enim id quis neque elementum congue.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-white text-customBrown px-6 py-3 rounded-lg font-semibold hover:bg-light-orange hover:text-white transition-colors duration-300 mb-3">
              Discover Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
