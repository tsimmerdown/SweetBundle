import { SET } from "../constants";

export const setCursor = () => async (dispatch) => {
  try {
    dispatch({ type: SET });
  } catch (error) {
    console.log(error);
  }
};
