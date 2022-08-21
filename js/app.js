document.getElementById("calculate").addEventListener("click", function () {
  const foodExpense = inputValueToIntegerById("food");
  const rentExpenses = inputValueToIntegerById("rent");
  const clothesExpenses = inputValueToIntegerById("clothes");

  const totalExpense = foodExpense + rentExpenses + clothesExpenses;

  const totalExpenseElement = document.getElementById("total-expense");
  totalExpenseElement.innerText = totalExpense;

  const income = inputValueToIntegerById("income");
  const totalExpenseAmount = textValueToIntegerById("total-expense");

  const balance = income - totalExpenseAmount;

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance;
});


