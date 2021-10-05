export const setFilter = filter => ({
    type: 'SET_FILTER',
    payload: filter,
  });

export const setSearchQuery = e => ({
    type: 'SET_QUERY',
    payload: e
}); 

// export const setSearchQuery = e => {
//   console.log(e)
// }