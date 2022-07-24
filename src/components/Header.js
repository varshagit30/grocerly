import React, { useState } from "react";
import logo from "./img/logo.svg";
import avatar from "./img/avatar1.png";
import {MdShoppingCart, MdAdd, MdLogout} from "react-icons/md";
import {motion} from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config";
import { Link } from "react-router-dom";
import {useStateValue} from "../context/StateProvider";
import {actionType} from "../context/reducer";




const Header =() => {
    const firebaseAuth= getAuth(app);
    const provider =new GoogleAuthProvider();

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
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
          console.log(user);


    };
    const logout = () => {
        setIsMenu(false);
        localStorage.clear();

        dispatch({
          type: actionType.SET_USER,
          user: null,
        });
      };
      const showCart = () => {
        dispatch({
          type: actionType.SET_CART_SHOW,
          cartShow: !cartShow,
        });
      };

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
            transition-all ease-in-out cursor-pointer" onClick={()=> setIsMenu(false)}  >Home</Link>

            <li>
            <Link to ={"/about"}
            className="text-base text-textColor hover:text-headingColor duration-100
                transition-all ease-in-out cursor-pointer"onClick={()=> setIsMenu(false)}> About Us
            </Link>
            </li>

            <li>
            <Link to ={"/contact"}
                 className="text-base text-textColor hover:text-headingColor duration-100
                 transition-all ease-in-out cursor-pointer" onClick={()=> setIsMenu(false)} >Contact
            </Link>
            </li>

            <li >
            <Link to = {"/delivery"}
            className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer" onClick={()=> setIsMenu(false)}>Delivery Areas
            </Link>
            </li>

        </ul>
        <div className="relative flex items-center justify-center mx-1"
         onClick={showCart}>
          <MdShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer"/>
          {cartItems && cartItems.length > 0 && (
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
            <p className="text-sm text-white font-semibold flex text-center">{cartItems.length}</p>
          </div>
          )}
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
                    text-base" onClick={()=> setIsMenu(false)}>New Item <MdAdd/>
                    </p>
                </Link>
                
            }
            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base"
            onClick={logout}>
              LogOut<MdLogout/> </p>

         </div>
            )
         }
      </div>
    </div>


    {/* mobile */}
    <div className="flex md:hidden w-full bg-blue-300 p-4 ">
    <Link to={"/"} className="flex items-center justify-center gap-1">
            <img src={logo} className="w-10 object-cover " alt="logo"/>
            <p className="text-headingColor text-x1 font-bold ">Grocerly</p>

        </Link>
        <ul className="flex items-center gap-8 ml-auto mr-auto">
            <Link to={"/"}  className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer" onClick={()=> setIsMenu(false)}  >Home</Link>

            <li>
            <Link to ={"/about"}
            className="text-base text-textColor hover:text-headingColor duration-100
                transition-all ease-in-out cursor-pointer"onClick={()=> setIsMenu(false)}> About Us
            </Link>
            </li>

            <li>
            <Link to ={"/contact"}
                 className="text-base text-textColor hover:text-headingColor duration-100
                 transition-all ease-in-out cursor-pointer" onClick={()=> setIsMenu(false)} >Contact
            </Link>
            </li>

            <li >
            <Link to = {"/delivery"}
            className="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer" onClick={()=> setIsMenu(false)}>Delivery Areas
            </Link>
            </li>

        </ul>
        <div className="relative flex items-center justify-center mx-1"
         onClick={showCart}>
          <MdShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer"/>
          {cartItems && cartItems.length > 0 && (
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
            <p className="text-sm text-white font-semibold flex text-center">{cartItems.length}</p>
          </div>
          )}
        </div>

      {isMenu && (
        <div className="md:w-[80vw] p-4 h-auto absolute right-2 top-16 bg-white flex flex-col items-center justify-center gap-8 z-50">
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
                    text-base" onClick={()=> setIsMenu(false)}>New Item <MdAdd/>
                    </p>
                </Link>
                
            }
            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base"
            onClick={logout}>
              LogOut<MdLogout/> </p>

         </div>
            )
         }
      </div>
      
      )}  
    </div>
    </header>
    );
};
export default Header;