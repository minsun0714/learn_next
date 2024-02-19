"use client";
import React, { useState } from "react";

const Counter = () => {
  console.log("클라이언트");
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className='bg-gray-300 border-4 border-gray-500'
      >
        count up!
      </button>
    </div>
  );
};

export default Counter;
