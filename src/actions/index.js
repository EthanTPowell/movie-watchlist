export const toggleFavorites = (object) => {
    return {
        type: "TOGGLE_FAVORITES",
        payload: object

    }
};
export const toggleWatched = (object) => {
    return {
        type: "TOGGLE_WATCHED",
        payload: object

    }
};

export const addToWatchlist = (object) => {
    return {
        type: "ADD_TO_WATCHLIST",
        payload: object
    }
};

export const removeFromWatchlist = (object) => {
    return {
        type: "REMOVE_FROM_WATCHLIST",
        payload: object
    }
};





