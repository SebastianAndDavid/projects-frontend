import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeownersCreate from "./components/homeowners/HomeownersCreate";
import HomeownerList from "./components/homeowners/HomeownerList";
import ProjectCreate from "./components/projects/ProjectCreate";
import HomeownerDetail from "./components/homeowners/HomeownerDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeownersCreate />} />
          <Route path="/homeowner-page" element={<HomeownerList />} />
          <Route path="/project-create" element={<ProjectCreate />} />
          <Route path="/homeowner/:id" element={<HomeownerDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
