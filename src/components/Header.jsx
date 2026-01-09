import { MdWbSunny, MdDarkMode } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const Header = ({ isDark, setIsDark, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-6 flex justify-between items-center">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden p-4 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer shadow-lg hover:scale-110 transition z-10"
      >
        <FaBars />
      </button>

      <button
        onClick={() => setIsDark(!isDark)}
        className="p-4 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer shadow-lg hover:scale-110 transition"
      >
        {isDark ? <MdWbSunny /> : <MdDarkMode />}
      </button>
    </header>
  );
};

export default Header;
