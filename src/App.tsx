import { useEffect } from "react";
import "./App.css";
import { getAllHomeowners, getAllProjects } from "./fetch-utils";
import HomeownersCreate from "./components/HomeownersCreate";

function App() {
  useEffect(() => {
    getAllProjects();
    getAllHomeowners();
  }, []);
  return (
    <div className="app">
      <HomeownersCreate />
    </div>
  );
}

export default App;
