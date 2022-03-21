import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { ArraySortPipe } from './core/pipes/array-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolesComponent,
    HomeComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
