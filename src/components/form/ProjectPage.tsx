import { useNavigate } from "react-router-dom";

export default function ProjectPage() {
  const navigate = useNavigate();
  return (
    <div className="project-list-page">
      <div className="pp-action-bar">
        <div className="pp-actions-container">
          <div className="pp-actions-buttons">
            <button onClick={() => navigate("/project-create-page")}>
              New project
            </button>
          </div>
          <div className="pp-actions-search">
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="pp-list-main">
        <div className="pp-list-main-header">
          <div>
            <h1 className="pp-list-h1">Projects</h1>
            <div className="pp-list-header-actions">
              <div>
                <select>Active projects</select>
              </div>
              <div>
                <select>Filter by client</select>
              </div>
            </div>
          </div>
        </div>
        <div className="pp-list-contents"></div>
      </div>
    </div>
  );
}
