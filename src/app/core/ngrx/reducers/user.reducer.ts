import { UserModel } from 'src/app/models/user-model';
import {
    UserAction,
    UserActionTypes,
  } from '../actions/user.action';
  
  export interface User {
    users: UserModel[],
    pending: any;
    error: any;
  }
  
  export const USER_INITIAL_STATE: User = {
    users:[],
    pending: false,
    error: null
  };
  
  export const UserReducer = (
    state: User = USER_INITIAL_STATE,
    action: UserAction,
  ): User => {
    switch (action.type) {
      case UserActionTypes.GET_USERS:
        return {
          ...state,
          pending: true,
        };
      case UserActionTypes.GET_USERS_SUCCESS:
        return {
            ...state,
            users:action.payload,
            pending: false,
        };
      case UserActionTypes.GET_USERS_FAIL:
          return {
              ...state,
              pending: false,
              error: action.payload
          };
      default:
        return state;
    }
  };
  