const express = require("express");
const router = express.Router();
const data = {};
data.employees = require("../../model/employees.json");
const employeesController = require("../../controllers/employeesController");
const verifyJWT = require("../../middleware/verifyJWT");

// Handle routes for /employees
router
  .route("/")
  .get(verifyJWT, employeesController.getAllEmployees) // Get all employees
  .post(employeesController.createNewEmployee) // Create a new employee
  .put(employeesController.updateEmployee) // Update an existing employee
  .delete(employeesController.deleteEmployee); // Delete an employee
// Handle routes for /employees/:id
router.route("/:id").get(employeesController.getEmployee); // Get a specific employee by ID

// .get will handle GET requests to /employees, converting the data to JSON and sending it as a response
/*   .get((req, res) => {
    res.json(data.employees);
  }) */
// .post will handle POST requests to /employees, creating a new employee at the endpoint(/employees.json) with the data sent in the request body
/*  .post((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  }) */
// In a real application, you would add the new employee to your database here
/*   .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  }) */
// .delete will handle DELETE requests to /employees, removing the employee at the specified ID
/*  .delete((req, res) => {
    res.json({
      id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  }); */

// following routes handle requests to /employees/:id, where :id is a placeholder for the employee ID
// e.g. /employees/1, /employees/2, etc.
// we use req.params.id to access the ID from the URL instead of req.body.id, since it's part of the URL path and not the request body
/* router.route("/:id").get((req, res) => {
  res.json({ id: req.params.id });
}); */

module.exports = router;
