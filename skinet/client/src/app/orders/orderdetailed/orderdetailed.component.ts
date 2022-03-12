import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/Order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orderdetailed',
  templateUrl: './orderdetailed.component.html',
  styleUrls: ['./orderdetailed.component.scss']
})
export class OrderdetailedComponent implements OnInit {
  order: IOrder;

  constructor(private route: ActivatedRoute, private breadCrumbService: BreadcrumbService, private ordersService: OrdersService) {
    this.breadCrumbService.set('@OrderDetailed', '');
  }

  ngOnInit(): void {
    this.ordersService.getOrderDetailed(+this.route.snapshot.paramMap.get('id'))
      .subscribe((order: IOrder) => {
        this.order = order;
        this.breadCrumbService.set('@OrderDetailed', `Order# ${order.id} - ${order.status}`);
      }, error => {
        console.log(error);
      });
  }

}
