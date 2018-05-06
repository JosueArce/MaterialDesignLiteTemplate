/*
    Creation date: 08/04/2018
    Author: Josue Arce González
    Description: Backside of the adding a new component process
*/

import { Component, OnInit } from '@angular/core';
import { ComponentModel } from '../../models/component.models';
import { DimensionModel } from '../../models/dimension.model';
import { Http_Requests } from '../../services/http_requests.services'; 
import { SharedMethods } from '../../services/shared.services';

@Component({
  selector: 'add-component',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  dimensionRecords : DimensionModel[];
  private Component :  string;
  private Dimension : {ID:0,Dimension : ""};

  constructor(
    private http_request : Http_Requests,
    private sharedMethods : SharedMethods
  ) {
    this.Component = "";
  }

  /*Will execute after */
  ngOnInit() {
     /*this.http_request.getService("selectDimensiones")
     .then(response => {
         this.dimensionRecords = response.data;
     })
     .catch(error => console.log("Error: ",error))*/
  }

  /*Execute the promise to post data through the server*/
  save_data(){
    this.http_request.postService({
      "ID_Dimension" : this.Dimension.ID,
      "Componente" : this.Component
    },"insertComponente")
    .then(response => {
      this.sharedMethods.openSnackBar("Mensaje de aviso!",response.message);
    })
    .catch(error => {
      this.sharedMethods.openSnackBar("Error!",error.message);
      console.log("Error: ",error)})
  }

}
