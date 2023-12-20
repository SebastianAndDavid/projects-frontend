import { useEffect, useState } from "react";
import { createProject, getAllHomeowners } from "../../fetch-utils";
import { HomeownerSelect } from "../homeowners/homeowner.interface";
import "./Projects.css";

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
  const [homeownerCountArray, setHomeownerCountArray] = useState<string[]>([
    "1",
  ]);

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
      await createProject({ project, homeownerId });
    }
  };

  const handleSelect = (value: string) => {
    if (!homeownerId.includes(value)) {
      setHomeownerId([...homeownerId, value]);
    }
  };

  const handleNumberOfHomeownersSelect = (value: string) => {
    const newArray = Array(Number(value)).fill(null);
    setHomeownerCountArray(newArray);
  };

  return (
    <div>
      <form className="project-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="project-input-container">
          <section className="project-col-1">
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
              onChange={(e) => handleNumberOfHomeownersSelect(e.target.value)}
            >
              {homeownerArray.map((owner, index) => {
                return (
                  <option key={owner.id} value={index + 1}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
            {homeownerCountArray.map((count) => {
              return (
                <>
                  <div>Homeowner</div>
                  <select
                    onChange={(e) => handleSelect(e.target.value)}
                    key={count + 1}
                  >
                    <option value=""></option>
                    {homeownerArray.map((owner) => {
                      return (
                        <option
                          value={owner.id}
                          key={owner.id}
                          disabled={homeownerId.includes(String(owner.id))}
                        >
                          {owner.first_name}
                        </option>
                      );
                    })}
                  </select>
                </>
              );
            })}
          </section>
          <section className="project-col-2">
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
