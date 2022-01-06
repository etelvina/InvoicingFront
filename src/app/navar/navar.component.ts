import { Component, OnInit } from '@angular/core';
import { Navar } from '../model/navar/navar';
import { NavarService } from './navar.service';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.css'],
  providers: [NavarService]
})

export class NavarComponent implements OnInit {
  navar!: Navar[];

  constructor(private navarService: NavarService) { 
    this.navar = this.navarService.getNavar();
  }

  ngOnInit(): void {
  }
}
