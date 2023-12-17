import { useEffect, useState } from "react";
import { getAllHomeowners } from "../../fetch-utils";
import { HomeownerSelect } from "./homeowner.interface";
import HomeownerCard from "./HomeownerCard";

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
    <div className="list-container">
      {homeownersArray.map((owner) => {
        return (
          <div key={owner.id}>
            <HomeownerCard owner={owner} />
          </div>
        );
      })}
    </div>
  );
}
