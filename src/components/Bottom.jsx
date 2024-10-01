import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-slate-800 text-white py-4 px-16">
      <div>
        <ul className="flex justify-center gap-10 text-xl">
          <li>
            <Link className="hover:text-pink-600 text-xl" to="/">
              Home
            </Link>
          </li>
          <li>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                isActive ? "text-pink-600" : "hover:text-pink-600"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "text-pink-600" : "hover:text-pink-600"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Faq"
              className={({ isActive }) =>
                isActive ? "text-pink-600" : "hover:text-pink-600"
              }
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Privacy"
              className={({ isActive }) =>
                isActive ? "text-pink-600" : "hover:text-pink-600"
              }
            >
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Tnc"
              className={({ isActive }) =>
                isActive ? "text-pink-600" : "hover:text-pink-600"
              }
            >
              Terms & Conditions
            </NavLink>
            
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
