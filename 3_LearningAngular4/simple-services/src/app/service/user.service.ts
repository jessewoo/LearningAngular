import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//  Help us update back and forth

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  users:string[] = ['john', 'jill', 'peter'];
  getFirstUser(){
    return this.users[0];
  }

}
