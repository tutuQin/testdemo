/*
 * File: Toast.js
 * Project: DvaStarter
 * File Created: Thursday, 10th January 2019 4:00:54 pm
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Thursday, 10th January 2019 4:01:01 pm
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description
 * 
 */

import { Platform, ToastAndroid} from 'react-native'
import { Toast as Toasts } from '@ant-design/react-native';
export const { Version, OS } = Platform

export const Toast = (msg) => {
    if(OS === 'ios'){
        Toasts.info(msg,1);
    }else{
        ToastAndroid.show(msg,ToastAndroid.SHORT);
    }
}