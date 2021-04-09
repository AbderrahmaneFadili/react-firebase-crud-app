import {
  ENABLE_EDITING_MODE,
  DISABLE_EDITING_MODE,
} from "../types/isEditingTypes";

export const enableIsEditingAction = () => ({
  type: ENABLE_EDITING_MODE,
});

export const disableEditingAction = () => ({
  type: DISABLE_EDITING_MODE,
});
