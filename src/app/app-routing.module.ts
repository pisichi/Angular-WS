import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { TestComponent } from './components/test/test.component';
import { AddEditPageComponent } from './components/add-edit-page/add-edit-page.component';


const routes: Routes = [{
  path: 'search',
  component: SearchPageComponent
},
{
  path: 'test',
  component: TestComponent
},
{
  path: 'add',
  component: AddEditPageComponent
},
{
  path: 'edit',
  component: AddEditPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
