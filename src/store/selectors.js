export const getAuth = (state) => {
  return state.auth;
};

export const getIsLoading = (state) => {
  return state.ui.isFetching;
};

export const getAdverts = (state) => {
  return state.adverts.advertsData;
};
