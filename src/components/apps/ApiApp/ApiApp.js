import { useState } from "react";

export default function ApiApp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // List of valid top-level user properties
  const validProperties = [
    "name",
    "email",
    "username",
    "phone",
    "website",
    // Add more as needed
  ];

  // Check if the searchTerm is a valid property
  const isValidProperty = validProperties.includes(searchTerm);

  return (
    <div>
      <span>
        <button onClick={fetchUsers}>Clickity click</button>
      </span>

      <span>
        <button onClick={() => setFilteredUsers([])}>reset</button>
      </span>

      <label htmlFor="filterdata">Filter data:</label>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        id="filterdata"
        name="filterdata"
        placeholder="Ex: name"
      ></input>

      <div>
        {isLoading ? <div>Loading...</div> : ""}
        {error ? <div>{error} </div> : ""}
      </div>

      <details name="Data">
        <summary name="Data">Data</summary>
        {filteredUsers?.map((user, key) => (
          <li key={key}>
            {user.name}, {user.email}, {user.address.city}, {user.company.name}{" "}
          </li>
        ))}
      </details>

      <details name="filteredData">
        <summary name="filteredData">Filtered Data</summary>
        {!searchTerm ? (
          <div>Enter a property name to filter.</div>
        ) : !isValidProperty ? (
          <div style={{ color: "red" }}>
            Invalid property. Try: {validProperties.join(", ")}
          </div>
        ) : (
          filteredUsers?.map((user, key) => (
            <li key={key}>{user?.[searchTerm]} </li>
          ))
        )}
      </details>
    </div>
  );

  async function fetchUsers() {
    setError("");
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
      setIsLoading(false);
    } catch (error) {
      setError("Failed to fetch users");
      setIsLoading(false);
      setFilteredUsers([]);
    }
  }
}
