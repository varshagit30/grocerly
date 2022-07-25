import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import { CreateContainer, Header, Maincontainer, HomeContainer, Contact, About, RowContainer, MenuContainer, CartContainer, DeliveryArea} from "./components";
import { actionType } from "./context/reducer";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utility/firebaseFunction";

const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then(data =>{
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      });
    });
  };

  useEffect(()=> {
    fetchData();
  }, []);



  return (
    <AnimatePresence exitBeforeEnter>
  <div className="w-screen h-auto flex flex-col bg-slate-200" >
   <Header/>
   <main className="mt-24 p-8 w-full">
   <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/delivery" element={<DeliveryArea/>}/>
    <Route path="/" element={<Maincontainer />} />
    <Route path="/createItem" element={<CreateContainer />} />
    <Route path="/" element={<MenuContainer/>}/>
    <Route path="/about" element={<CartContainer/>}/>
    <Route path="/contact" element={<CartContainer/>}/>
    </Routes>


   </main>
    </div>
    </AnimatePresence>
);
};

export default App