// adds a dollar symbol according to positive or negative value
export const returnCurrency = (amount: number) => {
  const currency =
    amount > 0 ? "$" + amount.toFixed(2) : "-$" + Math.abs(amount).toFixed(2);
  return currency;
};
