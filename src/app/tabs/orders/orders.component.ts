import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../interfaces/order';
import { SearchService } from '../../../services/search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TableComponent } from '../../../reuseable_components/table/table.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, MatTableModule, TableComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  displayedColumns = ['item', 'qty', 'date', 'amount', 'status'];
  dataSource = new MatTableDataSource<Order>();
  destroyRef = inject(DestroyRef);

  constructor(private orderService: OrderService, private searchService: SearchService) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.filterPredicate = (order: Order, filter: string) => {
        const search = filter.trim().toLowerCase();
        return (
          order.item.toLowerCase().includes(search) ||
          order.date.toLowerCase().includes(search) ||
          order.amount.toString().includes(search) ||
          order.status.toLowerCase().includes(search)
        );
      };
    });

    this.searchService.search$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)).subscribe(value => {
        this.dataSource.filter = value.trim().toLowerCase();
      });
  }

}
