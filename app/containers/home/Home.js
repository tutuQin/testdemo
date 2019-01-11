/*
 * File: Home.js
 * Project: DvaStarter
 * File Created: Thursday, 10th January 2019 10:19:24 am
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Thursday, 10th January 2019 10:19:24 am
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description
 * 
 */
import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'
// import { Button } from '../components'
import { Button} from '@ant-design/react-native';
import { NavigationActions } from '../../utils'
import Header from '../../components/Header'

@connect()
class Home extends Component {

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
      	<Header title="首页" deepBackColor={true}  goBack={() => this.props.navigation.goBack()}/>
        {/* <Button text="Goto Detail" onPress={this.gotoDetail} /> */}
        <Button loading  onPress={this.gotoDetail} >loading button</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Home
