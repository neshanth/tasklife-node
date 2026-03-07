import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/inbox", label: "Inbox" },
  { to: "/projects", label: "Projects" },
];

export default function Sidebar() {
  return (
    <aside className="w-64  bg-[#f3f4f6] text-black p-4 flex flex-col h-full">
      <div className="mb-4">
        <img src={logo} alt="Logo" width={122} />
      </div>
      <nav className="flex-1 pt-4">
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block py-4 px-4 rounded hover:bg-white font-medium  ${
                    isActive ? "bg-white" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <p className="py-4 px-4 rounded hover:bg-white font-medium">Logout</p>
      </div>
    </aside>
  );
}
