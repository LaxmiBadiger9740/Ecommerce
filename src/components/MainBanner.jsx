import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="relative mt-4">
      <img src={assets.main_banner_bg} alt="banner" className="w-full hidden md:block" />
      <img src={assets.main_banner_bg_sm} alt="banner" className="w-full md:hidden" />

      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center md:pl-24 lg:pl-32 xl:pl-40 px-6 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-left max-w-2xl text-gray-800">
          Freshness You Can Trust, Savings You will Love!
        </h1>

        <div className="flex items-center gap-4 mt-6">
          <Link
            to="/products"
            className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3 rounded-full transition"
          >
            Shop now
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="hidden md:block group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            to="/products"
            className="group hidden md:flex items-center gap-2 text-gray-700 font-medium"
          >
            Explore deals
            <img
              src={assets.black_arrow_icon}
              alt="arrow"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;