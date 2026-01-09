import {
  FaHome,
  FaWallet,
  FaExchangeAlt,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import React from "react";

const Sidebar = ({
  activePage,
  setActivePage,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const navItems = [
    { name: "home", label: "Home", icon: <FaHome /> },
    { name: "accounts", label: "Accounts", icon: <FaWallet /> },
    { name: "transfers", label: "Transfers", icon: <FaExchangeAlt /> },
    { name: "settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <>
      <aside
        className={`fixed md:static top-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col h-screen justify-between z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo at the top */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold p-2 text-left text-blue-600 dark:text-blue-400 cursor-pointer">
            Zee Banking
          </h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-1 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer hover:scale-110 transition"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Nav centered in remaining space */}
        <nav className="flex flex-col gap-7 mt-8 pl-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActivePage(item.name);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 p-4 rounded-lg cursor-pointer transition
              hover:bg-blue-100 dark:hover:bg-blue-900
              ${
                activePage === item.name
                  ? "bg-blue-100 dark:bg-blue-900 font-bold"
                  : ""
              }`}
            >
              {React.cloneElement(item.icon, {
                className: `text-2xl ${
                  activePage === item.name
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300"
                }`,
              })}
              <span className="text-lg">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Logout at the bottom */}
        <div className="mt-auto px-6 pb-6">
          <button
            onClick={() => {
              setActivePage("logout");
              setIsSidebarOpen(false);
            }}
            className="flex items-center gap-3 w-full py-3 px-3 rounded-lg cursor-pointer transition
            hover:bg-blue-100 dark:hover:bg-blue-900"
          >
            <FaSignOutAlt className="text-2xl text-gray-600 dark:text-gray-300" />
            <span className="text-lg">Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
