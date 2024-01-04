import { useEffect, useState } from "react";
import { getAllReadOnlyPhases } from "../../fetch-utils";

export default function PhaseList() {
  const [phaseArray, setPhaseArray] = useState([]);
  console.log("phaseArray", phaseArray);

  useEffect(() => {
    const handleFetchAllReadOnlyPhases = async () => {
      const data = await getAllReadOnlyPhases();
      console.log("data", data);
      setPhaseArray(data);
    };
    handleFetchAllReadOnlyPhases();
  }, []);

  return <div>PhaseList</div>;
}
