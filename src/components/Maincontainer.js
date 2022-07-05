import React from 'react'
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";

const Maincontainer = () => {
  return (
    
    <div className ="w-full h-auto flex flex-col itmes-center justify-center">
      <HomeContainer/>
      <RowContainer/>

    
    </div>
  );
};

export default Maincontainer;