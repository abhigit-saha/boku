import { useState, useEffect } from "react";
import MainTab from "./components/MainTab";
import BlogsTab from "./components/BlogsTab";
import ProjectsTab from "./components/ProjectsTab";
import CPTab from "./components/CPTab";

const TABS = [
  { id: "blogs", label: "Blogs" },
  { id: "main", label: "Main" },
  { id: "projects", label: "Projects" },
  { id: "cp", label: "CP" },
];

function TabContent({ tabId }) {
  switch (tabId) {
    case "main":
      return <MainTab />;
    case "blogs":
      return <BlogsTab />;
    case "projects":
      return <ProjectsTab />;
    case "cp":
      return <CPTab />;
    default:
      return null;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState("blogs");
  const [theme, setTheme] = useState("terminal");

  useEffect(() => {
    if (theme === "bios") {
      document.documentElement.setAttribute("data-theme", "bios");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "terminal" ? "bios" : "terminal"));
  };

  return (
    <div className="bios-shell">
      <div className="bios-header">
        abhijit saha
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "terminal" ? "BIOS" : "TERM"}
        </button>
      </div>
      <nav className="bios-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`bios-tab${activeTab === tab.id ? " active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <main className="bios-content">
        <TabContent tabId={activeTab} />
      </main>
      <footer className="bios-footer">
        ←→ Select Tab | Last updated: Jun 2026
      </footer>
    </div>
  );
}
