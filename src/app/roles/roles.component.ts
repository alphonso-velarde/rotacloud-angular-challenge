import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppState, RoleActionTypes, UserActionTypes } from '../core/ngrx';
import { RoleModel } from '../models/role-model';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit, OnDestroy {

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
  
  returnRoleValue(id):any[] {
    let newArr: any[] = [];
    this.users.forEach(element => {
      if(Array.isArray(element.roles)){
        element.roles.some(data => {
          if(data === id){
            newArr.push(element);
            return true;
          }
        });
      }
    });

    return newArr;
  }

  updateUserState(){
    this.store.dispatch({
      type: RoleActionTypes.GET_ROLES_SUCCESS,
      payload: this.roles
    });
  }
}
