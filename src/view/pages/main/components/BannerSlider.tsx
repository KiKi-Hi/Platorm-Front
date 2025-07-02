import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BannerSlider() {
  const banners = [
    '/assets/img/banner/001.png',
    '/assets/img/banner/002.png',
    '/assets/img/banner/003.png',
    '/assets/img/banner/004.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Slider ref={sliderRef} {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img
              src={banner}
              alt={`배너 이미지 ${index + 1}`}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className="mt-4 flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              sliderRef.current?.slickGoTo(index);
            }}
            className={`size-3 rounded-full ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-blue-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerSlider;
