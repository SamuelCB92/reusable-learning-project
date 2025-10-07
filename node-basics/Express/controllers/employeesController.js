/* const data = {};
data.employees = require("../model/employees.json"); */

const data = {
  employees: require("../model/employees.json"),
  setEmployees: function (data) {
    this.employees = data;
  },
};

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createNewEmployee = (req, res) => {
  const newEmployee = {
    id: data.employees[data.employees.length - 1].id + 1 || 1, // Incremental ID based on last employee's ID, or 1 if no employees exist
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  // Validate the input
  if (!newEmployee.firstname || !newEmployee.lastname) {
    return res
      .status(400)
      .json({ message: "First and last names are required" });
  }
  data.setEmployees([...data.employees, newEmployee]); // Add the new employee to the array
  res.status(201).json(data.employees); // Respond with the updated list of employees
};
// In a real application, you would add the new employee to your database here
const updateEmployee = (req, res) => {
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.body.id)
  );
  // Find the employee by ID
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  // Update the employee's details if provided in the request body
  if (req.body.firstname) employee.firstname = req.body.firstname;
  if (req.body.lastname) employee.lastname = req.body.lastname;
  // Create a new array with the updated employee details
  // This ensures immutability and proper state management
  const filteredArray = data.employees.filter(
    (emp) => emp.id !== parseInt(req.body.id)
  );
  // Add the updated employee back into the array, this maintains the order by sorting by ID
  // This was necessary because the filter method removes the employee from the array, so we need to add it back
  // Alternatively, we could have used map to create a new array with the updated employee
  // but that would have been less efficient as it would have iterated over the entire array
  // and we would have had to check each employee's ID to see if it matches the updated employee's ID
  const unsortedArray = [...filteredArray, employee];
  data.setEmployees(unsortedArray.sort((a, b) => a.id - b.id));
  res.status(200).json(data.employees);
};
// .put will handle PUT requests to /employees, updating an existing employee at the specified ID
const deleteEmployee = (req, res) => {
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.body.id)
  );

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  // Remove employee from array
  const filteredArray = data.employees.filter(
    (emp) => emp.id !== parseInt(req.body.id)
  );
  data.setEmployees(filteredArray);

  res.json(data.employees); // Return the updated employee list
};

const getEmployee = (req, res) => {
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.params.id)
  );

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json(employee);
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
