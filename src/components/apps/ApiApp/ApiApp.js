import { useState } from "react";

export default function ApiApp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return <button onClick={fetchUsers}>Clickity click</button>;

  async function fetchUsers() {
    setIsLoading(true);
    try {
      console.log("fetching users");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(`RESPONSE:`, response);
      const data = await response.json();
      setUsers([data]);
      console.log(data.length);
    } catch {
      setError("error here");
    }
  }
}
