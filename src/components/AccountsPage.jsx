import {
  FaUniversity,
  FaPiggyBank,
  FaCreditCard,
  FaChartLine,
} from "react-icons/fa";

const AccountsPage = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-10">
      {/* Big title so you know where you are */}
      <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Your Accounts <FaUniversity className="inline ml-2" />
      </h3>

      {/* Grid of account cards - 1 column on phone, 2 on tablet, 3 on big screen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Account Card 1 - Savings */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-2xl">
                <FaPiggyBank />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Savings Account</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Main savings
                </p>
              </div>
            </div>
            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">
              +4.2% interest
            </span>
          </div>
          <p className="text-4xl font-extrabold text-green-600 dark:text-green-400">
            $8,542.30
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Available balance
          </p>
        </div>

        {/* Account Card 2 - Checking */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">
                <FaCreditCard />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Checking Account</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Everyday spending
                </p>
              </div>
            </div>
          </div>
          <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
            $2,319.45
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Available balance
          </p>
        </div>

        {/* Account Card 3 - Investment */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-2xl">
                📈
              </div>
              <div>
                <h4 className="text-xl font-semibold">Investment Portfolio</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Stocks & Funds
                </p>
              </div>
            </div>
            <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
              +12.8% interest
            </span>
          </div>
          <p className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">
            $15,720.00
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Current value
          </p>
        </div>

        {/* You can add more accounts later! */}
      </div>

      {/* Little extra fun section */}
      <div className="mt-10 p-6 bg-linear-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
        <h4 className="text-xl font-bold mb-4">Quick Actions</h4>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add New Account
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Transfer Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
