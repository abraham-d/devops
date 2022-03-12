import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderdetailedComponent } from './orderdetailed/orderdetailed.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: ':id', component: OrderdetailedComponent, data: { breadcrumb: { alias: 'OrderDetailed' } } }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
