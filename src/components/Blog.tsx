import React from 'react'
import Image from 'next/image'
import aliImage from '@/components/Images/image1.png'
import razaImage from '@/components/Images/image2.png'

const Blog = () => {
  return (
    <div className='p-8 md:p-20 bg-light-beige'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-3xl text-black'>
          Our blog & articles all about{" "}
          <span className='block'>beauty and cosmetic</span>
        </h1>
        <p className='mt-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur.</p>
      </div>

      <div className='flex flex-wrap justify-center mt-8 space-x-6'>
        {/* Article 1 */}
        <div className='flex flex-col w-80 sm:w-72 m-6 min-h-[500px] justify-between'>
          <Image
            src={aliImage}
            alt='Image of acne serum brands'
            height={300}
            width={400}
            className='rounded-lg'
          />
          <p className='mt-2 text-gray-500'>January 06, 2023</p>
          <h2 className='text-lg md:text-xl font-semibold'>Top 5 brands who sell acne serum</h2>
          <p className='text-sm text-gray-700 mt-2'>
            Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper elit id tellus proin aliquam tempus.
          </p>
          <button className='bg-customBrown p-2 text-white self-start mt-4 rounded-md'>Read More</button>
        </div>

        {/* Article 2 */}
        <div className='flex flex-col w-80 sm:w-72 m-6 min-h-[500px] justify-between'>
          <Image
            src={razaImage}
            alt='Image of vegan acne serum brands'
            height={300}
            width={400}
            className='rounded-lg'
          />
          <p className='mt-2 text-gray-500'>January 06, 2023</p>
          <h2 className='text-lg md:text-xl font-semibold'>Top 5 brands selling vegan acne serum</h2>
          <p className='text-sm text-gray-700 mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, a incidunt? A, nulla voluptatem.
          </p>
          <button className='bg-customBrown p-2 text-white self-start mt-4 rounded-md'>Read More</button>
        </div>

        {/* Article 3 */}
        <div className='flex flex-col w-80 sm:w-72 m-6 min-h-[500px] justify-between'>
          <Image
            src={aliImage}
            alt='Image of daily skincare routine'
            height={300}
            width={400}
            className='rounded-lg'
          />
          <p className='mt-2 text-gray-500'>January 06, 2023</p>
          <h2 className='text-lg md:text-xl font-semibold'>How to care for your skin as a daily worker</h2>
          <p className='text-sm text-gray-700 mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id accusantium facere dolorem dolorum magnam quo adipisci.
          </p>
          <button className='bg-customBrown p-2 text-white self-start mt-4 rounded-md'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Blog