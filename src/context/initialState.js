import {fetchUser} from "../utility/fetchLocalStorageData";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
  foodItems: null,
};
