import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Inbox from "./pages/Inbox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="inbox" element={<Inbox />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
