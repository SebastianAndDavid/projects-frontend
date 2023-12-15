import { useEffect, useState } from "react";
import { getAllHomeowners } from "../../fetch-utils";
import { HomeownerSelect } from "./homeowner.interface";

export default function HomeownerList() {
  const [homeownersArray, setHomeownersArray] = useState<HomeownerSelect[]>([]);
  useEffect(() => {
    const handleFetchHomeowners = async () => {
      const data = await getAllHomeowners();
      if (data) {
        setHomeownersArray(data);
      }
    };
    handleFetchHomeowners();
  }, []);

  return (
    <div>
      {"Select owner(s) to start a new project"}
      <div>
        {homeownersArray.map((owner) => {
          return <div key={owner.id}>{owner.first_name}</div>;
        })}
      </div>
    </div>
  );
}
