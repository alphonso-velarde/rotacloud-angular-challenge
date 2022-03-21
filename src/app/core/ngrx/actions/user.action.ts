import { Action } from '@ngrx/store';

export const enum UserActionTypes {
  GET_USERS = '[User] Get recipes',
  GET_USERS_SUCCESS = '[User] Get recipe success',
  GET_USERS_FAIL = '[User] Get recipe fail',
}

interface GetUser extends Action {
  type: UserActionTypes.GET_USERS;
  payload: any;
}

interface GetUserSuccess extends Action {
  type: UserActionTypes.GET_USERS_SUCCESS;
  payload: any;
}

interface GetUserFail extends Action {
  type: UserActionTypes.GET_USERS_FAIL;
  payload: any;
}


export type UserAction =
  GetUser |
  GetUserSuccess |
  GetUserFail;
