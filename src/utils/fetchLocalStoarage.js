export const fetchUser = () => {
  const usesrInfo =
    localStorage.getItem("user") !== "undifined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return usesrInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undifined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};
