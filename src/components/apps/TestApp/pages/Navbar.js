import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/login" className="mr-4">
        Menu
      </Link>
      <Link to="/contact" className="mr-4">
        Contact
      </Link>
    </div>
  );
};
