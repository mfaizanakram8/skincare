import React from "react";
import Image from "next/image";
import grImage from "@/components/images/image.png";
import Link from "next/link";
import rImage from "@/components/images/logoipsum-227.png";
import sImage from "@/components/images/logoipsum-222.png";
import vImage from '@/components/images/Group 5.png';
import aImage from "@/components/images/Group 4.png";
import qImage from "@/components/images/Group 6.png";
import lImage from "@/components/images/Group 50.png";
import nImage from "@/components/images/Group 8.png";
import pImage from '@/components/images/Line 2.png'; // Upper line
import oImage from '@/components/images/Line 3.png'; // Bottom line
import iImage from '@/components/images/Line 4.png'; // Partition line 1
import uImage from '@/components/images/Line 5.png'; // Partition line 2
import yImage from '@/components/images/Line 6.png'; // Partition line 3
import fImage from '@/components/images/Line 7.png';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-white via-light-beige to-dark-beige w-full min-h-[768px]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side - Logo, Heading, Text, and Button */}
        <div className="flex items-center w-full md:w-1/2 p-8">
          <div className="w-1 h-full flex items-start">
            <Image
              src={lImage}
              alt="beauty.skin logo"
              width={60}
              height={700}
              className="object-contain h-[50vh] md:h-[60vh] lg:h-[70vh]"
            />
          </div>
          <div className="ml-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Careful to Choose{" "}
              <span className="text-customBrown">skincare</span> for your skin
            </h1>
            <p className="text-sm md:text-lg mb-8 md:mb-14">
              Lorem ipsum dolor sit amet consectetur. Vel nulla corporis, libero
              delectus at amet quam. Laudantium asperiores, sed cum, ipsum porro
              voluptatem.
            </p>
            <Link
              href="#"
              className="mr-8 border border-transparent px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg bg-customBrown text-white w-40 md:w-60 h-10 md:h-14"
            >
              Discover now
            </Link>
          </div>
        </div>

        {/* Right Side - Main Image with Label */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center mt-12 md:mt-24">
          <Image src={grImage} alt="Main image" width={512} height={512} />
          <div className="absolute bottom-[-13px] left-[33px] z-10">
            <Image
              src={nImage}
              alt="New label"
              width={80}
              height={80}
              className="z-20 md:w-[100px] md:h-[100px]"
            />
          </div>
        </div>
      </div>

      {/* Partition Table with Logos */}
      <div className="flex flex-col items-center w-full mt-20 p-4">
        <div className="flex flex-col items-center">
          <Image src={pImage} alt="Upper Line" className="w-[80%]" />
          <div className="flex flex-wrap justify-center p-4 relative">
            {/* Logos in a Row */}
            <div className="flex items-center mx-2 mb-4">
              <Image
                src={rImage}
                alt="Logo 1"
                width={128}
                height={128}
                className="mx-2 w-auto"
              />
              <Image src={iImage} alt="Partition Line" className="w-1/2 hidden md:block h-20" /> {/* Height increased */}
            </div>
            <div className="flex items-center mx-2 mb-4">
              <Image
                src={aImage}
                alt="Logo 2"
                width={128}
                height={128}
                className="mx-2 w-auto"
              />
              <Image src={uImage} alt="Partition Line" className="w-1/2 hidden md:block h-20" /> {/* Height increased */}
            </div>
            <div className="flex items-center mx-2 mb-4">
              <Image
                src={sImage}
                alt="Logo 3"
                width={128}
                height={128}
                className="mx-2 w-auto"
              />
              <Image src={yImage} alt="Partition Line" className="w-1/2 hidden md:block h-20" /> {/* Height increased */}
            </div>
            <div className="flex items-center mx-2 mb-4">
              <Image
                src={qImage}
                alt="Logo 4"
                width={128}
                height={128}
                className="mx-2 w-auto"
              />
              <Image src={fImage} alt="Partition Line" className="w-1/2 hidden md:block h-20" /> {/* Height increased */}
            </div>
            <div className="flex items-center mx-2 mb-4">
              <Image
                src={vImage}
                alt="Logo 5"
                width={128}
                height={128}
                className="mx-2 w-auto"
              />
            </div>
          </div>
          <Image src={oImage} alt="Bottom Line" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
