import React from "react";
import logoImage from '@/components/images/Logo (1).png';
import Image from "next/image";
import lImage from '@/components/images/Line 7 (1).png';

const Footer = () => {
  return (
    <div className="bg-customBrown w-full py-16 px-10">
      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10">
        {/* Left Section */}
        <div className="flex flex-col space-y-4 max-w-xs">
          <Image
            src={logoImage}
            alt="beauty.skin logo"
            width={200}
            height={50}
            className="object-contain"
          />
          <p className="text-cream text-sm leading-relaxed">
            “Lorem ipsum dolor sit. Lacus nulla rhoncus varius enim velit pharetra varius integer scelerisque. Tristique. Egestas non scelerisque nunc dui platea at.”
          </p>
        </div>

        {/* Right Sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
          <div className="flex flex-col text-cream space-y-2">
            <h1 className="text-white text-lg font-semibold mb-3">About</h1>
            <h4 className="text-sm">Treatment</h4>
            <h4 className="text-sm">Product</h4>
            <h4 className="text-sm">About</h4>
          </div>
          <div className="flex flex-col text-cream space-y-2">
            <h1 className="text-white text-lg font-semibold mb-3">Company</h1>
            <h4 className="text-sm">Contact</h4>
            <h4 className="text-sm">Catalog</h4>
            <h4 className="text-sm">Booking</h4>
          </div>
          <div className="flex flex-col text-cream space-y-2">
            <h1 className="text-white text-lg font-semibold mb-3">Support</h1>
            <h4 className="text-sm">Customer Care</h4>
            <h4 className="text-sm">Contact</h4>
            <h4 className="text-sm">Clinic</h4>
          </div>
          <div className="flex flex-col text-cream space-y-2">
            <h1 className="text-white text-lg font-semibold mb-3">Follow Us</h1>
            <h4 className="text-sm">Instagram</h4>
            <h4 className="text-sm">TikTok</h4>
            <h4 className="text-sm">Youtube</h4>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-10 mb-5">
        <Image 
          src={lImage} 
          alt='divider line' 
          width={1300} 
          height={2} 
          className="object-contain mx-auto"
        />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-5 space-y-4 md:space-y-0 text-cream text-sm">
        <h4>© 2023 Pathfinderstd - All Rights Reserved</h4>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <h4>(208) 555-0112</h4>
          <h4>1901 Thornridge Cir. Shiloh, Hawaii 81063</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
