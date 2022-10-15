import "./App.css";
import Block from "./components/Block"
const blocks = [
  {
    id: "b1",
    block: "yellow",
  },
  {
    id: "b2",
    block: "green",
  },
  {
    id: "b3",
    block: "color",
  },
  {
    id: "b4",
    block: `${Math.random()}`,
  },
];

function App() {
  return <div className="App">
    <Block blocks ={blocks}/>;
  </div>;
}

export default App;
