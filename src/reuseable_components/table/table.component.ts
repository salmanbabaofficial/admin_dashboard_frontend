import { NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, TitleCasePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, TitleCasePipe, NgSwitch, NgSwitchCase, NgClass, NgSwitchDefault, NgForOf, NgIf, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T extends object> implements AfterViewInit {
  @Input() title: string = '';
  @Input() displayedColumns: string[] = [];
  @Input() showPaginator: boolean = true;
  @Input() dataSource!: MatTableDataSource<T>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
