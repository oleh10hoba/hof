export const setFavorites = (favorites) => ({
    type: 'SET_FAVORITES',
    payload: favorites
});

export const addToFavourites = (product) => ({
    type: 'ADD_FAVORITES',
    payload: product
});
