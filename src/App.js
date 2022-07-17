import { AnimatePresence } from "framer-motion";
import React from "react";
import {Route, Routes} from "react-router-dom";
import { CreateContainer, Header, Maincontainer, HomeContainer, Contact, About, RowContainer, MenuContainer} from "./components";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
  <div className="w-screen h-auto flex flex-col bg-slate-200" >
   <Header/>
   <main className="mt-24 p-8 w-full">
   <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/" element={<Maincontainer />} />
    <Route path="/createItem" element={<CreateContainer />} />
    <Route path="/" element={<HomeContainer/>}/>
    <Route path="/" element={<MenuContainer/>}/>
    </Routes>


   </main>
    </div>
    </AnimatePresence>
);
};

export default App