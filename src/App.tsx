import { useEffect } from "react";
import "./App.css";
import { getAllProjects } from "./fetch-utils";

function App() {
  useEffect(() => {
    getAllProjects();
  }, []);
  return <div></div>;
}

export default App;
