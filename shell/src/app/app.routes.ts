import { loadRemoteModule } from '@angular-architects/native-federation';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full'},
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule('mfe1', './Module').then((m) => m.MfeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
