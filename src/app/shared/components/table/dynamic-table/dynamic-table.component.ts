import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionComponent } from '../table-action/table-action.component';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

type TableActionType = 'isSN' | 'action' | undefined;
export interface TableColumn {
  columnDef: string;
  header: string;
  type?: TableActionType;
}
@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    TableActionComponent,
    MatDividerModule,
  ],
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTableComponent implements OnChanges, AfterViewInit {
  @Input({ required: true }) tableColumns!: TableColumn[];
  @Input({ required: true }) tableData: any = [];
  @Input() simpleTable = false;
  @Input() pageSizeOptions = [10, 25, 50, 100];
  @Input() totalItems = 0;
  @Input() serverPagination = false;
  @ContentChildren(TableActionComponent)
  tableActions!: QueryList<TableActionComponent>;

  @ContentChild('actionButton') actionButton: TemplateRef<any> | null = null;
  @Output() paginationEvent = new EventEmitter<PageEvent>();
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableColumns']?.currentValue) {
      this.displayedColumns = this.tableColumns.map((c: any) => c.columnDef);
    }
    if (changes['tableData']?.currentValue) {
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.tableData);
      if (!this.serverPagination) {
        this.dataSource.paginator = this.paginator;
      }
      this.dataSource.sort = this.sort;
    }
  }
  ngAfterViewInit(): void {
    if (this.dataSource) {
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  pageChange(pageEvent: PageEvent) {
    this.paginationEvent.emit(pageEvent);
  }
}
