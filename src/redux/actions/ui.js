export const SET_LOADING = 'SET_LOADING';
export const SET_UPDATE_VISIBILITY = 'SET_UPDATE_VISIBILITY';
export const SET_IS_UPDATING = 'SET_IS_UPDATING';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_CREATE_VISIBILITY = 'SET_CREATE_VISIBILITY';
export const SET_IS_CREATING = 'SET_IS_CREATING';
export const SET_DISPLAY_VISIBILITY = 'SET_DISPLAY_VISIBILITY';

export const setUpdateVisibility = ({ feature, state }) => ({
  type: `${feature} ${SET_UPDATE_VISIBILITY}`,
  payload: state,
  meta: { feature },
});
export const setDisplayVisibility = ({ feature, state }) => ({
  type: `${feature} ${SET_DISPLAY_VISIBILITY}`,
  payload: state,
  meta: { feature },
});
export const setCreateVisibility = ({ feature, state }) => ({
  type: `${feature} ${SET_CREATE_VISIBILITY}`,
  payload: state,
  meta: { feature },
});

export const setIsUpdating = ({ feature, state = true }) => ({
  type: `${feature} ${SET_IS_UPDATING}`,
  payload: state,
  meta: { feature },
});
export const setIsCreating = ({ feature, state = true }) => ({
  type: `${feature} ${SET_IS_CREATING}`,
  payload: state,
  meta: { feature },
});
export const setIsLoading = ({ feature, state = true }) => ({
  type: `${feature} ${SET_IS_LOADING}`,
  payload: state,
  meta: { feature },
});