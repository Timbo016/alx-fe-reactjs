import { useState } from "react";

function Counter() {
  // Step 1: Initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Step 2: Display count */}
      <p>Current Count: {count}</p>

      {/* Step 3: Buttons with onClick handlers */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
