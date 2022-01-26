import React from "react";

function App() {
  const [index, setIndex] = React.useState(0);
  const handler = () => {
    setIndex((index) => index + 1)
  }
  return (
    <div>
      <h1>State now ares {index}</h1>
      <button onClick={() => handler()}>Incement The index</button>
    </div>
  );
};

export default App