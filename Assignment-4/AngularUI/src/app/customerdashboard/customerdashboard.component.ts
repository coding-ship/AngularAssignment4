import { Component, OnInit } from '@angular/core';
import { Userdata } from '../userdata';

import { CustomerdashboardService } from './../customerdashboard.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {
list:Userdata[]=[];
  constructor(private cs:CustomerdashboardService) {
    
   }

  ngOnInit(): void {
    this.cs.getdata().subscribe(response=>{this.list=response});
  }

}
