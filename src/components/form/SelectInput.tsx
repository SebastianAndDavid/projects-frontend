import { useEffect, useState } from "react";
import { getAllHomeowners } from "../../fetch-utils";
import { HomeownerSelect } from "../homeowners/homeowner.interface";

interface SelectInputProps {
  setClientID: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SelectInput({ setClientID }: SelectInputProps) {
  const [clientArray, setClientArray] = useState<HomeownerSelect[]>([]);

  useEffect(() => {
    const handleFetchClients = async () => {
      const data = await getAllHomeowners();
      setClientArray(data);
      setClientID([String(data[0].id)]);
    };
    handleFetchClients();
  }, []);

  return (
    <div className="input-row">
      <div className="input-col-1">
        <div className="label-container">
          <label>Client</label>
        </div>
      </div>
      <div className="input-col-2">
        <div className="clients-select-container">
          <select onChange={(e) => setClientID([e.target.value])}>
            {clientArray &&
              clientArray.map((client) => {
                return (
                  <option value={client.id} key={client.id}>
                    {client.first_name} {client.last_name}
                  </option>
                );
              })}
          </select>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
