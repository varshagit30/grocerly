import React, { useEffect,useRef } from 'react';
import { MdShoppingCart} from "react-icons/md";
import { motion } from 'framer-motion';
import { useStateValue} from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useState } from 'react';

const RowContainer = ({ flag, data, scrollValue }) => {
    const rowContainer = useRef();
    const [items, setItems] = useState([])

    const [{ cartItems }, dispatch] = useStateValue();
    const addtocart = (item) => {
        dispatch({
            type : actionType.SET_CARTITEMS,
            cartItems : items,
        });
        localStorage.setItem("cartItems",JSON.stringify(items))
    };


    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;

    },[scrollValue]);

    useEffect(() => {
        addtocart()
    }, [items]);
    
  return (
    <div 
    ref={rowContainer}
      className= {'w-full my-12 overflow-x-scroll scrollbar-none scroll-smooth flex items-center gap-2 ${ ... flag ? "overflow-x-scroll" : "overflow-x-hidden flex-wrap" }'}
    >
        {data && data.map(item => (
        <div 
        key={item.id} 
        className="w-[275px] h-[200px] min-w-[300px] md:w-[340px] p-1  bg-cardOverlay rounded-lg hover:drop-shadow-lg backdrop-blur-lg">
            <div className="w-full flex items-center justify-between">
                <motion.div 
                className="w-40 h-20 drop-shadow-xl "
                whileHover={{scale:1.2}} 
                >
                <img 
                src = {item?.imageURL}
                alt="" 
                className="w-40 h-40 object-contain rounded-lg" 
                />
                </motion.div>

                <motion.div 
                 whileTap={{scale:0.75}}
                 className="w-8 h-8 rounded-full bg-blue-400  flex items-center justify-center 
                 cursor-pointer hover:shadow-md "
                 onClick={()=> setItems([...cartItems,item])}>
                    <MdShoppingCart className="text-white"
                    />
                    
                </motion.div>

            </div>

            <div className=" w-full flex flex-col items-end justify-end py-8">
                <p className="text-textColor font-semibold text-base md:text-lg mr-1">{item?.title}
                </p>
                <p className=" mt-1 text-sm text-gray-500 ">{item?.calories} Calories
                </p>
                <div className="flex items-center gap-8">
                    <p className="text-sm text-headingColor">
                        <span className="text-sm text-red-500 mr-1">Rs.
                        </span>{item?.price}
                    </p>
                </div>
            </div>
        </div>
        ))}
    </div>
  );
};

export default RowContainer;