import { csrfFetch } from "./csrf";
const LOAD = "genres/getById";
const load = (list) => ({
  type: LOAD,
  list,
});

export const getApplicationsById = (applicationId) => async (dispatch) => {
  const res = await csrfFetch(`/api/applications/${applicationId}`);
  if (res.ok) {
    const applications = await res.json();
    dispatch(load(applications));
  }
};

const initialState = {
  genres: [],
};
const applicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const applications = action.list;
      return { applications };
    }
    default:
      return state;
  }
};

export default applicationsReducer;
