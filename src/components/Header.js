import React from "react";
import logo from "./img/logo.svg"
import {MdAddShoppingCart} from "react-icons/md";
const Header =() => {
    return (
    <header className="fixed z-50 w-screen p-6 px-16"> 
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
            <MdAddShoppingCart className="text-textColor text-2xl ml-8"/>
        </div>
    </div>


    {/* mobile */}
    <div className="flex md:hidden w-full bg-blue-300 p-4 "></div>
    </header>
    );
};
export default Header;