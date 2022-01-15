import { csrfFetch } from "./csrf";

const GET_ALL_CHATS = "/chats/getall";

const getall = (chats) => {
  return {
    type: GET_ALL_CHATS,
    chats: chats,
  };
};

export const loadGroupChats = (groupId) => async (dispatch) => {
  const res = await csrfFetch(`/api/chats/${groupId}`);
  console.log(groupId);
  if (res.ok) {
    const chats = await res.json();
    console.log(chats);
    dispatch(getall(chats));
  }
};

const initialState = { chats: [] };
const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHATS: {
      const chats = action.chats;
      console.log(chats + "ASDFASDFASDF");
      return { chats };
    }

    default:
      return state;
  }
};
export default chatsReducer;
