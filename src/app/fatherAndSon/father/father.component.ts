import { Component } from '@angular/core';

interface padre {
  nombre: string;
  ejemplo: number;
}

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
})
export class FatherComponent  {

  tareas: padre[] = [
    {
      nombre: 'tarea 1',
      ejemplo: 100,
    },
    {
      nombre: 'tarea 2',
      ejemplo: 200,

    }
  ];

}


