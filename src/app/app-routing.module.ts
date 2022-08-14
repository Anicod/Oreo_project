import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { OreoComponent } from './components/oreo/oreo.component';

const routes: Routes = [
  {path : 'oreo', component : OreoComponent},
  {path : 'display/:product_id', component : DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
