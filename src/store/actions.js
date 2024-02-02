import { toast } from "react-toastify";
import { types } from "./types";

export const authLoginSuccess = () => {
  return { type: types.AUTH_LOGIN_SUCCESS };
};

export const authLoginRequest = () => {
  return { type: types.AUTH_LOGIN_REQUEST };
};

export const authLoginFailure = (error) => {
  return { type: types.AUTH_LOGIN_FAILURE, error: true, payload: error };
};

export const authLogout = () => {
  return { type: types.AUTH_LOGOUT };
};

export const authLogin =
  ({ email, password }, rememberMe) =>
  async (dispatch, getState, { api: { authAPI }, router }) => {
    try {
      dispatch(authLoginRequest());
      await authAPI.logIn(email, password, rememberMe);
      toast.success("User logged in!");
      dispatch(authLoginSuccess());
      router.navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("There was an issue while loggin in. Please try again");
      dispatch(authLoginFailure(error));
    }
  };

export const advertsLoadedRequest = () => {
  return { type: types.ADVERTS_LOADED_REQUEST };
};

export const advertsLoadedSuccess = (advertsData) => {
  return { type: types.ADVERTS_LOADED_SUCCESS, payload: advertsData };
};

export const advertsLoadedFailure = (error) => {
  return { type: types.ADVERTS_LOADED_FAILURE, error: true, payload: error };
};

export function loadAdverts() {
  return async function (dispatch, getState, { api: { advertsAPI } }) {
    try {
      dispatch(advertsLoadedRequest());
      const advertsData = await advertsAPI.getAdverts();
      const tagsData = await advertsAPI.getTags();
      dispatch(tagsInfoSuccess(tagsData));
      dispatch(advertsLoadedSuccess(advertsData));
    } catch (error) {
      console.log(error);
      toast.error(
        "There was an issue while fetching the adverts. Please try again"
      );
      dispatch(advertsLoadedFailure(error));
    }
  };
}

export const advertsCreatedRequest = () => {
  return { type: types.ADVERTS_CREATED_REQUEST };
};

export const advertsCreatedSuccess = (newAdvert) => {
  return { type: types.ADVERTS_CREATED_SUCCESS, payload: newAdvert };
};

export const advertsCreatedFailure = (error) => {
  return { type: types.ADVERTS_CREATED_FAILURE, error: true, payload: error };
};

export function createAdverts(adFormData) {
  return async function (dispatch, getState, { api: { advertsAPI }, router }) {
    try {
      dispatch(advertsCreatedRequest());
      const advert = await advertsAPI.createAdvert(adFormData);
      dispatch(advertsCreatedSuccess(advert));
      toast.success("Advert created succesfully!");
      router.navigate(`/adverts/${advert.id}`);
    } catch (error) {
      console.log(error);
      toast.error("There was an error while creating your new ad");
      dispatch(advertsCreatedFailure(error));
    }
  };
}

export const advertsDetailRequest = () => {
  return { type: types.ADVERTS_DETAIL_REQUEST };
};

export const advertsDetailSuccess = (advertDetail) => {
  return { type: types.ADVERTS_DETAIL_SUCCESS, payload: advertDetail };
};

export const advertsDetailFailure = (error) => {
  return { type: types.ADVERTS_DETAIL_FAILURE, error: true, payload: error };
};

export function advertDetail(id) {
  return async function (dispatch, getState, { api: { advertsAPI } }) {
    const adverts = getState().adverts.advertsData;
    const advertFound = adverts.find((advert) => (advert.id = id));
    if (advertFound) return;
    try {
      dispatch(advertsDetailRequest());
      const advert = await advertsAPI.getAdvert(id);
      dispatch(advertsDetailSuccess(advert));
    } catch (error) {
      console.log(error);
      toast.error("Loading your add did not come through :-(");
      dispatch(advertsDetailFailure(error));
    }
  };
}

export const tagsInfoSuccess = (tagsInfo) => {
  return { type: types.TAGS_INFO_SUCCESS, payload: tagsInfo };
};

export const advertsDeleteRequest = () => {
  return { type: types.ADVERTS_DELETE_REQUEST };
};

export const advertsDeleteSuccess = () => {
  return { type: types.ADVERTS_DELETE_SUCCESS };
};

export const advertsDeleteFailure = (error) => {
  return { type: types.ADVERTS_DELETE_FAILURE, error: true, payload: error };
};

export function advertDelete(id) {
  return async function (dispatch, getState, { api: { advertsAPI }, router }) {
    const adverts = getState().adverts.advertsData;
    const advertFound = adverts.find((advert) => (advert.id = id));
    if (advertFound) return;
    try {
      dispatch(advertsDeleteRequest());
      await advertsAPI.deleteAdvert(id);
      dispatch(advertsDeleteSuccess());
      toast.success("Adverts deleted succesfully");
      router.navigate("/adverts");
    } catch (error) {
      console.log(error);
      toast.error("The deletion could not happen sorry :-(");
      dispatch(advertsDeleteFailure(error));
    }
  };
}
