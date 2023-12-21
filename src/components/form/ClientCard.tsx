import { ClientCardProps } from "../homeowners/homeowner.interface";

export default function ClientCard({ client }: ClientCardProps) {
  console.log("client", client);
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
}
