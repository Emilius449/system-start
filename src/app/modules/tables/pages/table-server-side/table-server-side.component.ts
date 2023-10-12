import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DynamicTableComponent,
  TableActionComponent,
  TableColumn,
} from 'src/app/shared/components/table';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table-server-side',
  standalone: true,
  imports: [CommonModule, DynamicTableComponent, TableActionComponent],
  templateUrl: './table-server-side.component.html',
  styleUrls: ['./table-server-side.component.scss'],
})
export class TableServerSideComponent implements OnInit {
  tableColumns!: TableColumn[];
  tableData$!: Observable<any>;
  loading$: Observable<boolean> | undefined;
  page$: Observable<any> | undefined;
  page: any;
  length!: number;
  size = 10;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.loading$ = this.paymentEntityService.loading$;
    // this.tableData$ = this.paymentEntityService.entities$;
    this.configTable();
  }

  configTable() {
    this.tableColumns = [
      { columnDef: 'sn', header: 'SN', type: 'isSN' },
      { columnDef: 'tansadNo', header: 'Tansad No' },
      { columnDef: 'permitNo', header: 'Permit No' },
      { columnDef: 'applicationDatePipe', header: 'Application Date' },
      { columnDef: 'issuedDatePipe', header: 'Issued Date' },
      { columnDef: 'controlNumber', header: 'ControlNumber' },
      { columnDef: 'amount', header: 'Amount (TZS)' },
      { columnDef: 'paymentDueDatePipe', header: 'Payment Due Date' },
      { columnDef: 'billStatus', header: 'Bill Status' },
      { columnDef: 'viewMore', header: 'Action', type: 'action' },
    ];
  }
  onSearch(paginationParams?: { page: number; size: number }) {
    if (!paginationParams) {
      paginationParams = { size: this.size, page: 0 };
    }
  }

  paginationEvent(pageEvent: PageEvent) {
    const params = {
      page: pageEvent.pageIndex,
      size: pageEvent.pageSize,
    };
    this.onSearch(params);
  }
  viewBillDetails(data: any) {}
}
