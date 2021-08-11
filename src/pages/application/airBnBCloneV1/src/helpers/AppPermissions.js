import {Platform} from 'react-native';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

const PLATFORM_MICROPHONE_PERMISSIONS = {
  ios: PERMISSIONS.IOS.MICROPHONE,
  android: PERMISSIONS.ANDROID.RECORD_AUDIO,
};

const PLATFORM_PHOTO_PERMISSIONS = {
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
};

const PLATFORM_SEND_SMS_PERMISSIONS = {
  ios: null,
  android: PERMISSIONS.ANDROID.SEND_SMS,
};

const REQUEST_PERMISSION_TYPE = {
  microphone: PLATFORM_MICROPHONE_PERMISSIONS,
  photo: PLATFORM_PHOTO_PERMISSIONS,
  send_sms: PLATFORM_SEND_SMS_PERMISSIONS,
};

const PERMISSION_TYPE = {
  microphone: 'microphone',
  photo: 'photo',
  send_sms: 'send_sms',
};

const requestPermission = async (permissions) => {
  try {
    const result = await request(permissions);
    return result === RESULTS.GRANTED;
  } catch (error) {
    return false;
  }
};

const AppPermission = {
  checkPermissions: async (type) => {
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];
    if (!permissions) {
      return true;
    }
    try {
      const result = await check(permissions);
      if (result === RESULTS.GRANTED) {
        return true;
      }
      return requestPermission(permissions);
    } catch (error) {
      return false;
    }
  },

  requestPermission,

  PERMISSION_TYPE,

  RESULTS,
};

export default AppPermission;
