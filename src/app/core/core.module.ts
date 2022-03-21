import { HttpClientModule } from '@angular/common/http';
import { NgModule, InjectionToken } from '@angular/core';
import {
  BrowserModule,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReducer, routerStateConfig, clearState, AppState } from './ngrx';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'root reducer',
);
import { RoleEffect } from './ngrx/effects/role.effect';
import { UserEffect } from './ngrx/effects/user.effect';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers: [clearState] }),
    EffectsModule.forRoot([
        RoleEffect,
        UserEffect
    ]),
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useValue: appReducer,
    },
  ],
})
export class CoreModule {
  constructor() {}
}