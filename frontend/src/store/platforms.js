const LOAD = "platforms/LOAD";
const LOAD_ONE = "platforms/LOAD_ONE";

const load = (platformList) => ({
  type: LOAD,
  platformList,
});

const loadOne = (platform) => ({
  type: LOAD_ONE,
  platform,
});

export const getOnePlatform = (id) => async (dispatch) => {
  const res = await fetch(`/api/platforms/${id}`);

   if (res.ok) {
    const platform = await res.json();
    dispatch(loadOne(platform));
  }
};

export const getPlatforms = () => async (dispatch) => {
  const res = await fetch(`api/platforms`);
  if (res.ok) {
    const platformList = await res.json();
    dispatch(load(platformList));
  }
};

const initialState = {
  platforms: [],
};

const platformsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allPlatforms = {};
      action.platformList.forEach((platform) => {
        allPlatforms[platform.id] = platform;
      });
      return {
        platformList: action.platformList,
      };
    }
    case LOAD_ONE: {
      const platform = action.platform;
      return { platform };
    }
    default:
      return state;
  }
};

export default platformsReducer;
