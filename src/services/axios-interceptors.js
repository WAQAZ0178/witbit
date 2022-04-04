
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URLS } from '../store/api-urls';
import DIVIY_API from '../store/api-calls';

const CancelToken = axios.CancelToken;
source = CancelToken.source();
client = axios.create({
  baseURL: URLS.base_url,
});

//Axios Interceptors
client.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@token');
    config.headers = {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      'Content-Type': 'multipart/form-data, application/json,application/x-www-form-urlencoded',
    };

    config.params = config.params || {};
    config.cancelToken = source.token || {};
    if (JSON.parse(token)) {
      config.headers['Authorization'] =
        `Bearer ` + JSON.parse(token)?.access_token;
    }
    return config;
  },
  error => {
    console.log('I am here');
    Promise.reject(error);
  },
);

client.interceptors.response.use(
  response => {
    // AsyncStorage.clear();

    console.log('RESPONSE INTERCPTOR : ', response?.status);
    return response;
  },
  async function (error) {
    console.log('INTERCEPTOR ERROR RESPONSE : ', error?.response?.status);
    console.log('INTERCEPTOR ERROR RESPONSE CONFIG: ', error?.config);
    const token = await AsyncStorage.getItem('@token');
    const originalRequest = error.config;
    if (error?.response?.status === undefined && error?.config === undefined) {
      return Promise.reject('Hi Dude');
    } else if (error?.response?.status === 401) {
      originalRequest._retry = true;
      await DIVIY_API.refreshToken(
        JSON.parse(token)?.refresh_token,
      );
// console.log("Token info: ",tokenInfo)
      // if (tokenInfo) {
      //   await AsyncStorage.setItem('@token', JSON.stringify({token:tokenInfo}));
      //   axios.defaults.headers.common['Authorization'] =
      //     'Bearer ' + tokenInfo?.access_token;
      //   return client(originalRequest);
      // } else {
        // AsyncStorage.multiRemove(['user_data', 'token']).then(res => {
        //   // props.navigation.navigate('signIn');
        //   global.navigation.navigate('getStarted');
        //   global.navigation.dispatch(StackActions.replace('getStarted'));
        // });
      //   return Promise.reject(error);
      // }
    }
    return Promise.reject(error);
  },
);
