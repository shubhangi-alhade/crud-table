import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudTableComponent } from './components/crud-table/crud-table.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

const routes: Routes = [
  { path: '', component: CrudTableComponent },
  { path: 'chart', component: BarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
