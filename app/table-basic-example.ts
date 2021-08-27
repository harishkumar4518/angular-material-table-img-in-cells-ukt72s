import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  bul: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1.818,
    name: '112.75',
    weight: 112.8,
    symbol: '2.300',
    bul: 30,

  },
  {
    position: 1.818,
    name: '112.75',
    weight: 112.8,
    symbol: '2.300',
    bul: 5,
  },
  {
    position: 1.818,
    name: '112.75',
    weight: 112.8,
    symbol: '2.300',
    bul: 50,
  },
  {
    position: 1.818,
    name: '112.75',
    weight: 112.8,
    symbol: '2.300',
    bul: 10,
  },
  {
    position: 1.818,
    name: '112.75',
    weight: 112.8,
    symbol: '2.300',
    bul: 20,
  }
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html'
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
