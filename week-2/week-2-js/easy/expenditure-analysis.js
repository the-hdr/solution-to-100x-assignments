/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory (transactions)
{
	const totalNumberOfTransactions = transactions.length;

	let totalSpentByCategory = [];
	let categoryToIndexMap = new Map();
	let currentTotalNumberOfCategories = 0;
	for (let i = 0; i < totalNumberOfTransactions; ++i)
	{
		if (false == categoryToIndexMap.has(transactions[i].category))
		{
			const newCategoryIndex = currentTotalNumberOfCategories;
			++currentTotalNumberOfCategories;
			
			const currentTransactionCategory = transactions[i].category;                                                                                     xxx

			totalSpentByCategory.push ({
				category: currentTransactionCategory,
				totalSpent: 0
			});
			categoryToIndexMap.set (currentTransactionCategory, newCategoryIndex);
		}

		const currentCategoryIndex = categoryToIndexMap.get(transactions[i].category);
		totalSpentByCategory[currentCategoryIndex].totalSpent += transactions[i].price;
	}

	return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;