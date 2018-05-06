import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule} from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsRoutes } from './ComponentsProject.routing';

//Components
import { Index_Component } from './components/index.component';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { EditComponentDialog } from './components/dialogs/edit/edit_component.dialog';

//Dimensions
import { DimensionsComponent } from './dimensions/dimensions.component';

//services
import { Http_Requests } from './services/http_requests.services';
import { SharedMethods } from './services/shared.services';
import { ComponentHandler } from './services/handlers/componentHandler';


@NgModule({
	imports : [
		CommonModule,
	    RouterModule.forChild(ComponentsRoutes),
	    DemoMaterialModule,
	    HttpModule,
	    FormsModule,
	    ReactiveFormsModule,
	    FlexLayoutModule,
	    CdkTableModule
	],
	providers :[
	Http_Requests,
	SharedMethods,
	ComponentHandler
	],
	entryComponents :[EditComponentDialog],
	declarations :[
		Index_Component,
		ViewComponent,
		AddComponent,
		DeleteComponent,
		EditComponent,
		EditComponentDialog,
		DimensionsComponent
		
	]
})

export class ComponentsProjectModule {}