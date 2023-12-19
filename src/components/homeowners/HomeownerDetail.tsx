import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAllProjectsByHomeownerId,
  getHomeownerById,
} from "../../fetch-utils";
import { HomeownerSelect } from "./homeowner.interface";
import ProjectCreate from "../projects/ProjectCreate";
import { ProjectSelect } from "../projects/projects.interface";

export default function HomeownerDetail() {
  const [ownerDetails, setOwnerDetails] = useState<
    HomeownerSelect | undefined
  >();
  const [projects, setProjects] = useState<ProjectSelect[]>([]);
  const [toggleProjectCreate, setToggleProjectCreate] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const handleFetchHomeownerById = async () => {
      if (id) {
        const data = await getHomeownerById(id);
        setOwnerDetails(data);
      }
    };

    handleFetchHomeownerById();

    const handleFetchProjectsByHomeownerId = async () => {
      if (id) {
        const data = await getAllProjectsByHomeownerId(Number(id));
        setProjects(data);
      }
    };

    handleFetchProjectsByHomeownerId();
  }, []);

  return (
    <div className="homeowner-detail-grid">
      <div className="greeting">
        {ownerDetails && (
          <h3>Welcome to {ownerDetails.first_name}'s Client Portal</h3>
        )}
      </div>
      <div className="personal-info">
        {ownerDetails && <h3>{ownerDetails.first_name}'s Information</h3>}
        {ownerDetails && (
          <div className="personal-info-grid">
            <div>
              <strong>Name</strong>
              {ownerDetails.first_name} {ownerDetails.last_name}
            </div>
            <div>
              <strong>Contact</strong>
              Phone: {ownerDetails.phone}
              <br />
              Email: {ownerDetails.email}
            </div>
            <div>
              <strong>Address</strong>
              {ownerDetails.street}
              <br />
              {ownerDetails.city}, {ownerDetails.state} {ownerDetails.zip_code}
            </div>
          </div>
        )}
      </div>
      <div className="project-info">
        <div>
          {projects ? (
            <div className="project-display-container">
              {projects.map((project) => {
                return (
                  <div key={project.id} className="project-card">
                    {project.name}
                  </div>
                );
              })}
            </div>
          ) : (
            <h3>No projects yet</h3>
          )}
          {toggleProjectCreate && <ProjectCreate />}
          {toggleProjectCreate ? (
            <button onClick={() => setToggleProjectCreate(false)}>
              Cancel
            </button>
          ) : (
            <button onClick={() => setToggleProjectCreate(true)}>
              Create Project
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
