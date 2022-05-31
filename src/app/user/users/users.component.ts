import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userSelector } from 'src/app/state/user.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
//  users: string[] = [];
users = this.store.select(userSelector);
  constructor(private store :Store) { }

  ngOnInit(): void {
  }

}
