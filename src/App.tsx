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
import ProjectsCreate from "./components/form/ProjectsCreate";
import ClientCreate from "./components/form/ClientCreate";
import ClientProvider from "./context/clientContext";

function App() {
  return (
    <>
      <Router>
        <ProjectsProvider>
          <ClientProvider>
            <Header />
            <Routes>
              <Route path="/" element={<HomeownersCreate />} />
              <Route path="/homeowner-page" element={<HomeownerList />} />
              <Route path="/project-create" element={<ProjectCreate />} />
              <Route path="/homeowner/:id" element={<HomeownerDetail />} />
              <Route path="/project-page" element={<ProjectPage />} />
              <Route path="/project-create-page" element={<ProjectsCreate />} />
              <Route path="/client-page" element={<ClientPage />} />
              <Route path="/client-create-page" element={<ClientCreate />} />
            </Routes>
          </ClientProvider>
        </ProjectsProvider>
      </Router>
    </>
  );
}

export default App;
