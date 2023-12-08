/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {
  const categoryCompleted = [];
  transactions.forEach((transac) => {
    const { category, price } = transac

    if (categoryCompleted.hasOwnProperty(category)) {
      categoryCompleted[category] += price;
    }
    else {
      categoryCompleted[category] = price
    }


  })

  const result = Object.entries(categoryCompleted).map(([category, totalAmount]) => ({
    [category]: totalAmount
  }));

  return result;

}




// Example usage:
const transactions = [
  { itemName: "Item1", category: "Food", price: 20, timestamp: "2023-01-01" },
  { itemName: "Item2", category: "Clothing", price: 50, timestamp: "2023-01-02" },
  { itemName: "Item3", category: "Food", price: 30, timestamp: "2023-01-03" },
  { itemName: "Item4", category: "Electronics", price: 100, timestamp: "2023-01-04" },
  { itemName: "Item5", category: "Clothing", price: 25, timestamp: "2023-01-05" }
];

calculateTotalSpentByCategory(transactions)



module.exports = calculateTotalSpentByCategory;
