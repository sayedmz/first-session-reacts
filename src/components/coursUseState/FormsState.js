import React, { useState } from "react";

export const FormsState = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <form action="" style={{ textAlign: "center" }}>
        <label htmlFor="1">First name :</label>
        <input
          type="text"
          id="1"
          placeholder="First name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="2">Last name :</label>
        <input
          type="text"
          id="2"
          placeholder="Last name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="3">Email :</label>
        <input
          type="email"
          id="3"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
