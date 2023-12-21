import { useEffect, useState } from "react";
import { getAllHomeowners } from "../../fetch-utils";
import { HomeownerSelect } from "../homeowners/homeowner.interface";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import ClientCard from "./ClientCard";

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
          return <ClientCard client={client} />;
        })}
      </ul>
    </div>
  );
}
