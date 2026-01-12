const DashboardHome = () => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-8 text-blue-600 dark:text-blue-400">
        Welcome back, Zino!
      </h2>
      <h3 className="text-2xl font-semibold mb-8">Your Overview</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Total Balance</p>
          <p className="text-2xl font-extrabold text-green-600 dark:text-green-400 large-amount">
            $8,345.67
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Monthly Spending
          </p>
          <p className="text-2xl font-extrabold text-red-600 dark:text-red-400 large-amount">
            $2,450.00
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Savings Goal</p>
          <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 large-amount">
            82%
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
