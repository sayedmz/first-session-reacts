import React, { useState } from "react";

export const MergeUse = () => {
  // setUp data
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    message: "",
  });
  //handle data
  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  console.log(form);
  //render data
  return (
    <div>
      <h2 id="props"> MergeUseState </h2>

      <div>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={form.email}
              name="email"
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="Password...."
              value={form.password}
              name="password"
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pc" className="form-label">
              Password confirmation
            </label>
            <input
              type="password"
              className="form-control"
              id="pc"
              placeholder="Password confirmation..."
              value={form.passwordConfirmation}
              name="passwordConfirmation"
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              value={form.message}
              name="message"
              onChange={handleFormChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
