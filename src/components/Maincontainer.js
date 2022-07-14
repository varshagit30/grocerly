import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";
import {motion} from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const Maincontainer = () => {
  const [scrollValue, setscrollValue] = useState(0)

useEffect(() => {}, [scrollValue])
    
  return (
  <div className ="w-full h-full flex flex-col itmes-center justify-center">
    <HomeContainer/>
    
    <section className="w-full  my-6">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl text-black font-semibold capitalize relative
        before:absolute before:rounded-lg before:content before:w-32 before:h-1
         before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-100 to-blue-600 transition-all ease-in-out duration-100">
           Our Fresh & Healthy Products
        </p>
          <div className=" hidden md:flex gap-3 items-end justify-end ">
            <motion.div 
            whileTap={{scale:0.75}} 
            className=" w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-500 cursor-pointer transition-all duration-100 items-center justify-center "
            onClick={()=>setscrollValue(-200)}
             >
              <MdChevronLeft className="text-2xl text-white mx-1 my-1"/>
            </motion.div>
            <motion.div
            whileTap={{scale:0.75}} 
            className="w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-500 cursor-pointer transition-all duration-100 items-center justify-center "
            onClick={()=>setscrollValue(200)}
             >
              <MdChevronRight className="text-2xl text-white mx-1 my-1 "/>
            </motion.div>
          </div>
      </div> 
      <RowContainer
      scrollValue ={scrollValue}
      flag={true}/>
    </section>
  </div>
  );
};

export default Maincontainer;