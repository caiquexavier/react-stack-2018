const initialState = {
  status: "ready",
  orders:[]
}

export const orderReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_ORDERS_REQUESTED":
        state = {...state, status: action.payload.status}
        break
    case "FETCH_ORDERS_FULLILED":
      state = {...state, orders: action.payload.orders, status: action.payload.status}
      break
    case "FETCH_ORDERS_COMPLETED":
        state = {...state, status: action.payload.status}
        break
    case "FETCH_ORDERS_REJECTED":
        state = {...state, status: action.payload.status}
        break
    default:
  }
  return state
}
