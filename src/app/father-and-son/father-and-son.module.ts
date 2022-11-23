import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FatherComponent } from '../fatherAndSon/father/father.component';
import { SonComponent } from '../fatherAndSon/son/son.component';



@NgModule({
  declarations: [FatherComponent,
    SonComponent],
  exports: [FatherComponent ],
  imports: [
    CommonModule
  ]
})
export class FatherAndSonModule { }
