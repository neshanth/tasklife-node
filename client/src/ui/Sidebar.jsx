import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#f3f4f6] text-black p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className="block p-2 rounded hover:bg-gray-200">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/projects" className="block p-2 rounded hover:bg-gray-200">Projects</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}