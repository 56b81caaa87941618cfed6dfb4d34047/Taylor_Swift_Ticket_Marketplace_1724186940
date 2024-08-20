<section class="bg-dark-purple text-white p-6 min-h-screen">
    <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Aave Lending Pool Interaction</h1>

        <!-- Deposit Section -->
        <div class="mb-6">
            <h2 class="text-xl font-semibold mb-4">Deposit</h2>
            <form class="space-y-4">
                <div>
                    <label for="depositAsset" class="block text-sm font-medium">Asset Address</label>
                    <input id="depositAsset" type="text" placeholder="Enter asset address" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                </div>
                <div>
                    <label for="depositAmount" class="block text-sm font-medium">Amount</label>
                    <input id="depositAmount" type="number" placeholder="Enter amount" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                </div>
                <div>
                    <label for="depositOnBehalfOf" class="block text-sm font-medium">On Behalf Of</label>
                    <input id="depositOnBehalfOf" type="text" placeholder="Enter wallet address" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                </div>
                <button type="submit" class="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold">Deposit</button>
            </form>
        </div>

        <!-- Withdraw Section -->
        <div class="mb-6">
            <h2 class="text-xl font-semibold mb-4">Withdraw</h2>
            <form class="space-y-4">
                <div>
                    <label for="withdrawAsset" class="block text-sm font-medium">Asset Address</label>
                    <input id="withdrawAsset" type="text" placeholder="Enter asset address" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                </div>
                <div>
                    <label for="withdrawAmount" class="block text-sm font-medium">Amount</label>
                    <input id="withdrawAmount" type="number" placeholder="Enter amount" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                </div>
                <button type="submit" class="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold">Withdraw</button>
            </form>
        </div>

        <!-- Borrow Section -->
        <div class="mb-6">
            <h2 class="text-xl font-semibold mb-4">Borrow</h2>
            <form class="space-y-4">
                <div>
                    <label for="borrowAsset" class="block text-sm font-medium">Asset Address</label>
                    <input id="borrowAsset" type="text" placeholder="Enter asset address" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                </div>
                <div>
                    <label for="borrowAmount" class="block text-sm font-medium">Amount</label>
                    <input id="borrowAmount" type="number" placeholder="Enter amount" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                </div>
                <div>
                    <label for="interestRateMode" class="block text-sm font-medium">Interest Rate Mode</label>
                    <select id="interestRateMode" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                        <option value="1">Stable</option>
                        <option value="2">Variable</option>
                    </select>
                </div>
                <button type="submit" class="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold">Borrow</button>
            </form>
        </div>

        <!-- Repay Section -->
        <div class="mb-6">
            <h2 class="text-xl font-semibold mb-4">Repay</h2>
            <form class="space-y-4">
                <div>
                    <label for="repayAsset" class="block text-sm font-medium">Asset Address</label>
                    <input id="repayAsset" type="text" placeholder="Enter asset address" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                </div>
                <div>
                    <label for="repayAmount" class="block text-sm font-medium">Amount</label>
                    <input id="repayAmount" type="number" placeholder="Enter amount" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                </div>
                <div>
                    <label for="repayRateMode" class="block text-sm font-medium">Rate Mode</label>
                    <select id="repayRateMode" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-purple-500">
                        <option value="1">Stable</option>
                        <option value="2">Variable</option>
                    </select>
                </div>
                <button type="submit" class="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold">Repay</button>
            </form>
        </div>
    </div>
</section>
