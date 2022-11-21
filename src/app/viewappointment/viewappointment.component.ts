import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { l } from '../types/types';


@Component({
  selector: 'app-view-appoint',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {
  list1: l[]=[];
  value:boolean=true
  
  constructor(private data1:DataserviceService) {

  }

  ngOnInit(): void {
    this.list1=this.data1.list
    if(this.list1.length==0){
      this.value=false
    }
    console.log(this.data1.list)
    
    
  }

}
