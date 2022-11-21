import { Component, OnInit } from '@angular/core';
import { q } from '../types/types';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  list: q[] = []
  form: q = {
    name: "",
    email: "",
    phno: "",
    message: "",
  }
  submit() {
    this.list.push(this.form)
    console.log(this.list)
    alert("Succesfully submitted query!")


  }
  constructor() { }

  ngOnInit(): void {
  }

}
