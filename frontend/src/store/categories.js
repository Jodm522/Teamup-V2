const LOAD = "genres/LOAD";
const LOAD_ONE = "genres/LOAD_ONE";


const load = (list) => ({
  type: LOAD,
  list,
});

const loadOne = (genre) => ({
  type: LOAD_ONE,
  genre,
});

export const getOneCategory = (genreId) => async (dispatch) => {
  const res = await fetch(`/api/genres/${genreId}`);
    if(res.ok){
  const genre = await res.json();
  dispatch(loadOne(genre));}
};

export const getCategories = () => async (dispatch) => {
  const res = await fetch(`/api/genres`);
  if (res.ok) {
    const list = await res.json();
    dispatch(load(list));
  }
};

const initialState = {
  genres: [],
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allGenres = {};
      action.list.forEach((genre) => {
        allGenres[genre.id] = genre;
      });
      return {
        list: action.list,
      };
    }
    case LOAD_ONE: {
      const genre = action.genre;
      return { genre }; //! return key/value of only needed items from genre
    }
    default:
      return state;
  }
};

export default genresReducer;
