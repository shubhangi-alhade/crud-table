import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css'],
})
export class CrudTableComponent {
  items = [
    { id: 1, name: 'Product 1', price: 100, category: 'Category 1' },
    { id: 2, name: 'Product 2', price: 200, category: 'Category 2' },
  ];

  chartData: any;
  chartOptions: any;

  constructor() {
    this.updateChart();
  }

  addItem() {
    const newItem = {
      id: this.items.length + 1,
      name: 'New Product',
      price: Math.floor(Math.random() * 500),
      category: 'New Category',
    };
    this.items.push(newItem);
    this.updateChart();
  }

  editItem(item: any) {
    const index = this.items.findIndex((i) => i.id === item.id);
    this.items[index].name = 'Updated Name';
    this.updateChart();
  }

  deleteItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    this.updateChart();
  }

  updateChart() {
    this.chartData = {
      labels: this.items.map((item) => item.name),
      datasets: [
        {
          label: 'Price',
          backgroundColor: '#42A5F5',
          data: this.items.map((item) => item.price),
        },
      ],
    };

    this.chartOptions = {
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Products',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Price',
          },
        },
      },
    };
  }
}
