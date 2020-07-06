export default (expenses, category) => {
    return expenses
        .filter((expense) => expense.category === category)
        .map((expense) => expense.amount / 100)
        .reduce((total, amount) => total + amount, 0);
};