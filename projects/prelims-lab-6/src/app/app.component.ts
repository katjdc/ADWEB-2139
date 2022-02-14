import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logInName = 'admin';
  isLogIn:boolean = false;
  isLogOut:boolean = true;

  studentArr: any[] = [
  {
    "id":1,
    "name":"Katrine"
  },
  {
    "id":2,
    "name":"Joy"
  },
  {
    "id":3,
    "name":"Simon"
  },
  {
    "id":4,
    "name":"Zenaida"
  } ];

  trackByData(index:number, studentArr:any): number {
    return studentArr.id;
  }

  //ngFor Statement (Angular - Display a list items)
  emp = [
    { firstname: "Katrine", lastname: "Dela Cruz", email: "kgdelacruz1@student.hau.edu.ph", role: "WEB DEVELOPER"},
    { firstname: "Simon", lastname: "Dela Cruz", email: "simondc@gmail.com", role: "SEO"},
    { firstname: "Zeny", lastname: "Dela Cruz", email: "zenydc@gmail.com", role: "MANAGER"},
  ];

}
