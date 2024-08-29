export const CreateToken = (form) => {
  localStorage.setItem("username", form.name);
};
export const SumItems = (products) => {
  const itemscounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = products.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  return { itemscounter, total };
};

export const GetQuantity = (state, id) => {
  const index = state.selecteditems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selecteditems[index].quantity;
  }
};
