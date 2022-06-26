import React from "react";
import {Route, Routes} from "react-router-dom";
import { CreateContainer, Header, Maincontainer } from "./components";

const App = () => {
  return (
  <div className="w-screen h-auto flex flex-col bg-slate-200" >
   <Header/>
   <main className="mt-24 p-8 w-full">
   <Routes>
    <Route path="/*" element={<Maincontainer />} />
    <Route path="/createItem" element={<CreateContainer />} />
   </Routes>
   </main>
    </div>
);
};

export default App