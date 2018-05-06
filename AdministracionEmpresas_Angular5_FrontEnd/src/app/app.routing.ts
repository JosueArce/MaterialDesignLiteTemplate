import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = 
[
  {
      path: '',
      component: FullComponent,
      children: 
      [
        {
          /*Loads the module in charge of showing the child components*/
          path: '',
          loadChildren: './ComponentsProject/ComponentsProject.module#ComponentsProjectModule'
        }
     ]
  }
];

