import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardHome from "./components/DashboardHome";
import AccountsPage from "./components/AccountsPage";
import TransfersPage from "./components/TransfersPage";

import { useState, useEffect } from "react";
import SettingsPage from "./components/SettingsPage";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("isDark") === "true";
  });
  const [isLargeText, setIsLargeText] = useState(() => {
    return localStorage.getItem("isLargeText") === "true";
  });
  const [activePage, setActivePage] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  useEffect(() => {
    if (isLargeText) {
      document.documentElement.classList.add("large-text");
    } else {
      document.documentElement.classList.remove("large-text");
    }

    localStorage.setItem("isLargeText", isLargeText);
  }, [isLargeText]);

  return (
    <div
      className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex ${
        isSidebarOpen ? "overflow-hidden md:overflow-auto" : ""
      }`}
    >
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
          {activePage === "accounts" && <AccountsPage />}
          {activePage === "transfers" && <TransfersPage />}
          {activePage === "settings" && (
            <SettingsPage
              isDark={isDark}
              setIsDark={setIsDark}
              isLargeText={isLargeText}
              setIsLargeText={setIsLargeText}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
