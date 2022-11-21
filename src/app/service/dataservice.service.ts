import { Injectable } from '@angular/core';
import { l } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  list:l[]=[]


  constructor() { }
  add(form:l){
    this.list.push(form)
  }

}