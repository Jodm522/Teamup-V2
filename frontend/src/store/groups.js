import { csrfFetch } from "./csrf";

const GET_ALL_GROUPS = "/groups/getall";
const GET_ONE = "/groups/getone";

const getall = (groups) => ({
  type: GET_ALL_GROUPS,
  groups,
});
const getone = (groups) => ({
  type: GET_ONE,
  groups,
});

export const getAllUserGroups = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${userId}`);
  if (res.ok) {
    const groups = await res.json();
    dispatch(getall(groups));
  }
};

export const getOneUserGroup = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${userId}`);
  if (res.ok) {
    const groups = await res.json();
    dispatch(getall(groups));
  }
};
const initialState = { groups: [] };
const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GROUPS: {
      const groups = action.groups;
      return { groups };
    }
    case GET_ONE: {
      const groups = action.groups;
      return { groups };
    }
    default:
      return state;
  }
};
export default groupsReducer;
