import { useNavigate } from "react-router-dom";
import { ClientCardProps } from "../homeowners/homeowner.interface";

export default function ClientCard({ client }: ClientCardProps) {
  const navigate = useNavigate();
  return (
    <li className="client-card-row">
      <div className="cc-contents">
        <div className="cc-col-1">
          <button onClick={() => navigate(`/client-create-page/${client.id}`)}>
            Edit
          </button>
          <strong>{client.first_name}</strong>
        </div>
        <div className="cc-col-2">
          <button>Add contact</button>
        </div>
      </div>
    </li>
  );
}
