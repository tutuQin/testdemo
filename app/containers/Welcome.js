/*
 * File: Welcome.js
 * Project: DvaStarter
 * File Created: Monday, 7th January 2019 11:14:57 am
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Monday, 7th January 2019 11:15:19 am
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description 欢迎页面
 * 
 */

import React, { Component } from 'react'
import { connect } from "react-redux";
import { StyleSheet, StatusBar, Text, ImageBackground,  NetInfo, Platform,TouchableOpacity } from 'react-native'
import { versionFlg,isIOS, themeColor,activeOpacity } from '../utils/common';
import { Storage } from '../utils';
import { NavigationActions, StackActions} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import DeviceInfo from 'react-native-device-info';
// import { customerCode } from '../utils/changeVersion/customerId'

class Welcome extends Component {
    constructor(props) {
        super(props)

    }
    async componentDidMount() {
        // await this.checkeUser();
        console.log(this.props)
        setTimeout(() => {
            SplashScreen.hide();
        }, 500);
        
    }
    go = async()=>{
        console.log('过',NavigationActions)
        this.props.navigation.dispatch(
            StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Login" })]
              })
          );
    }
   
    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../images/1080.png')}
                resizeMode="cover"
            >
                <StatusBar
                    animated
                    translucent={versionFlg}
                    backgroundColor="rgba(0,0,0,0)"
                />
                <Text style={[styles.textCommon, styles.text2]}>系统正在初始化···</Text>
                <Text style={[styles.textCommon, styles.text2]}>当前版本：</Text>
                {/* 点击跳转 */}
                <TouchableOpacity activeOpacity={activeOpacity} style={styles.btn} onPress={this.go}>
                    <Text >退进入首页</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCommon: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    btn: {
        width: 250,
        height: 40,
        borderColor: '#FFF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 20
    },
    text1: {
        color: '#FFF',
        fontSize: 14
    },
    text2: {
        color: themeColor,
        fontSize: 12,
        marginTop: 20
    }
})
export default connect()(Welcome);
