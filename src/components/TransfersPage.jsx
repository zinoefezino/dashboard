const TransfersPage = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-3xl mx-auto">
      {/* Big happy title */}
      <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Make a transfer
      </h3>

      {/* The main transfer form – like filling out a magic money note */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        {/* Step 1: Who are you sending to? */}
        <div className="mb-8">
          <label className="block text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
            To (Recipient)
          </label>
          <input
            type="text"
            placeholder="Search name, email, or phone number..."
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Little hint */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Recent contacts will appear here...
          </p>
        </div>

        {/* Step 2: How much? */}
        <div className="mb-8">
          <label className="block text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-500">
              $
            </span>
            <input
              type="number"
              placeholder="0.00"
              className="w-full pl-12 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Fun extra info */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Available balance:{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              $12,345.67
            </span>
          </p>
        </div>

        {/* Step 3: Add a note (optional but cute) */}
        <div className="mb-10">
          <label className="block text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
            Note (optional)
          </label>
          <textarea
            placeholder="For pizza night or Thanks for the help! "
            rows="3"
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Big Send Button – the magic one! */}
        <button className="w-full py-5 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold rounded-xl cursor-pointer hover:from-blue-700 hover:to-indigo-700 transition shadow-lg hover:shadow-2xl transform hover:scale-[1.02]">
          Send Money Now
        </button>

        {/* Safety note – banks love these! */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Double-check details before sending. Your money is safe with us!
        </p>
      </div>

      {/* Extra fun section – recent transfers */}
      <div className="mt-12">
        <h4 className="text-2xl font-semibold mb-6">Recent Transfers</h4>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <p className="font-medium">Blessing Efezino Akpoghelie</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Yesterday • Pizza fund
              </p>
            </div>
            <p className="text-red-600 dark:text-red-400 font-bold">-$45.00</p>
          </div>
          {/* Add 2-3 more fake ones if you want! */}
        </div>
      </div>
    </div>
  );
};

export default TransfersPage;
