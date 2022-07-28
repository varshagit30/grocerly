import React from 'react';
import logo from "./img/logo.svg";
import { social } from '../utility/data';

const Footer = () => {
  return (
    <footer className=' max-w-[1240px] py-16 mt-4 bg-gray-200 flex flex-col w-full p-8 gap-2 rounded-md '>
      <div className='container mx-auto w-full h-full'>
        <div className=' w-full flex flex-col lg:flex-row space-y-10 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center '>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-black text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img src={logo} className=" flex items-center  w-10 h-10" alt='' />
            
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Grocerly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;