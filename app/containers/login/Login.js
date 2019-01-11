/*
 * File: Login.js
 * Project: DvaStarter
 * File Created: Thursday, 10th January 2019 10:22:18 am
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Thursday, 10th January 2019 5:57:20 pm
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description 登录
 * 
 */

import React from 'react'
import { connect } from 'react-redux'
import {
	View,
	Text,
	StyleSheet,
	Image,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	StatusBar
} from 'react-native'
// import { BoxShadow } from 'react-native-shadow'
import { Toast } from '../../utils/Toast';
import { versionFlg, themeColor, deviceWidth, deviceHeight } from '../../utils/common';
import { Storage } from '../../utils';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
      imgLoad: false
		}
	}

	async componentDidMount() {

		let userStorage = await Storage.get("userStorage") || undefined;
		if (userStorage) {
			let { username } = JSON.parse(userStorage).paramJson;
			this.setState({ 'username':username });
		};
	}
	// 点击设置
	handleSetting() {
		const { navigation } = this.props
		navigation.navigate('Setting')
	}

	//登录
	handleSubmit() {
		if (this.state.username === "" || this.state.username === null) {
			Toast("请输入账号");
			return;
		}
		if (this.state.password === "" || this.state.password === null) {
			Toast("请输入密码");
			return;
		}

		this.props.dispatch({
			type: "M_login/sendLogin",
			payload: {
				paramJson: {
					username: this.state.username,
					password: this.state.password,
					loginType: 0
				}
			}
		})
	}

	//获取文本框内容
	getValue = (name, value) => {
		if (name === "username") {
			this.setState({ username: value });
		}
		if (name === "password") {
			this.setState({ password: value });
		}
	}

	// 忘记密码
	forget = () => {
		console.log('忘记密码')
	}



	render() {
		const { loading = false, M_login={} } = this.props;
		let { appLoginImg } = M_login;
		const shadowOpt = {
			width: 315,
			height: 44,
			color: "#000",
			border: 4,
			radius: 22,
			opacity: 0.1,
			x: 0,
			y: 0,
			style: { marginVertical: 5 }
		}
		return (
			<View style={styles.container}>
				<ImageBackground
          style={[styles.headerContent,  styles.headerContentActive, ]}
					source={ bgLocal}
				>
					<StatusBar
						animated
						translucent={versionFlg}
						backgroundColor="rgba(0,0,0,0)"
					/>
				</ImageBackground>
				<View style={styles.loginBox}>
					<View style={styles.inputBox}>
						<View style={styles.loginTitle}>
							<Text style={styles.login}>登录</Text>
						</View>
						{/* <BoxShadow setting={shadowOpt}> */}
							<View style={[styles.userInput, styles.userName]}>
								<TextInput
									underlineColorAndroid="transparent"
									placeholder="账号"
									placeholderTextColor={"#999"}
									style={[styles.input]}
									onChangeText={(value) => this.getValue("username", value)}
									maxLength={50}
									value={this.state.username}
								/>
								<Image
									source={require('../../images/icon_account.png')}
									style={styles.inputIcon}
								/>
							</View>
						{/* </BoxShadow> */}
						{/* <BoxShadow setting={shadowOpt}> */}
							<View style={styles.userInput}>
								<TextInput
									secureTextEntry={true}
									underlineColorAndroid="transparent"
									placeholder="密码"
									placeholderTextColor={"#999"}
									style={[styles.input]}
									onChangeText={(value) => this.getValue("password", value)}
									maxLength={50}
									value={this.state.password}
								/>
								<Image
									source={require('../../images/icon_password.png')}
									style={styles.inputIcon}
								/>
							</View>
						{/* </BoxShadow> */}
						<View style={styles.oprate}>
							<TouchableOpacity
								activeOpacity={0.7}
							>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={this.handleSetting.bind(this)}
								activeOpacity={0.7}
							>
								<Text style={styles.oprateDetail}>设置</Text>
							</TouchableOpacity>
						</View>
					</View>

					<TouchableOpacity
						onPress={this.handleSubmit.bind(this)}
						style={styles.button}
						activeOpacity={0.7}
						disabled={loading}
					>
						<Text style={{ color: '#fff', fontSize: 18 }}>{loading ? '登录中···' : '立即登录'}</Text>
					</TouchableOpacity>

				</View>
				<Image
						style={styles.copyRight}
						source={require('../../images/logo_zhonggang.png')}
						resizeMode="contain"
					/>
			</View>

		)
	}
}

export default Login

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerContent: {
		height: 0,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 5,
	},
  headerContentActive: {
    height: versionFlg ? 306 : 286,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
	inputIcon: {
		width: 20,
		height: 23,
		position: 'absolute',
		left: 15,
		top: 12
	},
	inputBottom: {
		marginTop: 2,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
	},
	input: {
		paddingLeft: 53,
		width: 315,
		height: 50,
		color: '#333333',
		fontSize: 18,
	},
	loginBox: {
		height: deviceHeight - (versionFlg ? 344 : 330),
		width: deviceWidth,
		alignItems: 'center',
		paddingBottom: 4,
		paddingLeft: 4,
		paddingRight: 4,
	},
	button: {
		width: 315,
		backgroundColor: themeColor,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
		borderRadius: 25,
	},
	settingButton: {
		width: 255,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#fff',
	},
	login: {
		color: '#333',
		fontSize: 24,
		paddingLeft: 10,
	},
	loginTitle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom:15,
	},
	userInput: {
		width: 315,
		height: 44,
		backgroundColor: '#fff',
		borderRadius: 22,
	},
	userName: {
		marginBottom: 20,
	},
	oprate: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
	},
	oprateDetail: {
		color: themeColor,
		padding: 8,
		paddingTop: 5,
		paddingLeft: 15,
		paddingRight: 15,
		fontSize: 16
	},
	copyRight: {
		width: 303,
		height: 23,
		marginBottom: 20,
		marginTop: 5,
	}
})
