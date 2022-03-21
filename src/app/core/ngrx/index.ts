import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  role: reducers.Role;
  user: reducers.User
}

export const INITIAL_STATE: AppState = {
  role: reducers.ROLE_INITIAL_STATE,
  user: reducers.USER_INITIAL_STATE
};

export const appReducer: ActionReducerMap<AppState> = {
  role: reducers.RoleReducer,
  user: reducers.UserReducer
};

export function clearState(reducer) {
  return function(state, action) {
    return reducer(state, action);
  };
}

export const routerStateConfig = {
  stateKey: 'router', 
};

export * from './actions';
export * from './reducers';
