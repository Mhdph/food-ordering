export const fetchUser = () => {
  const usesrInfo =
    localStorage.getItem("user") !== "undifined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return usesrInfo;
};
