import { useState } from "react";
import ClientForm from "./ClientForm";

export default function ClientCreate() {
  const [clientFormData, setClientFormData] = useState({
    first_name: "",
    last_name: "",
    // company: "",
    email: "",
    phone: "",
    street: "",
    // apt: "",
    city: "",
    state: "",
    zip_code: "",
  });
  return (
    <div>
      <ClientForm
        clientFormData={clientFormData}
        setClientFormData={setClientFormData}
      />
    </div>
  );
}
