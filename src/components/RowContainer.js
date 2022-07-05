import React from 'react';
import milk from "./img/milk.png";
import { MdShoppingCart} from "react-icons/md";
import { motion } from 'framer-motion';

const RowContainer = ({ flag }) => 
{
  return (
    <div 
    className={' w-full my-12  ${ flag ? "overflow-x-scroll" : "overflow-x-hidden" }'}
    >
        <div className="w-300 md:w-340 h-auto p-1 bg-cardOverlay rounded-lg hover:drop-shadow-lg backdrop-blur-lg">
            <div className="w-full flex items-center justify-between">
                <motion.img whileHover={{scale:1.2}} src ={milk} alt="milk" className="w-60 rounded-lg"/>
                <motion.div  whileTap={{scale:0.75}} className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer hover:shadow-md">
                    <MdShoppingCart className="text-white"
                    />
                    
                </motion.div>

            </div>

            <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg mr-2">Diary Products
                </p>
                <p className="mt-1 text-sm text-gray-500 mr-1">35 Calories</p>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor mr-1">
                        <span className="text-sm text-red-500 mr-1">Rs.
                        </span>100
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RowContainer;