import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first app';
  name:string = '';
  age:number;
  found:boolean;

  // Inject HTTP Client dependency inside
  constructor (private httpClient:HttpClient){};

  onNameKeyUp(event: any) {
    console.log(event.target.value);
    this.name = event.target.value;
    this.found = false;
  }

  getProfile() {
    console.log(this.name);
    this.httpClient.get(`https://my-json-server.typicode.com/jessewoo/LearningAngular/profiles/?name=${this.name}`)
    .subscribe(
      (data:any[]) => {
         console.log(data);
         if(data.length) {
          this.age = data[0].age;
          this.found = true;
         } 
      }
    )
  }

  postProfile() {
    this.httpClient.post(`https://my-json-server.typicode.com/jessewoo/LearningAngular/profiles/`, {
        name: 'mark',
        age: 41
    }) 
    .subscribe(
      (data:any) => {
         console.log(data);
      }
    )
  }



}
