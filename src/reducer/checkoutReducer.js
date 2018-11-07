import * as actionType from '../actions/ActionType';

const checkoutReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case actionType.APPLY_DISCOUNT:
      return newState = state
    default:
      return state
  }
}

export default checkoutReducer;