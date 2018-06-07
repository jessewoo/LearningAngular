import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  nameList = ['Jesse','Kimberly','Elizabeth','Annalise'];
  names = ['Cole','Chris','Chunxiao','Jose'];
  name:string ='';
  constructor() { }

  ngOnInit() {
  }

  eventFromInner(passed:string) {
    this.name = passed;
  }

}
