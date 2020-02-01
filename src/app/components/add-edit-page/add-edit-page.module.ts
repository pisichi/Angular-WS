import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPageComponent } from './add-edit-page.component';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';

import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';

import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';










@NgModule({
  declarations: [AddEditPageComponent, AddEditFormComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    PanelModule,
    RadioButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AddEditPageModule { }
