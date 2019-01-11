import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
import appModel from './models/app'
// import M_login from './models/login/M_login'
import routerModel from './models/router'


const app = dva({
  initialState: {},
  models: [
    appModel,
    routerModel,
    // M_login
  ],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

AppRegistry.registerComponent('DvaStarter', () => App)
