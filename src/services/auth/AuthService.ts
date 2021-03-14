import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_INITIAL_STATE, IAuthState } from '../../context-providers/appplication/auth/AuthReducer';
import { getData } from '../storage/StorageService';

export class AuthService {
  static AUTH_STORAGE_KEY = '@@AUTH_SERVICE_STORAGE_KEY';
  static serviceAvailable = false;

  static setServiceAvailability(value) {
    this.serviceAvailable = value;
  }

  static get(): Promise<IAuthState> {
    return new Promise(resolve => {
      let result: IAuthState = {};
      getData(this.AUTH_STORAGE_KEY)
        .then(r => (result = { ...r } || { ...AUTH_INITIAL_STATE }))
        .catch(() => null)
        .finally(() => {
          resolve(result);
        });
    });
  }

  static save(state: IAuthState) {
    return new Promise((resolve, reject) => {
      const jsonValue = JSON.stringify({ ...state });
      AsyncStorage.setItem(this.AUTH_STORAGE_KEY, jsonValue)
        .then(() => resolve(true))
        .catch(e => reject(e));
    });
  }
}
