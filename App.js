//to create nexted html structure inside the react

const parent=React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},
    [React.createElement("h1",{},"hello sandhya"),React.createElement("h2",{},"hii sandhya")]
));

console.log(parent);
// const heading=React.createElement("h1",{id: "heading"},"Sandhya");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);