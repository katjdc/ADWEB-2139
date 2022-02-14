import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Interpolation
  string = 'Text Interpolation';

  //Property Binding
  property:string = 'property';

  //Style Binding
  colorstyle = 'color: green';
  myColor = 'red';

  //Class Binding
  appliedCSS = "lead";

  //Image Binding
  imageURL ="./assets/image.jpg";

  //Event Binding
  showData($event:any) {
    console.log("Button is clicked!"); if($event) {
      console.log($event.target.value);
    }
  }
  getData(data:any) {
    console.warn(data);
  }
}
