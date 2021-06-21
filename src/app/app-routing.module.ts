import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component:ReadAllComponent
  },
  {
    path: 'finalizados',
    component: FinalizadosComponent
  },
  {
    path: 'todoTabs',  component:  TabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
