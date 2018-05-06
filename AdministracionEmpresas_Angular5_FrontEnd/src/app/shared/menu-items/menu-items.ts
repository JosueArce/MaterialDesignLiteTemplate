import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [

    /*All components must be here(components,dimensions ....)*/
    {state: 'autoevaluation', name: 'Autoevaluación', type: 'link', icon: 'offline_pin' },
    {state: 'criteria_assessment', name: 'Valoracion Criterios', type: 'link', icon: 'find_replace' },
    {state: 'cys_ajusted', name: 'CYE Ajustados', type: 'link', icon: 'assignment' },
    {state: 'cys', name: 'Criterios y Estándares', type: 'link', icon: 'create' }, 
    {state: 'work_plan', name: 'Plan de Trabajo', type: 'link', icon: 'settings' },
    {state: 'dimensions', name: 'Dimensiones', type: 'link', icon: 'dashboard' }, 
    {state: 'permissions', name: 'Permisos', type: 'link', icon: 'lock_open' }, 
    {state: 'components', name: 'Componentes', type: 'link', icon: 'extension' },
    {state: 'assessment', name: 'Valoración', type: 'link', icon: 'playlist_add_check' },   
    {state: 'reports', name: 'Informes', type: 'link', icon: 'pie_chart' },  
    {state: 'evidences', name: 'Evidencias', type: 'link', icon: 'widgets' }, 
    {state: 'about', name: 'Acerca de', type: 'link', icon: 'donut_large' }
]; 

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
