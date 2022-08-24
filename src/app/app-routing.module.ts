import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { OreoComponent } from './components/oreo/oreo.component';
import { ProductlistsComponent } from './components/productlists/productlists.component';

const routes: Routes = [
  {path : 'oreo', component : OreoComponent},
  {path : 'display/:product_id', component : DisplayComponent},
  {path : 'productlists', component : ProductlistsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
