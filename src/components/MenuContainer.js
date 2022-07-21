import React,{useState,useEffect} from 'react';
import {GiFruitBowl} from "react-icons/gi";
import {categories} from"../utility/data";
import { motion} from "framer-motion";
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';


const MenuContainer = () => {
  const [filter, setFilter] = useState("cherry");
  
  const [{foodItems}, dispatch] = useStateValue();
  
  return (
    <section className="w-full  my-2" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl text-black font-semibold capitalize relative
        before:absolute before:rounded-lg before:content before:w-32 before:h-1
        before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-100 to-blue-600 transition-all ease-in-out duration-100 mr-auto">
          Shop By Category
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll 
        scrollbar-none">
          {categories &&
           categories.map((category) =>(
           <motion.div  
           whileTap={{scale : 0.75}} 
           key ={category.id} 
           className={'group ${ filter === category.name ? "bg-blue-300" : "bg-gray-100"} bg-gray-200 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl first-letter flex-col gap-3 items-center justify-center hover:bg-blue-300 '} 
           onClick={()=> setFilter(category.name)}
           >
            <div className={'w-10 h-10 rounded-full ${ filter === category.name ? "bg-gray-100" :  "bg-blue-300"} mx-7 my-4 bg-blue-300 group-hover:bg-cardColor flex items-center justify-center'}>
              <GiFruitBowl 
              className="text-textColor group-hover:text-textColor text-lg "
              />
            </div>
            <p className=" text-center text-sm text-textColor group-hover:text-gray-100 items-center justify-center">
              {category.name}
            </p>
           </motion.div>
          
          ))}
        </div>
        <div className="w-full flex-wrap">
          <RowContainer  
          flag={false}
          data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
    
  );
};

export default MenuContainer;