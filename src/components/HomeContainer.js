import deliv from "./img/deliv.png";
import m2 from "./img/m2.png";
import p1 from "./img/p1.png";
import g1 from "./img/g1.png";
import meat from "./img/meat.png";
import s1 from "./img/s1.png";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import MenuContainer from "./MenuContainer";


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

                <Link to ={"/"}>
                <motion.button 
                whileTap={{scale : 0.75}}
                type="button"
                className="bg-gradient-to-br from-green-400 to bg-blue-500 w-full 
                px-14 py-2 rounded-lg hover:shadow-lg  md:w-auto my-2"
                >
                    Order Now
                </motion.button>
                </Link>
            </div>

            <div className=" py-2 flex-1 flex items-center">
                <div className="w-full flex items-center justify-center relative">
                    <img src={s1} className=" ml-auto h-500" alt="hero-bg"/>
                    <div className="w-full h-full absolute -top-4 left-4 flex items-center justify-center px-30 py-16 gap-6 flex-wrap ">
                        
                        <div className=" lg:w-190 min-w-[190px]  p-4 bg-cardOverlay backdrop-blur-md rounded-lg 
                        flex flex-col items-center justify-center cursor-pointer drop-shadow-lg">
                            <img src={p1}className="w-20 -mt-10 lg:w-40 lg:-mt-20" alt="p1"/>
                            <p className="text-base lg:text-base  text-gray-500 font-semibold mt-2 lg:my-2">Fresh Fruits</p>
                             <p>
                                <span className="text-base text-red-600 font-semibold  my-1 lg:my-3">Rs. </span>100
                                </p>
                            
                        </div>
                        <div className="w-190 min-w-[190px] p-4  bg-cardOverlay backdrop-blur-md rounded-lg 
                        flex flex-col items-center justify-center cursor-pointer drop-shadow-lg">
                            <img src={g1}className="w-40 -mt-20" alt="p1"/>
                            <p className="text-base  text-gray-500 font-semibold my-1 ">Staples</p>
                             <p>
                                <span className="text-base text-red-600 font-semibold my-3"> Rs. </span>500
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

        </section>
    )
}

export default HomeContainer;