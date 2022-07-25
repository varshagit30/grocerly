import React from 'react';
import b from "./img/bike.webp";
import {motion} from "framer-motion";

const Grocerly = () => {
  return (
    <div className="w-full py-10 px-8 items-center justify-center">
        <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
            <motion.div 
            whileHover={{scale : 0.9, opacity : 1.4}}

            >
            <img className=" w-[300px] h-[300px] mx-auto my-4 "  src ={b} alt="app1" />
            </motion.div>
            <div className="flex flex-col items-center justify-center">
                <p className=" text-textColor font-bold text-4xl">Get the Grocerly app</p>
                <h1 className=" text-gray-500 sm:text-xl text-md font-semibold py-1">Get live order tracking</h1>
                <h1 className=" text-gray-500 sm:text-xl text-md font-semibold ">Get latest feature updates</h1>
                <p className=" py-8">
                Did you ever imagine that the freshest of fruits and vegetables, top quality pulses and food grains, dairy products and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? 
                India’s biggest comprehensive online megastore, grocerly.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. 
                From household staples to fresh groceries, grocerly has everything you need for your daily needs. 
                grocerly.com is convenience personified.
                </p>

            </div>
            </div>
        
    </div>
  )
}

export default Grocerly;