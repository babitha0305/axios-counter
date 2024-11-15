import React, { useState } from "react";



function Counter() {
  // Initialize the counter state
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Counter Value: {count}</h2>
      <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>Decrement</button>
    </div>
  );
}

  export default Counter;
