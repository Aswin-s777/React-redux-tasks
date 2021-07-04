import React, { useState } from "react";
import store, { Increment } from "../Store";

function Counter1() {
  const increment = () => {
    store.dispatch({ type: Increment });
    console.log(store.getState());
  };

return (
  <div>
    <button onClick={increment}>increment</button>
   
  </div>
);
}

export default Counter1;