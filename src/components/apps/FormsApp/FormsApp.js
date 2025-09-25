import { useState } from "react";
import "./FormsApp.css";

export default function FormsApp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const email = formData.email;
    const password = formData.password;

    if (!email || email.trim() === "") {
      setError({ ...error, email: "You need an email!" });
      setSuccess("");
      return;
    }
    if (email && !email.includes("@")) {
      setError({ ...error, email: "Invalid email format" });
      setSuccess("");
      return;
    }
    if (!password || password.trim() === "") {
      setError({ ...error, password: "You need a password!" });
      setSuccess("");
      return;
    }

    if (password && password.length < 6) {
      setError({
        ...error,
        password: "Password must be at least 6 characters",
      });
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {success && <div style={{ color: "green" }}>{success}</div>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="input-regular"
          required
          id="email"
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
            setError({ ...error, email: "" });
          }}
          onBlur={() => {
            if (formData.email && !formData.email.includes("@")) {
              setError({ ...error, email: "Invalid email format" });
            } else {
              setError({ ...error, email: "" });
            }
          }}
        ></input>
      </div>
      {error && <div style={{ color: "red" }}>{error.email}</div>}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className="input-regular"
          required
          id="password"
          name="password"
          type="password"
          value={formData.password || ""}
          onChange={(e) => {
            setFormData({
              ...formData,
              password: e.target.value,
            });
            setError({ ...error, password: "" });
          }}
          onBlur={() => {
            if (formData.password && formData.password.length < 6) {
              setError({
                ...error,
                password: "Password must be at least 6 characters",
              });
            } else {
              setError({ ...error, password: "" });
            }
          }}
        ></input>
      </div>
      {error && <div style={{ color: "red" }}>{error.password}</div>}
      <button className="button" type="submit">
        Submit
      </button>{" "}
      <button
        className="button"
        type="reset"
        onClick={() => setFormData({ email: "", password: "" })}
      >
        Reset
      </button>
    </form>
  );
}
