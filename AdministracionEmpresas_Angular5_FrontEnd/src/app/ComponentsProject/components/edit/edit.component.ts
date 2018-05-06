/*
	Creation date: 12/04/2018
	Author: Josue Arce
	Description: Back part of the process of editting a component
*/

import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ComponentModel } from '../../models/component.models';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {EditComponentDialog} from '../dialogs/edit/edit_component.dialog';
import { Http_Requests } from '../../services/http_requests.services'; 
import { DimensionModel } from '../../models/dimension.model';

@Component({
  selector: 'edit-component',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

 /*START----------------DECORATORS-----------------------------*/
  @ViewChild(MatPaginator) paginator: MatPaginator;


/*END------------------DECORATORS-----------------------------*/

/*START----------------VAR DECLARATION------------------------*/
private displayedColumns : string[] = [];
private dataSource : MatTableDataSource<ComponentModel>;
private selection : any;
private Component: string;
private Dimension : string;
private dimensionRecords : DimensionModel[];
/*END VAR DECLARATION-----------------------------------------*/

constructor(
  private http_request : Http_Requests,
 ){
  this.displayedColumns = ['select','Componente','Dimension'];  
  this.Component = "";
  this.Dimension = "";
}

  ngOnInit() {  
    this.getData();
  }

  getData(){
    /*this.http_request.getService("selectComponentes")
    .then(response => {
      this.dataSource = new MatTableDataSource(response.data);
      this.selection = new SelectionModel(true,[]);
      this.dataSource.paginator = this.paginator;
    })
    .catch(error => console.log("Error: ",error))

    this.http_request.getService("selectDimensiones")
    .then(response => {
      this.dimensionRecords = response.data;
    })
    .catch(error => console.log("Error: ",error))*/
  }

  selectItem(row){
    //if there are any other checkbox checked, it'll uncheck the checkbox
    if(this.selection.selected.length > 0){
       this.selection.clear();//unselect all the active checkbox
    }
    this.selection.toggle(row);
    //aca se deben manejar los datos recibidos
    console.log(row);
    this.Component = row.Component;
    this.Dimension = row.Dimension;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  edit_data(){
    /*this.selection.selected.forEach(item => {
        let index: number = this.recordList.findIndex(pos => pos === item);
        this.data.splice(index,1)
        this.dataSource = new MatTableDataSource<ComponentModel>(this.data);
      });
      this.selection = new SelectionModel<ComponentModel>(true, []);
  */}
  


}