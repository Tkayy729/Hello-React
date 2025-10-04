import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

root.render(<AppLayout />);
