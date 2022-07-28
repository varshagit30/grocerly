import React from 'react';
import { review } from '../utility/data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, Pagination } from 'swiper';


const RevSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {review.map((item, index) => {
          const { authorImg, customerText, customerName, customerMain } = item;
          return (
            <SwiperSlide key={index}>
              <div
                className='flex flex-col lg:flex-row gap-12 lg:gap-32 mt-10 '
              >
                <div
                  className='w-48 h-48 lg:w-[210px] lg:h-[328px] '
                >
                  <img className='rounded-2xl' src={authorImg} alt='' />
                </div>
                <div
                  className='flex flex-col max-w-3xl mt-10'
                >
                  <h5 className='font-body text-xl mb-8 italic font-normal'>
                    {customerText}
                  </h5>
                  <div>
                    <p className='text-lg text-orange-400'>{customerName}</p>
                    <p>{customerMain}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default RevSlider;