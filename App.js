// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JS!";

// const root = document.getElementById("root");
// root.appendChild(heading);

{
  /* <div >
        <div id="bye1">
          <h3>Hello</h3>
          <h2>Bye</h2>
        </div>
        <div id="bye2">
          <h3>Hello</h3>
          <h2>Bye</h2>
        </div>
    </div>; */
}

const header = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "bye1" }, [
    React.createElement("h3", {}, "Hello"),
    React.createElement("h2", {}, "Bye"),
  ]),
  React.createElement("div", { id: "bye2" }, [
    React.createElement("h3", {}, "Hello"),
    React.createElement("h2", {}, "Bye"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
