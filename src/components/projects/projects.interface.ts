import { HomeownerSelect } from "../homeowners/homeowner.interface";

export interface Project {
  name: string;
  description: string | undefined | null;
  street: string;
  apt: string | undefined | null;
  city: string;
  state: string;
  zip_code: string;
  deposit: string;
}

export interface ProjectFormProps {
  projectFormData: {
    name: string;
    description: string;
    deposit: string;
    street: string;
    // apt: string;
    city: string;
    state: string;
    zip_code: string;
  };
  setProjectFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      deposit: string;
      street: string;
      // apt: string;
      city: string;
      state: string;
      zip_code: string;
    }>
  >;
}

export interface ProjectSelect extends Project {
  id: number;
  createdAt: Date;
}

export interface ProjectCardProps {
  client: HomeownerSelect;
}
