/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { css } from '@emotion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const wrapperStyle = css`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    position: relative;
`;

const slideImageStyle = css`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const chipStyle = css`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
`;

const banners = [
    '/assets/img/banner/001.png',
    '/assets/img/banner/002.png',
    '/assets/img/banner/003.png',
    '/assets/img/banner/004.png',
];

function BannerSlider() {
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
        <div css={wrapperStyle}>
            <Slider ref={sliderRef} {...settings}>
                {banners.map((banner, index) => (
                    <div key={index}>
                        <img
                            src={banner}
                            alt={`배너 이미지 ${index + 1}`}
                            css={slideImageStyle}
                        />
                    </div>
                ))}
            </Slider>

            <div css={chipStyle}>
                {currentSlide + 1} / {banners.length}
            </div>
        </div>
    );
}

export default BannerSlider;
