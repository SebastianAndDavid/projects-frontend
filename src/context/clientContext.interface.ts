import { HomeownerSelect } from "../components/homeowners/homeowner.interface";

export interface ClientContextType {
  clients: HomeownerSelect[];
  setClients: React.Dispatch<React.SetStateAction<never[]>>;
}
