import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent {
  items = [
    { id: 1, name: 'Laptop', price: 800, category: 'Electronics' },
    { id: 2, name: 'Phone', price: 500, category: 'Electronics' }
  ];

  addItem() {
    const newItem = { id: this.items.length + 1, name: 'New Product', price: 100, category: 'Misc' };
    this.items.push(newItem);
  }

  editItem(item: any) {
    const index = this.items.findIndex(i => i.id === item.id);
    this.items[index].name = 'Updated Name'; // Update as necessary
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
