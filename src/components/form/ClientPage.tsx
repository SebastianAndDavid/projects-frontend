import { useEffect, useState } from "react";
import { getAllHomeowners } from "../../fetch-utils";
import { HomeownerSelect } from "../homeowners/homeowner.interface";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export default function ClientPage() {
  const [clientsArray, setClientsArray] = useState<HomeownerSelect[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const handleFetchClients = async () => {
      const data = await getAllHomeowners();
      setClientsArray(data);
    };
    handleFetchClients();
  }, []);

  return (
    <div>
      <div className="clients-header-row-container">
        <div className="header-wrapper">
          <h1 className="client-header-h1">Clients</h1>
        </div>
        <div>
          <button onClick={() => navigate("/client-create-page")}>
            + New client
          </button>
        </div>
        <div className="client-search-wrapper">
          <input type="text" />
        </div>
      </div>
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
