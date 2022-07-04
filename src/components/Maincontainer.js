import React from 'react'
import HomeContainer from "./HomeContainer";
import category from "./category";

const Maincontainer = () => {
  return (
    <div className ="w-full h-auto flex flex-col itmes-center justify-center">
      <HomeContainer/>
      <category> </category>
      </div>
  )
}

export default Maincontainer