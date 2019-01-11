/*
 * File: common.js
 * Project: DvaStarter
 * File Created: Monday, 7th January 2019 11:32:35 am
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Monday, 7th January 2019 11:34:54 am
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description 公共参数
 * 
 */

import moment from 'moment';
import { Platform, Dimensions, AsyncStorage, PixelRatio } from 'react-native'
import Storage from './storage';
export const { Version, OS } = Platform
export const isIOS = OS === 'ios';

export const versionFlg =
	Version >= 21 || OS === 'ios' /* boolean: 安卓版本是否大于5.0,或者是否是ios */
export const Size = 20 /* 默认每页数量 */

// app 只有竖屏模式，所以可以只获取一次 width
export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const minW = 1 / PixelRatio.get()
export const activeOpacity = 0.6;
export const mainColor = '#20A3FE';
export const themeColor ='#1277DE'
export const headerColor ='#fff'



// 文件上传接受的格式
export const acceptFile = ['pdf','doc','docx','xls','xlsx','ppt','pptx','txt','png','gif','jpeg','jpg','rar','zip','7z'];

const dateFormat = 'YYYY-MM-DD';
//今日
export const timeToday ={
	startDate : moment().format(dateFormat),
	endDate : moment().format(dateFormat),
}

//昨日
export const timeYesterday ={
	startDate : moment().subtract(1, 'days').format(dateFormat),
	endDate : moment().subtract(1, 'days').format(dateFormat),
}

//本周
export const timeWeek ={
	startDate : moment().startOf('week').add('day',1).format(dateFormat),
    endDate : moment().endOf('week').add('day',1).format(dateFormat),
}

//上周
export const timeLastWeek ={
	startDate : moment().startOf('week').subtract('week', 1).add('day',1).format(dateFormat),
 	endDate : moment().endOf('week').subtract('week', 1).add('day',1).format(dateFormat),
}

//本月
export const timeMonth ={
	startDate : moment().startOf('month').format(dateFormat),
	endDate : moment().endOf('month').format(dateFormat),
}

//上月
export const timeLastMonth ={
	startDate : moment().startOf('month').subtract('month', 1).format(dateFormat),
    endDate: moment().endOf('month').subtract('month', 1).endOf('month').format(dateFormat),
}

//本年
export const timeYear ={
	startDate : moment().startOf('year').format(dateFormat),
	endDate : moment().endOf('year').format(dateFormat),
}

//上年
export const timeLastYear ={
	startDate : moment().startOf('year').subtract('year', 1).format(dateFormat),
 	endDate : moment().endOf('year').subtract('year', 1).format(dateFormat),
}


export const clearLoginStorage = async () => {
	try{
		await Storage.remove('token');
	}catch(e){
		throw e
	}
}

