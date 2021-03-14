import produce from 'immer';
import { IAuthAction } from './AuthActions';

export interface IAuthState {
  isAuthenticated?: boolean;
}

export const AUTH_INITIAL_STATE: IAuthState = {
  isAuthenticated: false,
};

export const AuthReducer = produce((draft: IAuthState, action: IAuthAction) => {
  switch (action?.type) {
    case 'AUTH_SET_IS_AUTHENTICATED': {
      draft.isAuthenticated = action.payload;
      break;
    }
  }
});
