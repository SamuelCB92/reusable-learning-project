const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);
    if (!result) return res.sendStatus(401);
    next();
  };
};

module.exports = verifyRoles;
// middleware to verify user roles
// to be used after verifyJWT middleware
// to protect routes based on user roles
// usage: verifyRoles(2001, 1984, 5150) where the numbers are the role IDs
// these numbers are defined in roles_list.js
// the roles are stored in the JWT token as an array of numbers
