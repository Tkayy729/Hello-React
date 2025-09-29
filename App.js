// const heading = React.createElement(
//   "h1",
//   { classNamed: "heading", attri: "value" },
//   "Hello Namaste Javascript"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement(
      "div",
      { id: "child2" },
      React.createElement("h1", { id: "h1tag" }, "I am the h1 tag")
    )
  ),
]);

root.render(parent);
