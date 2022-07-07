import React, { useState } from "react";
import logo from "./img/logo.svg"
import avatar from "./img/avatar1.png"
import {MdAddShoppingCart, MdAdd, MdLogout} from "react-icons/md";
import {motion} from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config";
import { Link } from "react-router-dom";
import {useStateValue} from "../context/StateProvider";
import {actionType} from "../context/reducer";




const Header =() => {
    const firebaseAuth= getAuth(app);
    const provider =new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);

    const login = async() => {
        if (!user) {
            const { user } = await signInWithPopup(firebaseAuth, provider);
            const { refreshToken, providerData } = user;
            localStorage.setItem("user", JSON.stringify(providerData[0]));
            dispatch({
              type: actionType.SET_USER,
              user: providerData[0],
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]));
          }
          else{
            setIsMenu(!isMenu);
          }


    }

    return (
    <header className="fixed z-50 w-screen bg-slate-50 p-3 px-4 md:p-6 md:px-16"> 
    {/* desktop*/}
    <div className="hidden md:flex w-full h-full">
        <Link to={"/"} className="flex items-center gap-1">
            <img src={logo} className="w-10 object-cover" alt="logo"/>
            <p className="text-headingColor text-x1 font-bold">Grocerly</p>

        </Link>
        <ul className="flex items-center gap-8 ml-auto">
            <Link to={"/"}  className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer" >Home</Link>

            <Link to {..."/about"} className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer">About Us</Link>

            <li className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer">Contact</li>

            <li className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer">Menu</li>

        </ul>
        <div className="relative flex items-center justify-center">
            <MdAddShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer"/>
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
        <p className="text-sm text-white font-semibold flex text-center">2</p>
        </div>
      </div>

      <div className="relative">
        <motion.img whileTap={{scale : 0.6}}
         src={user ? user.photoURL : avatar} className="w-10 min-w-[30px] h-10 min-h-[30px] drop-shadow-xl ml-6 cursor-pointer rounded-full"
         alt="userprofile"
         onClick={login}/>
         {
            isMenu && (
                <div className="w-40 bg-white shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
            {
               
                <Link to = {"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300 
                    transition-all duration-100 ease-in-out text-textColor
                    text-base">New Item <MdAdd/>
                    </p>
                </Link>
                
            }
            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base">LogOut<MdLogout/> </p>

         </div>
            )
         }
      </div>
    </div>


    {/* mobile */}
    <div className="flex md:hidden w-full bg-blue-300 p-4 "></div>
    </header>
    );
};
export default Header;