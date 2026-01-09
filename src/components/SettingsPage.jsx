const SettingsPage = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
      {/* Big title so you know you're in the control room */}
      <h3 className="text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100">
        Settings
      </h3>

      {/* Section 1: Profile (your info) */}
      <div className="mb-12">
        <h4 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Profile
        </h4>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-4xl">
              👤
            </div>
            <div>
              <p className="text-xl font-bold">Zino</p>
              <p className="text-gray-500 dark:text-gray-400">
                zino@example.com
              </p>
            </div>
          </div>
          <button className="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Section 2: Appearance (dark mode + more) */}
      <div className="mb-12">
        <h4 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Appearance
        </h4>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl divide-y divide-gray-200 dark:divide-gray-700">
          <div className="flex justify-between items-center p-6">
            <div>
              <p className="text-lg font-medium">Dark Mode</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Make the app easier on the eyes at night
              </p>
            </div>
            {/* We already have our toggle in header, but this shows how it could look */}
            <div className="w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full relative cursor-pointer">
              <div className="absolute w-6 h-6 bg-white rounded-full top-1 left-1 shadow-md transition-all"></div>
            </div>
          </div>

          <div className="flex justify-between items-center p-6">
            <div>
              <p className="text-lg font-medium">Large Text</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Increase text size for better reading
              </p>
            </div>
            <div className="w-14 h-8 bg-blue-600 rounded-full relative">
              <div className="absolute w-6 h-6 bg-white rounded-full top-1 right-1 shadow-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Security (important stuff!) */}
      <div className="mb-12">
        <h4 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Security
        </h4>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl divide-y divide-gray-200 dark:divide-gray-700">
          <div className="flex justify-between items-center p-6">
            <div>
              <p className="text-lg font-medium">Biometric Login</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Use fingerprint or face ID
              </p>
            </div>
            <div className="w-14 h-8 bg-green-600 rounded-full relative">
              <div className="absolute w-6 h-6 bg-white rounded-full top-1 right-1 shadow-md"></div>
            </div>
          </div>

          <div className="p-6">
            <p className="text-lg font-medium">Change Password</p>
            <button className="mt-3 px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-xl hover:bg-gray-300 transition">
              Update Password
            </button>
          </div>

          <div className="p-6">
            <p className="text-lg font-medium text-red-600 dark:text-red-400">
              Log Out
            </p>
            <button className="mt-3 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Section 4: Notifications */}
      <div className="mb-12">
        <h4 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Notifications
        </h4>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          <p className="text-lg mb-4">Get alerts for:</p>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span>Transaction Alerts</span>
              <div className="w-14 h-8 bg-blue-600 rounded-full relative">
                <div className="absolute w-6 h-6 bg-white rounded-full top-1 right-1 shadow-md"></div>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Low Balance Warnings</span>
              <div className="w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full relative">
                <div className="absolute w-6 h-6 bg-white rounded-full top-1 left-1 shadow-md"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Little footer note */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
        App version 1.0.0 • Made by Zino
      </p>
    </div>
  );
};

export default SettingsPage;
