export const addToCart = obj => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: obj
});

export const subFromCart = id => ({
    type: 'SUB_PRODUCT_FROM_CART',
    payload: id
});


export const removeFromCart = id => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: id
});

