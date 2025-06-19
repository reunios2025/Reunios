import React, { useState } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

const images = [
  { src: '/Reunios/assets/corosal-img1.jpg', label: 'Kihei' },
  { src: '/Reunios/assets/corosal-img2.jpg', label: 'Park City' },
  { src: '/Reunios/assets/corosal-img3.jpg', label: 'Marina Dunes' },
  { src: '/Reunios/assets/corosal-img4.jpg', label: 'Indio' },
  { src: '/Reunios/assets/corosal-img5.jpg', label: 'Extra 1' },
  { src: '/Reunios/assets/corosal-img6.jpg', label: 'Extra 2' },
  { src: '/Reunios/assets/corosal-img7.jpg', label: 'Extra 3' }
];

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Explore Destinations
      </h2>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {images.map((img, idx) => {
            const modIndex = idx % images.length;
            const active = modIndex === (currentSlide + 1) % images.length;
            const upcoming = modIndex === (currentSlide + 2) % images.length;

            return (
              <div key={idx} className="px-3">
                <div
                  className={classNames(
                    'transition-transform duration-500 flex flex-col items-center',
                    {
                      'scale-125 z-10': active,
                      'scale-105 z-0': upcoming,
                      'scale-95 opacity-80': !active && !upcoming
                    }
                  )}
                >
                  <div className="w-full rounded-xl overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.label}
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <p className="mt-4 text-gray-800 text-lg font-medium">
                    {img.label}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
