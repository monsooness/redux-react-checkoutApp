import * as actionType from '../actions/ActionType';

const checkoutReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.APPLY_DISCOUNT:
      let newState = state[0]
      let est_total_curr = state[0].est_total
      newState.est_total = est_total_curr - (est_total_curr * .10)
      return [newState]
    default:
      return state
  }
}

export default checkoutReducer;