import config from '../config';
import { AsyncStorage } from 'react-native';

export const buildUrl = path => `${config.API_HOST}${path}`;

export const getAuthToken = async (token) => {
  try {
    const value = await AsyncStorage.getItem(token);
    return value;
  } catch (e) {
    return false;
  }
  
}

export default buildUrl;
