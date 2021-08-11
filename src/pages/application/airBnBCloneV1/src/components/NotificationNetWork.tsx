import React from 'react';
import {StyleSheet, Text, Platform, SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';

const NotificationNetWork = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.text}>{t('noInternet')}</Text>
    </SafeAreaView>
  );
};

export default NotificationNetWork;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontSize: Platform.OS === 'android' ? 12 : 16,
    padding: 10,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 2,
  },
});

// import React, {useEffect} from 'react';
// import NetInfo from '@react-native-community/netinfo';
// import {useDispatch} from 'react-redux';
// import {setError} from 'store/slices/appSlice';
// import {ErrorFLD} from 'constants/type';
// import {ErrorType} from 'constants/enum';

// const NetStatus: React.FunctionComponent = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener(state => {
//       // console.log("NETWORK STATUS 2: ", state.isInternetReachable)
//       if (state.isInternetReachable !== null && !state.isInternetReachable) {
//         const error: ErrorFLD = {
//           type: ErrorType.NETWORK,
//         };
//         dispatch(setError(error));
//       }
//     });

//     return unsubscribe;
//   }, []);

//   return null;
// };

// export default NetStatus;
