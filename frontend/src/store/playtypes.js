const LOAD = "playtypes/LOAD";
const LOAD_ONE = "playtypes/LOAD_ONE";

const load = (playtypesList) => ({
  type: LOAD,
  playtypesList,
});

const loadOne = (playtype) => ({
  type: LOAD_ONE,
  playtype,
});

export const getOnePlaytype = (playtypeId) => async (dispatch) => {
  const res = await fetch(`/api/playtypes/${playtypeId}`);
  if (res.ok) {
    const playtype = await res.json();

    dispatch(loadOne(playtype));
  }
};

export const getPlaytypes = () => async (dispatch) => {
  const res = await fetch(`/api/playtypes`);
  if (res.ok){
    const playtypesList = await res.json();
    dispatch(load(playtypesList));
  }
};

const initialState = { playtypes: [] };

const playtypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allPlayTypes = {};
      action.playtypesList.forEach((playtype) => {
        allPlayTypes[playtype.id] = playtype;
      });
      return {
        playtypesList: action.playtypesList,
      };
    }
    case LOAD_ONE: {
      const playtype = action.playtype;
      return { playtype };
    }
    default:
      return state;
  }
};
export default playtypesReducer;
