import { useEffect, useState } from "react";
import "./Projects.css";
import { getAllHomeowners } from "../../fetch-utils";

export default function ProjectCreate() {
  const [homeownerArray, setHomeownerArray] = useState([]);
  useEffect(() => {
    const handleFetchAllHomeowners = async () => {
      const data = await getAllHomeowners();
      setHomeownerArray(data);
    };
    handleFetchAllHomeowners();
  }, []);
  return (
    <div>
      <form>
        <div className="input-container">
          <section className="col-1">
            Project Name
            <input type="text" />
            Description
            <input type="text" />
            Deposit
            <input type="text" />
            Homeowner
            <select>
              {homeownerArray.map((owner) => {
                return (
                  <option value="" key={owner.id}>
                    {owner.first_name}
                  </option>
                );
              })}
            </select>
          </section>
          <section className="col-2">
            Address Line 1
            <input type="text" />
            City
            <input type="text" />
            State
            <input type="text" />
            Apartment #
            <input type="text" />
            Zip
            <input type="text" />
          </section>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
