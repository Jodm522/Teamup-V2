import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import sessionReducer from "./session";
import genresReducer from "./categories";
import platformsReducer from "./platforms";
import playtypesReducer from "./playtypes";
import gamesReducer from "./games";
import createSessionReducer from "./sessions";
import profilesReducer from "./profile";
import imagesReducer from "./images";
import ratingsReducer from "./ratings";
import applicationsReducer from "./applications";
const rootReducer = combineReducers({
  userSession: sessionReducer,
  genres: genresReducer,
  platforms: platformsReducer,
  playtypes: playtypesReducer,
  games: gamesReducer,
  session: createSessionReducer,
  profiles: profilesReducer,
  images: imagesReducer,
  ratings: ratingsReducer,
  applications: applicationsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
