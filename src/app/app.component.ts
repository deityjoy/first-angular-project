import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'TOMALON Angular Project';

  appMessageToFirst = "___________________________";
  appMessageToThird = "___________________________";

  // show first, hide third
  appMethodFromFirst(event: any) {
    // console.log(this.appMessageToFirst);
    // console.log(this.appMessageToThird);
    this.appMessageToThird = event ? "First Component button is clicked!" : "___________________________";
    this.appMessageToFirst = event ? "___________________________" : "First Component button is clicked!";
  }

  // show third, hide first
  appMethodFromThird(event : any) {
    // console.log(this.appMessageToFirst);
    // console.log(this.appMessageToThird);
    this.appMessageToFirst = event ? "Third Component button is clicked!" : "___________________________";
    this.appMessageToThird = event ? "___________________________" : "Third Component button is clicked!";
  }  
}
