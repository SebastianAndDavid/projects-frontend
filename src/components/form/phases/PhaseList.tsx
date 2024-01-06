import { usePhasesReadOnly } from "../../../context/projectsContext";
import PhaseListItem from "./PhaseListItem";

export default function PhaseList() {
  const [phasesArrayReadOnly] = usePhasesReadOnly();

  return (
    <div>
      <div>
        <h3>Phases</h3>
      </div>
      <div>
        {phasesArrayReadOnly.map((phase) => {
          return <PhaseListItem key={phase.id} phase={phase} />;
        })}
      </div>
    </div>
  );
}
