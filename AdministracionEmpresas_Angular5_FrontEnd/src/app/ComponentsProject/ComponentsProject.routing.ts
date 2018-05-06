import { Routes } from '@angular/router';


//components
import { Index_Component } from './components/index.component';
import { DimensionsComponent } from './dimensions/dimensions.component';

//routes
export const ComponentsRoutes : Routes = [
	{
		path : 'components',
		component : Index_Component
	},
	{
		path : 'dimensions',
		component : DimensionsComponent
	}
];