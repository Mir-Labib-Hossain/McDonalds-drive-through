import "./App.css";
import "./List.css";
import "font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import McDonals from "./Projects/McDonals/McDonals";
import {useEffect} from "react"

function App() {
  let files = [
    {
      name: "McDonals",
      icon: "https://img.icons8.com/color/240/000000/mcdonalds.png",
      background: "lightyellow",
      Component: McDonals,
    }
  ];
useEffect(() => {
  AOS.init({
  });
}, []);
  return (
    <div className="App">
    <McDonals projectName="Mcdonals" projectIcon="https://img.icons8.com/color/240/000000/mcdonalds.png" />
    </div>
  );
}
export default App;
