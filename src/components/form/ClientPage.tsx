import "./Form.css";
import { useNavigate } from "react-router-dom";
import ClientCard from "./ClientCard";
import { useClient } from "../../context/clientContext";

export default function ClientPage() {
  const navigate = useNavigate();
  const [clients] = useClient();

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
        {clients.map((client) => {
          return <ClientCard client={client} />;
        })}
      </ul>
    </div>
  );
}
