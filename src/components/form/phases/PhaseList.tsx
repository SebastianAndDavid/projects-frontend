import {
  useMilestonesReadOnly,
  usePhasesReadOnly,
} from "../../../context/projectsContext";
import PhaseListItem from "./PhaseListItem";
import "./PhaseList.css";

export default function PhaseList() {
  const [phasesArrayReadOnly] = usePhasesReadOnly();
  const [milestonesArrayReadOnly] = useMilestonesReadOnly();
  console.log("mile", milestonesArrayReadOnly);

  return (
    <div className="phase-table">
      <div className="phase-table-header">
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
