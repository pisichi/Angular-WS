import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { SearchFormComponent } from './search-form/search-form.component';

import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ResultListComponent } from './result-list/result-list.component';
import {TableModule} from 'primeng/table';





@NgModule({
  declarations: [SearchPageComponent, SearchFormComponent, ResultListComponent],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    DropdownModule,
    RadioButtonModule,
    InputTextModule,
    FormsModule,
    TableModule,
  ],
  exports:[SearchPageComponent]
})
export class SearchPageModule { }
