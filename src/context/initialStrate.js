import { fetchUser } from "../utils/fetchLocalStoarage";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
  foodItems: null,
};
