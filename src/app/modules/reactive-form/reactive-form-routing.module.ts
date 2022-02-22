import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReativeFromComponent } from './components/reative-from/reative-from.component';

const routes: Routes = [
  {
    path: '',
    pathMatch : 'full',
    component : ReativeFromComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
