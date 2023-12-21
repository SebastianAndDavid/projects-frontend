import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeownersCreate from "./components/homeowners/HomeownersCreate";
import HomeownerList from "./components/homeowners/HomeownerList";
import ProjectCreate from "./components/projects/ProjectCreate";
import HomeownerDetail from "./components/homeowners/HomeownerDetail";
import Header from "./components/header/Header";
import ProjectsProvider from "./context/projectsContext";
import ProjectPage from "./components/form/ProjectPage";
import ClientPage from "./components/form/ClientPage";

function App() {
  return (
    <>
      <Router>
        <ProjectsProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomeownersCreate />} />
            <Route path="/homeowner-page" element={<HomeownerList />} />
            <Route path="/project-create" element={<ProjectCreate />} />
            <Route path="/homeowner/:id" element={<HomeownerDetail />} />
            <Route path="/project-page" element={<ProjectPage />} />
            <Route path="/client-page" element={<ClientPage />} />
          </Routes>
        </ProjectsProvider>
      </Router>
    </>
  );
}

export default App;
