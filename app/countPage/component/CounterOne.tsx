'use client'
import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count,dispatch] = useReducer(reducer, initialState);
  return (
    <div className='class="space-y-12'>
        <div >{count}</div>
      <button className='rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      onClick={()=>dispatch('increment')}>increment</button>
      <hr/>
      <button className='rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
       onClick={()=>dispatch('decrement')}>decrement</button>
      <hr/>

      <button  className='rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      onClick={()=>dispatch('reset')}>reset</button>
    </div>
  );
}

export default CounterOne;
