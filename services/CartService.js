export const addItem = (items, newItem) => {
  const exists = items.find(i => i.id === newItem.id);
  if (exists) {
    return items.map(i =>
      i.id === newItem.id ? { ...i, qty: i.qty + 1 } : i
    );
  }
  return [...items, { ...newItem, qty: 1 }];
};

export const removeItem = (items, id) => {
  return items.filter(item => item.id !== id);
};

export const updateQuantity = (items, id, delta) => {
  return items
    .map(item => item.id === id ? { ...item, qty: item.qty + delta } : item)
    .filter(item => item.qty > 0);
};

export const getTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
};