import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UsersComponent } from './user/users/users.component';
import { FormsModule } from '@angular/forms';
// import { UserReducer } from "./user/state/user.reducer";
import { UserReducer } from './state/user.reducer';
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserAddComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      users:UserReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
