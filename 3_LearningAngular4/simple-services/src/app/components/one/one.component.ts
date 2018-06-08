import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'
import { UsersService } from '../../service/users.service'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  user:string;
  editUser: string;
  constructor(private userService:UserService, private usersService:UsersService) { }

  ngOnInit() {
    // this.user = this.userService.getFirstUser();
    this.usersService.cast.subscribe(user=> this.user = user);
  }

  editTheUser() {
    this.usersService.editUser(this.editUser);
  }

}
