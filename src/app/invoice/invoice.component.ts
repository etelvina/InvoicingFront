import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Invoice } from '../model/invoice/invoice';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice: Invoice[] = [];
  isVisible: boolean = true;
  type: string = "";
  message: string = "";

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.invoiceService.getAll().pipe(tap((response: any) => {
      (response as Invoice[]).forEach((invoice) => { });
    })).subscribe((response: any) => {
      this.invoice = response as Invoice[];
    });
  }

  add(event: any){
    console.log(event);
    
  }

  update(event: any){
    console.log(event);
  }

  delete(event: any){
    console.log(event);
  }
  
}
