import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
		arrows:false,
		autoplay: Boolean,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="block-1">
          <div className="flex items-center justify-center h-[36rem]">
            <div className="z-50">
              <span className="text-sm text-white uppercase py-2">new</span>
              <h2 className="text-xl text-white uppercase py-2">Ultra Stretch Trouser</h2>
              <button className="bg-white text-gray-900 px-4 py-2">Show Now</button>
            </div>
          </div>
        </div>
        <div className="block-2">
				<div className="flex items-center justify-center h-[36rem]">
            <div className="z-50">
              <span className="text-sm text-white uppercase py-2">new</span>
              <h2 className="text-xl text-white uppercase py-2">Ultra Stretch Trouser</h2>
              <button className="bg-white text-gray-900 px-4 py-2">Show Now</button>
            </div>
          </div>
        </div>
        <div className="block-3">
				<div className="flex items-center justify-center h-[36rem]">
            <div className="z-50">
              <span className="text-sm text-white uppercase py-2">new</span>
              <h2 className="text-xl text-white uppercase py-2">Ultra Stretch Trouser</h2>
              <button className="bg-white text-gray-900 px-4 py-3 uppercase font-light text-sm">Show Now</button>
            </div>
          </div>
        </div>
      </Slider>
      
    </div>
  );
};

export default Hero;
