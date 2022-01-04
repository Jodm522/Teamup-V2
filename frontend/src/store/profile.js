import { csrfFetch } from "./csrf";

const LOAD_ONE = "/profile/loadOne";
const LOAD_MULTIPLE = "/profile/loadMultipleProfiles";
const loadOne = (profile) => ({
  type: LOAD_ONE,
  profile,
});
const getMultipleProfiles = (profiles) => ({
  type: LOAD_MULTIPLE,
  profiles,
});

export const loadOneProfile = (profId) => async (dispatch) => {
  const res = await csrfFetch(`/api/profiles/${profId}`);
  if (res.ok) {
    const profile = await res.json();
    dispatch(loadOne(profile));
  }
};

export const loadMultipleProfiles = (profArray) => async (dispatch) => {
  const res = await csrfFetch(`/api/profiles/multipleProfiles`, {
    method: "POST",
    body: JSON.stringify(profArray),
  });

  if (res.ok) {
    const data = await res.json();
    console.log(data);
    dispatch(getMultipleProfiles(data));
  }
};
const initialState = { profile: [] };
const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ONE: {
      const profile = action.profile;
      return { profile };
    }
    case LOAD_MULTIPLE: {
      const profiles = action.profiles;
      return { profiles };
    }
    default:
      return state;
  }
};
export default profilesReducer;
