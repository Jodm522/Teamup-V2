import { csrfFetch } from "./csrf";

const GET_ALL = "/ratings/getAll";

const getAll = (ratings) => ({
  type: GET_ALL,
  ratings,
});
const submitOneRating = (info) => ({
  type: submitOneRating,
  info,
});

export const getRatings = (profId) => async (dispatch) => {
  const res = await csrfFetch(`/api/ratings/${profId}`);
  if (res.ok) {
    const ratings = await res.json();

    dispatch(getAll(ratings));
  }
};

export const submitRating =
  (rating, comment, toUser, fromUser) => async (dispatch) => {
    const res = await csrfFetch(`/api/ratings`, {
      method: "POST",
      body: JSON.stringify({
        rating: rating,
        comment: comment,
        toUser: toUser,
        fromUser: fromUser,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(submitOneRating);
    }
  };

const initialState = { ratings: [] };
const ratingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL: {
      const ratings = action.ratings;
      return { ratings };
    }
    default:
      return state;
  }
};

export default ratingsReducer;
