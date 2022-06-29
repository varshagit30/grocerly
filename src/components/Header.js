import React from "react";
import logo from "./img/logo.svg"
import avatar from "./img/avatar1.png"
import {MdAddShoppingCart} from "react-icons/md";
import {motion} from "framer-motion"




const Header =() => {
    return (
    <header className="fixed z-50 w-screen bg-slate-50 p-6 px-16"> 
    {/* desktop*/}
    <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-1">
            <img src={logo} className="w-10 object-cover" alt="logo"/>
            <p className="text-headingColor text-x1 font-bold">Grocerly</p>

        </div>
        <ul className="flex items-center gap-8 ml-auto">
            <li className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer" >Home</li>

            <li className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer">About Us</li>

            <li className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer">Contact</li>

            <li className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer">Menu</li>

        </ul>
        <div className="relative flex items-center justify-center">
            <MdAddShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer"/>
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center">
        <p className="text-sm text-white font-semibold flex text-center">2</p>
    </div>
      </div>
      <motion.img whileTap={{scale : 0.6}}
       src={avatar} className="w-10 min-w-[30px] h-10 min-h-[30px] drop-shadow-xl ml-6 cursor-pointer"
      alt="userprofile"/>
    </div>


    {/* mobile */}
    <div className="flex md:hidden w-full bg-blue-300 p-4 "></div>
    </header>
    );
};
export default Header;