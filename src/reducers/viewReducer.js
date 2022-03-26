import { VIEW_LOADING, VIEW_LOADED } from "../types";

const initialState = {
  loading: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
      case VIEW_LOADING: {
        return {
          ...state,
          loading: true
        }
      }
      case VIEW_LOADED: {
        return {
          ...state,
          loading: false
        }
      }
      default: return state;
  }
}