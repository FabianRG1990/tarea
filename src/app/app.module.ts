import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FatherAndSonModule } from './father-and-son/father-and-son.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, FatherAndSonModule,
        
    ]
})
export class AppModule { }
