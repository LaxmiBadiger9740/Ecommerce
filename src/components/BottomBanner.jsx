import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const BottomBanner = () => {
    return (
        <div className="relative mt-20">
            <img src={assets.bottom_banner_image} alt="bottom-banner" className="w-full hidden md:block" />
            <img src={assets.bottom_banner_image_sm} alt="bottom-banner" className="w-full md:hidden" />

            <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center px-4 md:pr-18 lg:pr-24 xl:pr-32 text-black">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-right max-w-72 md:max-w-96 lg:max-w-105 leading-tight">
                    Get Ready for the Season's Best Offers
                </h2>

                <div className="flex items-center mt-6 font-medium">
                    <Link
                        to="/products"
                        className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded-full text-white cursor-pointer"
                    >
                        Browse Offers
                        <img
                            src={assets.white_arrow_icon}
                            alt="arrow"
                            className="hidden md:block transition group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;