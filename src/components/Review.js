import React, { useEffect, useState } from 'react';

import RevSlider from "./RevSlider";

const Review = () => {
  return (
    <section id='reviews' className='section bg-secondary w-full'>
      <div className='container'>
        <div className='flex flex-col items-center w-full my-8 '>
        <p className="text-2xl text-black font-semibold capitalize relative
        before:absolute before:rounded-lg before:content before:w-32 before:h-1
         before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-100 to-blue-600 transition-all ease-in-out duration-100">
           What other people say
        </p>
          <p className='subtitle mt-4 font-semibold'>
          Customer Reviews
          </p>
        </div>
        <RevSlider />
      </div>
    </section>
  );
};

export default Review;