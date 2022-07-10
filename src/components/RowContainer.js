import React, { useEffect,useRef } from 'react';
import milk from "./img/milk.png";
import mng4 from "./img/mng4.jfif";
import bak from "./img/bak4.png";
import { MdShoppingCart} from "react-icons/md";
import { motion } from 'framer-motion';

const RowContainer = ({ flag, data, scrollValue }) => 
{
    console.log(data);
    const rowContainer = useRef()
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;

    },[scrollValue])
    
  return (
    <div 
    ref={rowContainer}
      className= { 'w-full my-8 flex items-center gap-3 scroll-smooth ${ flag  ? "overflow-x-scroll scrollbar-none "  : "overflow-x-hidden flex-wrap" }'} >
        <div className="w-300 min-w-[300px] md:w-340 mf:min-w-[300px] h-auto p-1 bg-cardOverlay rounded-lg hover:drop-shadow-lg backdrop-blur-lg">
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
        <div className="w-300 min-w-[300px] md:w-340 h-auto p-1 bg-cardOverlay rounded-lg hover:drop-shadow-lg backdrop-blur-lg">
            <div className="w-full flex items-center justify-between">
                <motion.img whileHover={{scale:1.2}} src ={mng4} alt="milk" className="w-60 rounded-lg"/>
                <motion.div  whileTap={{scale:0.75}} className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer hover:shadow-md">
                    <MdShoppingCart className="text-white"
                    />
                    
                </motion.div>

            </div>

            <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg mr-2">Mango
                </p>
                <p className="mt-1 text-sm text-gray-500 mr-1">30 Calories</p>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor mr-1">
                        <span className="text-sm text-red-500 mr-1">Rs.
                        </span>60
                    </p>
                </div>
            </div>
        </div>
        <div className="w-300 min-w-[300px] md:w-340 h-auto p-1 bg-cardOverlay rounded-lg hover:drop-shadow-lg backdrop-blur-lg">
            <div className="w-full flex items-center justify-between">
                <motion.img whileHover={{scale:1.2}} src ={bak} alt="milk" className="w-60 rounded-lg"/>
                <motion.div  whileTap={{scale:0.75}} className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer hover:shadow-md">
                    <MdShoppingCart className="text-white"
                    />
                    
                </motion.div>

            </div>

            <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg mr-2">Bakery Products
                </p>
                <p className="mt-1 text-sm text-gray-500 mr-1">50 Calories</p>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor mr-1">
                        <span className="text-sm text-red-500 mr-1">Rs.
                        </span>250
                    </p>
                </div>
            </div>
        </div>
        <div className="w-300 min-w-[300px] md:w-340 h-auto p-1 bg-cardOverlay rounded-lg hover:drop-shadow-lg backdrop-blur-lg">
            <div className="w-full flex items-center justify-between">
                <motion.img whileHover={{scale:1.2}} src ={milk} alt="milk" className="w-60 rounded-lg"/>
                <motion.div  whileTap={{scale:0.75}} className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer hover:shadow-md">
                    <MdShoppingCart className="text-white"
                    />
                    
                </motion.div>

            </div>

            <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg mr-2">Vegetables
                </p>
                <p className="mt-1 text-sm text-gray-500 mr-1">35 Calories</p>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor mr-1">
                        <span className="text-sm text-red-500 mr-1">Rs.
                        </span>150
                    </p>
                </div>
            </div>
        </div>
        <div className="w-300 min-w-[300px] md:w-340 h-auto p-1 bg-cardOverlay rounded-lg hover:drop-shadow-lg backdrop-blur-lg">
            <div className="w-full flex items-center justify-between">
                <motion.img whileHover={{scale:1.2}} src ={milk} alt="milk" className="w-60 rounded-lg"/>
                <motion.div  whileTap={{scale:0.75}} className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer hover:shadow-md">
                    <MdShoppingCart className="text-white"
                    />
                    
                </motion.div>

            </div>

            <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg mr-2">Vegetables
                </p>
                <p className="mt-1 text-sm text-gray-500 mr-1">35 Calories</p>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor mr-1">
                        <span className="text-sm text-red-500 mr-1">Rs.
                        </span>150
                    </p>
                </div>
            </div>
        </div>
        
        
    </div>
  );
};

export default RowContainer;