import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  return (
    <h1>
      {username}
      Login Page
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      ></input>
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Submit Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </h1>
  );
};

export default Login;
