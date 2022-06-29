import React from "react";
import deliv from "./img/deliv.png";
import herobg from "./img/herobg.png";
import p1 from "./img/p1.png";

const HomeContainer= () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full " id="home">
            <div className="py-2 flex-1 flex-col items-start justify-start gap-6">
                <p className="text-base text-orange-500 font-semibold">
                    Bike delivery
                </p>
                <div className="w-8 h-8 bg-slate-50 rounded-full overflow-hidden drop-shadow-xl">
                    <img
                    src={deliv}
                    className="w-full h-full object-contain"
                    alt="deliv"
                    />
                </div>
            </div>
            <p className=" text-left text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-black ">
            The fastest delivery in {" "}
            <span className="text-orange-500 text-[4rem] lg:text-[4rem] ">Your City</span>
            </p>
            <p className="text-base text-black text-center md:text-left">
                Get fresh groceries in just one click!
            </p>
            <button 
            type="button"
            className="bg-gradient-to-br from-orange-400 to bg-orange-500 w-full
              px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto">
                Order Now 
            </button>
            <div className=" py-2 flex-1 flex items-center">
                <div className="w-full flex items-center justify-center relative">
                    <img src={herobg} className=" ml-auto h-420" alt="hero-bg"/>
                    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 ">
                        <div className="w-180 p-14 bg-slate-300 backdrop-blur-md">
                            <img src={p1}className="w-40 -mt-30" alt="p1"/>
                            <p className="text-sm text-gray-500 font-semibold">Fresh Pomegranate</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        

        


    )
}
export default HomeContainer;