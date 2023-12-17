import { HomeownerSelectProps } from "./homeowner.interface";
import { useState } from "react";
import "./Homeowner.css";
import HomeownersCreate from "./HomeownersCreate";

export default function HomeownerCard({ owner }: HomeownerSelectProps) {
  const [didClickEdit, setDidClickEdit] = useState(false);
  return (
    <>
      {owner !== undefined && (
        <div className={didClickEdit ? "hide-card" : "card"}>
          <p>First Name: {owner.first_name}</p>
          <p>Last Name: {owner.last_name}</p>
          <button onClick={() => setDidClickEdit(true)}>Edit</button>
        </div>
      )}
      {didClickEdit && (
        <div className={didClickEdit ? "edit-mode" : "hide-edit-mode"}>
          <HomeownersCreate owner={owner} />
        </div>
      )}
    </>
  );
}
