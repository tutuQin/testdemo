/*
 * File: Login.js
 * Project: DvaStarter
 * File Created: Thursday, 10th January 2019 10:22:18 am
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Thursday, 10th January 2019 10:22:19 am
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description 服务器设置
 * 
 */
import React, { Component } from 'react'
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import { Button, Touchable } from '../../components'

import { createAction, NavigationActions } from '../../utils'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }

  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <Button text="Login" onPress={this.onLogin} />
        )}
        {!fetching && (
          <Touchable style={styles.close} onPress={this.onClose}>
            <Image
              style={styles.icon}
              source={require('../../images/close.png')}
            />
          </Touchable>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
})

export default Login
