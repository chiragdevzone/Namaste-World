const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello world from React"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "this is h1 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "this is h2 tag")
  ),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
