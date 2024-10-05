'use client';
import { useState } from "react";
import Image from "next/image";
import leftArrow from "@/components/images/Group 23.png"; // Path to left arrow image
import rightArrow from "@/components/images/Group 22.png"; // Path to right arrow image
import customer1 from "@/components/images/Ellipse 4 (2).png"; // Path to customer image 1
import customer2 from "@/components/images/Ellipse 4 (1).png"; // Path to customer image 2
import customer3 from "@/components/images/Ellipse 4.png"; // Path to customer image 3

const testimonials = [
  {
    image: customer1,
    quote: "A such amazing product",
    name: "James Bell",
    text: "Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper et elit lobortis aliquam lorem.",
    rating: 5,
  },
  {
    image: customer2,
    quote: "I feel fresh when used it",
    name: "Jacob Jones",
    text: "Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper et elit lobortis aliquam lorem.",
    rating: 5,
  },
  {
    image: customer3,
    quote: "Top product this year",
    name: "Dianne Russell",
    text: "Lorem ipsum dolor sit amet consectetur. Tortor morbi adipiscing ullamcorper et elit lobortis aliquam lorem.",
    rating: 5,
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="py-16 bg-[#fdf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with arrows */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold flex-grow text-left">
            What customer said about our{""}
            <span className="block"> services and products</span>
          </h2>

          {/* Left and Right Arrows next to heading */}
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="focus:outline-none"
            >
              <Image src={leftArrow} alt="Previous" width={40} height={40} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="focus:outline-none"
            >
              <Image src={rightArrow} alt="Next" width={40} height={40} />
            </button>
          </div>
        </div>

        {/* Review Button */}
        <div className="flex self-start mb-8">
          <button className="bg-[#6b4226] text-left hover:bg-[#8b5a36] text-white px-6 py-3 rounded-lg">
            Write Review
          </button>
        </div>

        <div className="relative">
          {/* Testimonials Cards */}
          <div className="flex justify-center min-h-[300px]"> {/* Adjust min height */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === current ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm text-center relative">
                  {/* Picture placed above the card */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 mt-12">{testimonial.quote}</h3>
                  <p className="text-gray-500 mb-4">{testimonial.text}</p>
                  <p className="font-bold">{testimonial.name}</p>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;