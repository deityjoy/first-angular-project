import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  @Input() thirdInput = "";
  @Output() thirdOutput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  appMethodFromThird(){
    this.thirdOutput.emit();
  }

}
