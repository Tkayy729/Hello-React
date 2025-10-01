import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => {
  return <h1>This is the title</h1>;
};

const App = () => (
  <div className="container">
    <title />
    <h1>I am re-learning react</h1>
  </div>
);

root.render(<App />);
