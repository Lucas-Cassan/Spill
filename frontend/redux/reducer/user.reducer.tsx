import { GET_USER } from "../action/user.action";

const initialState = {};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}
