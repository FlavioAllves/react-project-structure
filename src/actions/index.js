import * as types from './types'

/*
#01. in the most cases, returning the object simple works with the thunk and the middleware;
but, if necessary, return the arrow function, using the 'dispatch' parameter;
i.e.:
export const example = () => (
  (dispatch) => {
    dispatch({
      type: types.TYPE_EXAMPLE_1,
    })

    return setTimeout(() => dispatch({
      type: types.TYPE_EXAMPLE_2,
    }), 10000)
  }
)
#02. the dispatch function own 'then' and 'catch' methods; use it with moderation;
*/
// export const example = (/* payload */) => ({
//   type: types.TYPE_EXAMPLE,
//   payload: {
//     // client: 'default', // isn't necessary to specify 'default' case
//     request: {
//       // data: payload,
//       url: '/',
//     },
//   },
// })

export const flavio = payload => ({
  type: types.TYPE_EXAMPLE,
  payload: {
    // client: 'default', // isn't necessary to specify 'default' case
    request: {
      url: `${payload}`,
    },
  },
})
