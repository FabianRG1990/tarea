import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
})
export class SonComponent  {

@Input() tareas: any[] = [];

  
}