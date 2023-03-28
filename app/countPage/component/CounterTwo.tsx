'use client'
import React, { useReducer, useRef } from "react";


const initialState = {
    firstCounter:0,
    secondCounter:10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state,firstCounter:state.firstCounter + action.value,
    };
    case "decrement":
      return {...state,firstCounter:state.firstCounter - action.value};
      case "increment2":
      return {...state,secondCounter:state.secondCounter + action.value};
    case "decrement2":
      return {...state,secondCounter:state.secondCounter - action.value};
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count,dispatch] = useReducer(reducer, initialState);
  const valueUsed=useRef()
  return (
    <div className='class="space-y-12'>
        <div >first counter -{count.firstCounter}</div>
        <div >second-counter{count.secondCounter}</div>

        {/* <input ref={valueUsed} > </input> */}
      <button className='rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      onClick={()=>dispatch({type:'increment',value: 1})}>increment</button>
      <button className='rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
       onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
      
      <button className='rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      onClick={()=>dispatch({type:'increment',value: 5})}>increment 5</button>
      
      <button className='rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
       onClick={()=>dispatch({type:'decrement',value:5})}>decrement 5</button>

<div>
<button className='rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      onClick={()=>dispatch({type:'increment2',value: 1})}>increment counter2</button>
      <button className='rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
       onClick={()=>dispatch({type:'decrement2',value:1})}>decrement counter2</button>
</div>
      <button  className='rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  );
}

export default CounterTwo;
