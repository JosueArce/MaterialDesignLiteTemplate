/*
	Creation date: 12/04/2018
	Author: Josue Arce
	Description: Back part of the process of showing all the records
*/

import { Component, OnInit, ViewChild,AfterViewInit, AfterContentChecked } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ComponentModel} from '../../models/component.models';
import { Http_Requests } from '../../services/http_requests.services';
import { ComponentHandler } from '../../services/handlers/componentHandler'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'view-component',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements  OnInit{

 /*START----------------DECORATORS-----------------------------*/
  @ViewChild(MatPaginator) paginator: MatPaginator;
/*END------------------DECORATORS-----------------------------*/

  /*START--------------VAR DECLARATION------------------------*/
  displayedColumns : string[] = [];
  dataSource : MatTableDataSource<ComponentModel>;
  /*END VAR DECLARATION--------------------------------------*/

  constructor(
    private http_request : Http_Requests,
    private compHandler : ComponentHandler
  ){
    this.displayedColumns = ['Componente','Dimension'];        
  } 
  
  /*ngAfterContentChecked()
  {
    this.dataSource = new MatTableDataSource(this.compHandler.getRecords);  
    
  }*/
  ngOnInit(){
      const myObservable = Observable.of(1,2,3,4,5);//this.compHandler.getRecords);
      const myObserver = {
        next : result => console.log("first extraction done: "+result),
        error : error => console.log("something happened"),
        complete : () => console.log("process complete")
      };
      myObservable.subscribe(myObserver);
     /* this.compHandler.getRecords().subscribe(
        data =>{console.log(data);}
      );*/
     //this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) 
  {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}