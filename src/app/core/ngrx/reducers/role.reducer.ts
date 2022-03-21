import { RoleModel } from 'src/app/models/role-model';
import {
    RoleAction,
    RoleActionTypes,
  } from '../actions/role.action';
  
  export interface Role {
    roles: RoleModel[],
    pending: boolean;
    error: any;
  }
  
  export const ROLE_INITIAL_STATE: Role = {
    roles:[],
    pending: false,
    error: null
  };
  
  export const RoleReducer = (
    state: Role = ROLE_INITIAL_STATE,
    action: RoleAction,
  ): Role => {
    switch (action.type) {
      case RoleActionTypes.GET_ROLES:
        return {
          ...state,
          pending: true,
        };
      case RoleActionTypes.GET_ROLES_SUCCESS:
        return {
            ...state,
            roles:action.payload,
            pending: false,
        };
      case RoleActionTypes.GET_ROLES_FAIL:
          return {
              ...state,
              pending: false,
              error: action.payload
          };
      default:
        return state;
    }
  };
  