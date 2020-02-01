import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';


//ng prime
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChipsModule} from 'primeng/chips';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';


//custom module
import { SearchPageModule } from './components/search-page/search-page.module';
import { AddEditPageModule }  from './components/add-edit-page/add-edit-page.module';


import { HttpClientModule } from '@angular/common/http';


@NgModule({


  declarations: [
    AppComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChipsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    SearchPageModule,
    HttpClientModule,
    AddEditPageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
