import { Action } from '@ngrx/store';

export const enum RoleActionTypes {
  GET_ROLES = '[Role] Get roles',
  GET_ROLES_SUCCESS = '[Role] Get role success',
  GET_ROLES_FAIL = '[Role] Get role fail',
}

interface GetRole extends Action {
  type: RoleActionTypes.GET_ROLES;
  payload: any;
}

interface GetRoleSuccess extends Action {
  type: RoleActionTypes.GET_ROLES_SUCCESS;
  payload: any;
}

interface GetRoleFail extends Action {
  type: RoleActionTypes.GET_ROLES_FAIL;
  payload: any;
}

export type RoleAction =
  GetRole |
  GetRoleSuccess |
  GetRoleFail;
