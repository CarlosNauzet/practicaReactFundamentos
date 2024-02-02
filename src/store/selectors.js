export const getAuth = (state) => {
  return state.auth;
};

export const getIsLoading = (state) => {
  return state.ui.isFetching;
};

export const getAdverts = (state) => {
  return state.adverts.advertsData;
};

export const getAdvert = (id) => (state) => {
  const adverts = state.adverts.advertsData;
  const advertFound = adverts.find((advert) => (advert.id = id));
  return advertFound;
};

export const getIsLoaded = (state) => {
  return state.adverts.areLoaded;
};
