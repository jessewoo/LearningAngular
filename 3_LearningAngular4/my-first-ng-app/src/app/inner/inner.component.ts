import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Input() coworker:string
  @Output() eventFromInner = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  sendToOuter() {
    console.log('clicked');
    // Execute event emitter
    this.eventFromInner.emit(this.coworker);
  }


}
