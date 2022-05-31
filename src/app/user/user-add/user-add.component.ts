import { Component, OnInit } from '@angular/core';
import {Store } from '@ngrx/store';
import { addUser } from 'src/app/state/user.actions';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
name:string='';
  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  createUser(){
    //trigger ngrx action
    this.store.dispatch(addUser(
      {name:this.name}));
    
  }

}
