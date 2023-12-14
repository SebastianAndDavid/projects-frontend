import "./Homeowner.css";

export default function HomeownersCreate() {
  return (
    <div className="homeowner-create">
      <h2>Client Information</h2>
      <form>
        <div className="input-container">
          <section className="col-1">
            First Name
            <input type="text" />
            Email
            <input type="text" />
            Company
            <input type="text" />
            Address Line 1
            <input type="text" />
            City
            <input type="text" />
            Deposit
            <input type="text" />
          </section>
          <section className="col-2">
            Last Name
            <input type="text" />
            Phone
            <input type="text" />
            Apartment #
            <input type="text" />
            State
            <input type="text" />
            Zip
            <input type="text" />
          </section>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
