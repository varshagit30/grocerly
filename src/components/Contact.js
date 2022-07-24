import React, {useEffect} from 'react';
import CartContainer from './CartContainer';
import { useStateValue } from '../context/StateProvider';
import {IoCall} from "react-icons/io5";
import {RiMailFill} from "react-icons/ri";
import {MdLocationOn} from "react-icons/md";
import g from "./img/gro.webp"



const Contact = () => {
  const [{cartShow}, dispatch] = useStateValue();
  useEffect(() => {}, [cartShow]);
  return (
    <div className=" flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col space-y-6 bg-gray-200 w-full max-w-4xl p-8 rounded-xl shadow-lg ">
      <div class="sm:mx-auto sm:w-full sm:max-w-auto  ">
        <img class="mx-auto h-12 w-auto" src={g} alt="Contact" />
        <h2 class="mt-6 text-center text-4xl font-extrabold text-gray-900">Contact Us</h2>
        <span className="mt-8 gap-2 text-md flex items-center justify-center"> <IoCall/> +(91) 9932733229 </span>
        <span className="mt-4 gap-2 text-md flex items-center justify-center"> <RiMailFill/> info@grocerly.com </span>
        <span className="mt-4 gap-2 text-md flex items-center justify-center"> <MdLocationOn/> 11-A, Sector 42, Delhi</span>
        <p class="mt-8 text-center text-sm text-gray-600 max-w">
        Fill out the form or write to us at
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"> info@grocerly.com</a>
        </p>
        </div>
        
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-gray-100 py-8 px-6 shadow rounded-lg sm:px-10">
          <form class="mb-0 space-y-6" action="#" method=" post">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required class="" />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Name</label>
              <div class="mt-1">
                <input id="name" name="name" type="name" autocomplete="name" required class="" />
              </div>
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
              <div class="mt-1">
                <input id="phone" name="phone" type="phone" autocomplete="phone" required class="" />
              </div>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <div class="mt-1">
                <input id="message" name="message" type="message" autocomplete="current-message" required class="" />
              </div>
            </div>
            
            <div>
              <label for="company-size" class="block text-sm font-medium text-gray-700">How can we help you?</label>
              <div class="mt-1">
                <select name="company-size" id="company-size" class="">
                  <option value="">Please select</option>
                  <option value="">Please select</option>
                  <option value="small">I need help with my order</option>
                  <option value="medium">I want to partner with Grocerly</option>
                  <option value="large">I would like to give feedback</option>
                </select>
              </div>
            </div>
            
            <div class="flex items-center">
              <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
              <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900">
                I agree to the
                <a href="#" class="text-indigo-600 hover:text-indigo-500"> Terms </a>
                and
                <a href="#" class="text-indigo-600 hover:text-indigo-500"> Privacy Policy </a>.
              </label>
            </div>
            
            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </div>
          </form>
        </div>
      </div>
      </div>
      
      {cartShow && (
      <CartContainer/>
    )}
      
    </div>
  )
}

export default Contact;