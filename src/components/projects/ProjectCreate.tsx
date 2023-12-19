import { useEffect, useState } from "react";
import "./Projects.css";
import { createProject, getAllHomeowners } from "../../fetch-utils";
import { HomeownerSelect } from "../homeowners/homeowner.interface";

export default function ProjectCreate() {
  const [homeownerArray, setHomeownerArray] = useState<HomeownerSelect[]>([]);
  const [homeownerId, setHomeownerId] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deposit, setDeposit] = useState("");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZip] = useState("");
  const [homeownerCountArray, setHomeownerCountArray] = useState(["1"]);

  useEffect(() => {
    const handleFetchAllHomeowners = async () => {
      const data = await getAllHomeowners();
      if (data) {
        setHomeownerArray(data);
      }
    };
    handleFetchAllHomeowners();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const project = {
      name,
      description,
      deposit,
      street,
      apt,
      city,
      state,
      zip_code,
    };
    if (name) {
      console.log("project", project);
      console.log("homeownerId", homeownerId);
      await createProject({ project, homeownerId });
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <section className="col-1">
            Project Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            Description
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            Deposit
            <input
              type="text"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
            />
            # of Homeowners
            <select
              typeof="number"
              onChange={(e) =>
                setHomeownerCountArray((prev) => [...prev, e.target.value])
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            {homeownerCountArray.map((count) => {
              return (
                <>
                  <div>Homeowner {count}</div>
                  <select
                    onChange={(e) =>
                      setHomeownerId((prev) => [...prev, e.target.value])
                    }
                  >
                    {homeownerArray.map((owner) => {
                      return (
                        <option value={owner.id} key={owner.id}>
                          {owner.first_name}
                        </option>
                      );
                    })}
                  </select>
                </>
              );
            })}
          </section>
          <section className="col-2">
            Address Line 1
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            City
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            State
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            Apartment #
            <input
              type="text"
              value={apt}
              onChange={(e) => setApt(e.target.value)}
            />
            Zip
            <input
              type="text"
              value={zip_code}
              onChange={(e) => setZip(e.target.value)}
            />
          </section>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
