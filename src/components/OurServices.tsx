import React from 'react';
import Image from 'next/image';
import iImage from '@/components/images/Rectangle 3.png'; // Rectangular background image
import rImage from '@/components/images/Group 45.png'; // Icon for the first card
import oImage from '@/components/images/Group 46.png'; // Icon for the second card
import pImage from '@/components/images/Group 47.png'; // Icon for the third card
import xImage from '@/components/images/Group 48.png'; // Icon for the fourth card

const OurServices = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-light-beige py-12 '>
      {/* Title Section */}
      <div className='text-center mt-20'>
        <h1 className='text-4xl sm:text-5xl text-black'>
          Come and enjoy our treatment
        </h1>
        <h2 className='text-4xl sm:text-5xl text-black'>to your skin</h2>
      </div>

      {/* Subtitle Section */}
      <div className='w-full max-w-[821px] text-center mt-6'>
        <p className='text-base sm:text-lg'>
          Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper elit id tellus proin aliquam tempus. Pharetra viverra augue egestas feugiat sollicitudin. Posuere vitae ante eget quis.
        </p>
      </div>

      {/* Service Cards Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-[80%]'>
        {/* Card 1 */}
        <div className='bg-light-beige shadow-lg p-6 text-center border border-solid border-customBrown'>
          <div className='relative mb-4 w-[70px] h-[70px] mx-auto'>
            <Image src={iImage} alt="Card background" className='w-full h-full' layout='fill' objectFit='cover' />
            <Image src={rImage} alt="Chemical Peel Treatment Icon" className='absolute inset-0 w-[32px] h-[32px] mx-auto mt-[19px]' />
          </div>
          <h3 className='text-xl sm:text-2xl font-semibold'>Chemical Peel Treatment</h3>
          <p className='mt-2 text-gray-600 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper.</p>
          <button className='mt-4 text-customBrown'>Learn More</button>
        </div>

        {/* Card 2 */}
        <div className='bg-light-beige shadow-lg p-6 text-center border border-solid border-customBrown'>
          <div className='relative mb-4 w-[70px] h-[70px] mx-auto'>
            <Image src={iImage} alt="Card background" className='w-full h-full' layout='fill' objectFit='cover' />
            <Image src={oImage} alt="Lymphatic Drainage Icon" className='absolute inset-0 w-[32px] h-[32px] mx-auto mt-[19px]' />
          </div>
          <h3 className='text-xl sm:text-2xl font-semibold'>Lymphatic Drainage</h3>
          <p className='mt-2 text-gray-600 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper.</p>
          <button className='mt-4 text-customBrown'>Learn More</button>
        </div>

        {/* Card 3 */}
        <div className='bg-light-beige shadow-lg p-6 text-center border border-solid border-customBrown'>
          <div className='relative mb-4 w-[70px] h-[70px] mx-auto'>
            <Image src={iImage} alt="Card background" className='w-full h-full' layout='fill' objectFit='cover' />
            <Image src={pImage} alt="Vascular Blemish Removal Icon" className='absolute inset-0 w-[32px] h-[32px] mx-auto mt-[19px]' />
          </div>
          <h3 className='text-xl sm:text-2xl font-semibold'>Vascular Blemish Removal</h3>
          <p className='mt-2 text-gray-600 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper.</p>
          <button className='mt-4 text-customBrown'>Learn More</button>
        </div>

        {/* Card 4 */}
        <div className='bg-light-beige shadow-lg p-6 text-center border border-solid border-customBrown'>
          <div className='relative mb-4 w-[70px] h-[70px] mx-auto'>
            <Image src={iImage} alt="Card background" className='w-full h-full' layout='fill' objectFit='cover' />
            <Image src={xImage} alt="Signature Facial Icon" className='absolute inset-0 w-[32px] h-[32px] mx-auto mt-[19px]' />
          </div>
          <h3 className='text-xl sm:text-2xl font-semibold'>Signature Facial</h3>
          <p className='mt-2 text-gray-600 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper .</p>
          <button className='mt-12 text-customBrown'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
