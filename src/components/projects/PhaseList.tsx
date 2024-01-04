import { useEffect, useState } from "react";
import { getAllReadOnlyPhases } from "../../fetch-utils";

interface PhaseArray {
  id: number;
  name: string;
  MilestonesReadOnly: [];
}

export default function PhaseList() {
  const [phaseArray, setPhaseArray] = useState<PhaseArray[]>([]);
  const [count, setCount] = useState(0);
  console.log("phaseArray", phaseArray);

  useEffect(() => {
    const handleFetchAllReadOnlyPhases = async () => {
      const data = await getAllReadOnlyPhases();
      if (data) {
        setPhaseArray(data);
      }
    };
    handleFetchAllReadOnlyPhases();
  }, []);

  return (
    <div>
      {phaseArray.map((phase) => {
        return (
          <div key={phase.id}>
            <div>{phase.name}</div>
            <div>Milestones: {phase.MilestonesReadOnly.length}</div>
            Tasks: {count}
            <div>
              {phase.MilestonesReadOnly.map((milestone) => {
                return <div>{count}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// (milestone) => {
//     return <div>{milestone.TasksReadOnly.length}</div>;
//   }
