import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function change(event) {
    const name = event.target.name;
    const new_value = event.target.value;
    setContact((prevValue) => {
      if (name == "fName") {
        return {
          fName: new_value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name == "lName") {
        return {
          lName: new_value,
          fName: prevValue.fName,
          email: prevValue.email
        };
      } else if (name == "email") {
        return {
          email: new_value,
          fName: prevValue.fName,
          lName: prevValue.lName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={change} name="fName" placeholder="First Name" />
        <input onChange={change} name="lName" placeholder="Last Name" />
        <input onChange={change} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
