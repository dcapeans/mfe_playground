import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CageComponent } from './cage/cage.component';

const routes: Routes = [
  { path: 'cage', component: CageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
