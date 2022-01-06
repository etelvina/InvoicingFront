import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { NavarComponent } from './navar/navar.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: NavarComponent
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
