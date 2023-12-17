export interface HomeownerCreate {
  first_name: string;
  last_name: string;
  company?: string | null;
  email: string;
  phone: string;
  street: string;
  apt?: string | null;
  city: string;
  state: string;
  zip_code: string;
}

export interface HomeownerSelect {
  id: number;
  createdAt: Date;
  first_name: string;
  last_name: string;
  company?: string | null;
  email: string;
  phone: string;
  street: string;
  apt?: string | null;
  city: string;
  state: string;
  zip_code: string;
}

export interface HomeownerSelectProps {
  owner?: HomeownerSelect;
  // setDidClickEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
