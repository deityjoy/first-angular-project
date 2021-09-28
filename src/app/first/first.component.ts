import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input() firstInput = "";
  @Output() firstOutput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  appMethodFromFirst(){
    this.firstOutput.emit();
  }

}
