import React from "react";
import deliv from "./img/deliv.png";
import m2 from "./img/m2.png";
import p1 from "./img/p1.png";
import g1 from "./img/g1.png";
import meat from "./img/meat.png";
import s1 from "./img/s1.png";
import {motion} from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";


const HomeContainer= () => {
    
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 " id="home">
            <div className="py-2 flex-1 flex-col items-start md:items-center justify-start">
                <div className="flex items-center gap-2 justify-left px-2 py-1 rounded-full">
                    <p className="text-base text-blue-500 font-semibold">
                         Free delivery
                    </p>
                    <div className="w-8 h-8 bg-slate-50 rounded-full overflow-hidden drop-shadow-xl">
                    <img 
                    src={deliv}
                    className="w-full h-full object-contain"
                    alt="deliv"
                     />
                    </div>
                </div>
                
                <p className="text-[2.5rem] font-bold lg:text-[4.5rem] tracking-wide text-black my-2">
                     Delivery at your doorstep in {" "}
                     <span className="text-gray-600 text-[4rem] lg:text-[4.5rem] ">Your City</span> {" "}
                </p>
                <p className="text-base text-black text-center md:text-left my-2">
                     {" "} Get fresh groceries in just one click! 
                </p>

                <button 
                type="button"
                className="bg-gradient-to-br from-green-400 to bg-blue-500 w-full 
                px-14 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto my-2"
                >
                    Order Now
                </button>
            </div>

            <div className=" py-2 flex-1 flex items-center">
                <div className="w-full flex items-center justify-center relative">
                    <img src={s1} className=" ml-auto h-500" alt="hero-bg"/>
                    <div className="w-full h-full absolute -top-4 left-4 flex items-center justify-center px-30 py-16 gap-6 flex-wrap ">
                        
                        <div className="w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-lg 
                        flex flex-col items-center justify-center cursor-pointer drop-shadow-lg">
                            <img src={p1}className="w-40 -mt-20" alt="p1"/>
                            <p className="text-base  text-gray-500 font-semibold my-2">Pomegranate</p>
                             <p>
                                <span className="text-base text-red-600 font-semibold my-3">Rs. </span>100
                                </p>
                            
                        </div>
                        <div className="w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-lg 
                        flex flex-col items-center justify-center cursor-pointer drop-shadow-lg">
                            <img src={g1}className="w-40 -mt-20" alt="p1"/>
                            <p className="text-base  text-gray-500 font-semibold my-1">Staples</p>
                             <p>
                                <span className="text-base text-red-600 font-semibold my-3">Rs. </span>500
                                </p>
                            
                        </div>
                        <div className="w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-lg 
                        flex flex-col items-center justify-center cursor-pointer drop-shadow-lg ">
                            <img src={meat}className="w-40 -mt-20" alt="p1"/>
                            <p className="text-base  text-gray-500 font-semibold my-2">Fresh Meat</p>
                             <p>
                                <span className="text-base text-red-600 font-semibold my-3">Rs. </span>400
                                </p>
                            
                        </div>
                        <div className="w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-lg 
                        flex flex-col items-center justify-center cursor-pointer drop-shadow-lg">
                            <img src={m2}className="w-40 -mt-20" alt="p1"/>
                            <p className="text-base  text-gray-500 font-semibold my-2">Fresh Veggies</p>
                             <p>
                                <span className="text-base text-red-600 font-semibold my-3">Rs. </span>80
                                </p>
                            
                        </div>
                    </div>

                </div>
            </div>
            <section className="w-full my-6">
                <div className="w-full flex items-center justify-between">
                    <p className="text-2xl text-black font-semibold capitalize relative
                    before:absolute before:rounded-lg before:content before:w-32 before:h-1
                    before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-100 to-blue-600 transition-all ease-in-out duration-100">
                         Our Fresh & Healthy Products </p>
                         <div className="hidden md:flex gap-3 items-center justify-center my-2 ">
                            <motion.div 
                            whileTap={{scale:0.75}} 
                            className=" w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-500 cursor-pointer transition-all duration-100 items-center justify-center ">
                                <MdChevronLeft className="text-2xl text-white mx-1 my-1"/>
                            </motion.div>
                            <motion.div
                            whileTap={{scale:0.75}} 
                            className="w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-500 cursor-pointer transition-all duration-100 items-center justify-center  ">
                                <MdChevronRight className="text-2xl text-white mx-1 my-1 "/>
                            </motion.div>

                         </div>
                </div> 
                <RowContainer flag={true}/>

            </section>
    
        </section>
        
        

        


    )
}

export default HomeContainer;