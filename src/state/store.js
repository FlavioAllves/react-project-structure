import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import { multiClientMiddleware } from 'redux-axios-middleware'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
// import { responseErrorInterceptor } from '../actions/security'

const Config = process.env

/* eslint-disable no-unused-vars */
const clients = {
  default: {
    client: axios.create({
      baseURL: Config.REACT_APP_API,
    }),
  },
  // default: {
  //   client: axios.create({
  //     baseURL: Config.REACT_APP_CLIENT_URL,
  //     headers: {
  //       client_id: Config.REACT_APP_CLIENT_ID,
  //     },
  //   }),
  //   options: {
  //     interceptors: {
  //       request: [{
  //         success: ({ getState }, request) => {
  //           const { sensediaToken } = getState().security
  //           const config = { ...request }
  //           config.headers.access_token = sensediaToken
  //           return config
  //         },
  //         error: ({ getState }, error) => {
  //           console.log(error)
  //         },
  //       }],
  //       response: [{
  //         success: null,
  //         error: responseErrorInterceptor,
  //       }],
  //     },
  //   },
  // },
  // sensediaCode: {
  //   client: axios.create({
  //     baseURL: Config.REACT_APP_SENSEDIA_CODE,
  //     method: 'POST',
  //     data: {
  //       client_id: Config.REACT_APP_CLIENT_ID,
  //       redirect_uri: 'http://localhost',
  //     },
  //   }),
  // },
  // sensediaToken: {
  //   client: axios.create({
  //     baseURL: Config.REACT_APP_SENSEDIA_TOKEN,
  //     headers: {
  //       Authorization: Config.REACT_APP_SENSEDIA_TOKEN_AUTHORIZATION,
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     method: 'POST',
  //     params: {
  //       grant_type: 'authorization_code',
  //     },
  //     data: {},
  //   }),
  //   options: {
  //     interceptors: {
  //       request: [{
  //         success: ({ getState }, request) => {
  //           const { sensediaCode } = getState().security
  //           const config = { ...request }
  //           config.params.code = sensediaCode
  //           return config
  //         },
  //         error: ({ getState }, error) => {
  //           console.log(error)
  //         },
  //       }],
  //       response: [{
  //         success: null,
  //         error: responseErrorInterceptor,
  //       }],
  //     },
  //   },
  // },
  // refreshSensediaToken: {
  //   client: axios.create({
  //     baseURL: Config.REACT_APP_SENSEDIA_TOKEN,
  //     headers: {
  //       Authorization: Config.REACT_APP_SENSEDIA_TOKEN_AUTHORIZATION,
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     method: 'POST',
  //     params: {
  //       grant_type: 'refresh_token',
  //     },
  //     data: {},
  //   }),
  //   options: {
  //     interceptors: {
  //       request: [{
  //         success: ({ getState }, request) => {
  //           const { refreshToken } = getState().security
  //           const config = { ...request }
  //           config.params.refreshToken = refreshToken
  //           return config
  //         },
  //         error: ({ getState }, error) => {
  //           console.log(error)
  //         },
  //       }],
  //     },
  //   },
  // },
}

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    multiClientMiddleware(clients, {}),
  ),
)

export default store
