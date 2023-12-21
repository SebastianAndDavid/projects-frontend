import { useEffect, useState } from "react";
import { getAllHomeowners } from "../../fetch-utils";
import { HomeownerSelect } from "../homeowners/homeowner.interface";
import "./Form.css";

export default function ClientPage() {
  const [clientsArray, setClientsArray] = useState<HomeownerSelect[]>([]);

  useEffect(() => {
    const handleFetchClients = async () => {
      const data = await getAllHomeowners();
      setClientsArray(data);
    };
    handleFetchClients();
  }, []);

  return (
    <div>
      <ul className="client-list-container">
        {clientsArray.map((client) => {
          return (
            <li className="client-card-row">
              <div className="cc-contents">
                <div className="cc-col-1">
                  <button>Edit</button>
                  <strong>{client.first_name}</strong>
                </div>
                <div className="cc-col-2">
                  <button>Add contact</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
