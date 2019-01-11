/*
 * File: app.js
 * Project: DvaStarter
 * File Created: Thursday, 10th January 2019 4:15:15 pm
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Thursday, 10th January 2019 4:15:15 pm
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description
 * 
 */
import { createAction, NavigationActions, Storage } from '../../utils'
import * as authService from '../../services/auth'

export default {
  namespace: 'M_login',
  state: {
    login: false,
    loading: true,
    fetching: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    // 登录
    *sendLogin({ payload }, { call, put }) {
      console.log('登录参数',payload)
      // const login = yield call(Storage.get, 'login', false)
      // yield put(createAction('updateState')({ login, loading: false }))
    },
    
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' })
    },
  },
}
