import { Component } from '@angular/core';
import { ThirdComponent } from './third/third.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-angular-project';

  appMessageToFirst = 'First Component button clicked!';
  appMessageToThird = 'Third Component button clicked!';
  toDisplay = true;

  appMethodFromFirst() {
    
    if (this.toDisplay) {
      console.log(this.appMessageToFirst);
      this.toDisplay = false;
      this.toDisplay = !this.toDisplay;

      // this.appMessageToFirst = '__________________________';
       
    }
    // this.toDisplay = !this.toDisplay;
    // else {
    //   this.appMessageToFirst = '__________________________';
    // }
  } 

  appMethodFromThird(event: any) {
    alert(this.appMessageToThird);
  }
}
