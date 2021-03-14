import { IActionBase } from "../../ActionBase";

export declare type AuthActionTypes = 'AUTH_SET_IS_AUTHENTICATED';

export interface IAuthAction extends IActionBase {
  type: AuthActionTypes;
}

const SetIsAuthenticated = (value: boolean): IAuthAction => ({
  type: "AUTH_SET_IS_AUTHENTICATED",
  payload: value,
});

interface ISecurityActions {
  [key: string]: (...args) => IAuthAction;
}
export const SecurityActions: ISecurityActions = {
  SetIsAuthenticated,
};
