import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderdetailedComponent } from './orderdetailed/orderdetailed.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderdetailedComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
