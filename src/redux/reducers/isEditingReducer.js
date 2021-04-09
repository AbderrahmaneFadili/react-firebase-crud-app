import {
  ENABLE_EDITING_MODE,
  DISABLE_EDITING_MODE,
} from "../types/isEditingTypes";

export const isEditingReducer = (state = { isEditing: false }, action) => {
  switch (action.type) {
    case ENABLE_EDITING_MODE:
      return { ...state, isEditing: true };
    case DISABLE_EDITING_MODE:
      return { ...state, isEditing: false };
    default:
      return state;
  }
};
