import { Component, OnInit } from '@angular/core';
import {ColDef, GridReadyEvent } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  public columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' }
  ];
  
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  public rowData$!: Observable<any[]>;
  
  
  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.httpClient
      .get<any[]>('http://localhost:3000/products');
  }

}
