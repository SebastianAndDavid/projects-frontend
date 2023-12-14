import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomeownersCreate from "./components/HomeownersCreate";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomeownersCreate />} />
          <Route path="homeowner-page" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
