/*
 * File: Header.js
 * Project: DvaStarter
 * File Created: Thursday, 10th January 2019 2:32:58 pm
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Thursday, 10th January 2019 2:33:16 pm
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description header组件
 * 
 */

import React from "react";
import { connect } from 'react-redux'
import { isIphoneX  } from "../utils/isIphoneX";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ImageBackground,
	StatusBar,
	TouchableOpacity
} from "react-native";
import { versionFlg, activeOpacity, minW, headerColor, style } from "../utils/common";


class Header extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			title,
			goBack,
			refresh,
			close,
			gradient = true,
			deepBackColor = true,
			rightContent,
			content,
			isSysName = true,
			M_My: {
				sysName = ''
			} = {},
		} = this.props;
		return (
			<View style={styles.container}>
				<StatusBar
					animated
         			barStyle='light-content'
					translucent={versionFlg}
					backgroundColor="#rgba(0,0,0,0.3)"
				/>
				{content ? (
					
					<View  style={[styles.headerBox, { backgroundColor: headerColor }]}>
						{content}
					</View>
				) : (
						<View  style={[styles.headerBox, { backgroundColor: headerColor }]}>
							{
								goBack ? <View style={styles.viewBox1}>
									<TouchableOpacity
										style={styles.iconBtn}
										activeOpacity={activeOpacity}
										onPress={goBack}
									>
										<Image
											style={styles.icon}
											source={require("../images/icon_return.png")}
										/>
									</TouchableOpacity>
								</View> : <View style={styles.viewBox1} />
							}
							<View style={[styles.viewBox2, styles.titleBox, { paddingLeft: goBack ? 0 : 12 }]}>
								<Text
									numberOfLines={1}
									style={[
										styles.textCommon,
										styles.title,
										{ color: "#333" }
									]}
								>
									{title}
								</Text>
							</View>
							<View style={[styles.viewBox3, styles.rightBox]}>
								{rightContent}
							</View>
						</View>
					)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: versionFlg ? isIphoneX() ? 88 : 64 : 44,
		borderBottomWidth: minW,
		borderBottomColor: "#fff"
	},
	headerBox: {
		width: "100%",
		height: "100%",
		paddingTop: versionFlg ? isIphoneX() ? 44 : 20 : 0,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	viewBox1: {
		width: "30%",
		height: '100%',
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	viewBox2: {
		flex: 1
	},
	viewBox3: {
		width: "30%"
	},
	titleBox: {
		flexDirection: 'row',
		// justifyContent: 'flex-start'
		justifyContent: 'center'
	},
	rightBox: {
		justifyContent: "flex-end",
		flexDirection: "row"
	},
	iconBtn: {
		width: 44,
		height: 44,
		justifyContent: "center",
		alignItems: "center"
	},
	icon: {
		width: 18,
		height: 18
	},
  iconclose:{
	  width:16,
    height:16,
  },
	textCommon: {
		backgroundColor: "rgba(0,0,0,0)"
	},
	title: {
		fontSize: 16,
		flex: 1,
		textAlign: 'center'
	},
	rT: {
		fontSize: 12
	}
});

export default Header 
