import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeownersCreate from "./components/homeowners/HomeownersCreate";
import HomeownerList from "./components/homeowners/HomeownerList";
import ProjectCreate from "./components/ProjectCreate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeownersCreate />} />
          <Route path="/homeowner-page" element={<HomeownerList />} />
          <Route path="/project-create" element={<ProjectCreate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
