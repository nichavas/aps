import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents} from "./app-routing.module";



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';




const material = [
	BrowserModule,
	AppRoutingModule,
    BrowserAnimationsModule,

    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule
];














@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [material],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
