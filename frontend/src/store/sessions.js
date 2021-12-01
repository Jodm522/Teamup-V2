import { csrfFetch } from "./csrf";

const CREATE_SESSION = "sessions/createSession";
const GET_BY_TYPE = "sessions/loadByType";
const createSession = (session) => {
  return {
    type: CREATE_SESSION,
    session,
  };
};

const loadByType = (typeList) => {
  return {
    type: GET_BY_TYPE,
    typeList,
  };
};
export const getSessionsbyType = (type, id) => async (dispatch) => {

  const res = await csrfFetch(`/api/sessions/${type}/${id}`);
  if (res.ok) {
    const typeList = await res.json();
    dispatch(loadByType(typeList));
  }
};

export const makeSession = (session) => async (dispatch) => {
  const { title, creator, playtype, platform, game, date, description } =
    session;
  const response = await csrfFetch("/api/sessions", {
    method: "POST",
    body: JSON.stringify({
      title,
      creator,
      playtype,
      platform,
      game,
      date,
      description,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(createSession(data));
  }
};

const initialState = { sessions: [] };

const createSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION: {
      const newState = action.session;
      return newState;
    }
    case GET_BY_TYPE: {
      return action.typeList;
    }
    default:
      return state;
  }
};

export default createSessionReducer;

