import { combineReducers } from "redux";
import { watchlistReducer } from "./watchlist";

const masterReducer = combineReducers({
  watchlist: watchlistReducer
});

export default masterReducer;
