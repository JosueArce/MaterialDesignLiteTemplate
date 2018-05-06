/*
  Creation date: 09/04/2018
  Author: Josue Arce
  Description: Back part of the process of deleting a component
*/

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ComponentModel } from '../../models/component.models';
import { Http_Requests } from '../../services/http_requests.services'; 
import { SharedMethods } from '../../services/shared.services';
import { ComponentHandler } from '../../services/handlers/componentHandler';


@Component({
  selector: 'delete-component',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent{

/*START----------------DECORATORS-----------------------------*/
  @ViewChild(MatPaginator) paginator: MatPaginator;


/*END------------------DECORATORS-----------------------------*/

/*START----------------VAR DECLARATION------------------------*/
recordList : ComponentModel[];
displayedColumns : string[] = [];
dataSource : MatTableDataSource<ComponentModel>;
selection : any;
/*END VAR DECLARATION-----------------------------------------*/

constructor(
  private http_request : Http_Requests,
  private SharedMethods : SharedMethods,
  private compHandler : ComponentHandler
 ){

  this.displayedColumns = ['select','Componente','Dimension']; 
  this.initSourceData();
}

  /*Check if all the checkbox are checked*/
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /*Toggle checkbox clicked*/
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => {this.selection.select(row)});
  }

  /*Executed after button clicked*/
  deleteButton(){
    for (var i = this.selection.selected.length - 1; i >= 0; i--) {
      this.callDeleteEndPoint(this.selection.selected[i].ID_Componente);
    }
     
  }

  /*Calls delete endpoint*/
  callDeleteEndPoint(ID_Componente : number){
    this.http_request.deleteService(
      {
         "ID" : ID_Componente
      },
      "deleteComponente"
    )
    .then(response => 
      {
        if(response.success)
          this.SharedMethods.openSnackBar("Mensaje de alerta!",response.message);
        //this.getData();
      }
    )
    .catch(error => console.log("Error: ",error))
  }

  /*Extracts data on endpoint call*/
  initSourceData(){
   // this.dataSource = new MatTableDataSource(this.compHandler.getRecords);
    //this.dataSource.paginator = this.paginator;
    //this.selection = new SelectionModel(true,[]);
  }

  /*Transform the dataSource to show only close references*/
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}