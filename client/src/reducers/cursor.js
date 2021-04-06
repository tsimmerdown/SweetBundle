import { SET } from "../constants";

const cursorState = (state = false, action) => {
  switch (action.type) {
    case SET:
      return !state;
    default:
      return state;
  }
};

export default cursorState;
