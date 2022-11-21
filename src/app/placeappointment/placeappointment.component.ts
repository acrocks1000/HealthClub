import { Component, OnInit } from '@angular/core';
import { l } from '../types/types';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-placeappointment',
  templateUrl: './placeappointment.component.html',
  styleUrls: ['./placeappointment.component.css']
})
export class PlaceappointmentComponent implements OnInit {
  form: l = {
    name: "",
    email: "",
    age: "",
    phno: "",
    address: "",
    pincode: "",
    trainer: "",
    physio: "",
    radio: "",
    amount: 0,
    weeks: 2,

  }
  public pack: number = 0
  public phy: number = 0
  getamount() {

    if (this.form.radio === "one session") {
      this.pack = 500
      this.form.weeks = 1
    }
    else if (this.form.radio === "four sessions") {
      this.pack = 400
    }
    else if (this.form.radio === "five sessions") {
      this.pack = 300
    }
    if (this.form.physio == "yes") {
      this.phy = 200
    }
    this.form.amount = (this.pack * this.form.weeks) + this.phy
  }
  submit() {
    this.data.add(this.form)
    alert("Successfully Booked!")
  }

  constructor(private data: DataserviceService) { }

  ngOnInit(): void {
  }

}
