import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        className={({ isActive }) =>
          ["link_nav", isActive ? "active" : null].filter(Boolean).join(" ")
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/adduser"
        className={({ isActive }) =>
          ["link_nav", isActive ? "active" : null].filter(Boolean).join(" ")
        }
      >
        Add User
      </NavLink>
    </div>
  );
};

export default Header;
