/*
	Author: Josue Arce
	Creation Date: 02/05/2018
	Description : Records Handler for Component
*/

import { Injectable } from '@angular/core';
import { ComponentModel } from '../../models/component.models';
import { Http_Requests } from '../http_requests.services';
import { SharedMethods } from '../shared.services';
import { Observable } from 'rxjs';

@Injectable()

export class ComponentHandler{
	public ComponentRecords : Observable<ComponentModel[]>;
	private sharedMethods : SharedMethods;
	
	constructor(private http_request: Http_Requests){}

	/*Executes function to get data*/
	async fetchData(){
		await this.http_request.getService("selectComponentes")
			.then(response => {this.ComponentRecords = response.data;})
			.catch(error => 
				{
					this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
					console.log("Error: ",error)
				}
			)
	}

	/*Returns the list of data*/
	public get getRecords() : Observable<ComponentModel[]> {
		return this.ComponentRecords;
	}

	/*Executs the post method, */
	public set postRecords(newRecord : ComponentModel) {
		this.http_request.postService(newRecord,"insertComponente")
		    .then(response => 
		    {
		      this.sharedMethods.openSnackBar("Mensaje de aviso!",response.message);
		    })
		    .catch(error => 
		    {
		      this.sharedMethods.openSnackBar("Error!",error.message);
		      console.log("Error: ",error)
		  	}
		)
	}

	public set editRecords(newRecord : ComponentModel){
		
	}

	public set deleteRecords(ID : number) {
		this.http_request.deleteService({"ID" : ID}, "deleteComponente")
		    .then(response => 
		      {
		        if(response.success)
		          this.sharedMethods.openSnackBar("Mensaje de alerta!",response.message);
		      }
		    )
		    .catch(error => console.log("Error: ",error))
	}
}