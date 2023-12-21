import { createContext, useContext, useEffect, useState } from "react";
import { ClientContextType } from "./clientContext.interface";
import { getAllHomeowners } from "../fetch-utils";

const ClientContext = createContext<ClientContextType>({
  clients: [],
  setClients: () => {},
});

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const handleGetClients = async () => {
      const response = await getAllHomeowners();
      setClients(response);
    };
    handleGetClients();
  }, []);

  const stateAndSetters = {
    clients,
    setClients,
  };

  return (
    <ClientContext.Provider value={stateAndSetters}>
      {children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  const { clients, setClients } = useContext(ClientContext);
  return [clients, setClients] as const;
}
