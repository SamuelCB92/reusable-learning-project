const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { username, password } = req.body;

  // Validate user input
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // Check if user already exists
  const duplicate = usersDB.users.find((user) => user.username === username);
  if (duplicate) {
    return res.status(409).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user object
  const newUser = {
    username,
    roles: { User: 2001 }, // Assign default role
    password: hashedPassword,
  };

  // Add new user to the database
  usersDB.setUsers([...usersDB.users, newUser]);

  // Save the updated user database to the JSON file
  try {
    await fsPromises.writeFile(
      path.join(__dirname, "../model/users.json"),
      // stringify will convert the object to a string, and null, 2 will format it with 2 spaces for readability
      JSON.stringify(usersDB.users, null, 2)
    );
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { handleNewUser };
