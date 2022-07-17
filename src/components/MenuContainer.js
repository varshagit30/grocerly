import React,{useState,useEffect} from 'react';
import {GiFruitBowl} from "react-icons/gi";
import {categories} from"../utility/data";

const MenuContainer = () => {
  const [filter, setFilter] = useState("Cherry");
  useEffect(() => {}, [filter]);
  
  return (
    <section className="w-full  my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl text-black font-semibold capitalize relative
        before:absolute before:rounded-lg before:content before:w-32 before:h-1
        before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-100 to-blue-600 transition-all ease-in-out duration-100 mr-auto">
           Customers' Favourites
        </p>
           <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll 
           scrollbar-none">
            {categories && categories.map(category =>(
              <div key ={categories.id} 
              className='group $ {filter === category.urlParamname ? "bg-blue-300"} bg-gray-200 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl first-letter flex-col gap-3 items-center justify-center hover:bg-blue-300 duration-150 transition-all ease-in-out'
              onClick={()=> setFilter(category.urlParamname)}
              >
                 <div className="w-10 h-10 rounded-full mx-7 my-4 bg-blue-300 group-hover:bg-cardColor flex items-center justify-center">
                  <GiFruitBowl
                  className="text-textColor group-hover:text-textColor text-lg "/>
                 </div>
                 <p className=" text-center text-sm text-textColor group-hover:text-gray-200 items-center justify-center">
                  {category.name}
                 </p>
              </div>
            ))}
           </div>
      </div>
    </section>
  )
}

export default MenuContainer