import { useState } from "react";
import "./FormsApp.css";

export default function Form() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [userContact, setUserContact] = useState({
    username: "",
    email: "",
    text: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const email = userContact.email;
    const username = userContact.username;
    if (email && !email.includes("@")) {
      setError("Invalid email format");
      setSuccess("");
      return;
    }
    if (username.trim() === "") {
      setError("You need a username!");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Form submitted!");
    setUserContact({
      username: "",
      email: "",
      text: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {success && <div style={{ color: "green" }}>{success}</div>}
      <div>
        <label>Name:</label>
        <input
          className="input-regular"
          required
          name="username"
          type="text"
          value={userContact.username || ""}
          onChange={(e) =>
            setUserContact({
              ...userContact,
              username: e.target.value,
            })
          }
        ></input>
      </div>

      <div>
        <label>Email:</label>
        <input
          className="input-regular"
          required
          name="email"
          type="email"
          value={userContact.email || ""}
          onChange={(e) =>
            setUserContact({
              ...userContact,
              email: e.target.value,
            })
          }
        ></input>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}

      <div>
        <label>Text:</label>
        <textarea
          className="input-text"
          name="text"
          value={userContact.text || ""}
          onChange={(e) =>
            setUserContact({
              ...userContact,
              text: e.target.value,
            })
          }
        ></textarea>
      </div>
      <button className="input-regular" type="submit">
        Submit
      </button>
    </form>
  );
}

/*
Task: Build a contact form with validation. It should have:
Name, email, message fields
Client-side validation (required fields, email format)
Success/error messages
Form submission handling
Go build it. Come back when you're stuck or done.
I won't guide you step-by-step. You know the concepts - now practice them.*/
