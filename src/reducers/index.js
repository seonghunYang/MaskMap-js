import produce from 'immer';

const baseState = {
  loading: false,
  error: "",
  mapCenter: [37.3595704 , 127.105399],
  center:[37.3595704 , 127.105399],
  mapZoom: 14,
  stores: {} 
}
const reducer = produce((state, action) => {
  switch(action.type) {
    case "SET_MAP_ZOOM":
      state.mapZoom = action.payload;
      break;
    case "SET_MAP_CENTER":
      state.mapCenter = action.payload;
      break;
    case "FETCH_STORES":
      action.payload.stores.forEach(store => {
        state.stores[store.code] = store;
      })
    default:
      break;
  }
}, baseState);

export default reducer;