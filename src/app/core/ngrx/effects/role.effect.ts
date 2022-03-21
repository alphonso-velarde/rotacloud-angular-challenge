import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';

import { RoleService } from '../../services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RoleActionTypes } from '../actions/role.action';
import { State } from '@ngrx/store';
import { AppState } from '..';

@Injectable()
export class RoleEffect {
  constructor(
    private roleService: RoleService,
    private actions$: Actions,
    public state: State<AppState>,
  ) {}


  @Effect()
  getRole = this.actions$.pipe(
    ofType(RoleActionTypes.GET_ROLES),
    switchMap(() => {
      return this.roleService.getRoles().pipe(
        map(data => {
          return {
            type: RoleActionTypes.GET_ROLES_SUCCESS,
            payload: data
          };
        }),
        catchError(err =>
          of({
            type: RoleActionTypes.GET_ROLES_FAIL,
            payload: err,
          }),
        ),
      );
    }),
  )
}
