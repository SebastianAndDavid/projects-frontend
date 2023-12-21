import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllHomeowners } from "../../fetch-utils";
import ProjectCard from "./ProjectCard";
import { HomeownerSelect } from "../homeowners/homeowner.interface";

export default function ProjectPage() {
  const [clientArray, setClientArray] = useState<HomeownerSelect[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const handleFetchAllClients = async () => {
      const data = await getAllHomeowners();
      setClientArray(data);
    };
    handleFetchAllClients();
  }, []);

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
            <div className="pp-list-header-actions"></div>
          </div>
        </div>
        <div className="pp-list-contents">
          <div className="pp-list-contents-header">
            <div className="pp-list-contents-header-text">Client</div>
          </div>
          {clientArray.map((client) => {
            return <ProjectCard key={client.id} client={client} />;
          })}
        </div>
      </div>
    </div>
  );
}
