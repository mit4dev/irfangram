import {IActionBase} from '../../ActionBase';
import {IAuthState} from './AuthReducer';

export declare type AuthActionTypes =
  | 'AUTH_SET_IS_AUTHENTICATED'
  | 'AUTH_SET_ALL';

export interface IAuthAction extends IActionBase {
  type: AuthActionTypes;
}

const SetIsAuthenticated = (value: boolean): IAuthAction => ({
  type: 'AUTH_SET_IS_AUTHENTICATED',
  payload: value,
});

const SetAll = (value: IAuthState): IAuthAction => ({
  type: 'AUTH_SET_ALL',
  payload: value,
});

interface IAuthActions {
  [key: string]: (...args) => IAuthAction;
}
export const AuthActions: IAuthActions = {
  SetIsAuthenticated,
  SetAll,
};
