import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/" className="primary-nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/client-form" className="primary-nav-item">
              Clients
            </Link>
          </li>
          <li>
            <Link to="/project-form" className="primary-nav-item">
              Projects
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link>Betsy</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
