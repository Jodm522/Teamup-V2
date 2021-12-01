
import { csrfFetch } from "./csrf";
const LOAD_ONE = "games/LOAD_ONE";
const CREATE_GAME = "games/createGame";
const LOAD = "/games/LOAD";

const load = (gamesList) => ({
  type: LOAD,
  gamesList,
});
const loadOne = (game)=>({
  type: LOAD_ONE,
  game
})

export const makeGame = (game) => async (dispatch) => {
  const { title, genre1, genre2, genre3, url, description } = game;
  const response = await csrfFetch("/api/games", {
    method: "POST",
    body: JSON.stringify({ title, genre1, genre2, genre3, url, description }),
  });
  const data = await response.json();
  if (response.ok) {
  }
};


export const getGames = () => async (dispatch) => {
  const res = await fetch(`/api/games`);
  if (res.ok) {
    const gamesList = await res.json();
    dispatch(load(gamesList));
  }
};
export const getOneGame = (id) => async (dispatch)=>{
  const res = await fetch (`/api/games/${id}`)
  if (res.ok){
    const game = await res.json();
    dispatch(loadOne(game))
  }
}
const initialState = { games: [] };
const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allGames = {};
      action.gamesList.forEach((game) => {
        allGames[game.id] = game;
      });
      return action.gamesList;
    }
    case LOAD_ONE: {
      const game = action.game;
      return { game };
    }

    default:
      return state;
  }
};

export default gamesReducer;
