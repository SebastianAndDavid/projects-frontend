import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeownersCreate from "./components/HomeownersCreate";
import HomeownerList from "./components/HomeownerList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeownersCreate />} />
          <Route path="/homeowner-page" element={<HomeownerList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
