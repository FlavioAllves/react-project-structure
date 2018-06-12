import * as types from '../actions/types'

const initialState = {
  initial: '',
  dev: {},
}

const alert = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.INITIAL_APP: {
      return {
        ...state,
        initial: payload,
      }
    }
    case types.TEST_DEV: {
      return {
        ...state,
        dev: payload,
      }
    }
    default:
      return state
  }
}

export default alert
