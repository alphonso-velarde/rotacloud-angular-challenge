import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';

import { UserService } from '../../services';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { UserActionTypes } from '../actions/user.action';
import { State } from '@ngrx/store';
import { AppState } from '..';

@Injectable()
export class UserEffect {
  constructor(
    private userService: UserService,
    private actions$: Actions,
    public state: State<AppState>,
  ) {}

  @Effect()
  getUser = this.actions$.pipe(
      ofType(UserActionTypes.GET_USERS),
      switchMap(() => {
        return this.userService.getUsers().pipe(
          map(data => {
            return {
              type: UserActionTypes.GET_USERS_SUCCESS,
              payload: data
            };
          }),
          catchError(err =>
            of({
              type: UserActionTypes.GET_USERS_FAIL,
              payload: err,
            }),
          ),
        );
      }),
    )
}
