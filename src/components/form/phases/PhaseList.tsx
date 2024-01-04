import { usePhasesReadOnly } from "../../../context/projectsContext";

export default function PhaseList() {
  const [phasesArrayReadOnly] = usePhasesReadOnly();

  console.log("first", phasesArrayReadOnly);

  return <div>PhaseList</div>;
}
