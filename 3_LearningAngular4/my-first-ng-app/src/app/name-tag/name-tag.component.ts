import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.css']
})
export class NameTagComponent implements OnInit {
  @Input() name:string;
  @Output() eventFromInner = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendToOuter() {
    console.log('clicked');
    this.eventFromInner.emit(this.name);
  }

}
