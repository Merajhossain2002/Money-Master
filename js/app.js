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

document.getElementById("save").addEventListener("click", function () {
  const income = inputValueToIntegerById("income");
  const savingPercentNumber = inputValueToIntegerById("saving-percent");

  const divideIncome = income / 100;
  const savingAmount = savingPercentNumber * divideIncome;

  const savingAmountElement = document.getElementById("saving-amount");
  savingAmountElement.innerText = savingAmount;

  const balance = textValueToIntegerById("balance");
  const savingElement = textValueToIntegerById("saving-amount");
  const remainingBalance = balance - savingElement;

  const remainingBalanceElement = document.getElementById("remaining-balance");
  remainingBalanceElement.innerText = remainingBalance;
});
