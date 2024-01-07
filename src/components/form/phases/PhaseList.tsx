import {
  useMilestonesReadOnly,
  usePhasesReadOnly,
} from "../../../context/projectsContext";
import PhaseListItem from "./PhaseListItem";
import "./PhaseList.css";

export default function PhaseList() {
  const [phasesArrayReadOnly] = usePhasesReadOnly();
  const [milestonesArrayReadOnly] = useMilestonesReadOnly();

  const milestoneMap = () => {
    const data = milestonesArrayReadOnly.map((milestone) => {
      console.log(milestone.id);
    });
    return data;
  };

  return (
    <div className="phase-table">
      <div className="phase-table-header" onClick={() => milestoneMap()}>
        <h3>Phases</h3>
      </div>
      <div className="phase-table-body">
        {phasesArrayReadOnly.map((phase) => {
          return <PhaseListItem key={phase.id} phase={phase} />;
        })}
      </div>
    </div>
  );
}
