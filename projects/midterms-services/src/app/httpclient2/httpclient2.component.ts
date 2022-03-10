import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-httpclient2',
  templateUrl: './httpclient2.component.html',
  styleUrls: ['./httpclient2.component.css']
})
export class Httpclient2Component implements OnInit {
  pageTitle: string = "Controlled Output of HTTP Service";

  httpusers: any;

  constructor(private httpclientList:HttpclientService) { }

  ngOnInit(): void {
    //getUsersfromServer is an observable, subscribe to it using the code below
    this.httpclientList.getUsersfromServer().subscribe((data)=>{
    this.httpusers = data;
    });
  }
}
