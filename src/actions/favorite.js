export const addTo_Favorite = obj => ({
    type: 'ADD_PRODUCT_TO_FAVORITE',
    payload: obj
});

export const removeFromFavorite = id => ({
type: 'REMOVE_PRODUCT_FROM_FAVORITE',
payload: id
});