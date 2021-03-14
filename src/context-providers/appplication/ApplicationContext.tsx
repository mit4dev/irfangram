import React, {useEffect} from 'react';
import {createContext, useReducer} from 'react';
import {IAuthAction} from './auth/AuthActions';
import {AuthReducer, AUTH_INITIAL_STATE, IAuthState} from './auth/AuthReducer';

interface ApplicationContextState {
  authState?: IAuthState;
  authDispatch?: React.Dispatch<IAuthAction>;
}
export const ApplicationContext = createContext<ApplicationContextState>({});
const {Provider} = ApplicationContext;

export function ApplicationProvider({children}) {
  const [authState, authDispatch] = useReducer(AuthReducer, AUTH_INITIAL_STATE);

  useEffect(() => {
    console.log('context is ready');
  }, []);

  return (
    <Provider
      value={{
        authState,
        authDispatch,
      }}>
      {children}
    </Provider>
  );
}
