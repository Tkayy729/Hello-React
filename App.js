import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1", key: "1" },
    React.createElement(
      "div",
      { id: "child2", key: "1"  },
      React.createElement("h1", { id: "h1tag" }, "I am the h1 tag")
    )
  ),
]);

root.render(parent);
