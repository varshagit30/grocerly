import React, {useEffect} from 'react';
import CartContainer from './CartContainer';
import { useStateValue } from '../context/StateProvider';
import { motion } from 'framer-motion';
import t from "./img/trans.png";
import g from "./img/gen.png";
import d from "./img/del.png";
import Grocerly from "./Grocerly";
import Footer from './Footer';


const About = () => {
  const [{cartShow}, dispatch] = useStateValue();
  useEffect(() => {}, [cartShow]);
  return (
    <div className="w-full min-h-screen  ">
      <div className=" max-w-[1240px] mx-auto">
        <div className=" text-center ">
          <p className="text-5xl font-bold flex items-center justify-center py-4">Trusted by customers across the world</p>
          <p className=" text-md py-4 text-gray-500 flex items-center justify-center"> Imagine needing something when you are at home and getting it before you have tied your shoelaces to step out. 
          We are revolutionizing e-commerce by making the stuff most important to you, available to you in a blink of your eye. 
          We want our customers to focus on the more important things for themselves and not need to plan for the little things that life needs on an everyday basis. We are here to get your chores out of your way.
          Our mission is – “instant groceries indistinguishable from magic”. Using a backbone of technology, data sciences, and rich customer insights, we've built a dense and fast network of partner stores enabling 
          lightning fast deliveries in minutes.</p>
        </div>

        <div className=" grid md:grid-cols-3 gap-1 px-2 py-10 text-center cursor-pointer ">
          <motion.div whileHover={{scale : 0.9}}  className=" border py-8  rounded-xl shadow-xl bg-blue-100 hover:bg-blue-200">
            <p className="text-5xl font-bold text-indigo-600 ">100%</p>
            <p className="text-gray-400 mt-2 ">Genuine Products</p>
          </motion.div>
          <motion.div whileHover={{scale : 0.9}} className=" border py-8 rounded-xl shadow-xl bg-blue-100 hover:bg-blue-200">
            <p className=" text-5xl font-bold text-indigo-600">24/7</p>
            <p className=" text-gray-400 mt-2">Delivery</p>
          </motion.div>
          <motion.div whileHover={{scale : 0.9}} className=" border py-8 rounded-xl shadow-xl bg-blue-100 hover:bg-blue-200">
            <p className=" text-5xl font-bold text-indigo-600">120K</p>
            <p className=" text-gray-400 mt-2">Transactions</p>
          </motion.div>
        </div>
        <Grocerly/>
        <Footer />

      {cartShow && (
      <CartContainer/>
    )}
     </div>
    </div>
  );
};

export default About;