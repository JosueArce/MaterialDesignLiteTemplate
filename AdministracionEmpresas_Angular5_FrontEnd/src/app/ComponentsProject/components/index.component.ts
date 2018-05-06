/*
  Creation date: 08/04/2018 
  Author: Josue David Arce Gonzalez
  Description: Component View
*/

import { Component, OnInit } from '@angular/core';
import { ComponentModel } from '../models/component.models';
import { ComponentHandler } from '../services/handlers/componentHandler';

@Component({
  selector: 'app-components',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class Index_Component {
  //private compHandler : ComponentHandler;
  constructor(private compHandler : ComponentHandler) { 
    this.compHandler.fetchData();//gets records from endPoint
  }
}