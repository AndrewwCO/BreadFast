export const getPriceValue = (priceString) => {
  return parseFloat(priceString.replace('€', ''));
};

export const calculateTotal = (priceString, quantity) => {
  const base = getPriceValue(priceString);
  return (base * quantity).toFixed(2);
};

export const getAvailableNow = (products) => {
  return products.filter(p => p.readyTime === null);
};

export const getComingSoon = (products) => {
  return products.filter(p => p.readyTime !== null);
};