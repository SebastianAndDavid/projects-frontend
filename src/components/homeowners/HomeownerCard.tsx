import { HomeownerSelectProps } from "./homeowner.interface";
import { useEffect, useState } from "react";
import "./Homeowner.css";
import HomeownersCreate from "./HomeownersCreate";
import { getAllProjectsByHomeownerId } from "../../fetch-utils";
import { ProjectSelect } from "../projects/projects.interface";
import { useNavigate } from "react-router";

export default function HomeownerCard({ owner }: HomeownerSelectProps) {
  const [didClickEdit, setDidClickEdit] = useState(false);
  const [projectsArray, setProjectsArray] = useState<ProjectSelect[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const handleFetchProjectsByHomeowner = async () => {
      if (owner) {
        const data = await getAllProjectsByHomeownerId(owner.id);
        setProjectsArray(data);
      }
    };
    handleFetchProjectsByHomeowner();
  }, []);
  return (
    <>
      {owner !== undefined && (
        <div className={didClickEdit ? "hide-card" : "card"}>
          <p>First Name: {owner.first_name}</p>
          <p>Last Name: {owner.last_name}</p>
          {projectsArray.map((project) => {
            return <div key={project.id}>{project.name}</div>;
          })}
          <button onClick={() => setDidClickEdit(true)}>Edit</button>
          <button onClick={() => navigate(`/homeowner/${owner.id}`)}>
            Details
          </button>
        </div>
      )}
      {didClickEdit && (
        <div className={didClickEdit ? "edit-mode" : "hide-edit-mode"}>
          <HomeownersCreate owner={owner} setDidClickEdit={setDidClickEdit} />
        </div>
      )}
    </>
  );
}
