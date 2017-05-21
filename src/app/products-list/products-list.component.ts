import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = ['Books', 'Headphones', 'Macbook Pro', 'Camera', 'Backpack', 'iPhone', 'Car'];
  constructor() { }

  ngOnInit(): void {}

}
