import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppState, RoleActionTypes, UserActionTypes } from '../core/ngrx';
import { RoleModel } from '../models/role-model';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();
  getData$:any;
  roles: RoleModel[] = [];
  users: UserModel[] = [];

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.getData$ = this.store.pipe(select(state => state));
    this.subStore();
    if(this.roles.length === 0 || this.users.length === 0){
      this.getData();
    }
  }

  returnRoleValue(prop, id){
    return this.roles.find(o => o.id === id)[prop]
  }

  subStore(){
    this.getData$.subscribe(data => {
      if(data.role.roles){
        this.roles = data.role.roles;
      }
      if(data.user.users){
        this.users = data.user.users;
      }
    });
  }

  getData(){
    this.store.dispatch({
      type: RoleActionTypes.GET_ROLES
    });
    this.store.dispatch({
      type: UserActionTypes.GET_USERS
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  updateUserState(){
    this.store.dispatch({
      type: UserActionTypes.GET_USERS_SUCCESS,
      payload: this.users
    });
  }
}
