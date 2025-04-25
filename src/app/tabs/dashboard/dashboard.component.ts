import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { AnalyticsCardComponent } from '../../../reuseable_components/analytics-card/analytics-card.component';
import { CommonModule } from '@angular/common';
import { ReportCardComponent } from '../../../reuseable_components/report-card/report-card.component';
import { VisitCardComponent } from '../../../reuseable_components/visit-card/visit-card.component';
import { OrderService } from '../../../services/order.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Order } from '../../../interfaces/order';
import { SearchService } from '../../../services/search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TableComponent } from '../../../reuseable_components/table/table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AnalyticsCardComponent, CommonModule, ReportCardComponent, VisitCardComponent, MatTableModule, RouterLink, FaIconComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  faArrowRight = faArrowRight
  analyticsCards = [
    {
      title: 'Total Revenue',
      value: '$52.6k',
      icon: 'assets/revenue.svg',
      trend: '+3.4%',
    },
    {
      title: 'Today Revenue',
      value: '$1024',
      icon: 'assets/revenue.svg',
      trend: '-5.5%',
    },
    {
      title: 'Items Sold',
      value: '22',
      icon: 'assets/carts.png',
    },
    {
      title: 'Users Active',
      value: '11',
      icon: 'assets/users.jpg',
    },
  ];

  displayedColumns = ['item', 'qty', 'date', 'amount', 'status'];
  dataSource = new MatTableDataSource<Order>();
  destroyRef = inject(DestroyRef);

  constructor(private orderService: OrderService, private searchService: SearchService) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(data => {
      this.dataSource.data = data;
      const recent = data.slice(0, 3);
      this.dataSource.data = recent;
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