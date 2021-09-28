import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';

  // isHide = true;
  appMessageToFirst = "__________________________";
  appMessageToThird = "__________________________";

  appMethodFromFirst(){
    this.appMessageToFirst = "First Component button clicked!";
  }
  
  appMethodFromThird(event:any){
    this.appMessageToThird = "Third Component button clicked!";
  }
  
}
