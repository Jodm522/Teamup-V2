import { csrfFetch } from "./csrf";

const SET_PROFILE_IMAGE = "session/setProfileImage";

const setProfileImage = (image) => ({
  type: SET_PROFILE_IMAGE,
  payload: image,
});

export const addProfileImage = (info) => async (dispatch) => {
  const { id, image } = info;

  const formData = new FormData();
  formData.append("image", image);

  const res = await csrfFetch(`/api/users/profileimage/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const data = await res.json();
};

export const addBannerImage = (info) => async (dispatch) => {
  const { id, image } = info;

  const formData = new FormData();
  formData.append("image", image);

  const res = await csrfFetch(`/api/users/bannerimage/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const data = await res.json();
};

const initialState = { image: null };

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_IMAGE: {
      const newState = action.imageUrl;
      return newState;
    }
    default:
      return state;
  }
};
export default imagesReducer;
