import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  category: string;
}

@Component({
  selector: 'app-product-list',
  template: `
    <input type="text" [(ngModel)]="filter" placeholder="Filter by category...">
    <div *ngFor="let product of filteredProducts">
      {{ product.name }} - {{ product.category }}
    </div>
  `,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filter: string = '';

  constructor() {
    // Assume this actually fetches data from a service
    this.products = new Array(1000).fill(null).map((_, index) => ({
      id: index,
      name: `Product ${index}`,
      category: index % 2 === 0 ? 'Category 1' : 'Category 2',
    }));
  }

  ngOnInit(): void {}

  get filteredProducts(): Product[] {
    return this.filter ? this.products.filter(product => product.category.includes(this.filter)) : this.products;
  }
}
