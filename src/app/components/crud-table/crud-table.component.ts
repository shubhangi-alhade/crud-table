import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent {

  items = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
  ];

  addItem() {
    const newItem = { id: this.items.length + 1, name: 'New User', email: 'newuser@example.com' };
    this.items.push(newItem);
  }

  editItem(item: any) {
    const index = this.items.findIndex(i => i.id === item.id);
    this.items[index].name = 'Updated Name';
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
