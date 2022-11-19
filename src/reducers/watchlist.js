export const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return [...state, action.payload];
    case "TOGGLE_FAVORITES":
          return [...state.filter((obj) => obj.title !== action.payload.title), action.payload];
    case "REMOVE_FROM_WATCHLIST":
      return [...state.filter((obj) => obj.title !== action.payload.title)];
      case "TOGGLE_WATCHED":
        return [...state.filter((obj) => obj.title !== action.payload.title), action.payload];
    default:
      return state;
  }
};
