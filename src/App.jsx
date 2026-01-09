import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardHome from "./components/DashboardHome";
import { useState, useEffect } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("isDark") === "true";
  });
  const [activePage, setActivePage] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col">
        <Header
          isDark={isDark}
          setIsDark={setIsDark}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="flex-1">
          {activePage === "home" && <DashboardHome />}
          {activePage === "accounts" && (
            <p className="p-10 text-2xl">Accounts page coming soon!</p>
          )}
          {activePage === "transfers" && (
            <p className="p-10 text-2xl">
              Transfers page - send money here! 💸
            </p>
          )}
          {activePage === "settings" && (
            <p className="p-10 text-2xl">Settings - make it your own!</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
