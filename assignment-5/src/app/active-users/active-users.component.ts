import { Component } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
  
  onAction(id: number) {
    this.usersService.onSetToInactive(id);
  }
}


//create a users service
  //manages the users array gobally
  //method to swithc users
//count service
  //keep track of the count when switching users