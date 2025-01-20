export const formatAsEuro = (price: string | number): string => {
  const euroAmount = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(Number(price) / 100);
  return euroAmount;
};
