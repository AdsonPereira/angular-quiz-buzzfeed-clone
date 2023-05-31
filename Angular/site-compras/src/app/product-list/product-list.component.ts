import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
  <h2>Lista de Produtos</h2>
  <ul>
    <li *ngFor="let product of products">{{ product.name }}</li>
  </ul>
`,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Produto 1' },
    { name: 'Produto 2' },
    { name: 'Produto 3' }
  ];
}
